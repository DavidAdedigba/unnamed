import { useState } from "react";

import HeroSection from "../../@/components/home/HeroSection"
import ExperienceSection from "../../@/components/home/Experience"
import ProjectSection from "../../@/components/home/Projects"

export default function Home() {

    const [ isDarkMode ] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark"
    });
    
    return (

        <>
            <HeroSection />
            <ExperienceSection />
            <ProjectSection isDarkMode={isDarkMode} />
        </>
    )
}