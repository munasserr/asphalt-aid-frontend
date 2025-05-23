// api service for asphaltaid backend integration
const BASE_URL = 'http://localhost:8000/api';

export interface AuthResponse {
  token: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
}

export interface Report {
  id: number;
  image: string | null;
  severity: number;
  description: string;
  name: string;
  address: string;
  status: string;
  report_type: string;
  created_at: string;
  updated_at: string;
  user: number;
}

export interface ReportsListResponse {
  detail: string;
  count: number;
  reports: Report[];
}

export interface ReportDetailResponse {
  detail: string;
  report: Report;
}

export interface CreateReportRequest {
  name: string;
  description: string;
  address: string;
  report_type: string;
  image?: File;
}

export interface ApiError {
  message: string;
  details?: any;
}

class ApiService {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    // get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('asphaltaid_token');
    }
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',

    };

    if (this.token) {
      headers['Authorization'] = `Token ${this.token}`;
    }

    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      let errorMessage = 'An error occurred';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.detail || 'Request failed';
      } catch {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async signIn(credentials: SignInRequest): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseURL}/users/auth/signin/`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(credentials),
      });

      const data = await this.handleResponse<AuthResponse>(response);
      
      // store token for future requests
      this.token = data.token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('asphaltaid_token', data.token);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async signUp(userData: SignUpRequest): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseURL}/users/auth/signup/`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await this.handleResponse<AuthResponse>(response);
      
      // store token for future requests
      this.token = data.token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('asphaltaid_token', data.token);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  signOut(): void {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('asphaltaid_token');
    }
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }

  // Reports endpoints
  async getReports(): Promise<ReportsListResponse> {
    try {
      const response = await fetch(`${this.baseURL}/reports/reports/`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      return await this.handleResponse<ReportsListResponse>(response);
    } catch (error) {
      throw error;
    }
  }

  async getReport(id: number): Promise<ReportDetailResponse> {
    try {
      const response = await fetch(`${this.baseURL}/reports/reports/${id}/`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      return await this.handleResponse<ReportDetailResponse>(response);
    } catch (error) {
      throw error;
    }
  }

  async createReport(reportData: CreateReportRequest): Promise<ReportDetailResponse> {
    try {
      const formData = new FormData();
      formData.append('name', reportData.name);
      formData.append('description', reportData.description);
      formData.append('address', reportData.address);
      formData.append('report_type', reportData.report_type);
      
      if (reportData.image) {
        formData.append('image', reportData.image);
      }

      // Note: For FormData, we don't set Content-Type header as browser sets it automatically with boundary
      const headers: HeadersInit = {};
      if (this.token) {
        headers['Authorization'] = `Token ${this.token}`;
      }

      const response = await fetch(`${this.baseURL}/reports/reports/`, {
        method: 'POST',
        headers,
        body: formData,
      });

      return await this.handleResponse<ReportDetailResponse>(response);
    } catch (error) {
      throw error;
    }
  }
}

export const apiService = new ApiService(BASE_URL); 