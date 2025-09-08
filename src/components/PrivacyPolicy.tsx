import React from 'react';
import { ArrowLeft, Shield, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Effective Date: August 19, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-8">
              <p className="text-gray-700 leading-relaxed">
                This privacy policy applies to the <strong>path2wise.ai</strong> (hereby referred to as "Application") for mobile devices that was created by (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Information Collection and Use
              </h2>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  The Application collects information when you download and use it. This information may include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Your device's Internet Protocol address (e.g. IP address)</li>
                  <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                  <li>The time spent on the Application</li>
                  <li>The operating system you use on your mobile device</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>The Application does not gather precise information about the location of your mobile device.</strong>
                </p>
                <p className="text-gray-700 mt-4">
                  The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                </p>
                <p className="text-gray-700 mt-4">
                  For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to email. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Third Party Access
              </h2>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                </p>
                <p className="text-gray-700 mb-4">
                  Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                    Google Play Services
                  </a>
                </div>
                <p className="text-gray-700 mt-4">
                  The Service Provider may disclose User Provided and Automatically Collected Information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                  <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                  <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                  <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Opt-Out Rights
              </h2>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                Data Retention Policy
              </h2>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:nitishjha@pathwise.in" className="text-orange-600 hover:text-orange-800 font-medium">nitishjha@pathwise.in</a> and they will respond in a reasonable time.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                Children
              </h2>
              <div className="bg-pink-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
                </p>
                <p className="text-gray-700">
                  The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<a href="mailto:nitishjha@pathwise.in" className="text-pink-600 hover:text-pink-800 font-medium">nitishjha@pathwise.in</a>) so that they will be able to take the necessary actions.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                Security
              </h2>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                Changes
              </h2>
              <div className="bg-teal-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                Your Consent
              </h2>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                Contact Us
              </h2>
              <div className="bg-red-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{' '}
                  <a href="mailto:nitishjha@pathwise.in" className="text-red-600 hover:text-red-800 font-medium">
                    nitishjha@pathwise.in
                  </a>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}