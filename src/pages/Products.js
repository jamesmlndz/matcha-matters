export default function Products() {
    return (
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Our Products
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 text-center border border-gray-100"
            >
              <img
                src={`https://source.unsplash.com/300x200/?matcha,${i}`}
                alt="Matcha Product"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-secondary">
                Matcha Blend {i + 1}
              </h3>
              <p className="text-accent mt-2">$24.99</p>
              <button className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-primary hover:text-secondary transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  