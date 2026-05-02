'use client';
import { useState, useEffect } from 'react';
import { Joyride, STATUS } from 'react-joyride';

export function AppTour() {
  const [run, setRun] = useState(false);

  useEffect(() => {
    // Show tour on first visit
    const hasSeenTour = localStorage.getItem('humansafe-tour-completed');
    if (!hasSeenTour) {
      setRun(true);
    }

    // Allow triggering from anywhere via a custom event
    const handleStartTour = () => setRun(true);
    window.addEventListener('start-tour', handleStartTour);
    
    return () => window.removeEventListener('start-tour', handleStartTour);
  }, []);

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];


    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem('humansafe-tour-completed', 'true');
    }
  };

  const steps = [
    {
      target: '.tour-step-1',
      content: 'Benvenuto in Humansafe OS. Un rifugio digitale semplice e privato. Ecco come proteggere il tuo benessere in pochi passi.',
      disableBeacon: true,
    },
    {
      target: '.tour-step-2',
      content: 'SIMULATORE: Rispondi a semplici domande per capire il tuo livello di stress o energia attuale.',
    },
    {
      target: '.tour-step-3',
      content: 'SPECCHIO: Qui puoi vedere il tuo storico in modo protetto e confidenziale.',
    },
    {
      target: '.tour-step-4',
      content: 'PREVENZIONE: Trova esercizi pratici e veloci per ritrovare la calma prima di un momento critico.',
    },
    {
      target: '.tour-step-5',
      content: 'EMERGENZA (SOS): Usalo se ti senti in pericolo. Avvierà un contatto con la rete di supporto, nel rispetto della tua privacy.',
    }
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      {...{ showProgress: true, showSkipButton: true } as any}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: '#1f2937', 
          zIndex: 10000,
        },
        buttonNext: {
          backgroundColor: '#1f2937',
        },
        buttonBack: {
          color: '#4b5563',
        }
      } as any}
      locale={{
        back: 'Indietro',
        close: 'Chiudi',
        last: 'Fine',
        next: 'Avanti',
        skip: 'Salta',
      }}
    />
  );
}
