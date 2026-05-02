// src/app/page.tsx
'use client';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, ShieldAlert, HeartPulse, History, HelpCircle } from 'lucide-react';

export default function HomePage() {
  const startTour = () => {
    window.dispatchEvent(new Event('start-tour'));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header section */}
      <header className="tour-step-1 max-w-5xl mx-auto px-6 py-12 text-center space-y-6">
        <div className="flex justify-center items-center relative mb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            HUMANSAFE OS
          </h1>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 text-slate-500 hover:text-slate-900" 
            onClick={startTour}
            title="Mostra la guida"
          >
            <HelpCircle className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
          Il tuo ecosistema digitale protetto, progettato per prevenire il sovraccarico e tutelare il tuo benessere.
        </p>
      </header>

      {/* Main functions section */}
      <main className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Link href="/hsi" className="tour-step-2 block group">
            <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Activity className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Simulatore HSI</CardTitle>
                </div>
                <CardDescription className="text-base mt-2">
                  Misura il tuo indice di stato umano. Rispondi a 4 semplici domande per capire il tuo livello di energia e stress.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/mirror" className="tour-step-3 block group">
            <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 text-purple-700 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <History className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Lo Specchio (Storico)</CardTitle>
                </div>
                <CardDescription className="text-base mt-2">
                  Riguarda i tuoi risultati passati in modo confidenziale. Nessun giudizio, solo i tuoi dati per aiutarti a capire i tuoi ritmi.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/prevention" className="tour-step-4 block group">
            <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 text-green-700 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Prevenzione Attiva</CardTitle>
                </div>
                <CardDescription className="text-base mt-2">
                  Interventi mirati e veloci da usare prima di raggiungere il limite. Esercizi di respiro e tecniche di rilassamento.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/sos" className="tour-step-5 block group">
            <Card className="h-full border-red-200 transition-all duration-300 hover:shadow-md hover:border-red-400 bg-red-50/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 text-red-700 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-red-700">Supporto Immediato (SOS)</CardTitle>
                </div>
                <CardDescription className="text-base mt-2 text-red-900/80">
                  Un ponte diretto verso il tuo supporto di fiducia in caso di emergenza. La tua privacy è sempre garantita.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

        </div>
        
        {/* Ethical Box */}
        <div className="mt-16 bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Perché usare Humansafe OS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <strong className="block text-slate-800 mb-1">Privacy Totale</strong>
              I tuoi dati appartengono a te. Nessun tracciamento nascosto o report aziendale senza il tuo consenso.
            </div>
            <div>
              <strong className="block text-slate-800 mb-1">Zero Gamification</strong>
              Nessun badge o ricompensa ansiogena. L'obiettivo è il tuo benessere, non farti usare l'app di più.
            </div>
            <div>
              <strong className="block text-slate-800 mb-1">Strumento, non fine</strong>
              Usa l'app, ottieni ciò che ti serve, chiudila. Torna alla tua vita reale, protetto.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
