import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "../@/components/layout/Navbar"
import Footer from "../@/components/layout/Footer"
import ThemeToggler from "../@/components/layout/ThemeToggler"

export default function Layout() {

    const [ isDarkMode,setIsDarkMode ] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark"
    });

    return (
        <>
            <ThemeToggler
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />
            <Navbar isDarkMode={isDarkMode} />
            <Outlet />
            <Footer isDarkMode={isDarkMode} />
        </>
    )
}