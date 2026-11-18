import { useState } from "react"

interface NavbarProps {
    isDarkMode:boolean
}

export default function Navbar({
    isDarkMode,
}: NavbarProps) {

    const [ openMenu,setOpenMenu ] = useState<boolean>(false);

    return (
        <nav className="sticky top-0 z-20 w-full p-3.5 md:px-10 md:py-4 lg:px-32 flex justify-between items-center">
            <div className="w-4 h-4 bg-blue-500" />
            <div className="relative min-h-fit">
                <img 
                    role="button"
                    onClick={() => setOpenMenu(!openMenu)}
                    src={isDarkMode ? "/icons/menu-dark.svg" : "/icons/menu.svg"} 
                    alt="Menu icon" 
                    className="size-8"
                />

                {openMenu && (
                    <aside className="fixed top-14 right-4 size-20 bg-red-300">
                        Watcha mofos
                    </aside>
                )}
            </div>
        </nav>
    )
}