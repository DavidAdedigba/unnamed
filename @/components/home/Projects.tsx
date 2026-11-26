import { useState } from "react"
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "../../components/ui/select"
import { webProjects,mobileProjects } from "../../lib/data";

interface ProjectProps {
    isDarkMode:boolean;
}
type  FilterOptions = "WEB" | "MOBILE"

// interface FilterProps {
//     filter: FilterOptions;
// }

export default function ProjectSection({ isDarkMode }: ProjectProps) {

    const [ filter,setFilter ] = useState<FilterOptions>("WEB")

    const selectedLabel = filter === "WEB" ? `Web [${webProjects.length}]` : `Mobile [${mobileProjects.length}]`
    

    return (

        <section>

            <header className="w-full flex justify-between items-end">

                <h1>Projects With A Pulse.</h1>

                {/* FILTER */}
                <Select 
                    value={filter}
                    onValueChange={(value) => setFilter(value as FilterOptions)}
                >
                    <SelectTrigger className={` w-fit cursor-pointer focus:outline-none border-none [&>svg]:hidden bg-size-1rem bg-position-[right_0.75rem_center] bg-no-repeat pr-10 ${isDarkMode ? "bg-[url(/icons/filter-dark.svg)]" : "bg-[url('/icons/filter.svg')]"}`} >
                        <SelectValue> {selectedLabel} </SelectValue>
                    </SelectTrigger>
                    <SelectContent 
                        alignItemWithTrigger={false} 
                        align="end" 
                        sideOffset={4}
                        className="bg-white drop-shadow-2xl ring-0 rounded-sm"
                    >
                        <SelectItem value="WEB" className="p-2.5">Web [{webProjects?.length ?? 0}]</SelectItem>
                        <SelectItem value="MOBILE" className="p-2.5">Mobile [{mobileProjects?.length ?? 0}]</SelectItem>
                    </SelectContent>

                </Select>
            </header>

            {/* FILTER CONTENT */}
            <>
                {filter === "WEB" && (
                    <div className="w-full py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0.5 gap-y-8 [&:has(>a:hover)>a:not(:hover)]:opacity-30">
                        {webProjects?.map((p) => (
                            <motion.a 
                                key={p.id}
                                className=" w-full h-[450px] lg:w-5/6 space-y-4 opacity-100 transition-opacity duration-300"
                                href={p.link}
                                target="_blank"
                                initial={{ y:50, opacity:0 }}
                                whileInView={{ y:0, opacity:1 }}
                                viewport={{ once:true }}
                                transition={{ duration:0.6, delay:0.35}}
                            >

                                <div className="w-full min-h-[25vh] md:min-h-[35vh] lg:min-h-[50vh] bg-blue-900 rounded-sm" />

                                <div className="flex items-start justify-between px-2.5">
                                    <div className="">
                                        <h4 className=" not-italic">{p.title}</h4>
                                        <span className="font-regular">{p.type}</span>
                                    </div>

                                    <img
                                        src={isDarkMode ? "/icons/go-to-dark.svg" : "/icons/go-to.svg"}
                                        alt="go-to icon"
                                        className="size-3.5"
                                    />
                                </div>

                            </motion.a>
                        ))}
                    </div>
                )}

                {filter === "MOBILE" && (
                    <div className="w-full py-5 grid grid-cols-2 gap-x-0.5 gap-y-8 [&:has(>a:hover)>a:not(:hover)]:opacity-30">
                        {mobileProjects?.map((p) => (
                            <Link 
                                key={p.id}
                                to={`/project/${p.slug}`}
                                className=" w-full lg:w-5/6 space-y-4 opacity-100 transition-opacity duration-300"
                            >

                                <div className="w-full min-h-[25vh] md:min-h-[35vh] lg:min-h-[50vh] bg-blue-950 rounded-sm" />

                                <div className="flex items-start justify-between px-2.5">

                                    <h4 className=" not-italic">{p.title}</h4>
                                    <img
                                        src={isDarkMode ? "/icons/go-to-dark.svg" : "/icons/go-to.svg"}
                                        alt="go-to icon"
                                        className="size-3.5"
                                    />
                                </div>

                            </Link>
                        ))}
                    </div>
                )}
            </>
        </section>
    )
}