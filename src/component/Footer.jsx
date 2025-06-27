export default function Footer() {
  return (
    <footer>
      {/* Top Section - Locations and Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Gurgaon Location */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-900">Gurgaon</h3>
            </div>
            <p className="text-gray-600 text-lg">
              +91 89205 94962 <br />
              info@primehomz.com
            </p>
          </div>

          <div></div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Subscribe our newsletter</h3>
            <div className="flex gap-1 items-center">
              <input
                type="email"
                placeholder="Your email"
                className="pl-4 pr-4 py-2 bg-white border border-gray-200 focus:border-gray-400 rounded-3xl text-sm w-full"
              />
              <button className="bg-gray-800 hover:bg-gray-900 rounded-3xl text-white px-5 py-2 text-sm h-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-900 mb-6 pb-2 border-b border-gray-200">Menu</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Articles</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Property</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
          </div>
        </div>
      </div>

      {/* Bottom Section - With Background Image */}
      <div className="relative m-10">
        <div
          className="h-52 bg-cover bg-center relative rounded-2xl"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/6814fc6232b8cad8fad482b3/6824284de789999fbdfc417d_Hero%20Thumb.webp')`,
          }}
        >
          <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white text-center">
              info@primehomz.com
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
