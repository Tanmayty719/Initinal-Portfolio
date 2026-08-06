import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import profile from "../../assets/images/profile.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center pt-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
<p className="text-sky-400 text-lg mb-4">
              👋 Hello, I'm
            </p>
            
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="inline-flex items-center gap-3 bg-slate-900/80 border border-slate-700 rounded-full px-5 py-2 mb-6"
>
  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

  <span className="text-sm text-slate-300">
     Open to Full Stack Opportunities
  </span>
</motion.div>


            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
              Tanmay
              <br />
              Kamtekar
            </h1>
            <div className="text-2xl md:text-3xl mt-5 font-semibold text-sky-400 h-10">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "MERN Stack Developer",
                  1500,
                  "React Developer",
                  1500,
                ]}
                speed={40}
                repeat={Infinity}
              />

            </div>

            <p className="text-slate-400 mt-7 text-lg leading-8 max-w-lg">

              Passionate Full Stack Web Developer with experience
              building scalable web applications using React,
              Node.js, Express, MongoDB, JWT Authentication,
              Socket.IO and Cloudinary.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

    <Link
  to="contact"
  smooth={true}
  duration={500}
  offset={-80}
  className="
inline-flex items-center justify-center gap-2
w-[220px]
px-7 py-4
rounded-xl
font-semibold
bg-sky-500
text-white
transition-all
duration-300
hover:bg-sky-600
hover:scale-105
hover:-translate-y-1
hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
active:scale-95
cursor-pointer
"
>
  <HiArrowRight />
  Get in Touch
</Link>

              <a
  href="/TanmayKamtekarresume.pdf"
  download
  className="
inline-flex items-center justify-center gap-2
w-[220px]
px-7 py-4
rounded-xl
font-semibold
border
border-slate-700
bg-slate-900/60
backdrop-blur-md
text-white
transition-all
duration-300
hover:border-sky-400
hover:bg-slate-800
hover:scale-105
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(56,189,248,0.20)]
active:scale-95
"
>
  <FaDownload />
  Download Resume
</a>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a href="https://github.com/Tanmayty719">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/tanmay-kamtekar-644996371/">
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative flex justify-center items-center"
>
  {/* Background Glow */}
  <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r
from-sky-500/30
to-cyan-400/20 blur-[80px]" />

  {/* Rotating Ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[360px] h-[360px] rounded-full border-2 border-sky-500/25"
  />

  {/* Floating Image */}
  <motion.img
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    src={profile}
    alt="Tanmay Kamtekar"
    className="relative z-10 w-[290px] md:w-[330px] xl:w-[360px] rounded-full border-4 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
  />
</motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;