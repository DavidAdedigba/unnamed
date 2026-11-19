import { useState } from "react"
import { motion } from "motion/react";

interface NavbarProps {
    isDarkMode:boolean
}

export default function Navbar({
    isDarkMode,
}: NavbarProps) {

    const [ openMenu,setOpenMenu ] = useState<boolean>(false);

    return (
        <nav className="sticky top-0 z-20 w-full p-3.5 md:px-10 md:py-4 lg:px-32 flex justify-between items-center">
            <div className="size-8 bg-blue-500" />
            <div className="relative min-h-fit">
                <img 
                    role="button"
                    onClick={() => setOpenMenu(!openMenu)}
                    src={isDarkMode ? "/icons/menu-dark.svg" : "/icons/menu.svg"} 
                    alt="Menu icon" 
                    className="size-8"
                />

                {openMenu && (
                    <div 
                        className="fixed inset-0 backdrop-blur-xs"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <motion.aside 
                            className="absolute top-14 right-4 lg:right-[12%] w-40 h-32 rounded-sm bg-red-300"
                            initial={{ opacity:0, scale:0  }}
                            animate={{ opacity:1, scale:1 }}
                            exit={{ opacity:0, scale:0 }}
                        >
                            Watcha mofos
                        </motion.aside>
                    </div>
                )}
            </div>
        </nav>
    )
}