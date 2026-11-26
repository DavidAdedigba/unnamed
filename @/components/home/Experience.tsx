import { motion } from "motion/react"

import { workExperience } from "../../lib/data"


export default function ExperienceSection() {

    return (

        <section className="">

            <h3 className="md:w-[45%] lg:w-full">Chronicles Of Employment.</h3>

            <div className="space-y-2.5">

                {workExperience.map((company) => (
                    <motion.div 
                        key={company.name} 
                        className="flex flex-col md:flex-row border-b border-[#A1A1A1] gap-2.5 p-2.5 md:items-center"
                        initial={{ y:50, opacity:0 }}
                        whileInView={{ y:0, opacity:1 }}
                        transition={{ duration:0.6, delay:0.3 }}
                        
                    >

                        {/* LOGO */}
                        <div className="w-9 rounded-xs overflow-hidden">
                            <img src={company.logo} alt={`${company.name}'s logo`} className=" scale-100" />
                        </div>

                        <div className="w-full flex justify-between items-center">

                            {/* NAME,LOCATION */}
                            <div className="">
                                <h4>{company.name}.</h4>
                                <p className="">{company.role}</p>
                            </div>

                            {/* ROLE AND DURATION */}
                            <div className="flex flex-col items-end">
                                <p className="">{company.location}</p>
                                <p className="">{company.duration}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}