// src/components/modules/SOSButton.tsx
export function SOSButton() {
  const handleSOS = () => {
    if (confirm('Vuoi attivare il supporto immediato? Questa azione è seria e protetta.')) {
      // In produzione: chiama Firestore, invia alert, attiva webhook
      console.log('SOS attivato');
      alert('Supporto in arrivo. Rimani connesso.');
    }
  };

  return (
    <button
      onClick={handleSOS}
      className="px-8 py-4 bg-red-600 text-white font-bold rounded-full text-lg hover:bg-red-700 transition transform hover:scale-105"
    >
      ATTIVA SUPPORTO ORA
    </button>
  );
}
