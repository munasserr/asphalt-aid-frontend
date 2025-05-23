'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button, Input, SuccessModal, ErrorModal } from '@/components/ui';
import { apiService, SignInRequest } from '@/lib/api';

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
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
    
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Please enter your username';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 3) {
      newErrors.password = 'Password must be at least 3 characters';
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
      const credentials: SignInRequest = {
        username: formData.username,
        password: formData.password,
      };

      const response = await apiService.signIn(credentials);
      
      // show success modal
      setSuccessModal({
        isOpen: true,
        message: `Welcome back, ${response.first_name || response.username}! You have been successfully signed in.`,
      });
      
    } catch (error) {
      console.error('Sign in error:', error);
      
      // show error modal
      setErrorModal({
        isOpen: true,
        message: error instanceof Error ? error.message : 'Failed to sign in. Please check your credentials and try again.',
      });
      
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModal({ isOpen: false, message: '' });
    // redirect to dashboard after successful signin
    router.push('/dashboard');
  };

  const handleErrorModalClose = () => {
    setErrorModal({ isOpen: false, message: '' });
  };

  const footer = (
    <div className="space-y-3">
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/auth/signup" className="text-secondary font-medium hover:text-secondary-600 transition-colors">
          Create one here
        </Link>
      </p>
      <p className="text-xs text-gray-500">
        Need help? Visit our{' '}
        <Link href="/contact" className="text-secondary hover:text-secondary-600 transition-colors">
          Support Center
        </Link>
      </p>
    </div>
  );

  return (
    <>
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in to continue reporting and tracking road issues"
        footer={footer}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="username"
            type="text"
            label="Username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />

          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 transition-colors"
              />
              Keep me signed in
            </label>
            
            <Link 
              href="/auth/forgot-password" 
              className="text-secondary hover:text-secondary-600 transition-colors font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            className="mt-6 font-semibold"
          >
            {loading ? 'Signing you in...' : 'Sign In to Dashboard'}
          </Button>
        </form>
      </AuthLayout>

      {/* success modal */}
      <SuccessModal
        isOpen={successModal.isOpen}
        onClose={handleSuccessModalClose}
        title="Welcome Back!"
        message={successModal.message}
        actionLabel="Go to Dashboard"
        onAction={handleSuccessModalClose}
      />

      {/* error modal */}
      <ErrorModal
        isOpen={errorModal.isOpen}
        onClose={handleErrorModalClose}
        title="Sign In Failed"
        message={errorModal.message}
        actionLabel="Try Again"
      />
    </>
  );
} 