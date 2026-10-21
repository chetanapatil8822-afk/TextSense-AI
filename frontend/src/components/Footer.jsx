import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import Modal from './Modal';

export const Footer = ({ setActivePage }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <>
      <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Brand and Description */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-teal-600 dark:bg-teal-500 flex items-center justify-center text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-900 dark:text-white tracking-tight">
                  TextSense
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
                AI-powered text analysis for research and informational purposes.
              </p>
            </div>

            {/* Navigation & Informational Links */}
            <div className="flex items-center flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <button
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActivePage('analyze');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Analyze Text
              </button>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => setDisclaimerOpen(true)}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Disclaimer
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
            <p>Â© {new Date().getFullYear()} TextSense. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Committed to ethical, user-focused AI assistance
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Commitment"
      >
        <p>
          TextSense respects your privacy. When using this application, please avoid entering personally identifiable information (PII) such as full legal names, phone numbers, addresses, or private financial details.
        </p>
        <p>
          Text submitted for evaluation is processed solely for real-time linguistic pattern analysis and is not stored or shared with external advertising entities.
        </p>
        <p>
          If you are using Guest Mode, your session state is temporary and non-persistent.
        </p>
      </Modal>

      {/* Disclaimer Modal */}
      <Modal
        isOpen={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
        title="Informational Disclaimer"
      >
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-medium">
          Important: TextSense is not a medical device or diagnostic service.
        </div>
        <p>
          This application provides automated natural language pattern analysis for research and informational demonstration purposes only. It does not provide medical diagnoses, psychological advice, or psychiatric treatment.
        </p>
        <p>
          If you or someone you know is feeling overwhelmed, experiencing emotional distress, or having thoughts of self-harm, please reach out immediately to qualified mental health professionals or emergency helpline services in your region.
        </p>
      </Modal>
    </>
  );
};

export default Footer;
