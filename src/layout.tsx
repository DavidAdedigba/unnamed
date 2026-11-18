import { Outlet } from 'react-router-dom';
import Navbar from "../@/components/layout/Navbar"
import Footer from "../@/components/layout/Footer"
import ThemeToggler from "../@/components/layout/ThemeToggler"

export default function Layout() {

    return (
        <>
            <ThemeToggler />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}