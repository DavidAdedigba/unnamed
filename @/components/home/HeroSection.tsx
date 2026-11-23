import HeroText from "./HeroText"
import { marginalia } from "../../lib/data"

export default function HeroSection() {

    return (

        <section className="space-y-10">
            
            {/* TEXT */}
            <div className="py-16 space-y-8">
                <div className="">
                    <HeroText />
                    <div className="w-full flex flex-col md:flex-row justify-between items-baseline px-2.5">
                        <span className="text-[#C2410C] dark:text-[#EA580C] text-[1.25rem] md:text-[1.5rem] font-medium inline-block">Frontend Engineer</span>
                        <p className="">Lagos, Nigeria.</p>
                    </div>
                </div>
                <p className="px-1.5">
                    Incase you&apos;ve missed the gigantic text that spells out my name, I&apos;m Óluwadémiladé. I&apos;m a front -end engineer with experience in building interfaces that solve real problems, and deliver intuitive user experiences. Generally, I&apos;m the kind of person who enjoys figuring out how things work, whether that&apos;s a piece of software, a business process, large scale systems, music theory, or a skill I&apos;ve decided to learn. Curiosity has shaped a lot of what I do. It led me to a computer science degree, and just constantly looking for better, or to reference Bill Gates, Lazier(i&apos;m kidding) ways to solve problems. I enjoy deep diving into interesting topics(or more specifically, topics I find interesting), and turning complex ideas into practical, and useful solutions.
                </p>
            </div>

            {/* PICTURES && MARGINALIA */}
            <div className="flex flex-col lg:flex-row lg:justify-between border border-[#A1A1A1] dark:border-[#7B7B7B] rounded-[3px] p-2.5">

                {/* PICTURES */}
                <div className="bg-black dark:bg-[#F5F5F5] w-full lg:w-1/2 min-h-[50vh] lg:min-h-[65vh]" />

                {/* TEXT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-center">MARGINALIA</h2>

                    {/* DETAILS */}
                    <div className="bg-red-900 w-full grid grid-cols-2 gap-x-2.5 gap-y-3.5 px-2.5 lg:pl-5">
                        {marginalia.map((d) => (
                            <div key={d.heading} className="w-full">
                                <h4>{d.heading}</h4>
                                <p className="">{d.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}