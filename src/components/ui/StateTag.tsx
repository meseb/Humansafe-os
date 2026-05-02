import React from 'react';
import { Badge } from '@/components/ui/badge';
import { HSIState } from '@/lib/hsi';

export function StateTag({ state }: { state: HSIState }) {
  let colorClass = '';

  switch (state) {
    case 'STABILE':
      colorClass = 'bg-green-100 text-green-800 hover:bg-green-100';
      break;
    case 'ATTENZIONE':
      colorClass = 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      break;
    case 'CRITICO':
      colorClass = 'bg-red-100 text-red-800 hover:bg-red-100';
      break;
  }

  return (
    <Badge className={`${colorClass} px-3 py-1 text-sm font-medium`}>
      {state}
    </Badge>
  );
}
