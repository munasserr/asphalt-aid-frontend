'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { apiService } from '@/lib/api';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reportsCount, setReportsCount] = useState(0);

  useEffect(() => {
    // check if user is authenticated
    const checkAuth = () => {
      if (apiService.isAuthenticated()) {
        setIsAuthenticated(true);
        // Get reports count from localStorage
        const savedCount = localStorage.getItem('asphaltaid_reports_count');
        if (savedCount) {
          setReportsCount(parseInt(savedCount, 10));
        }
      } else {
        // redirect to signin if not authenticated
        router.push('/auth/signin');
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleSignOut = () => {
    apiService.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100">
      {/* navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-800 rounded-xl flex items-center justify-center text-text-white font-bold text-lg shadow-soft">
                A
              </div>
              <h1 className="text-xl font-bold text-primary">AsphaltAid Dashboard</h1>
            </Link>
            
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* main content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Welcome to Your Dashboard
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              You have successfully signed in to AsphaltAid. Start reporting road issues and making a difference in your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* report new issue card */}
            <div className="bg-white/60 rounded-3xl p-8 shadow-soft hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">Report New Issue</h3>
              <p className="text-gray-600 text-center mb-6">
                Found a pothole or road damage? Report it quickly with photos and location data.
              </p>
              <Link href="/reports/create">
                <Button variant="secondary" fullWidth className="font-medium">
                  Create Report
                </Button>
              </Link>
            </div>

            {/* view reports card */}
            <div className="bg-white/60 rounded-3xl p-8 shadow-soft hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">Browse Reports</h3>
              <p className="text-gray-600 text-center mb-6">
                View all community reports and track the status of submitted reports and see resolution progress.
              </p>
              <Link href="/reports">
                <Button variant="outline" fullWidth className="font-medium">
                  View All Reports
                </Button>
              </Link>
            </div>
          </div>

          {/* your impact */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Your Impact</h2>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">{reportsCount}</div>
              <div className="text-gray-600">Reports Available</div>
              <p className="text-sm text-gray-500 mt-2">
                Total number of reports in the community database
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 