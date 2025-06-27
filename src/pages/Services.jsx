import { FaRegDotCircle } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiListSettingsFill } from "react-icons/ri";
import { Gi3dGlasses } from "react-icons/gi";
import { TbChecklist } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";

const Service = () => {
  return (
    <div className="pt-32 font-[montserrat]">
      {/* Main Container */}
      <div className="min-h-[180vh] lg:min-h-[160vh] w-[95vw] bg-[#3B3E2D] mx-[2vw] rounded-2xl px-[4.5vw] pb-12">
        {/* Header Section */}
        <div className="flex flex-col gap-9 justify-center items-center pt-10">
          <p className="flex items-center justify-center gap-2 h-auto px-4 bg-white uppercase rounded-4xl tracking-wider text-sm font-medium">
            <FaRegDotCircle /> Services
          </p>
          <h1 className="text-4xl lg:text-6xl text-white font-medium tracking-tight text-center">What we do best</h1>
          <p className="text-center text-white font-medium text-lg">
            From prime property discovery to seamless deals, our services <br />
            span every facet of buying, selling, and leasing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-6 mt-12 text-white">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex flex-col lg:flex-row bg-white/30 rounded-2xl p-6 gap-6 w-full lg:w-[49.5%]">
              <div className="h-48 lg:h-auto lg:w-1/2 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url(https://i.pinimg.com/736x/18/ea/0d/18ea0dbad6bc44632ccbf65cfe09d3ed.jpg)" }}></div>
              <div className="flex-1 space-y-3">
                <p className="text-4xl"><GiHouse /></p>
                <h1 className="text-2xl font-medium">Property Curation</h1>
                <p className="text-lg leading-6">
                  We offer curated property options that balance prime location, smart investment, and modern lifestyle appeal.
                </p>
              </div>
            </div>

            <div className="bg-white/30 rounded-2xl p-6 space-y-3 w-full lg:w-[49.5%]">
              <p className="text-4xl"><FaMap /></p>
              <h1 className="text-2xl font-medium">Property Planning</h1>
              <p className="text-lg leading-6">
                Every transaction begins with thoughtful planning, ensuring maximum value, transparency, and precision at every stage.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="bg-white/30 rounded-2xl p-6 space-y-3 w-full lg:w-[49.5%]">
              <p className="text-4xl"><IoSparklesSharp /></p>
              <h1 className="text-2xl font-medium">Visual Appeal</h1>
              <p className="text-lg leading-6">
                We highlight stunning interiors and exteriors that enhance visual charm, maximize interest, and elevate perceived market value.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row bg-white/30 rounded-2xl p-6 gap-6 w-full lg:w-[49.5%]">
              <div className="h-48 lg:h-auto lg:w-1/2 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url(https://i.pinimg.com/736x/37/98/95/37989599a30c3cc6191e9423139fc640.jpg)" }}></div>
              <div className="flex-1 space-y-3">
                <p className="text-4xl"><FaHandshakeSimple /></p>
                <h1 className="text-2xl font-medium">Expert Guidance</h1>
                <p className="text-lg leading-6">
                  Experience drives seamless deals—powered by trust, professionalism, and precision from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="bg-white/30 rounded-2xl p-6 space-y-3 w-full lg:w-[49.5%]">
              <p className="text-4xl"><RiListSettingsFill /></p>
              <h1 className="text-2xl font-medium">Sustainable Living</h1>
              <p className="text-lg leading-6">
                We promote eco-conscious spaces—enhancing efficiency while minimizing environmental impact effortlessly.
              </p>
            </div>

            <div className="bg-white/30 rounded-2xl p-6 space-y-3 w-full lg:w-[49.5%]">
              <p className="text-4xl"><Gi3dGlasses /></p>
              <h1 className="text-2xl font-medium">Virtual Experience</h1>
              <p className="text-lg leading-6">
                Explore listings in vivid detail through immersive 3D visuals and lifelike renderings—bringing spaces to life effortlessly.
              </p>
            </div>
          </div>

          {/* End-to-End Handling */}
          <div className="bg-white/30 rounded-2xl p-6 space-y-3 w-full">
            <p className="text-4xl"><TbChecklist /></p>
            <h1 className="text-2xl font-medium">End-to-End Handling</h1>
            <p className="text-lg leading-6">
              From first viewing to final paperwork, we manage every step for smooth, timely, and flawless transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="min-h-[75vh] lg:min-h-[60vh] w-[95vw] bg-[#3B3E2D] mx-[2vw] mt-[4vw] rounded-2xl px-[4.5vw] space-y-7 pt-12 pb-[2vw] text-center">
        <p className="flex items-center justify-center gap-2 h-auto px-4 w-max mx-auto bg-white uppercase rounded-4xl tracking-wider text-sm font-medium">
          <FaRegDotCircle /> our values
        </p>
        <h1 className="text-3xl md:text-4xl text-white font-medium tracking-tight">Principles to guide us</h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trusted Values */}
          <div className="bg-white/30 rounded-2xl p-6 text-white space-y-3">
            <p className="text-4xl"><FaHandshakeSimple /></p>
            <h1 className="text-2xl font-medium">Trusted Values</h1>
            <p className="text-lg leading-6">
              We value honesty, clarity, and your interests—ensuring every deal stays fair and transparent.
            </p>
          </div>

          {/* Client Focused */}
          <div className="bg-white/30 rounded-2xl p-6 text-white space-y-3">
            <p className="text-4xl"><IoPerson /></p>
            <h1 className="text-2xl font-medium">Client Focused</h1>
            <p className="text-lg leading-6">
              Your goals come first. We tailor every step to ensure a seamless and rewarding real estate experience.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white/30 rounded-2xl p-6 text-white space-y-3">
            <p className="text-4xl"><FaTrophy /></p>
            <h1 className="text-2xl font-medium">Excellence</h1>
            <p className="text-lg leading-6">
              Our expertise delivers professionalism and trust—making every real estate journey smooth, efficient, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
