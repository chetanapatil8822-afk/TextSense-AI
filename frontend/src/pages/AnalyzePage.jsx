import React, { useState, useMemo } from 'react';
import Tooltip from '../components/Tooltip';
import { analyzeTextApi } from '../services/api';
import { useToast } from '../context/ToastContext';
import { 
  Sparkles, 
  Trash2, 
  AlertCircle, 
  HelpCircle, 
  RotateCcw,
  ShieldAlert
} from 'lucide-react';

export const AnalyzePage = () => {
  const { addToast } = useToast();
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const MAX_CHARS = 500;

  // Character counter
  const charCount = inputText.length;

  // Execute Analysis
  const handleAnalyze = async () => {
    if (!inputText.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeTextApi(inputText);
      setResult(response);
      addToast('Analysis completed.', 'success');
    } catch (err) {
      setError(err.message || 'Something went wrong while analyzing the text.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="space-y-1 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Analyze Text
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Enter social media text below for depression-related pattern analysis.
        </p>
      </div>

      {/* Main Analysis Card */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-5 sm:p-7 space-y-5 transition-colors">
        
        {/* Text Input Area */}
        <div className="relative pt-2">
          <label htmlFor="analysis-textarea" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block pb-2">
            Enter social media text
          </label>
          <textarea
            id="analysis-textarea"
            rows={7}
            value={inputText}
            maxLength={MAX_CHARS}
            onChange={(e) => setInputText(e.target.value)}
            disabled={loading}
            placeholder="Enter or paste your social media text here..."
            className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 text-sm sm:text-base leading-relaxed resize-y transition-all disabled:opacity-60"
          />
        </div>

        {/* Counters & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 order-2 sm:order-1">
            <span className="cursor-default px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 font-mono">
              {charCount} / {MAX_CHARS}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end order-1 sm:order-2">
            {inputText && !loading && (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!inputText.trim() || loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm shadow-teal-600/30 transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
            >
              <Sparkles className="w-4 h-4" />
              <span>Analyze Text</span>
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>Please avoid entering personally identifiable or sensitive information.</span>
          </div>
        </div>

      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center space-y-4 shadow-sm animate-pulse">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
              Analyzing text...
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Connecting to mDistilBERT model...
            </p>
          </div>
        </div>
      )}

      {/* ERROR STATE */}
      {error && !loading && (
        <div className="rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 p-6 sm:p-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-rose-900 dark:text-rose-200">
              Analysis Failed
            </h3>
            <p className="text-xs text-rose-700 dark:text-rose-300">
              {error}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAnalyze}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
        </div>
      )}

      {/* ANALYSIS RESULT CARD */}
      {result && !loading && (
        <div className="space-y-6 animate-fadeIn">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 space-y-6 transition-colors">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Evaluation Output
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  ANALYSIS RESULT
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-sm sm:text-base">
              
              <div className="space-y-1 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
  Prediction
</span>
                <span className="block font-bold text-slate-900 dark:text-white">{result.prediction || 'N/A'}</span>
              </div>
              
              <div className="space-y-1 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
  Confidence
</span>
                <span className="block font-bold text-slate-900 dark:text-white">{result.confidence ? `${(result.confidence * 100).toFixed(1)}%` : 'N/A'}</span>
              </div>

              <div className="space-y-1 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
  Model
</span>
                <span className="block font-bold text-slate-900 dark:text-white">{result.model || 'mDistilBERT'}</span>
              </div>

            </div>
          </div>
        </div>
      )}
      
      {/* DISCLAIMER */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Disclaimer:</strong> This platform is a research prototype for text analysis and does not provide medical diagnosis or professional mental-health advice.
        </p>
      </div>

    </div>
  );
};

export default AnalyzePage;
