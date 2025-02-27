import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      // You'll need to sign up at emailjs.com and create these
      await emailjs.sendForm(
        'service_p3kq6ee', // Replace with your service ID
        'template_jo21ajx', // Replace with your template ID
        form.current,
        'MrXCs5yddUSHq2uRJ' // Replace with your public key
      );
      
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setSubmitStatus('idle')} 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit}>
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
              <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium">There was an error sending your message.</p>
                <p>Please try again or contact me directly at kayrabtuncer@gmail.com</p>
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="from_name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="from_email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            />
          </div>
          
          <div className="text-right">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-md flex items-center justify-center ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium transition-colors`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;