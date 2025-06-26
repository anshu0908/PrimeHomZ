export default function Contact() {
  return (
    <div className="w-[95vw] rounded-2xl min-h-screen bg-[#3B3E2D] text-white mx-auto px-[2vw] py-12 sm:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Heading */}
          <div className="flex items-start">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light tracking-tight">Contact</h1>
          </div>

          {/* Mission and Info */}
          <div className="space-y-12 mt-[0.5vw]">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-xl">
              Our mission is to create residential and mixed-use communities that enhance, strengthen, and contribute
              to the greater fabric of existing areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h2 className="text-lg font-medium">Contact info</h2>
                <p className="text-base font-light">+001 800 600 00</p>
                <p className="text-base font-light">hello@decolorado.com</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium">Address</h2>
                <p className="text-base font-light">245 Maple Avenue</p>
                <p className="text-base font-light">Springfield, IL 62704</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight">Or let's talk</h2>
          </div>

          <div className="space-y-8">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-xl">
              Get in touch with our support team and with any questions or queries you may have.
            </p>

            <form className="space-y-6">
              {/* Input Fields */}
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-base sm:text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-base sm:text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full bg-transparent border-b border-white/30 pb-3 pr-10 text-base sm:text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
                <div className="absolute right-0 bottom-3">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-base sm:text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-4">
                <p className="text-base sm:text-lg font-light">I'm interested in?</p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {[
                    "Buying",
                    "Selling",
                    "Information request"
                  ].map((label, i) => (
                    <label key={i} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 bg-transparent border border-white/50 rounded-sm checked:bg-white checked:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                      />
                      <span className="text-base sm:text-lg font-light">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <div className="pt-4">
                <textarea
                  placeholder="I need help with..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-base sm:text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
