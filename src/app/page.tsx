"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center p-6"
        style={{ backgroundImage: "url('/car-rental-banner.jpg')" }}
      >
        
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Why Choose Our Rental Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src="/wide-selection.jpg" alt="Wide Selection of Cars" className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-gray-600">Wide Selection of Cars</h3>
            <p className="text-gray-600">From economy to luxury cars, we have it all!</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src="/best-prices.jpg" alt="Best Prices" className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-gray-600">💰 Best Prices</h3>
            <p className="text-gray-600">Affordable rates with no hidden fees.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src="/customer-support.jpg" alt="24/7 Support" className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-gray-600">🕒 24/7 Support</h3>
            <p className="text-gray-600">We are here to help you anytime, anywhere.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <Link href="/cars">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Browse Available Cars
          </button>
        </Link>
      </div>

      {/* Customer Testimonials */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <img src="/customer1.jpg" alt="Customer Testimonial 1" className="w-16 h-16 rounded-full mx-auto mb-2" />
            <p className="text-gray-700">"Great service and affordable prices! Will rent again!"</p>
            <h4 className="text-sm font-semibold mt-2 text-gray-600">- Daniru P.</h4>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <img src="/customer2.jpg" alt="Customer Testimonial 2" className="w-16 h-16 rounded-full mx-auto mb-2" />
            <p className="text-gray-700">"The car was clean and in excellent condition. Highly recommended!"</p>
            <h4 className="text-sm font-semibold mt-2 text-gray-600">- Sarah L.</h4>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <img src="/customer3.jpg" alt="Customer Testimonial 3" className="w-16 h-16 rounded-full mx-auto mb-2" />
            <p className="text-gray-700">"Quick and easy booking process. 10/10 experience!"</p>
            <h4 className="text-sm font-semibold mt-2 text-gray-600">- Michael B.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
