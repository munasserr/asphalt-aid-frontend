'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/ui';
import { apiService, Report } from '@/lib/api';

interface FilterState {
  search: string;
  reportType: string;
  status: string;
  severity: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

const REPORT_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'pothole', label: 'Pothole' },
  { value: 'crack', label: 'Crack' },
  { value: 'road_sink', label: 'Road Sink' },
  { value: 'other', label: 'Other' },
];

const STATUS_OPTIONS = [
  { value: '', label: 'All Statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'resolved', label: 'Resolved' },
];

const SEVERITY_OPTIONS = [
  { value: '', label: 'All Severities' },
  { value: '0', label: 'Low (0)' },
  { value: '1', label: 'Minor (1)' },
  { value: '2', label: 'Moderate (2)' },
  { value: '3', label: 'High (3)' },
];

const SORT_OPTIONS = [
  { value: 'created_at', label: 'Date Created' },
  { value: 'severity', label: 'Severity' },
  { value: 'name', label: 'Name' },
  { value: 'status', label: 'Status' },
];

export default function ReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    reportType: '',
    status: '',
    severity: '',
    sortBy: 'created_at',
    sortOrder: 'desc',
  });

  useEffect(() => {
    const checkAuth = () => {
      if (!apiService.isAuthenticated()) {
        router.push('/auth/signin');
        return false;
      }
      return true;
    };

    if (checkAuth()) {
      fetchReports();
    }
  }, [router]);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await apiService.getReports();
      setReports(response.reports);
      setTotalCount(response.count);
      
      // Store count in localStorage for dashboard
      if (typeof window !== 'undefined') {
        localStorage.setItem('asphaltaid_reports_count', response.count.toString());
      }
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedReports = useMemo(() => {
    let filtered = reports.filter((report) => {
      const matchesSearch = 
        report.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        report.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        report.address.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesType = !filters.reportType || report.report_type === filters.reportType;
      const matchesStatus = !filters.status || report.status === filters.status;
      const matchesSeverity = !filters.severity || report.severity.toString() === filters.severity;

      return matchesSearch && matchesType && matchesStatus && matchesSeverity;
    });

    // Sort reports
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (filters.sortBy) {
        case 'created_at':
          aValue = new Date(a.created_at);
          bValue = new Date(b.created_at);
          break;
        case 'severity':
          aValue = a.severity;
          bValue = b.severity;
          break;
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return filters.sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return filters.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [reports, filters]);

  const paginatedReports = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedReports.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedReports, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedReports.length / itemsPerPage);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page when filtering
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
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reports...</p>
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Community Reports
            </h1>
            <p className="text-lg text-gray-600">
              Browse and track road issues reported by the community
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white/60 rounded-3xl p-6 shadow-soft mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <Input
                  type="text"
                  placeholder="Search reports..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
              </div>

              {/* Report Type Filter */}
              <select
                value={filters.reportType}
                onChange={(e) => handleFilterChange('reportType', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {REPORT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>

              {/* Severity Filter */}
              <select
                value={filters.severity}
                onChange={(e) => handleFilterChange('severity', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {SEVERITY_OPTIONS.map((severity) => (
                  <option key={severity.value} value={severity.value}>
                    {severity.label}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <div className="flex gap-2">
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {SORT_OPTIONS.map((sort) => (
                    <option key={sort.value} value={sort.value}>
                      {sort.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleFilterChange('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="px-3 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {filters.sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>
                Showing {filteredAndSortedReports.length} of {totalCount} reports
              </span>
              <button
                onClick={() => setFilters({
                  search: '',
                  reportType: '',
                  status: '',
                  severity: '',
                  sortBy: 'created_at',
                  sortOrder: 'desc',
                })}
                className="text-primary hover:text-primary-600 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Reports Grid */}
          {paginatedReports.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No reports found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <Link href="/reports/create">
                <Button variant="primary">Create First Report</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedReports.map((report) => (
                <Link
                  key={report.id}
                  href={`/reports/${report.id}`}
                  className="group bg-white/60 rounded-3xl overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    {report.image ? (
                      <img
                        src={report.image}
                        alt={report.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                        {report.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(report.severity)}`}>
                        Severity {report.severity}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {report.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="line-clamp-1">{report.address}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(report.created_at)}
                        </span>
                      </div>

                      <div className="text-xs text-gray-500 capitalize">
                        Type: {report.report_type.replace('_', ' ')}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  const isCurrentPage = page === currentPage;
                  
                  // Show first page, last page, current page, and pages around current
                  const shouldShow = 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  if (!shouldShow) {
                    // Show ellipsis
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="px-2 text-gray-400">...</span>;
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 border rounded-lg ${
                        isCurrentPage
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 