// src/app/prevention/page.tsx
'use client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PreventionPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Prevenzione Attiva</h1>
      <p className="text-gray-700">
        Interventi brevi, mirati, attivati prima del collasso.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <PreventionCard
          title="Respirazione 4-7-8"
          description="Riduci lo stress in 60 secondi"
          action={() => alert('Avvia esercizio')}
        />
        <PreventionCard
          title="Focus Time"
          description="25 minuti senza distrazioni"
          action={() => alert('Avvia Pomodoro')}
        />
        <PreventionCard
          title="Micro-pausa sociale"
          description="Chiama una persona di fiducia"
          action={() => alert('Apri contatti')}
        />
        <PreventionCard
          title="Reset sensoriale"
          description="Chiudi gli occhi, ascolta il respiro"
          action={() => alert('Avvia guida')}
        />
      </div>
    </div>
  );
}

// In a real app we'd handle onClick properly via a client component or link.
// For now, styling it as a clickable card.
function PreventionCard({ title, description, action }: { title: string; description: string; action?: () => void }) {
  return (
    <Card className="cursor-pointer hover:bg-gray-50 transition" onClick={action}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
