import React from "react";

export default function Newsletter() {
  return (
    <div>
      <section className="mt-32 px-6">
        <div className="container mx-auto bg-linear-to-r from-[#7A211E] to-[#7A211E] rounded-4xl p-10 md:p-16 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] pointer-events-none"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                Stay Inspired.
              </h2>
              <p className="text-white/80">
                Subscribe to our newsletter to receive the latest updates,
                impact reports, and opportunities for African youth directly in
                your inbox.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                className="grow px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-2 focus:border-[#FF6B35] transition-all font-body-md"
                placeholder="Your Email Address"
                type="email"
              />
              <button className="bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#7A211E] transition-all duration-300 shadow-lg active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
