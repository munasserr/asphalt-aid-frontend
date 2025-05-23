'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui';
import { apiService, Report } from '@/lib/api';

export default function ReportDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      if (!apiService.isAuthenticated()) {
        router.push('/auth/signin');
        return false;
      }
      return true;
    };

    if (checkAuth() && params.id) {
      fetchReport(Number(params.id));
    }
  }, [router, params.id]);

  const fetchReport = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getReport(id);
      setReport(response.report);
    } catch (error) {
      console.error('Failed to fetch report:', error);
      setError(error instanceof Error ? error.message : 'Failed to load report');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: number) => {
    switch (severity) {
      case 0: return 'bg-gray-100 text-gray-800';
      case 1: return 'bg-yellow-100 text-yellow-800';
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityLabel = (severity: number) => {
    switch (severity) {
      case 0: return 'Low';
      case 1: return 'Minor';
      case 2: return 'Moderate';
      case 3: return 'High';
      default: return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatReportType = (type: string) => {
    return type.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading report details...</p>
        </div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Report Not Found</h3>
          <p className="text-gray-600 mb-6">{error || 'The requested report could not be found.'}</p>
          <Link href="/reports">
            <Button variant="primary">Back to Reports</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
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
              <Link href="/reports/create">
                <Button variant="secondary" size="sm">
                  Create Report
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/reports" className="hover:text-primary transition-colors">
              Reports
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">Report #{report.id}</span>
          </div>

          {/* Report Header */}
          <div className="bg-white/60 rounded-3xl p-8 shadow-soft mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold text-primary">{report.name}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(report.severity)}`}>
                    {getSeverityLabel(report.severity)} Severity
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2-2m4 0l2 2m-8 4v6a2 2 0 002 2h4a2 2 0 002 2v-6" />
                    </svg>
                    <span>Report #{report.id}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Created {formatDate(report.created_at)}</span>
                  </div>
                  
                  {report.updated_at !== report.created_at && (
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Updated {formatDate(report.updated_at)}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 lg:mt-0 lg:ml-6">
                <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(report.status)}`}>
                  {report.status.charAt(0).toUpperCase() + report.status.slice(1).replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{formatReportType(report.report_type)}</div>
                <div className="text-sm text-gray-600">Report Type</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">{report.severity}/3</div>
                <div className="text-sm text-gray-600">Severity Level</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-yellow mb-1">
                  {Math.ceil((new Date().getTime() - new Date(report.created_at).getTime()) / (1000 * 60 * 60 * 24))}
                </div>
                <div className="text-sm text-gray-600">Days Active</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="bg-white/60 rounded-3xl overflow-hidden shadow-soft">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Photo Evidence</h2>
              </div>
              
              <div className="aspect-video bg-gray-100">
                {report.image ? (
                  <img
                    src={report.image}
                    alt={report.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500">No photo available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Description */}
              <div className="bg-white/60 rounded-3xl p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{report.description}</p>
              </div>

              {/* Location */}
              <div className="bg-white/60 rounded-3xl p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{report.address}</p>
                    <button className="mt-2 text-primary hover:text-primary-600 text-sm font-medium transition-colors">
                      View on Map →
                    </button>
                  </div>
                </div>
              </div>

              {/* Report Metadata */}
              <div className="bg-white/60 rounded-3xl p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Report ID</span>
                    <span className="font-medium">#{report.id}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">User ID</span>
                    <span className="font-medium">#{report.user}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Report Type</span>
                    <span className="font-medium">{formatReportType(report.report_type)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1).replace('_', ' ')}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Severity</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(report.severity)}`}>
                      {getSeverityLabel(report.severity)} ({report.severity}/3)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reports">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                ← Back to All Reports
              </Button>
            </Link>
            
            <Link href="/reports/create">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Report Similar Issue
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 