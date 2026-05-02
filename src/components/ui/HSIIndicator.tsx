import React from 'react';

export function HSIIndicator({ score }: { score: number }) {
  const percentage = Math.min(Math.max(score, 0), 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>Punteggio HSI</span>
        <span>{percentage}/100</span>
      </div>
      <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gray-800 transition-all duration-500 ease-in-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
