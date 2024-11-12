import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Create mailto link for form submission
    window.location.href = `mailto:tani06.bu@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AMessage:%20${encodeURIComponent(formData.message)}`;
  };

  return (
    <section className="relative text-[#F5F6FA] py-16 pb-4 px-4">
      {/* Blue background covering 40% of section */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-[#2E3A59] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#F5F6FA] z-0"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        {submitted ? (
          <p className="text-center text-green-500">Thank you for your message! I will get back to you soon.</p>
        ) : (
          <div className="bg-[#FF6B6B] p-16 rounded-3xl shadow-lg flex flex-col lg:flex-row gap-12">
            {/* Left Column: Form */}
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-4xl font-bold text-center lg:text-left mb-8">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-red-500 text-center">{error}</p>}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded bg-[#F5F6FA] text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded bg-[#F5F6FA] text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded bg-[#F5F6FA] text-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded bg-[#F5F6FA] text-black"
                    rows={4}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="text-white bg-[#2E3A59] inline-flex items-center px-6 py-3 border border-[#2E3A59] rounded-lg hover:bg-gray-300 hover:text-[#FF6B6B] transition-colors flex justify-center items-center"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Alternative Contact Methods */}
            <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">Other Contact Methods</h3>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#F5F6FA]" />
                <span className="text-lg">tani06.bu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#F5F6FA]" />
                <span className="text-lg">+60 (13) 225-8017</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#F5F6FA]" />
                <span className="text-lg">Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/koki-taniguchi-9242b5226/" target="_blank" rel="noopener noreferrer" className="text-[#F5F6FA] hover:text-[#2E3A59] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/kk_tngc/" target="_blank" rel="noopener noreferrer" className="text-[#F5F6FA] hover:text-[#2E3A59] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
