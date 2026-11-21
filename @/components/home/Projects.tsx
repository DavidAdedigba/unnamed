import { useState } from "react"
import { motion } from "motion/react";

import { projects } from "../../lib/data";

interface ProjectProps {
    isDarkMode:boolean;
}
type  FilterOptions = "WEB" | "MOBILE"

interface FilterProps {
    filter: FilterOptions;
}

export default function ProjectSection({ isDarkMode }: ProjectProps) {

    const [ openFilter,setOpenFilter ] = useState<boolean>(false);
    const [ filter,setFilter ] = useState<FilterOptions>("WEB")

    const web = projects.filter(item => item.platform.toLowerCase() === "web")
    const mobile = projects.filter(item => item.platform === "mobile")
    const webProjects = projects.find((p) => p.platform === "web")?.projects
    const mobileProjects = projects.find((p) => p.platform === "mobile")?.projects

    return (

        <section>

            <header className="w-full flex justify-between items-end">

                <h3 className="w-51.5 md:w-2/6">Projects With A Pulse.</h3>

                {/* FILTER */}
                <select
                    name="projects"
                    id="projects"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as FilterOptions)}
                    className={` cursor-pointer focus:outline-none appearance-none bg-size-1rem bg-position-[right_0.75rem_center] bg-no-repeat pr-10 ${isDarkMode ? "bg-[url(/icons/filter-dark.svg)]" : "bg-[url('/icons/filter.svg')]"}`}
                >
                    <option value="WEB">Web projects [{webProjects?.length ?? 0}]</option>
                    <option value="MOBILE"> Mobile projects [{mobileProjects?.length ?? 0}]</option>
                </select>
            </header>

            {/* FILTER CONTENT */}
            <>
                {filter === "WEB" && (
                    <div className="w-full py-5 flex justify-between gap-1.5 items-center px-0.5">
                        {webProjects?.map((p) => (
                            <div className=" w-6/12 space-y-4" key={p.id}>

                                <div className="w-full min-h-[25vh] md:min-h-[30vh] bg-black rounded-sm" />

                                <h4 className=" not-italic">{p.title}</h4>

                            </div>
                        ))}
                    </div>
                )}
            </>
        </section>
    )
}