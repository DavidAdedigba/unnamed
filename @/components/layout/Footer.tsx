interface FooterProps {
    isDarkMode:boolean
}

export default function Footer({ isDarkMode }: FooterProps) {

    return (

        <footer className="">
            This is the footer.

            {isDarkMode? "Hola booboo it's late" : "Rise and shine booboo"}
        </footer>
    )
}