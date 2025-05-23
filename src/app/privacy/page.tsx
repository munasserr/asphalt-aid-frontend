import Link from "next/link";
import { Button } from "@/components/ui";

export default function PrivacyPage() {
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
              Privacy Policy
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
              <h2 className="text-2xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At AsphaltAid, we take your privacy seriously. This privacy policy explains how we collect, 
                use, and protect your personal information when you use our road infrastructure reporting platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using AsphaltAid, you agree to the collection and use of information in accordance with this policy. 
                We will not use or share your information with anyone except as described in this privacy policy.
              </p>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Name and email address when you create an account
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Username and password for account authentication
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Contact information when you reach out to us
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Usage Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Location data when you submit road issue reports
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Photos and descriptions of road issues you report
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Device information and browser type
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Usage patterns and interaction with our platform
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Primary Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Process and manage road issue reports
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Provide AI-powered severity assessments
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Maintain and improve our services
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      Communicate with you about your reports
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Secondary Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Analyze trends in road infrastructure issues
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Improve our AI algorithms
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Provide insights to municipal authorities
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      Send service updates and notifications
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Information Sharing</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>

                <div className="bg-gradient-to-r from-secondary/5 to-accent-yellow/5 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">When We Share Data</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      With municipal authorities to address reported road issues
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      When required by law or legal process
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      To protect our rights, property, or safety
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      With your explicit consent
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When sharing data with municipal authorities, we ensure that personal identifying 
                  information is protected while still providing the necessary details to address road issues effectively.
                </p>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Data Security</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">Technical Measures</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Encrypted data storage</li>
                    <li>Secure authentication systems</li>
                    <li>Regular security updates and patches</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-accent-yellow/5 to-secondary/5 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">Organizational Measures</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Limited access to personal data</li>
                    <li>Employee privacy training</li>
                    <li>Regular security audits</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Your Rights</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  You have several rights regarding your personal information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Access & Control</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        Access your personal data
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        Update or correct your information
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        Delete your account and data
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Privacy Controls</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                        Opt out of certain data uses
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                        Request data portability
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                        Withdraw consent
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    To exercise any of these rights, please contact us at{' '}
                    <Link href="mailto:privacy@asphaltaid.com" className="text-secondary hover:text-secondary-600 transition-colors font-medium">
                      privacy@asphaltaid.com
                    </Link>{' '}
                    or through our{' '}
                    <Link href="/contact" className="text-secondary hover:text-secondary-600 transition-colors font-medium">
                      contact page
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/60 rounded-3xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">Updates to This Policy</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by:
              </p>

              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  Posting the updated policy on our website
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  Sending you an email notification
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  Displaying a prominent notice on our platform
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Your continued use of AsphaltAid after any changes indicates your acceptance of the updated privacy policy.
              </p>
            </section>

            <section className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Questions About Privacy?</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                If you have any questions about this privacy policy or how we handle your data, 
                we're here to help. Reach out to us anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="min-w-[200px]">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    Create Account
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