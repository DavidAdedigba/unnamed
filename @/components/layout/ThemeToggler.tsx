import { useState,useEffect } from "react";

import PullChord from "../pull-cord"

export default function ThemeToggler() {

    const [ isDarkMode,setIsDarkMode ] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark";
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    return (
        <PullChord
                label="Toggle Theme"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                sound={true}
                haptics={true}
                className="fixed top-0 right-1/6"
            />
    )
}