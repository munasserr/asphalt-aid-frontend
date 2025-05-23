'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Button, Input } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
      console.log('Contact form submission:', formData);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setErrors({ general: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-800 rounded-xl flex items-center justify-center text-text-white font-bold text-lg shadow-soft">
                A
              </div>
              <h1 className="text-xl font-bold text-primary">AsphaltAid</h1>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-primary font-medium">
                Contact
              </Link>
              <Link href="/reports" className="text-gray-600 hover:text-primary transition-colors">
                Reports
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="secondary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions, feedback, or need support? We're here to help
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/60 rounded-3xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email Support</h3>
                      <p className="text-gray-600">support@asphaltaid.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone Support</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9AM - 6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Office Location</h3>
                      <p className="text-gray-600">123 Innovation Street<br />Tech District, City 12345</p>
                      <p className="text-sm text-gray-500">Open for scheduled visits</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary/5 to-accent-yellow/5 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Quick Links</h2>
                <div className="space-y-4">
                  <Link href="/auth/signup" className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Create an Account
                  </Link>
                  <Link href="/reports" className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Browse Reports
                  </Link>
                  <Link href="/about" className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Learn More About Us
                  </Link>
                  <Link href="/privacy" className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.general && (
                    <div className="p-4 bg-gradient-to-r from-accent-red/10 to-accent-red/5 border border-accent-red/20 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                          <svg className="w-5 h-5 text-accent-red" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-accent-red text-sm font-medium">Message Failed</p>
                          <p className="text-accent-red/80 text-xs mt-1">{errors.general}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      type="text"
                      label="Your Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      leftIcon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                    />

                    <Input
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      leftIcon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    />
                  </div>

                  <Input
                    name="subject"
                    type="text"
                    label="Subject"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    leftIcon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    }
                  />

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:border-primary focus-visible:ring-primary/20 resize-none"
                      placeholder="Tell us more about your question, feedback, or how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-accent-red flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    className="font-semibold"
                  >
                    {loading ? 'Sending message...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-text-light py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-text-white font-bold text-lg">
                  A
                </div>
                <h3 className="text-xl font-bold">AsphaltAid</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Smart road infrastructure reporting system powered by AI technology
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                <li><Link href="/reports" className="hover:text-secondary transition-colors">Reports</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} AsphaltAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 