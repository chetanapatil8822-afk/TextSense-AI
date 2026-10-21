import React from 'react';
import { 
  BarChart2, 
  GitBranch, 
  Share2, 
  RefreshCcw,
  Monitor,
  Smartphone,
  ArrowRight
} from 'lucide-react';

export const ExperimentsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Experimental Evaluation
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Comparative evaluation of depression detection models across Twitter/X and Reddit, including within-platform, cross-platform, and Twitter split-strategy analysis.
        </p>
      </div>

      {/* SECTION 1 — EVALUATION OVERVIEW */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Share2 className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 dark:text-white">Platforms</h3>
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">Twitter/X + Reddit</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Depression-detection evaluation across two social-media platforms.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <BarChart2 className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 dark:text-white">Models</h3>
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">TF-IDF + LR · TF-IDF + SVM · mDistilBERT</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Three model approaches evaluated under the experimental framework.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <GitBranch className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 dark:text-white">Twitter Splits</h3>
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">User-Level + Text-Level</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Twitter is evaluated using two split strategies for sensitivity analysis.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <RefreshCcw className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 dark:text-white">Evaluation</h3>
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">Within + Cross-Platform</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Models are evaluated both within the same platform and across platforms.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WITHIN-PLATFORM EVALUATION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Within-Platform Evaluation</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Models are trained and tested on the same platform to measure platform-specific performance.</p>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4">Model</th>
                  <th className="px-6 py-4">Twitter → Twitter</th>
                  <th className="px-6 py-4">Reddit → Reddit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium">TF-IDF + Logistic Regression</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">75.70%</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">96.34%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium">TF-IDF + SVM</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">75.39%</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">96.51%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium">mDistilBERT</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">79.29%</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">97.12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <details className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
          <summary className="px-6 py-4 text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer list-none flex justify-between items-center hover:text-blue-600 transition-colors">
            View All Metrics
            <span className="transition group-open:rotate-180">▼</span>
          </summary>
          <div className="border-t border-slate-200 dark:border-slate-800 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3">Model</th>
                  <th className="px-6 py-3">Direction</th>
                  <th className="px-6 py-3">Accuracy</th>
                  <th className="px-6 py-3">Precision</th>
                  <th className="px-6 py-3">Recall</th>
                  <th className="px-6 py-3 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400">Macro F1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-3">TF-IDF + LR</td>
                  <td className="px-6 py-3">Twitter → Twitter</td>
                  <td className="px-6 py-3">75.86%</td>
                  <td className="px-6 py-3">76.03%</td>
                  <td className="px-6 py-3">75.67%</td>
                  <td className="px-6 py-3 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">75.70%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-3">TF-IDF + LR</td>
                  <td className="px-6 py-3">Reddit → Reddit</td>
                  <td className="px-6 py-3">96.34%</td>
                  <td className="px-6 py-3">98.69%</td>
                  <td className="px-6 py-3">93.79%</td>
                  <td className="px-6 py-3 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">96.34%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-3">TF-IDF + SVM</td>
                  <td className="px-6 py-3">Twitter → Twitter</td>
                  <td className="px-6 py-3">75.43%</td>
                  <td className="px-6 py-3">75.40%</td>
                  <td className="px-6 py-3">75.38%</td>
                  <td className="px-6 py-3 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">75.39%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-3">TF-IDF + SVM</td>
                  <td className="px-6 py-3">Reddit → Reddit</td>
                  <td className="px-6 py-3">96.52%</td>
                  <td className="px-6 py-3">98.70%</td>
                  <td className="px-6 py-3">94.15%</td>
                  <td className="px-6 py-3 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">96.51%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-3">mDistilBERT</td>
                  <td className="px-6 py-3">Twitter → Twitter</td>
                  <td className="px-6 py-3">79.29%</td>
                  <td className="px-6 py-3">79.45%</td>
                  <td className="px-6 py-3">79.42%</td>
                  <td className="px-6 py-3 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">79.29%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-3">mDistilBERT</td>
                  <td className="px-6 py-3">Reddit → Reddit</td>
                  <td className="px-6 py-3">97.13%</td>
                  <td className="px-6 py-3">97.20%</td>
                  <td className="px-6 py-3">97.10%</td>
                  <td className="px-6 py-3 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">97.12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </section>

      {/* SECTION 3 — CROSS-PLATFORM GENERALIZATION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Cross-Platform Generalization</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Models trained on one platform are evaluated on another platform to examine cross-platform generalization.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Twitter</span>
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Reddit</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">Train → Test</span>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-slate-200 dark:bg-slate-700"></div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Reddit</span>
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Twitter</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">Train → Test</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4">Model</th>
                  <th className="px-6 py-4">Direction</th>
                  <th className="px-6 py-4">Accuracy</th>
                  <th className="px-6 py-4">Precision</th>
                  <th className="px-6 py-4">Recall</th>
                  <th className="px-6 py-4 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400">Macro F1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + LR</td>
                  <td className="px-6 py-4">Twitter → Reddit</td>
                  <td className="px-6 py-4">56.53%</td>
                  <td className="px-6 py-4">64.85%</td>
                  <td className="px-6 py-4">57.16%</td>
                  <td className="px-6 py-4 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">50.42%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + LR</td>
                  <td className="px-6 py-4">Reddit → Twitter</td>
                  <td className="px-6 py-4">52.18%</td>
                  <td className="px-6 py-4">65.53%</td>
                  <td className="px-6 py-4">53.77%</td>
                  <td className="px-6 py-4 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">42.11%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + SVM</td>
                  <td className="px-6 py-4">Twitter → Reddit</td>
                  <td className="px-6 py-4">58.71%</td>
                  <td className="px-6 py-4">62.68%</td>
                  <td className="px-6 py-4">59.17%</td>
                  <td className="px-6 py-4 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">55.85%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + SVM</td>
                  <td className="px-6 py-4">Reddit → Twitter</td>
                  <td className="px-6 py-4 text-slate-400 italic">Pending</td>
                  <td className="px-6 py-4 text-slate-400 italic">Pending</td>
                  <td className="px-6 py-4 text-slate-400 italic">Pending</td>
                  <td className="px-6 py-4 text-slate-400 italic bg-blue-50/50 dark:bg-blue-900/5">Pending</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">mDistilBERT</td>
                  <td className="px-6 py-4">Twitter → Reddit</td>
                  <td className="px-6 py-4">48.52%</td>
                  <td className="px-6 py-4">47.99%</td>
                  <td className="px-6 py-4">48.22%</td>
                  <td className="px-6 py-4 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">46.82%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">mDistilBERT</td>
                  <td className="px-6 py-4">Reddit → Twitter</td>
                  <td className="px-6 py-4">52.46%</td>
                  <td className="px-6 py-4">71.62%</td>
                  <td className="px-6 py-4">54.11%</td>
                  <td className="px-6 py-4 font-semibold bg-blue-50/50 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400">41.56%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TWITTER SPLIT-STRATEGY ANALYSIS */}
      <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Twitter Split-Strategy Analysis</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">To investigate the effect of evaluation strategy, Twitter data was evaluated using both user-level and text-level splitting while keeping the model families and evaluation metrics consistent.</p>
        </div>

        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-900 dark:text-blue-200 space-y-2">
          <h3 className="font-bold text-sm">Why this analysis?</h3>
          <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
            Different data-splitting strategies can produce different estimates of model performance. This experiment examines the sensitivity of Twitter depression-detection results to user-level and text-level splitting.
          </p>
        </div>
      </section>

      {/* SECTION 5 — TWITTER → TWITTER SPLIT COMPARISON */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Twitter → Twitter</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Macro F1 comparison between user-level and text-level Twitter evaluation.</p>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4">Model</th>
                  <th className="px-6 py-4">User-Level Macro F1</th>
                  <th className="px-6 py-4">Text-Level Macro F1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + Logistic Regression</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">46.75%</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">75.70%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + SVM</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">50.31%</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">75.39%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">mDistilBERT</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">43.13%</td>
                  <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">79.29%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          * User-level splitting separates posts by user, while text-level splitting performs a stratified split at the post level.
        </p>
      </section>

      {/* SECTION 6 — TWITTER → REDDIT SPLIT COMPARISON */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Twitter → Reddit</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Macro F1 comparison of cross-platform testing using the two Twitter split strategies.</p>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4">Model</th>
                  <th className="px-6 py-4">User-Level Twitter Train</th>
                  <th className="px-6 py-4">Text-Level Twitter Train</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + Logistic Regression</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">52.95%</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">50.42%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">TF-IDF + SVM</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">57.16%</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">55.85%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">mDistilBERT</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">46.70%</td>
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">46.82%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          This comparison examines whether the Twitter split strategy also affects cross-platform evaluation on Reddit.
        </p>
      </section>

      {/* SECTION 7 — EVALUATION DESIGN */}
      <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Evaluation Design</h2>
        
        <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center space-y-4">
          <div className="px-6 py-3 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-lg font-bold shadow-sm border border-blue-200 dark:border-blue-800/60 z-10 relative">
            TWITTER DATA
          </div>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          
          <div className="w-64 border-t-2 border-slate-300 dark:border-slate-700 border-dashed relative">
            <div className="absolute top-0 left-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
            <div className="absolute top-0 right-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          </div>
          
          <div className="flex w-72 justify-between mt-6">
            <div className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold shadow-sm text-slate-700 dark:text-slate-200 z-10">USER-LEVEL</div>
            <div className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold shadow-sm text-slate-700 dark:text-slate-200 z-10">TEXT-LEVEL</div>
          </div>
          
          <div className="w-64 border-b-2 border-slate-300 dark:border-slate-700 border-dashed relative mt-4 h-6">
            <div className="absolute top-0 left-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
            <div className="absolute top-0 right-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          </div>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          
          <div className="px-8 py-3 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded-lg font-bold shadow-sm border border-teal-200 dark:border-teal-800/60 z-10">
            MODEL TRAINING
          </div>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          
          <div className="w-64 border-t-2 border-slate-300 dark:border-slate-700 border-dashed relative">
            <div className="absolute top-0 left-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
            <div className="absolute top-0 right-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          </div>
          
          <div className="flex w-80 justify-between mt-6">
            <div className="px-4 py-2 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm text-slate-800 dark:text-slate-200 z-10">TWITTER TEST</div>
            <div className="px-4 py-2 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm text-slate-800 dark:text-slate-200 z-10">REDDIT TEST</div>
          </div>
          
          <div className="w-64 border-b-2 border-slate-300 dark:border-slate-700 border-dashed relative mt-4 h-6">
            <div className="absolute top-0 left-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
            <div className="absolute top-0 right-0 w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          </div>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
          
          <div className="px-6 py-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm text-center z-10 w-full max-w-sm">
            <div className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-sm tracking-wide">EVALUATION METRICS</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Accuracy • Precision • Recall • Macro F1</div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — EXPERIMENTAL NOTES */}
      <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Experimental Notes</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>Twitter primary evaluation uses user-level splitting to reduce user-level data leakage.</li>
          <li>Twitter text-level splitting is included as a sensitivity analysis.</li>
          <li>Reddit uses stratified text-level splitting because usable user IDs were not available.</li>
          <li>Test data is kept separate from training.</li>
          <li>Macro F1 is used as the primary comparison metric.</li>
          <li>Results shown are from the project's experimental evaluation.</li>
        </ul>
      </section>

    </div>
  );
};

export default ExperimentsPage;
