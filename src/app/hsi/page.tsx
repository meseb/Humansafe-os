import HSICalculator from '@/components/modules/HSICalculator';

export default function HSIPage() {
  return (
    <div className="min-h-screen bg-white pt-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Simulatore HSI</h1>
          <p className="text-gray-600 mt-2">
            Valuta il tuo stato attuale (Human State Index)
          </p>
        </div>
        <HSICalculator />
      </div>
    </div>
  );
}
