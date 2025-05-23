'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button, Input, SuccessModal, ErrorModal } from '@/components/ui';
import { apiService, SignUpRequest } from '@/lib/api';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [successModal, setSuccessModal] = useState({
    isOpen: false,
    message: '',
  });
  const [errorModal, setErrorModal] = useState({
    isOpen: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // clear field errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
    
    if (name === 'confirmPassword' && formData.password !== value) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
    } else if (name === 'confirmPassword' && formData.password === value) {
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(Math.min(strength, 100));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Only letters, numbers and underscores allowed';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 75) {
      newErrors.password = 'Please choose a stronger password';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      const userData: SignUpRequest = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        first_name: formData.firstName,
        last_name: formData.lastName,
      };

      const response = await apiService.signUp(userData);
      
      // show success modal
      setSuccessModal({
        isOpen: true,
        message: `Welcome to AsphaltAid, ${response.first_name}! Your account has been created successfully. You can now start reporting road issues.`,
      });
      
    } catch (error) {
      console.error('Sign up error:', error);
      
      // show error modal
      setErrorModal({
        isOpen: true,
        message: error instanceof Error ? error.message : 'Failed to create account. Please try again.',
      });
      
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModal({ isOpen: false, message: '' });
    // redirect to dashboard after successful signup
    router.push('/dashboard');
  };

  const handleErrorModalClose = () => {
    setErrorModal({ isOpen: false, message: '' });
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-accent-red';
    if (passwordStrength < 50) return 'bg-yellow-500';
    if (passwordStrength < 75) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'Weak';
    if (passwordStrength < 50) return 'Fair';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  const footer = (
    <div className="space-y-3">
      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/auth/signin" className="text-secondary font-medium hover:text-secondary-600 transition-colors">
          Sign in here
        </Link>
      </p>
      <p className="text-xs text-gray-500">
        By creating an account you agree to our{' '}
        <Link href="/privacy" className="text-secondary hover:text-secondary-600 transition-colors">
          Privacy Policy
        </Link>
      </p>
    </div>
  );

  return (
    <>
      <AuthLayout
        title="Join AsphaltAid"
        subtitle="Create your account to start reporting road issues and making a difference"
        footer={footer}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="firstName"
              type="text"
              label="First Name"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />

            <Input
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
          </div>

          <Input
            name="email"
            type="email"
            label="Email Address"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            }
          />

          <Input
            name="username"
            type="text"
            label="Username"
            placeholder="johndoe"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />

          <div className="space-y-2">
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
            
            {formData.password && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Password Strength</span>
                  <span className={`font-medium ${passwordStrength < 50 ? 'text-accent-red' : passwordStrength < 75 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {getPasswordStrengthText()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                    style={{ width: `${passwordStrength}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <Input
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />

          <div className="flex items-start gap-3 text-sm">
            <input 
              type="checkbox" 
              id="terms"
              className="mt-1 w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 transition-colors"
              required
            />
            <label htmlFor="terms" className="text-gray-600 leading-relaxed cursor-pointer">
              I agree to the{' '}
              <Link href="/terms" className="text-secondary hover:text-secondary-600 transition-colors font-medium">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-secondary hover:text-secondary-600 transition-colors font-medium">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            className="mt-6 font-semibold"
          >
            {loading ? 'Creating your account...' : 'Create Account & Start Reporting'}
          </Button>
        </form>
      </AuthLayout>

      {/* success modal */}
      <SuccessModal
        isOpen={successModal.isOpen}
        onClose={handleSuccessModalClose}
        title="Account Created!"
        message={successModal.message}
        actionLabel="Go to Dashboard"
        onAction={handleSuccessModalClose}
      />

      {/* error modal */}
      <ErrorModal
        isOpen={errorModal.isOpen}
        onClose={handleErrorModalClose}
        title="Account Creation Failed"
        message={errorModal.message}
        actionLabel="Try Again"
      />
    </>
  );
} 