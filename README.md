# AsphaltAid Frontend

A modern, responsive web application for reporting and managing road infrastructure issues. This is the frontend component of the AsphaltAid system, built with Next.js and TypeScript.

## 🎓 About This Project

AsphaltAid is a comprehensive graduation project designed to improve road safety and infrastructure management through community-driven reporting. The system allows citizens to report road issues like potholes, cracks, and other hazards, while providing authorities with tools to track and manage these reports effectively.

## 🔗 Related Repositories

- **Backend Repository**: [@munasserr/asphalt-aid](https://github.com/munasserr/asphalt-aid)
  - Django REST API with authentication and report management
  - PostgreSQL database for data persistence
  - Image upload and storage capabilities
  - Token-based authentication system

## ✨ Features

### User Authentication
- **Sign Up**: Create new user accounts with email verification
- **Sign In**: Secure login with token-based authentication
- **Session Management**: Persistent login sessions with automatic token refresh
- **Sign Out**: Secure logout with token cleanup

### Report Management
- **Create Reports**: Submit detailed reports with:
  - Photo evidence upload
  - GPS location detection
  - Issue categorization (Pothole, Crack, Road Sink, Other)
  - Detailed descriptions
  - Address/location information
- **View Reports**: Browse all community reports with:
  - Advanced filtering (type, status, severity)
  - Search functionality
  - Sorting options (date, severity, name, status)
  - Pagination for large datasets
- **Report Details**: View comprehensive report information including:
  - High-resolution images
  - Severity levels and status tracking
  - Creation and update timestamps
  - Location details with map integration ready

### Dashboard & Analytics
- **Personal Dashboard**: Overview of user activity and system statistics
- **Impact Tracking**: View total reports in the system
- **Quick Actions**: Easy access to create reports and browse existing ones

### User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with AsphaltAid branding
- **Dark/Light Theme**: Optimized color scheme for road safety theme
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## 🛠 Technology Stack

### Frontend Technologies
- **Next.js 14**: React framework with App Router for optimal performance
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Tailwind CSS Line Clamp**: Text truncation plugin for better layouts

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefixing
- **Inter Font**: Modern, readable typography

### Key Libraries
- **Next.js Navigation**: Client-side routing and navigation
- **File Upload**: Image handling for report evidence
- **Form Validation**: Client-side form validation and error handling
- **Modal System**: User feedback and confirmation dialogs

## 📋 Prerequisites

Before installing and running this project, ensure you have:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn**
- **Git** for version control
- **Backend API** running (see [backend repository](https://github.com/munasserr/asphalt-aid))

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/asphalt-aid-frontend.git
cd asphalt-aid-frontend
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Application Configuration
NEXT_PUBLIC_APP_NAME=AsphaltAid
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Analytics and monitoring
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### 4. Backend Setup

Ensure the backend API is running:

1. Follow the setup instructions in the [backend repository](https://github.com/munasserr/asphalt-aid)
2. The backend should be running on `http://localhost:8000`
3. Verify the API is accessible at `http://localhost:8000/api`

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📂 Project Structure

```
asphalt-aid-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── auth/              # Authentication pages
│   │   │   ├── signin/        # Sign in page
│   │   │   └── signup/        # Sign up page
│   │   ├── dashboard/         # User dashboard
│   │   ├── reports/           # Report management
│   │   │   ├── [id]/         # Individual report view
│   │   │   ├── create/       # Create new report
│   │   │   └── page.tsx      # Reports listing
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Landing page
│   ├── components/           # Reusable UI components
│   │   └── ui/              # Base UI components (buttons, inputs, etc.)
│   └── lib/                 # Utility libraries
│       └── api.ts           # API service layer
├── public/                  # Static assets
│   └── assets/             # Images and icons
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🔧 Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server (Use this to test and try the app)
npm run build        # Build for production
npm run start        # Start production server

```

### Code Style Guidelines

- **TypeScript**: Use strict typing and interfaces
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **File Naming**: kebab-case for files, PascalCase for components
- **API Calls**: Centralized in `src/lib/api.ts`

### State Management

- **Local State**: React useState for component-specific state
- **Form State**: Controlled components with validation
- **Authentication**: Token stored in localStorage
- **API State**: Fetch data in useEffect hooks

## 📱 Key Features Implementation

### Authentication Flow
1. User visits sign-in page
2. Credentials sent to backend API
3. JWT token received and stored in localStorage
4. Token included in subsequent API requests
5. Automatic redirect on authentication status change

### Report Creation Process
1. User fills out report form with required fields
2. Optional image upload with client-side validation
3. Form validation before submission
4. FormData sent to backend API
5. Success/error feedback to user
6. Redirect to report details or reports list

### Report Listing & Filtering
1. Fetch all reports from API on page load
2. Client-side filtering and sorting
3. Pagination for performance
4. Search functionality across multiple fields
5. Real-time filter updates

## 🌐 API Integration

### Authentication Endpoints
- `POST /users/auth/signin/` - User login
- `POST /users/auth/signup/` - User registration

### Report Endpoints
- `GET /reports/reports/` - List all reports
- `GET /reports/reports/{id}/` - Get specific report
- `POST /reports/reports/` - Create new report

### Request/Response Format
```typescript
// Report Data Structure
interface Report {
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
```

## 🐛 Troubleshooting

### Common Issues

**API Connection Issues**:
- Verify backend is running on correct port
- Check CORS settings in backend

**Authentication Problems**:
- Clear localStorage and retry
- Check token expiration
- Verify backend authentication endpoints

**Build Errors**:
- Clear `.next` folder and rebuild
- Update dependencies to latest versions
- Check TypeScript configurations

## 📚 Learning Resources

### Technologies Used
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
