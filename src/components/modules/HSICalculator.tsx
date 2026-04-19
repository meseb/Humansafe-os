// src/components/modules/HSICalculator.tsx
'use client';

import { useState } from 'react';
import { calculateHSI, HSIData } from '@/lib/hsi';
import { HSIIndicator } from '@/components/ui/HSIIndicator';
import { StateTag } from '@/components/ui/StateTag';

export default function HSICalculator() {
  const [inputs, setInputs] = useState<HSIData>({
    sleep: 70,
    stress: 40,
    mentalLoad: 50,
    socialConnection: 60,
  });

  const result = calculateHSI(inputs);

  const handleChange = (key: keyof HSIData, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-xl font-semibold">Simulatore HSI</h2>

      {(['sleep', 'stress', 'mentalLoad', 'socialConnection'] as const).map(key => (
        <div key={key} className="space-y-2">
          <label className="block text-sm font-medium capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={inputs[key]}
            onChange={e => handleChange(key, Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{inputs[key]}</span>
        </div>
      ))}

      <div className="border-t pt-6 space-y-4">
        <HSIIndicator score={result.score} />
        <StateTag state={result.state} />
        <p className="text-gray-800">{result.interpretation}</p>
        <button
          onClick={() => console.log('Salva HSI:', result)} // sostituire con chiamata Firebase
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Salva risultato
        </button>
      </div>
    </div>
  );
}
