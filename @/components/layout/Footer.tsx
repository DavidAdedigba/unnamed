// import TechText from "../TechText";

interface FooterProps {
    isDarkMode:boolean
}

const year = new Date().getFullYear();
const text = "Óluwadémiladé";

export default function Footer({ isDarkMode }: FooterProps) {

    return (

        <footer className="w-full flex flex-col space-y-60 md:justify-between items-center px-8 py-12 md:py-16 lg:px-32">
            
            {/* TOP CONTENT; INTO GMAIL + SOCIAL MEDIA LINKS */}
            <div className="w-full flex flex-col space-y-1.5">

                <h3>Let's Build Something.</h3>

                <div className="w-full flex flex-col justify-start gap-3.5 md:flex-row md:justify-between md:items-center">

                    {/* MAIL AND COPY BTN */}
                    <div className="flex gap-1 items-center">
                        <p className="text-[24px] text-[#C2410C] lg:text-[2rem] font-[--newsreader] dark:text-[#EA580C]">daveadedigba@gmail.com</p>
                        <img 
                            src={isDarkMode ? "/icons/copy-dark.svg" : "/icons/copy.svg"} 
                            alt="copy icon" 
                            className="size-6"
                        />
                    </div>

                    {/* SOCIAL MEDIA LINKS */}
                    <div className="flex gap-4 items-center">

                        <img 
                            src={isDarkMode ? "/icons/github-dark.svg" : "/icons/github.svg"} 
                            alt="copy icon" 
                            className="size-6"
                        />
                        <img 
                            src={isDarkMode ? "/icons/linkedin-dark.svg" : "/icons/linkedin.svg"} 
                            alt="copy icon" 
                            className="size-6"
                        />
                        <img 
                            src={isDarkMode ? "/icons/twitter-dark.svg" : "/icons/twitter.svg"} 
                            alt="copy icon" 
                            className="size-6"
                        />
                    </div>

                </div>
            </div>

            {/* MID CONTENT */}
            {/* <h1 className="h-40 w-full italic">
                <TechText
                    text={text}
                    reveal="letter"
                    intro="type"
                    introDuration={2}
                    letterSpacing={-0.05}
                    align="center"
                    specks={15}
                    clickKick
                    draggable
                    selection
                    labels
                    sweep
                />
            </h1> */}


            {/* BOTTOM CONTENT; STORY BOOK AND COPYRIGHT */}
            <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
                <p className="underline">Chronicles of {text}.</p>
                <span className="font-medium">Copyright &copy; {year}</span>
            </div>
        </footer>
    )
}