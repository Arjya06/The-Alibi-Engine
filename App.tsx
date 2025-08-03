
import React, { useState, useCallback } from 'react';
import InputForm from './components/InputForm';
import AlibiCard from './components/AlibiCard';
import Loader from './components/Loader';
import { Alibi, AlibiFormData } from './types';
import { generateAlibi } from './services/geminiService';

const App: React.FC = () => {
  const [alibis, setAlibis] = useState<Alibi[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (formData: AlibiFormData) => {
    setIsLoading(true);
    setError(null);
    setAlibis(null);
    try {
      const response = await generateAlibi(formData);
      setAlibis(response.alibis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
            The Alibi Engine
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Generate context-aware, customizable, and proof-backed excuses for any situation.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <aside className="lg:col-span-2 p-6 bg-slate-800/50 border border-slate-700 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Configuration
            </h2>
            <InputForm onSubmit={handleGenerate} isLoading={isLoading} />
          </aside>
          
          <section className="lg:col-span-3">
            <div className="min-h-[600px] flex flex-col justify-center bg-slate-800/50 border border-slate-700 rounded-xl shadow-2xl p-6">
              {isLoading && <Loader />}
              {error && (
                <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Generation Failed</h3>
                  <p>{error}</p>
                </div>
              )}
              {!isLoading && !error && alibis && (
                <div className="space-y-6 animate-fade-in">
                  {alibis.map((alibi) => (
                    <AlibiCard key={alibi.rank} alibi={alibi} />
                  ))}
                </div>
              )}
               {!isLoading && !error && !alibis && (
                <div className="text-center text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-4 text-xl font-semibold text-slate-300">Your Generated Alibis Will Appear Here</h3>
                  <p className="mt-1 text-slate-400">Fill out the form to get started.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
