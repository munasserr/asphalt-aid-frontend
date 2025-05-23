import Link from "next/link";
import { Button } from "@/components/ui";

export default function TermsPage() {
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
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using AsphaltAid, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions constitute a legally binding agreement made between you, 
                whether personally or on behalf of an entity ("you") and AsphaltAid ("we," "us," or "our"), 
                concerning your access to and use of our road infrastructure reporting platform.
              </p>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Use License</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Permitted Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Report road infrastructure issues in good faith
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      View and track the status of your reports
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Access public reports and community data
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Use the platform for legitimate civic engagement
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Restrictions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                      Submit false, misleading, or fraudulent reports
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                      Use the service for commercial purposes without permission
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                      Attempt to reverse engineer or hack the platform
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                      Spam or abuse the reporting system
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">User Accounts</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, 
                  complete, and current at all times. You are responsible for safeguarding the password 
                  and for all activities that occur under your account.
                </p>

                <div className="bg-gradient-to-r from-secondary/5 to-accent-yellow/5 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">Account Responsibilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Maintain the security of your login credentials
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Notify us immediately of any unauthorized use
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Keep your account information up to date
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Use your account only for lawful purposes
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Content and Conduct</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">User-Generated Content</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You retain ownership of any content you submit, post, or display on AsphaltAid. 
                    However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free 
                    license to use, reproduce, and distribute your content for the purpose of operating our service.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">Acceptable Content</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Accurate reports of road issues</li>
                      <li>Clear, relevant photos</li>
                      <li>Constructive feedback</li>
                      <li>Respectful communication</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">Prohibited Content</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>False or misleading information</li>
                      <li>Inappropriate or offensive material</li>
                      <li>Spam or repetitive content</li>
                      <li>Content that violates privacy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Privacy and Data</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
                and protect your information when you use our service. By using AsphaltAid, you 
                agree to the collection and use of information in accordance with our Privacy Policy.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Key Privacy Points</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    We collect only necessary information to provide our service
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    Location data is used solely for report accuracy
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    We do not sell your personal information
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    You can request deletion of your data at any time
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                For complete details, please review our{' '}
                <Link href="/privacy" className="text-secondary hover:text-secondary-600 transition-colors font-medium">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Service Availability</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to maintain AsphaltAid's availability, but we cannot guarantee uninterrupted service. 
                The platform may be temporarily unavailable due to maintenance, updates, or unforeseen technical issues.
              </p>

              <div className="bg-gradient-to-r from-accent-yellow/10 to-orange-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Service Interruptions</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our service 
                  with or without notice. We will not be liable for any modification, suspension, 
                  or discontinuance of the service.
                </p>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Limitation of Liability</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                AsphaltAid is provided "as is" without any warranties, expressed or implied. 
                We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Liability Limitations</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  In no event shall AsphaltAid, its directors, employees, partners, agents, suppliers, 
                  or affiliates be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses, resulting from your use of the service.
                </p>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Termination</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your account and access to the service immediately, 
                  without prior notice or liability, for any reason whatsoever, including without 
                  limitation if you breach the Terms.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Grounds for Termination</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                        Violation of these terms
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                        Fraudulent or abusive behavior
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                        Repeated false reporting
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Effects of Termination</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        Immediate loss of access
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        Data may be deleted
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        No refund of fees
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Changes to Terms</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms 
                at any time. If a revision is material, we will try to provide at least 30 days 
                notice prior to any new terms taking effect.
              </p>

              <div className="bg-gradient-to-r from-secondary/5 to-accent-yellow/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Notification Process</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    Email notification to registered users
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    Prominent notice on our website
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    In-app notifications for significant changes
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Your continued use of the service after we post any modifications to the Terms 
                will constitute your acknowledgment and acceptance of the modifications.
              </p>
            </section>

            <section className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Questions About These Terms?</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                If you have any questions about these Terms and Conditions, please don't hesitate 
                to contact us. We're here to help clarify any concerns you may have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="min-w-[200px]">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    Get Started
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