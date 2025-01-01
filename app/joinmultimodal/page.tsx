'use client';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, ChangeEvent } from 'react';

export default function JoinMultimodal() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    linkedin: '',
    portfolio: '',
    examples: '',
    location: '',
    referral: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-16 pb-6 md:pt-24 md:pb-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thanks for your interest in joining Multimodal!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We'd love to learn more about you and your experience.
            </p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label className="block text-left mb-2">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Role</label>
                <select name="role" value={formData.role} onChange={handleChange} className="border p-2 w-full" required>
                  <option value="">Select...</option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="research-scientist">Research Scientist</option>
                  <option value="designer">Designer</option>
                  <option value="product-manager">Product Manager</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">LinkedIn URL</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Portfolio/Website URL (Optional)</label>
                <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Give 2-3 examples where you have delivered AI impact (75 words each max)</label>
                <textarea name="examples" value={formData.examples} onChange={handleChange} className="border p-2 w-full h-32" required />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Where are you based?</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">How did you find out about Multimodal?</label>
                <select name="referral" value={formData.referral} onChange={handleChange} className="border p-2 w-full" required>
                  <option value="">Select...</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter</option>
                  <option value="referral">Personal Referral</option>
                  <option value="search">Search Engine</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}