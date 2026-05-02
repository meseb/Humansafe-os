// src/app/mirror/page.tsx
'use client';

import { useState } from 'react';
import { MirrorTimeline } from '@/components/modules/MirrorTimeline';

// Mock: in produzione, carica da Firestore
const mockTimeline = [
  { id: '1', date: '2024-05-01', hsi: 85, type: 'log' as const },
  { id: '2', date: '2024-05-05', hsi: 35, type: 'crash' as const },
  { id: '3', date: '2024-05-10', hsi: 60, type: 'recovery' as const },
  { id: '4', date: '2024-05-12', hsi: 72, type: 'log' as const },
];

export default function MirrorPage() {
  const [timeline] = useState(mockTimeline);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">The Mirror</h1>
      <p className="text-gray-700 mb-8">
        Una cronologia finita della tua evoluzione. Non c’è scroll infinito: solo la tua storia.
      </p>

      <MirrorTimeline entries={timeline} />

      <div className="mt-12 text-center text-gray-600 italic">
        You reached the present. Close the screen.
      </div>
    </div>
  );
}
