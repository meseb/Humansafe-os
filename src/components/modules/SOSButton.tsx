// src/components/modules/SOSButton.tsx
'use client';
import { Button } from '@/components/ui/button';

export function SOSButton() {
  const handleSOS = () => {
    if (confirm('Vuoi attivare il supporto immediato? Questa azione è seria e protetta.')) {
      // In produzione: chiama Supabase, invia alert, attiva webhook
      console.log('SOS attivato');
      alert('Supporto in arrivo. Rimani connesso.');
    }
  };

  return (
    <Button
      onClick={handleSOS}
      variant="destructive"
      size="lg"
      className="px-8 py-6 font-bold rounded-full text-lg transition transform hover:scale-105"
    >
      ATTIVA SUPPORTO ORA
    </Button>
  );
}
