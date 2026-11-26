import { Link } from "react-router-dom";

interface HeroSectionProps {
    isDarkMode: boolean
}

import Marginalia from "./Marginalia";

export default function HeroSection({ isDarkMode }: HeroSectionProps) {


    return (
        <section>

            <div className="controlled-section space-y-16">

                <header className="w-full flex justify-between items-end">

                    <div className="flex flex-col gap-1">
                        <h3 className="text-(--text-h)">Óluwadémiladé</h3>
                        <h3 className="text-(--accent-text) text-[20px]">Frontend Engineer</h3>
                    </div>

                    <span className="text-[15px]">Lagos, Nigeria.</span>
                </header>

                <div className="flex flex-col gap-12 px-1">
                    <p>
                        I&apos;m a <span className="black-span">front-end engineer with experience in building interfaces that solve real problems, and deliver intuitive user experiences.</span> Generally, I&apos;m the kind of person who enjoys figuring out how things work, whether that&apos;s a piece of software, a business process, large scale systems, music theory, or a skill I&apos;ve decided to learn.
                    </p>
                    <p>
                        Curiosity has shaped a lot of what I do. It&apos;s led me to a <span className="black-span">computer science degree,</span> and just constantly looking for better, or to reference Bill Gates, Lazier(I&apos;m kidding) ways to solve problems. I enjoy deep diving into interesting topics(or more specifically, topics I find interesting), and <span className="black-span">turning complex ideas into practical, and useful solutions.</span>
                    </p>

                    {/* LINKS */}
                    <div className="flex gap-12 items-center">
                        <Link to="" className="flex justify-center items-center gap-1">
                            <img 
                                src={isDarkMode ? "/icons/github-dark.svg" : "/icons/github.svg"} 
                                alt="Github icon" 
                                className="size-4 opacity-100 visited:opacity-100 active:opacity-100 focus:opacity-100"
                            />
                            <span>Github</span>
                        </Link>
                        <Link to='' className="flex justify-center items-center gap-1">
                            <img 
                                src={isDarkMode ? "/icons/linkedin-dark.svg" : "/icons/linkedin.svg"} 
                                alt="Github icon" 
                                className="size-4 opacity-100 visited:opacity-100 active:opacity-100 focus:opacity-100"
                            />
                            <span>LinkedIn</span>
                        </Link>
                        <Link to="" className="flex justify-center items-center gap-1">
                            <img 
                                src={isDarkMode ? "/icons/resume-dark.svg" : "/icons/resume.svg"} 
                                alt="Github icon" 
                                className="size-4 opacity-100 visited:opacity-100 active:opacity-100 focus:opacity-100"
                            />
                            <span>Resumé</span>
                        </Link>
                    </div>
                </div>
            </div>

            <Marginalia isDarkMode={isDarkMode} />
        </section>
    )
}