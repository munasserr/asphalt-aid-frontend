import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
}

export function AuthLayout({ children, title, subtitle, footer }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-800 rounded-xl flex items-center justify-center text-text-white font-bold text-xl shadow-elevation">
                A
              </div>
              <h1 className="text-2xl font-bold text-primary">AsphaltAid</h1>
            </div>
          </Link>
          <p className="text-gray-600 text-sm">
            Smart road infrastructure reporting
          </p>
        </div>

        {/* Auth Card */}
        <Card variant="elevated" padding="lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
            {subtitle && (
              <p className="text-gray-600 text-sm">{subtitle}</p>
            )}
          </div>

          {children}
        </Card>

        {/* Footer */}
        {footer && (
          <div className="mt-6 text-center">
            {footer}
          </div>
        )}

        {/* Additional Links */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <span className="mx-2">•</span>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <span className="mx-2">•</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
} 