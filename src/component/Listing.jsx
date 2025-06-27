import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";

const Listing = () => {
  // Array of listing data for cleaner and scalable structure
  const listings = [
    {
      title: "Raj Niwas",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.24-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      price: "₹ 1.2 Cr",
      location: "Gali No.2, Chandni Chowk",
    },
    {
      title: "Sector 14",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      price: "₹ 1.2 Cr",
      location: "103 Sec 14 Gurugram",
    },
    {
      title: "371/1",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      price: "₹ 80 Lakh",
      location: "opp. narang catering, Gurgaon",
    },
    {
      title: "Ansal Satbari",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.24-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      price: "₹ 80 Lakh",
      location: "495 Sec 52 Gurugram",
    },
    {
      title: "Shri Heights",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/ame2-qp76yjt99pkmemf8clctjmdpkubyyvig7jcioa8xts.jpg",
      price: "₹ 80 Lakh",
      location: "House No. 300, Ashok Vihar",
    },
    {
      title: "Baig Niwas",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/ame2-qp76yjt99pkmemf8clctjmdpkubyyvig7jcioa8xts.jpg",
      price: "₹ 80 Lakh",
      location: "House No. 300, Ashok Vihar",
    },
  ];

  return (
    <div className="px-5">
      {/* Section Heading */}
      <h2 className="text-4xl sm:text-6xl font-normal mt-20 mb-10 ml-2 sm:ml-10">
        <span className="font-span">choosen</span> properties
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-8">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden cursor-pointer transition min-h-[550px] flex flex-col"
          >
            {/* Property Image */}
            <div className="w-full h-96 overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Property Info */}
            <div className="flex-grow p-4 space-y-2">
              {/* Specs Row */}
              <div className="flex flex-wrap gap-4 text-[#323628] text-sm font-medium">
                <div className="flex items-center gap-1">
                  <IoBedOutline className="text-xl" />
                  <span>4 bd</span>
                </div>
                <div className="flex items-center gap-1">
                  <PiBathtub className="text-xl" />
                  <span>3 ba</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xl">📐</span>
                  <span>1000 sqft</span>
                </div>
              </div>

              {/* Title and View Button */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#323628]">
                  {listing.title}
                </h3>
                <button className="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
                  VIEW
                </button>
              </div>

              {/* Location and Price */}
              <p className="text-sm text-gray-600">
                {listing.price} • {listing.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
