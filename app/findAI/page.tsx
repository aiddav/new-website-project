'use client';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, ChangeEvent } from 'react';

export default function FindAI() {
 const [formData, setFormData] = useState({
   industry: '',
   department: '',
   projectDescription: '',
   email: '',
   phone: '',
   website: '',
   timeCommitment: '',
   budget: '',
   projectDuration: '',
   startDate: '',
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
             Thanks for your interest in hiring an AI agents team!
           </h1>
           <p className="text-xl md:text-2xl mb-8">
             We'd like to know a little more about your needs to make sure it's the best match.
           </p>
           <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
             <div className="mb-4">
               <label className="block text-left mb-2">What industry is your business in?</label>
               <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What department do you work in?</label>
               <input type="text" name="department" value={formData.department} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What is your project description?</label>
               <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What is your email?</label>
               <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What is your phone number?</label>
               <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What is your company website?</label>
               <input type="url" name="website" value={formData.website} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What time commitment do you need?</label>
               <select name="timeCommitment" value={formData.timeCommitment} onChange={handleChange} className="border p-2 w-full" required>
                 <option value="">Select...</option>
                 <option value="full-time">Full Time</option>
                 <option value="part-time">Part Time</option>
                 <option value="fixed-project">Fixed Project</option>
                 <option value="number-of-days">Number of Days</option>
                 <option value="dont-know">Don't Know Yet</option>
               </select>
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">What is your total budget?</label>
               <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">How long do you expect the project to last?</label>
               <input type="text" name="projectDuration" value={formData.projectDuration} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">When do you need them to start?</label>
               <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="border p-2 w-full" required />
             </div>
             <div className="mb-4">
               <label className="block text-left mb-2">How did you hear about Multimodal?</label>
               <input type="text" name="referral" value={formData.referral} onChange={handleChange} className="border p-2 w-full" required />
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