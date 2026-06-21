import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {number:"100",label:"Students"},
  {number:"20",label:"Teachers"},
  {number:"15",label:"Classrooms"},
  {number:10,label:"Years of .Excellence"},
];

export default function Stats(){

  return(
    <section className="bg-white flex justify-center">
      <div className="flex flex-wrap justify-between gap-y-4 w-11/12 md:w-8/12">

        {stats.map((stat,i)=>(
          <motion.div
          key={i}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="bg-gray-800 size-25 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-secondary font-nunito">
              <CountUp end={stat.number} duration={3}/>+
            </h2>

            <p className="mt-2 text-xs text-center text-secondary">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}