import Link from "next/link";
import { Button } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-100">
      {/* navigation bar with sticky positioning */}
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
              <Link href="/" className="text-primary font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/reports" className="text-accent-yellow font-semibold hover:text-accent-yellow-600 transition-colors bg-accent-yellow/10 px-3 py-1 rounded-lg">
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
                <Button variant="secondary" size="sm" className="bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* hero section with enhanced design */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Report Road Issues,<br />
              <span className="text-secondary">Build Better Communities</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of citizens using AI-powered technology to identify, report, and track 
              road infrastructure problems in their communities. Together, we're making roads safer for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/auth/signup">
                <Button variant="primary" size="xl" className="min-w-[200px] shadow-lg">
                  Start Reporting Today
                </Button>
              </Link>
              <Link href="/reports">
                <Button variant="outline" size="xl" className="min-w-[200px]">
                  View Community Reports
                </Button>
              </Link>
            </div>

            {/* trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>AI-Powered Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Municipal Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Real-Time Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* stats section showcasing impact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Making a Real Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how AsphaltAid is transforming road maintenance across communities
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
                <div className="text-4xl font-bold text-primary mb-2">12,847</div>
                <div className="text-gray-600 font-medium">Issues Reported</div>
                <div className="text-sm text-gray-500 mt-2">Across 150+ communities</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-secondary/5 to-accent-yellow/5 rounded-3xl p-8">
                <div className="text-4xl font-bold text-secondary mb-2">89%</div>
                <div className="text-gray-600 font-medium">Resolution Rate</div>
                <div className="text-sm text-gray-500 mt-2">Within 30 days</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-accent-yellow/5 to-primary/5 rounded-3xl p-8">
                <div className="text-4xl font-bold text-accent-yellow mb-2">4.2 days</div>
                <div className="text-gray-600 font-medium">Average Response Time</div>
                <div className="text-sm text-gray-500 mt-2">From report to action</div>
              </div>
            </div>
          </div>
        </section>

        {/* how it works section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to report road issues and create positive change in your community
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">1. Report the Issue</h3>
                <p className="text-gray-600 leading-relaxed">
                  Snap a photo of the pothole, crack, or road damage. Our mobile-friendly platform 
                  automatically captures location data and guides you through the reporting process.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">2. AI Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our advanced AI algorithms analyze your report, determining severity levels, 
                  safety risks, and maintenance urgency to prioritize repairs effectively.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-yellow to-accent-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">3. Smart Action</h3>
                <p className="text-gray-600 leading-relaxed">
                  Municipal authorities receive intelligent reports with priority rankings, 
                  enabling data-driven maintenance decisions and faster community response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* powerful features section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-yellow/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge technology to make road reporting simple, accurate, and effective
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Precise Location Tracking</h3>
                <p className="text-gray-600">
                  GPS-powered location capture ensures municipal teams can find and address 
                  reported issues quickly and accurately.
                </p>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Machine learning algorithms automatically assess damage severity and 
                  recommend appropriate maintenance actions.
                </p>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Real-Time Dashboard</h3>
                <p className="text-gray-600">
                  Track your reports and see community-wide infrastructure improvements 
                  through our comprehensive dashboard.
                </p>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Instant Notifications</h3>
                <p className="text-gray-600">
                  Get updates when your reports are reviewed, prioritized, and resolved 
                  by municipal maintenance teams.
                </p>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Mobile-First Design</h3>
                <p className="text-gray-600">
                  Optimized for smartphones and tablets, making it easy to report issues 
                  on-the-go from anywhere in your community.
                </p>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is protected with enterprise-grade security while maintaining 
                  transparency in the public reporting process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* reports & account highlight section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Explore Reports & Manage Your Account</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what's happening in your community and take control of your reporting experience
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* reports section */}
              <div className="bg-gradient-to-br from-accent-yellow/10 to-accent-yellow/5 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent-yellow/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Community Reports</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Browse real-time reports from your community. See what issues have been identified, 
                  track resolution progress, and discover patterns in your local infrastructure needs.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                    Interactive map view of all reports
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                    Filter by severity, type, and status
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                    Real-time updates on repair progress
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                    Community impact statistics
                  </li>
                </ul>
                
                <Link href="/reports">
                  <Button variant="outline" size="lg" className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-white">
                    Explore Reports
                  </Button>
                </Link>
              </div>

              {/* account section */}
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Your Account</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Manage your reporting history, track your community impact, and customize your 
                  AsphaltAid experience through your personal dashboard.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Personal reporting dashboard
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Track your impact metrics
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Notification preferences
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Privacy and data controls
                  </li>
                </ul>
                
                <div className="flex gap-3">
                  <Link href="/auth/signin">
                    <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button variant="secondary" size="lg">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* community impact section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Community Impact</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Real stories from communities using AsphaltAid to improve their infrastructure
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold text-primary mb-3">Neighborhood Safety</h3>
                <p className="text-gray-600">
                  "Since using AsphaltAid, our neighborhood has seen a 40% reduction in 
                  vehicle damage from potholes. The quick response time is amazing!"
                </p>
                <div className="text-sm text-gray-500 mt-4">- Sarah M., Community Leader</div>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-bold text-primary mb-3">Efficient Repairs</h3>
                <p className="text-gray-600">
                  "The AI prioritization helps us allocate our maintenance budget more effectively. 
                  We're fixing the most critical issues first."
                </p>
                <div className="text-sm text-gray-500 mt-4">- Mike R., City Engineer</div>
              </div>

              <div className="bg-white/80 rounded-3xl p-8 shadow-soft">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-primary mb-3">Civic Engagement</h3>
                <p className="text-gray-600">
                  "AsphaltAid has brought our community together. Everyone feels empowered 
                  to contribute to making our roads better."
                </p>
                <div className="text-sm text-gray-500 mt-4">- Jennifer L., Resident</div>
              </div>
            </div>
          </div>
        </section>

        {/* enhanced call to action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of citizens already using AsphaltAid to improve their communities. 
              Every report matters, every fix counts, and every voice makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/auth/signup">
                <Button variant="secondary" size="xl" className="min-w-[250px] bg-white text-primary hover:bg-gray-100">
                  Get Started - It's Free
                </Button>
              </Link>
              <Link href="/reports">
                <Button variant="outline" size="xl" className="min-w-[250px] border-white text-white hover:bg-white hover:text-primary">
                  View Community Reports
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Setup in under 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Immediate impact</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer with company information */}
      <footer className="bg-primary text-text-light py-12 px-4 sm:px-6 lg:px-8">
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
                <li><Link href="/reports" className="hover:text-secondary transition-colors font-semibold">Reports</Link></li>
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
