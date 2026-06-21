import { Laptop, BookOpen, School } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title:"Nursery School",
    icon:Laptop,
    description:"Foundational education engaging your child in fun way of learning ."
  },
  {
    title:"Primary School",
    icon:Laptop,
    description:"Preparing pupils for junior secondary learning."
  },
  {
    title:"Junior Secondary School",
    icon:School,
    description:"Strong foundational education preparing students for senior secondary learning."
  },
  {
    title:"Senior Secondary School",
    icon:BookOpen,
    description:"Advanced academic programs designed to prepare students for university."
  }
];

export default function Academics(){
  return(
    <section id="academics" className="py-20 px-4">

      <div className="max-w-6xl mx-auto md:px-4">

        <h2 className="text-3xl bg-gray-800 text-secondary py-2 skew-x-7 font-bold text-center mb-12 font-nunito">
          Academic Programs
        </h2>

        <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount: 0.2 }}
        variants={{
          hidden:{},
          visible:{
            transition:{ staggerChildren:0.2 }
          }
        }}
        >

          {programs.map((p,i)=>{

            const Icon = p.icon;

            return(
              <motion.div
              key={i}
              className="p-6 bg-secondary rounded-xl shadow hover:shadow-xl transition flex flex-col items-center"
              variants={{
                hidden:{ opacity:0, y:30 },
                visible:{ opacity:1, y:0 }
              }}
              transition={{ duration:0.5 }}
              >
                <Icon className="text-gray-800 mb-4"/>

                <h3 className="text-xl text-gray-800 font-semibold mb-2 font-nunito">
                  {p.title}
                </h3>

                <p className="text-white font-nunito">
                  {p.description}
                </p>

              </motion.div>
            )

          })}

        </motion.div>

      </div>

    </section>
  )
}