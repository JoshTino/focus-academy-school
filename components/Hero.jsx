import { motion } from "framer-motion";
import school from "../data/school.js"

export default function Hero() {
  return (
    <section
      id="home"
      className="h-170 mt-20 p-3 flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
    >
      
      <div className="flex flex-col items-center md:flex-row">
      <motion.div
        className="relative max-w-3xl  md:w-150"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
      >

        <motion.h1
          className="font-nunito font-bold text-5xl md:text-7xl md:leading-25 text-left text-gray-800 leading-15 mb-6"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7 }}
        >
          Welcome To <br/><span className="font-donegal">{school.name}</span>
        </motion.h1>

        <motion.p
          className="mb-6 font-nunito font-semibold md:text-xl text-lg text-left text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          Upholding excellence and nobility.
        </motion.p>

      </motion.div>

        <motion.div
          className="mb-7 bg-primary"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <img src="/images/background2.jpg" className=" w-180"/>
        </motion.div>

      </div>
        <motion.div
          className="flex justify-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >

          <motion.a
            href="https://wa.me/08149842901"
            className="bg-gray-800 text-secondary font-bold font-nunito cursor-pointer px-6 py-3 hover:bg-red-900"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Today
          </motion.a>

          <motion.a
            href="tel:09054477547"
            className="bg-secondary font-bold font-nunito cursor-pointer text-white px-6 py-3 hover:bg-white hover:text-black"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>

        </motion.div>
    </section>
  );
}