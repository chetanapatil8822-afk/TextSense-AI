import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';
import { 
  ArrowRight, 
  Languages, 
  HelpCircle, 
  MessageSquare,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu
} from 'lucide-react';

export const HomePage = ({ setActivePage }) => {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How does TextSense handle informal social media language?',
      a: 'TextSense is specifically designed to understand informal text and colloquial expressions of distress that standard tools often overlook.',
    },
    {
      q: 'Is my text stored or saved on any server?',
      a: 'No. TextSense is built with a strong privacy-first principle. Submitted text is processed in real time solely to generate your analysis and is not stored or shared.',
    },
    {
      q: 'Can this tool replace a clinical psychological diagnosis?',
      a: 'No. TextSense provides automated natural language pattern analysis for research and informational purposes only. It is not a medical diagnosis or clinical assessment.',
    }
  ];

  const scrollToAbout = () => {
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 py-6 md:py-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.16]">
              A Lightweight, Cross-Platform Framework for Depression Detection in Social Media Text
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Analyze text for patterns associated with depressive language and emotional distress using an AI-powered text analysis system. This is a research prototype powered by mDistilBERT.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Tooltip content="Start analyzing your text immediately." position="bottom">
                <button
                  onClick={() => setActivePage('analyze')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Try Text Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Tooltip>

              <Tooltip content="Learn more about TextSense and its purpose." position="bottom">
                <button
                  onClick={scrollToAbout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-850/90 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE APPLICATION */}
      <section id="about-section" className="scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Understanding TextSense
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                About the Research Project
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Social media users often express emotions, stress, loneliness, and other feelings through text. Understanding these expressions manually can be difficult when dealing with large amounts of text. This research prototype compares various machine learning baseline models against a lightweight mDistilBERT model tailored for informal social media content.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              The live website relies exclusively on the finalized <strong>mDistilBERT</strong> model to analyze linguistic patterns. Note: other baseline models like TF-IDF + Logistic Regression/SVM are reserved for research evaluation.
            </p>

            {/* Clear Mandatory Disclaimer Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 dark:border-amber-400 text-amber-900 dark:text-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span>Important Notice</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed pl-6">
                This tool is intended for research and informational purposes only. It does not provide a medical diagnosis or replace professional mental-health support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW TEXTSENSE HELPS (3 Feature Cards) */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Key Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Project Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Tooltip content="Analyze text from different platforms." position="top" className="w-full">
              <div className="w-full h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-teal-500/50 transition-all duration-200 text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cross-Platform</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Analyze datasets and live text originating from various platforms like Twitter/X and Reddit.
                </p>
              </div>
            </Tooltip>

            <Tooltip content="Analyze informal and colloquial text." position="top" className="w-full">
              <div className="w-full h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 transition-all duration-200 text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Languages className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Robust Processing</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Effectively processes noisy, informal, and colloquial social media text inputs.
                </p>
              </div>
            </Tooltip>

            <Tooltip content="Leveraging mDistilBERT." position="top" className="w-full">
              <div className="w-full h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/50 transition-all duration-200 text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lightweight AI</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Driven by mDistilBERT to provide efficient, fast inference on limited computational resources.
                </p>
              </div>
            </Tooltip>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ SECTION */}
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 dark:bg-slate-850 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to try the model?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Enter your text and explore the ML inference.
              </p>
            </div>
            <div className="relative pt-2">
              <button
                onClick={() => setActivePage('analyze')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-600/30 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Try Text Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;