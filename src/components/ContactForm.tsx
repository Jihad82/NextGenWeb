import React, { useState } from 'react';
import { Twitter, Circle, Instagram, Linkedin } from 'lucide-react';
import { SERVICES } from '../data';

interface SocialBtnProps {
  href: string;
  icon: React.ReactNode;
  className: string;
  label: string;
}

const SocialBtn: React.FC<SocialBtnProps> = ({ href, icon, className, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center hover:opacity-80 active:scale-95 transition-all duration-200 ${className}`}
      aria-label={label}
      id={`social-btn-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {icon}
    </a>
  );
};

interface ContactFormProps {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedServices,
  setSelectedServices,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSent(true);
    } catch (error) {
      console.error('Failed to submit form:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-3.5 sm:p-5 flex flex-col gap-3 border border-gray-100"
      id="inner-contact-card"
    >
      {/* Heading */}
      <div className="flex items-center justify-between" id="card-header">
        <h2 className="text-lg sm:text-xl font-semibold text-black tracking-tight flex items-center gap-2" id="say-hello-heading">
          Say hello! <img src="https://cdn-icons-png.flaticon.com/512/17895/17895310.png" alt="Waving hand" className="w-6 h-6 sm:w-7 sm:h-7 animate-wave object-contain select-none pointer-events-none" referrerPolicy="no-referrer" />
        </h2>
      </div>

      {/* Email + Socials Row */}
      <div 
        className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-xl px-3 py-1.5"
        id="email-socials-row"
      >
        <div className="flex flex-col min-w-0" id="drop-us-a-line-col">
          <span className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Drop us a line</span>
          <a 
            href="mailto:hello@forma.co" 
            className="text-xs text-blue-600 font-semibold hover:underline truncate"
            id="mailto-link"
          >
            hello@forma.co
          </a>
        </div>

        <div className="flex items-center gap-1 shrink-0" id="socials-container">
          <SocialBtn 
            href="https://twitter.com" 
            icon={<Twitter size={11} />} 
            className="bg-gray-100 text-gray-800" 
            label="Twitter" 
          />
          <SocialBtn 
            href="https://circle.so" 
            icon={<Circle size={11} />} 
            className="bg-pink-100 text-pink-500" 
            label="Circle" 
          />
          <SocialBtn 
            href="https://instagram.com" 
            icon={<Instagram size={11} />} 
            className="bg-orange-100 text-orange-400" 
            label="Instagram" 
          />
          <SocialBtn 
            href="https://linkedin.com" 
            icon={<Linkedin size={11} />} 
            className="bg-blue-100 text-blue-600" 
            label="LinkedIn" 
          />
        </div>
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-3" id="or-divider">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-gray-400 font-medium text-[10px] tracking-wider" id="or-text">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form fields & feedback wrapper */}
      <div id="form-interactive-area">
        {sent ? (
          /* Success State */
          <div 
            className="flex flex-col items-center justify-center py-6 px-4 gap-2.5 text-center"
            id="success-message"
          >
            <div 
              className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-lg text-green-600 font-bold border border-green-200 shadow-sm"
              id="success-check-pill"
            >
              ✓
            </div>
            <h3 className="text-sm font-semibold text-gray-900" id="success-heading">
              You're all set!
            </h3>
            <p className="text-xs text-gray-500 max-w-xs" id="success-subtext">
              Expect a reply within 24 hours.
            </p>
            
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setName('');
                setEmail('');
                setMessage('');
                setSelectedServices([]);
              }}
              className="mt-2 text-[10px] font-semibold text-gray-400 hover:text-black hover:underline transition-all cursor-pointer"
              id="send-another-btn"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* Actual Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" id="main-contact-form">
            {/* Name / Email Block */}
            <div className="flex flex-col gap-1.5" id="form-fields-container">
              <label className="text-xs font-semibold text-gray-500" id="form-section-label">
                Tell us about your vision
              </label>
              
              <div className="flex flex-col sm:flex-row gap-1.5" id="name-email-row">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={sending}
                  className="flex-1 min-w-0 text-xs px-2.5 py-2 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-1.5 focus:ring-gray-900 focus:border-transparent transition-all duration-200 disabled:opacity-60"
                  id="input-full-name"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={sending}
                  className="flex-1 min-w-0 text-xs px-2.5 py-2 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-1.5 focus:ring-gray-900 focus:border-transparent transition-all duration-200 disabled:opacity-60"
                  id="input-email"
                />
              </div>

              {/* Textarea */}
              <textarea
                required
                rows={2}
                placeholder="What are you looking to build or improve..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={sending}
                className="w-full text-xs px-2.5 py-2 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-1.5 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-60"
                id="input-message"
              />
            </div>

            {/* Service tags section */}
            <div className="flex flex-col gap-1.5" id="services-section">
              <span className="text-[11px] font-semibold text-gray-400" id="services-label">
                I need help with...
              </span>
              
              <div className="flex flex-wrap gap-1" id="services-tags-wrapper">
                {SERVICES.map((service) => {
                  const active = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      disabled={sending}
                      onClick={() => toggleService(service)}
                      className={`text-[10px] font-medium px-2 py-1 rounded-lg border transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                        active
                          ? 'bg-gray-100 text-black border-black shadow-sm'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                      id={`service-tag-${service.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sending || !name.trim() || !email.trim()}
              className="w-full bg-black text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-800 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md cursor-pointer mt-0.5"
              id="submit-form-btn"
            >
              {sending ? 'Sending...' : 'Send my message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
