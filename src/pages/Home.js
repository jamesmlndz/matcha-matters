import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-poppins">
      {/* 🌿 HERO SECTION WITH VIDEO */}
      <section className="relative py-40 text-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/MatchaCommercial.mp4" // ✅ path from public folder
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative max-w-3xl mx-auto z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Elevate Your Rituals with Premium Matcha
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Handpicked, organic, and full of wellness benefits. Discover the
            essence of matcha, crafted for energy, focus, and balance.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-primary text-secondary font-bold rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Shop Now
          </Link>
        </div>
        </section>

        {/* 🌱 Why Matcha Section */}
      <section className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Logo/Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/assets/logo/Text.png"
              alt="Matcha Matters Logo"
              className="w-70 h-auto object-contain"
            />
          </div>

          {/* Right Side - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Why Choose Matcha Matters?
            </h2>
            <p className="text-gray-700 mb-4">
              At Matcha Matters, we provide the highest quality ceremonial matcha to
              elevate your daily rituals. Enjoy the perfect balance of flavor, energy,
              and mindfulness.
            </p>
            <p className="text-gray-700 mb-4">
              
            </p>
            <p className="text-gray-700">
              Embrace a mindful tea experience and transform your everyday moments
              into calming rituals with Matcha Matters.
            </p>
          </div>
        </div>
      </section>

      {/* Advertisement section */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN (2 stacked images) */}
        <div className="flex flex-col gap-6">
          {/* Top Image */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/assets/ads/ad3.png" // replace with your image
              alt="Ad 1"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom Image */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/assets/ads/ad2.png" // replace with your image
              alt="Ad 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT COLUMN (Large Image) */}
        <div className="md:col-span-2 rounded-3xl overflow-hidden">
          <img
            src="/assets/ads/ad1.png" // replace with your big image
            alt="Main Ad"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>




      {/* 🍵 Shop by Category */}
      <section
        className="py-40 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/backgrounds/MatchaBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {[
              { name: "Pure Matcha", img: "/assets/products/Ceremonial.jpeg" },
              { name: "Tea Sets", img: "/assets/products/TeaSets.png" },
              { name: "Accessories", img: "/assets/products/Accessories.jpeg" },
            ].map((cat, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-2xl font-bold">
                    {cat.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌿 Featured Products */}
      <section className="py-20 bg-white">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Featured Products
          </h2>
          <Link to="/shop" className="text-primary font-semibold hover:underline">
            View More
          </Link>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto px-6">
          {[
            {
              id: 1,
              name: "Jeju Matcha",
              price: "₱750 – ₱1,200",
              img: "/assets/products/Jeju.png",
            },
            {
              id: 2,
              name: "Kyoto Matcha",
              price: "₱950 – ₱1,500",
              img: "/assets/products/Kyoto.png",
            },
            {
              id: 3,
              name: "Fukujuen Matcha",
              price: "₱1,200 – ₱1,800",
              img: "/assets/products/Fukujuen.png",
            },
          ].map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 text-center border border-gray-100"
            >
              <div className="w-full aspect-square mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                {product.name}
              </h3>
              <p className="text-accent mt-2">{product.price}</p>
              <button className="mt-4 px-6 py-2 bg-primary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🎁 Something for You Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#3373BA] mb-16">
          something for you
        </h2>

        <section>
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center px-6">
    
    {/* 🟡 Yellow Icon */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/icons/yellow.png"
        alt="Yellow Icon"
        className="w-40 h-40 object-contain"
      />
    </div>

    {/* 🍵 Jeju Matcha */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/products/Jeju.png"
        alt="Jeju Matcha"
        className="w-50 h-50 object-contain drop-shadow-lg"
      />
    </div>

    {/* 🔴 Red Icon */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/icons/red.png"
        alt="Red Icon"
        className="w-40 h-40 object-contain"
      />
    </div>

    {/* 🍵 Kyoto Matcha */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/products/Kyoto.png"
        alt="Kyoto Matcha"
        className="w-48 h-48 object-contain drop-shadow-lg"
      />
    </div>

    {/* 🍵 Fukujuen Matcha */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/products/Fukujuen.png"
        alt="Fukujuen Matcha"
        className="w-48 h-48 object-contain drop-shadow-lg"
      />
    </div>

    {/* 🟢 Green Icon */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/icons/green.png"
        alt="Green Icon"
        className="w-40 h-40 object-contain"
      />
    </div>

      {/* 🍵 Isshiki Matcha */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/products/Isshiki.png"
        alt="Isshiki Matcha"
        className="w-48 h-48 object-contain drop-shadow-lg"
      />
    </div>

    {/* 🔵 Blue Icon */}
    <div className="flex justify-center items-center relative">
      <img
        src="/assets/icons/blue.png"
        alt="Blue Icon"
        className="w-40 h-40 object-contain"
      />
    </div>


  </div>
</section>

      </section>

      {/* 🏆 Best Sellers */}
      <section
        className="py-40 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/products/BestSeller.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold text-white">Best Sellers</h2>
            <Link
              to="/shop"
              className="text-[#F7DF52] font-semibold hover:underline"
            >
              View More
            </Link>
          </div>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-6">
            {[
              {
                name: "Ceremonial Matcha",
                price: "$29.99",
                img: "https://source.unsplash.com/400x400/?ceremonial,matcha",
              },
              {
                name: "Matcha Starter Kit",
                price: "$49.99",
                img: "https://source.unsplash.com/400x400/?matcha,kit",
              },
              {
                name: "Bamboo Whisk",
                price: "$12.99",
                img: "https://source.unsplash.com/400x400/?bamboo,whisk",
              },
              {
                name: "Iced Matcha Blend",
                price: "$24.99",
                img: "https://source.unsplash.com/400x400/?iced,matcha",
              },
            ].map((prod, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center border border-gray-100"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-secondary">
                  {prod.name}
                </h3>
                <p className="text-accent mt-2">{prod.price}</p>
                <button className="mt-4 px-6 py-2 bg-primary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row items-center justify-center bg-white py-16 px-8">
  {/* Yellow Rounded Box */}
  <div className="relative bg-[#F7DF52] rounded-3xl border-4 border-black p-8 max-w-4xl shadow-lg flex items-center gap-8">
  {/* Matcha Glass Image (Left) */}
  <div className="flex-shrink-0">
    <img
      src="/assets/icons/matcha-glass.png" // replace with your actual image
      alt="Matcha Latte"
      className="w-60 h-60 rounded-2xl object-cover"
    />
  </div>

  {/* Text Content (Right) */}
  <div className="flex flex-col text-left">
    <h2 className="text-2xl md:text-4xl font-bold text-[#245A2D] mb-3">
      Matcha Latte
    </h2>
    <p className="text-lg md:text-2xl text-black leading-relaxed">
      Experience the smooth blend of premium Japanese matcha and creamy milk  
      the perfect way to energize your day.
    </p>
  </div>
</div>

  {/* Blue Circle and Hand Image */}
  <div className="relative mt-12 md:mt-0 md:ml-[-80px] flex items-center justify-center top-50">
    {/* Japanese Text */}
  <h3 className="absolute left-50 right-50 bottom-60 text-5xl font-bold text-[#D64541]">
    オツミルク
  </h3>
    <div className="w-64 h-64 bg-[#2967B0] rounded-full relative z-0 top-20 bottom-50"></div>
    <img
      src="/assets/icons/whiskingmmatcha.png" // replace with your own
      alt="Whisking Matcha"
      className="absolute w-72 h-72 object-contain z-10 right-0 bottom-30"
    />
  </div>

  
</section>




      {/* 💬 Testimonials */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          What Our Customers Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
          {[
            {
              name: "Samantha",
              text: "The matcha is so smooth and fresh! I can feel the energy boost without the crash.",
            },
            {
              name: "David",
              text: "Beautiful packaging and amazing flavor. Matcha Matters is my go-to shop.",
            },
            {
              name: "Lina",
              text: "I love their starter kits! Everything I needed to begin my matcha journey.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <p className="italic text-gray-600 mb-6">“{review.text}”</p>
              <h4 className="font-semibold text-secondary">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

            

      {/* ✉️ Newsletter */}
      <section className="py-20 bg-secondary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="mb-8 text-lg">
          Subscribe for updates, special offers, and new product launches.
        </p>
        <form className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button className="px-8 bg-primary text-secondary font-bold rounded-r-full hover:bg-accent hover:text-white transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
