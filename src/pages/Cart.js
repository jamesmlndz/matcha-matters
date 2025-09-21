export default function Cart() {
    return (
      <section className="py-16 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">
          Your Cart
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Matcha Starter Kit</h3>
              <p className="text-accent">$29.99</p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              Remove
            </button>
          </div>
          <div className="flex justify-between font-semibold text-lg text-secondary">
            <span>Total:</span>
            <span>$29.99</span>
          </div>
          <button className="mt-6 w-full px-6 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition">
            Proceed to Checkout
          </button>
        </div>
      </section>
    );
  }
  