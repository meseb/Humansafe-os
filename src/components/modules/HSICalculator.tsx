// src/components/modules/HSICalculator.tsx
'use client';

import { useState } from 'react';
import { calculateHSI, HSIData } from '@/lib/hsi';
import { HSIIndicator } from '@/components/ui/HSIIndicator';
import { StateTag } from '@/components/ui/StateTag';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

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
        <div key={key} className="space-y-4">
          <div className="flex justify-between">
            <label className="block text-sm font-medium capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <span className="text-sm font-medium text-gray-600">{inputs[key]}</span>
          </div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={[inputs[key]]}
            onValueChange={(val) => handleChange(key, typeof val === 'number' ? val : val[0])}
            className="w-full"
          />
        </div>
      ))}

      <div className="border-t pt-6 space-y-6">
        <HSIIndicator score={result.score} />
        <div className="flex items-center space-x-4">
          <StateTag state={result.state} />
          <p className="text-gray-800 text-sm font-medium">{result.interpretation}</p>
        </div>
        <Button
          onClick={() => console.log('Salva HSI:', result)} // TODO: sostituire con chiamata Supabase
          className="w-full mt-4"
        >
          Salva risultato
        </Button>
      </div>
    </div>
  );
}
