import { motion } from "framer-motion"

import testimonials from "../data/testimonials.js"

export default function Testimonials(){

return(

<section className="py-20 bg-white">


<motion.div
className="max-w-6xl px-4 mx-auto"
initial="hidden"
whileInView="visible"
viewport={{ once:false, amount:0.2 }}
variants={{
hidden:{},
visible:{
transition:{ staggerChildren:0.2 }
}
}}
>

	<h2 className="text-3xl font-bold text-center mb-5 font-nunito bg-gray-800 skew-x-7 py-2 text-secondary mb-10">
          Testimonials
     </h2>
<div className="grid md:grid-cols-3 gap-8">

{testimonials.map((t,i)=>(
<motion.div
key={i}
className="bg-white p-6 border-b-4 border-secondary rounded-xl shadow"
variants={{
hidden:{ opacity:0, y:40 },
visible:{ opacity:1, y:0 }
}}
transition={{ duration:0.5 }}
whileHover={{ y:-8, scale:1.03 }}
>

<p className="italic mb-4 font-nunito">
"{t.quote}"
</p>

<h4 className="font-semibold font-nunito">
{t.name}
</h4>

<span className="text-sm text-gray-500 font-nunito">
{t.role}
</span>

</motion.div>
))}

</div>

</motion.div>

</section>

)

}