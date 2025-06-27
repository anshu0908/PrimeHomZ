export default function Articles() {
  const articles = [
    {
      category: "Architecture",
      date: "May 27, 2025",
      title: "Nature meets urban design, a creative shift.",
      image:
        "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      alt: "Modern beachfront house with glass walls and pool",
    },
    {
      category: "Interior",
      date: "April 1, 2025",
      title: "Blend of art and architecture in sculptural design.",
      image:
        "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      alt: "Contemporary glass house with wooden elements",
    },
    {
      category: "Market",
      date: "April 1, 2025",
      title: "Must-know tips for first-time homeowners.",
      image:
        "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      alt: "Modern architectural home with large windows at sunset",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 px-4 sm:px-6">
          <h2 className="text-5xl lg:text-8xl font-normal">
            <span className="font-[WindSong]">Blog</span>
            <span className="font-sans"> & Articles</span>
          </h2>
          <button className="px-6 py-2 text-sm font-medium border-gray-300 border-2 rounded-3xl hover:bg-gray-100">
            SEE ALL
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group rounded-2xl overflow-hidden flex flex-col h-full"
            >
              {/* Article Info */}
              <div className="mb-4">
                <p className="text-sm mb-2 text-gray-600">
                  {article.category} • {article.date}
                </p>
                <h3 className="text-lg lg:text-xl font-normal text-black leading-snug mb-3">
                  {article.title}
                </h3>
                <button className="text-sm font-medium text-gray-700 hover:text-black border-b border-gray-400 hover:border-black pb-1 transition">
                  READ MORE
                </button>
              </div>

              {/* Article Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
