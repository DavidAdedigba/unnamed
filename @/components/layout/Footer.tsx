// // import TechText from "../TechText";

import { Link } from "react-router-dom"

// interface FooterProps {
//     isDarkMode:boolean
// }

// const year = new Date().getFullYear();
// const text = "Óluwadémiladé";

// export default function Footer({ isDarkMode }: FooterProps) {

//     return (

//         <footer className="space-y-60">
            
//             {/* TOP CONTENT; INTO GMAIL + SOCIAL MEDIA LINKS */}
//             <div className="w-full flex flex-col space-y-1.5">

//                 <h3>Let's Build Something.</h3>

//                 <div className="w-full flex flex-col justify-start gap-3.5 md:flex-row md:justify-between md:items-center">

//                     {/* MAIL AND COPY BTN */}
//                     <div className="flex gap-1 items-center">
//                         <p className="text-[24px] text-[#C2410C] lg:text-[2rem] font-[--newsreader] dark:text-[#EA580C]">daveadedigba@gmail.com</p>
//                         <img 
//                             src={isDarkMode ? "/icons/copy-dark.svg" : "/icons/copy.svg"} 
//                             alt="copy icon" 
//                             className="size-6"
//                         />
//                     </div>

//                     {/* SOCIAL MEDIA LINKS */}
//                     <div className="flex gap-4 items-center">

//                         <img 
//                             src={isDarkMode ? "/icons/github-dark.svg" : "/icons/github.svg"} 
//                             alt="copy icon" 
//                             className="size-6"
//                         />
//                         <img 
//                             src={isDarkMode ? "/icons/linkedin-dark.svg" : "/icons/linkedin.svg"} 
//                             alt="copy icon" 
//                             className="size-6"
//                         />
//                         <img 
//                             src={isDarkMode ? "/icons/twitter-dark.svg" : "/icons/twitter.svg"} 
//                             alt="copy icon" 
//                             className="size-6"
//                         />
//                     </div>

//                 </div>
//             </div>

//             {/* MID CONTENT */}
//             {/* <h1 className="h-40 w-full italic">
//                 <TechText
//                     text={text}
//                     reveal="letter"
//                     intro="type"
//                     introDuration={2}
//                     letterSpacing={-0.05}
//                     align="center"
//                     specks={15}
//                     clickKick
//                     draggable
//                     selection
//                     labels
//                     sweep
//                 />
//             </h1> */}


//             {/* BOTTOM CONTENT; STORY BOOK AND COPYRIGHT */}
//             <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
//                 <p className="underline">Chronicles of {text}.</p>
//                 <span className="font-medium">Copyright &copy; {year}</span>
//             </div>
//         </footer>
//     )
// }



interface FooterProps {
    isDarkMode:boolean 
}

export default function Footer({ isDarkMode }: FooterProps ) {

    return (

        <footer className="min-h-screen">

            <aside className="w-full controlled-section mx-auto space-y-3">
                
                <header className="flex flex-col items-start">
                    <h1>React Out.</h1>
                    <p className="">
                        Let's build something
                    </p>
                </header>

                <div className="flex flex-col items-start gap-y-3">

                    <div className="w-full flex justify-between items-center">
                        <Link
                            to=""
                            className=""
                        >
                            daveadedigba@gmail.com
                        </Link>

                        {/* SOCIAL MEDIA LINKS */}
                        <div className="flex gap-4 items-center">
                            <Link to="">
                                <img 
                                    src={isDarkMode ? "/icons/github-dark.svg" : "/icons/github.svg"} 
                                    alt="copy icon" 
                                    className="size-4"
                                />
                            </Link>
                            <Link to="">
                                <img 
                                    src={isDarkMode ? "/icons/linkedin-dark.svg" : "/icons/linkedin.svg"} 
                                    alt="copy icon" 
                                    className="size-4"
                                />
                            </Link>
                            <Link to="">
                                <img 
                                    src={isDarkMode ? "/icons/twitter-dark.svg" : "/icons/twitter.svg"} 
                                    alt="copy icon" 
                                    className="size-4"
                                />
                            </Link>
                        </div>
                    </div>

                    <span className=""> &copy; 2026. More about Oluwademilade</span>
                </div>

                
            </aside>


            {/* FUN PART */}
        </footer>
    )
}