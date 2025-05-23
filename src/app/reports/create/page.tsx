'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, SuccessModal, ErrorModal } from '@/components/ui';
import { apiService, CreateReportRequest } from '@/lib/api';

const REPORT_TYPES = [
  { value: 'pothole', label: 'Pothole' },
  { value: 'crack', label: 'Crack' },
  { value: 'road_sink', label: 'Road Sink' },
  { value: 'other', label: 'Other' },
];

export default function CreateReportPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    reportType: 'pothole',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [successModal, setSuccessModal] = useState({
    isOpen: false,
    message: '',
    reportId: null as number | null,
  });
  const [errorModal, setErrorModal] = useState({
    isOpen: false,
    message: '',
  });

  React.useEffect(() => {
    if (!apiService.isAuthenticated()) {
      router.push('/auth/signin');
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Please select a valid image file' }));
        return;
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Image size must be less than 10MB' }));
        return;
      }

      setImageFile(file);
      setErrors(prev => ({ ...prev, image: '' }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setErrors(prev => ({ ...prev, image: '' }));
    
    // Reset file input
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Report name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Report name must be at least 3 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 5) {
      newErrors.address = 'Please provide a more detailed address';
    }

    if (!formData.reportType) {
      newErrors.reportType = 'Please select a report type';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const reportData: CreateReportRequest = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        address: formData.address.trim(),
        report_type: formData.reportType,
      };

      if (imageFile) {
        reportData.image = imageFile;
      }

      const response = await apiService.createReport(reportData);
      
      // Show success modal
      setSuccessModal({
        isOpen: true,
        message: `Your report "${response.report.name}" has been successfully submitted! We'll review it and take appropriate action.`,
        reportId: response.report.id,
      });
      
    } catch (error) {
      console.error('Create report error:', error);
      
      // Show error modal
      setErrorModal({
        isOpen: true,
        message: error instanceof Error ? error.message : 'Failed to submit report. Please try again.',
      });
      
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModal({ isOpen: false, message: '', reportId: null });
    // Redirect to the created report or reports list
    if (successModal.reportId) {
      router.push(`/reports/${successModal.reportId}`);
    } else {
      router.push('/reports');
    }
  };

  const handleErrorModalClose = () => {
    setErrorModal({ isOpen: false, message: '' });
  };

  const getLocationHelp = () => {
    if (navigator.geolocation) {
      setFormData(prev => ({ ...prev, address: 'Getting your location...' }));
      
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // This is a simplified example - in a real app you'd use a geocoding service
            const { latitude, longitude } = position.coords;
            setFormData(prev => ({ 
              ...prev, 
              address: `Location: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}` 
            }));
          } catch (error) {
            setFormData(prev => ({ ...prev, address: '' }));
            setErrors(prev => ({ ...prev, address: 'Unable to get location. Please enter manually.' }));
          }
        },
        (error) => {
          setFormData(prev => ({ ...prev, address: '' }));
          setErrors(prev => ({ ...prev, address: 'Location access denied. Please enter address manually.' }));
        }
      );
    } else {
      setErrors(prev => ({ ...prev, address: 'Geolocation not supported. Please enter address manually.' }));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/dashboard" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-800 rounded-xl flex items-center justify-center text-text-white font-bold text-lg shadow-soft">
                  A
                </div>
                <h1 className="text-xl font-bold text-primary">AsphaltAid</h1>
              </Link>
              
              <div className="flex items-center gap-3">
                <Link href="/reports">
                  <Button variant="outline" size="sm">
                    All Reports
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    apiService.signOut();
                    router.push('/');
                  }}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
              <Link href="/reports" className="hover:text-primary transition-colors">
                Reports
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">Create Report</span>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Report a Road Issue
              </h1>
              <p className="text-lg text-gray-600">
                Help improve road safety by reporting potholes, cracks, and other issues
              </p>
            </div>

            {/* Form */}
            <div className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Report Name */}
                <Input
                  name="name"
                  type="text"
                  label="Report Title"
                  placeholder="e.g., Large pothole on Main Street"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a1.994 1.994 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  }
                />

                {/* Report Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Report Type *
                  </label>
                  <select
                    name="reportType"
                    value={formData.reportType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    {REPORT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.reportType && (
                    <p className="text-sm text-accent-red mt-1">{errors.reportType}</p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Location/Address *
                  </label>
                  <div className="relative">
                    <input
                      name="address"
                      type="text"
                      placeholder="e.g., 123 Main Street, Downtown"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                    <button
                      type="button"
                      onClick={getLocationHelp}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary-600 transition-colors"
                      title="Use current location"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  {errors.address && (
                    <p className="text-sm text-accent-red mt-1">{errors.address}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    Click the location icon to use your current location
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Describe the issue in detail. Include size, severity, and any safety concerns..."
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  />
                  {errors.description && (
                    <p className="text-sm text-accent-red mt-1">{errors.description}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    {formData.description.length}/500 characters
                  </p>
                </div>

                {/* Image Upload */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Photo Evidence (Optional)
                  </label>
                  
                  {!imagePreview ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary transition-colors">
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="image"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-primary font-medium">Click to upload a photo</span>
                        <span className="text-gray-500 text-sm mt-1">PNG, JPG up to 10MB</span>
                      </label>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Report preview"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                  
                  {errors.image && (
                    <p className="text-sm text-accent-red">{errors.image}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    A clear photo helps authorities assess and prioritize the issue
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    className="font-semibold"
                  >
                    {loading ? 'Submitting Report...' : 'Submit Report'}
                  </Button>
                </div>

                {/* Help Text */}
                <div className="text-center text-sm text-gray-600">
                  <p>
                    By submitting this report, you're helping make roads safer for everyone.
                  </p>
                  <p className="mt-1">
                    Need help? Visit our{' '}
                    <Link href="/help" className="text-primary hover:text-primary-600 transition-colors">
                      Support Center
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={successModal.isOpen}
        onClose={handleSuccessModalClose}
        title="Report Submitted!"
        message={successModal.message}
        actionLabel="View Report"
        onAction={handleSuccessModalClose}
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={errorModal.isOpen}
        onClose={handleErrorModalClose}
        title="Submission Failed"
        message={errorModal.message}
        actionLabel="Try Again"
      />
    </>
  );
} 