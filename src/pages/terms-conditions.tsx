import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            MagnumKare's AI Healthcare Assistant (Nivaran)
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to Nivaran, an AI-powered healthcare assistant provided by MagnumKare. By using our service through WhatsApp, you agree to the following terms and conditions. Please read them carefully. If you do not agree, please discontinue using the service immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Scope of Service</h2>
              <div className="space-y-4">
                <p className="text-gray-700">Nivaran provides healthcare-related information in a simple, accessible format. Services include:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Symptom-related health information</li>
                  <li>Lab test explanations based on common medical data</li>
                  <li>General first-aid guidance and preventive health tips</li>
                  <li>Information on healthcare providers (without direct referrals)</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h3 className="font-semibold text-yellow-800">What Nivaran Does NOT Provide:</h3>
                  <ul className="list-disc pl-6 text-yellow-800 mt-2">
                    <li>Emergency medical response or crisis support</li>
                    <li>Medical prescriptions, dosage recommendations, or medication guidance</li>
                    <li>Direct doctor referrals or consultations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <ul className="space-y-3 text-gray-700">
                <li><span className="font-medium">Age Eligibility:</span> Users of any age can access the service, but legal guardians must supervise minors.</li>
                <li><span className="font-medium">Medical Reliance:</span> You acknowledge that Nivaran is a supportive information tool, not a healthcare provider.</li>
                <li><span className="font-medium">Technical Assistance:</span> For technical help only, call +91 9305872476.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Liability and Medical Disclaimer</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">Important Disclaimer:</p>
                <p className="text-blue-800 mt-2">Nivaran is NOT a substitute for professional medical care, diagnosis, or treatment. In medical emergencies, contact the nearest hospital or healthcare provider immediately.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Privacy and Monitoring</h2>
              <ul className="space-y-3 text-gray-700">
                <li><span className="font-medium">Data Monitoring:</span> MagnumKare monitors user chats to train and improve Nivaran's AI.</li>
                <li><span className="font-medium">Data Use:</span> No personal health data is sold or shared with third parties.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">For queries or assistance:</p>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li>Email: <a href="mailto:shashank@magnumkare.com" className="text-blue-600">shashank@magnumkare.com</a></li>
                  <li>Phone (Technical Help Only): <a href="tel:+919305872476" className="text-blue-600">+91 9305872476</a></li>
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsAndConditions;