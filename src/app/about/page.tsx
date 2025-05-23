import Link from "next/link";
import { Button } from "@/components/ui";

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About AsphaltAid
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Revolutionizing road infrastructure maintenance through citizen engagement and AI technology
            </p>
          </div>

          <div className="space-y-16">
            <section className="bg-white/60 rounded-3xl p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AsphaltAid was born from a simple yet powerful idea: what if every citizen could become 
                an active participant in maintaining their community's infrastructure? We believe that 
                by combining the collective eyes of the community with cutting-edge AI technology, 
                we can create safer, better-maintained roads for everyone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform empowers citizens to report road issues quickly and efficiently while 
                providing municipal authorities with intelligent tools to prioritize and manage 
                infrastructure maintenance more effectively than ever before.
              </p>
            </section>

            <section className="bg-gradient-to-r from-secondary/5 to-accent-yellow/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Report Instantly</h3>
                  <p className="text-gray-600">
                    Citizens use our mobile-friendly platform to report potholes, cracks, and other road damage with photos and location data
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our advanced AI algorithms automatically analyze each report to determine severity levels and maintenance urgency
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Smart Action</h3>
                  <p className="text-gray-600">
                    Municipal authorities receive prioritized maintenance schedules based on severity, location, and available resources
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-primary mb-6">Why AsphaltAid Matters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">For Citizens</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Direct impact on community infrastructure
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Simple, fast reporting process
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Transparency in issue resolution
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Safer roads for everyone
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">For Authorities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Data-driven maintenance planning
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Optimized resource allocation
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Improved public engagement
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Cost-effective maintenance strategies
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Join the Movement</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Every pothole reported, every crack documented, every issue resolved makes our 
                communities safer and our infrastructure stronger. Be part of the solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/auth/signup">
                  <Button variant="secondary" size="xl" className="min-w-[200px]">
                    Start Reporting Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="xl" className="min-w-[200px]">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </section>
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