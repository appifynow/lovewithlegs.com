// under construction modal

export function Construction({ visible = true, setShow }: { visible?: boolean; setShow: (visible: boolean) => void }) {
  // after june 20 2026 default to false
  const isAfterJune2026 = new Date() > new Date("2026-06-20");

  if (!visible || isAfterJune2026) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-white/10 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Under Construction</h2>
        <p className="text-gray-300">
          This page is currently under construction. Any Pricing and availability information is subject to change.
          
        </p>
        <button onClick={() => setShow(false)} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            If You would like a preview, Click here
          </button>
      </div>
    </div>
  );
}