
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
    <div className="pt-24 font-[montserrat]">
      {/* Main Container */}
      <div className="h-[200vh] w-[95vw] bg-[#3B3E2D] mx-[2vw] rounded-2xl px-[4.5vw]">

        {/* Header Section */}
        <div className="flex flex-col gap-9 justify-center items-center pt-10">
          <p className="flex items-center justify-center gap-2 h-[4vh] w-[9vw] bg-white uppercase rounded-4xl tracking-wider text-sm font-medium">
            <FaRegDotCircle /> Services
          </p>
          <h1 className="text-6xl text-white font-medium tracking-tight">What we do best</h1>
          <p className="text-center text-white font-medium text-lg">
            From prime property discovery to seamless deals, our services <br />
            span every facet of buying, selling, and leasing.
          </p>
        </div>

        {/* Row 1 */}
        <div className="h-[33vh] w-full flex mt-[3vw] justify-between text-white">
          {/* Property Curation */}
          <div className="h-full w-[49.5vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] flex justify-between">
            <div
              className="h-full w-[19vw] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/18/ea/0d/18ea0dbad6bc44632ccbf65cfe09d3ed.jpg)",
              }}
            />
            <div className="h-full w-[26vw] rounded-2xl space-y-4.5">
              <p className="text-white text-4xl"><GiHouse /></p>
              <h1 className="text-3xl font-medium">Property Curation</h1>
              <h1 className="text-lg leading-6">
                We offer curated property options that balance prime location, smart investment, and modern lifestyle appeal.
              </h1>
            </div>
          </div>

          {/* Property Planning */}
          <div className="h-full w-[33.5vw] rounded-2xl space-y-4.5 bg-white/30 px-[1.5vw] py-[3vh] text-white">
            <p className="text-4xl"><FaMap /></p>
            <h1 className="text-3xl font-medium">Property Planning</h1>
            <h1 className="text-lg leading-6">
              Every transaction begins with thoughtful planning, ensuring maximum value, transparency, and precision at every stage.
            </h1>
          </div>
        </div>

        {/* Row 2 */}
        <div className="h-[33vh] w-full flex mt-[3vw] justify-between text-white">
          {/* Visual Appeal */}
          <div className="h-full w-[33.5vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
            <p className="text-4xl"><IoSparklesSharp /></p>
            <h1 className="text-3xl font-medium">Visual Appeal</h1>
            <h1 className="text-lg leading-6">
              We highlight stunning interiors and exteriors that enhance visual charm, maximize interest, and elevate perceived market value.
            </h1>
          </div>

          {/* Expert Guidance */}
          <div className="h-full w-[49.5vw] rounded-2xl flex justify-between space-y-4.5 bg-white/30 px-[1.5vw] py-[3vh] text-white">
            <div
              className="h-full w-[19vw] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/37/98/95/37989599a30c3cc6191e9423139fc640.jpg)",
              }}
            />
            <div className="h-full w-[26vw] rounded-2xl space-y-4.5">
              <p className="text-4xl"><FaHandshakeSimple /></p>
              <h1 className="text-3xl font-medium">Expert Guidance</h1>
              <h1 className="text-lg leading-6">
                Experience drives seamless deals—powered by trust, professionalism, and precision from start to finish.
              </h1>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="h-[31vh] w-full flex mt-[3vw] justify-between text-white">
          {/* Sustainable Living */}
          <div className="h-full w-[42vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
            <p className="text-4xl"><RiListSettingsFill /></p>
            <h1 className="text-3xl font-medium">Sustainable Living</h1>
            <h1 className="text-lg leading-6">
              We promote eco-conscious spaces—enhancing efficiency while minimizing environmental impact effortlessly.
            </h1>
          </div>

          {/* Virtual Experience */}
          <div className="h-full w-[42vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
            <p className="text-4xl"><Gi3dGlasses /></p>
            <h1 className="text-3xl font-medium">Virtual Experience</h1>
            <h1 className="text-lg leading-6">
              Explore listings in vivid detail through immersive 3D visuals and lifelike renderings—bringing spaces to life effortlessly.
            </h1>
          </div>
        </div>

        {/* End-to-End Handling */}
        <div className="h-[32vh] w-full mt-[3vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
          <p className="text-4xl"><TbChecklist /></p>
          <h1 className="text-3xl font-medium">End-to-End Handling</h1>
          <h1 className="text-lg leading-6">
            From first viewing to final paperwork, we manage every step for smooth, <br />
            timely, and flawless transactions
          </h1>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="h-[72vh] w-[95vw] bg-[#3B3E2D] mx-[2vw] mt-[6vw] rounded-2xl px-[4.5vw] space-y-7 pt-17">
        <p className="flex items-center justify-center gap-2 h-[4vh] w-[9vw] bg-white uppercase rounded-4xl tracking-wider text-sm font-medium">
          <FaRegDotCircle /> our values
        </p>
        <h1 className="text-[3.5vw] text-white font-medium tracking-tight">Principles to guide us</h1>

        <div className="h-[32vh] w-full flex justify-between">
          {/* Trusted Values */}
          <div className="h-full w-[27.5vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
            <p className="text-4xl"><FaHandshakeSimple /></p>
            <h1 className="text-3xl font-medium">Trusted Values</h1>
            <h1 className="text-lg leading-6">
              We value honesty, clarity, and your interests—ensuring every deal stays fair and transparent.
            </h1>
          </div>

          {/* Client Focused */}
          <div className="h-full w-[27.5vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
            <p className="text-4xl"><IoPerson /></p>
            <h1 className="text-3xl font-medium">Client Focused</h1>
            <h1 className="text-lg leading-6">
              Your goals come first. We tailor every step to ensure a seamless and rewarding real estate experience.
            </h1>
          </div>

          {/* Excellence */}
          <div className="h-full w-[27.5vw] bg-white/30 rounded-2xl px-[1.5vw] py-[3vh] text-white space-y-4.5">
            <p className="text-4xl"><FaTrophy /></p>
            <h1 className="text-3xl font-medium">Excellence</h1>
            <h1 className="text-lg leading-6">
              Our expertise delivers professionalism and trust—making every real estate journey smooth, efficient, and stress-free.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
