import { useEffect } from "react";

import PullChord from "../pull-cord"

interface ThemeTogglerProps {
    isDarkMode:boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ThemeToggler({
    isDarkMode,
    setIsDarkMode,
}: ThemeTogglerProps) {


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