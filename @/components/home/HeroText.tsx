import { motion, type Variants } from "motion/react"
// import TechText from "../TechText"


const text="Óluwadémiladé";

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06
        }
    }
}

const letterAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export default function HeroText() {

    return (

        <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            aria-label={text}
        >
            {Array.from(text.normalize("NFC")).map((char, index) => (
                <motion.span
                key={index}
                variants={letterAnimation}
                className="inline-block whitespace-pre"
                aria-hidden="true"
                >
                {char}
                </motion.span>
            ))}
        </motion.h1>
    )
}

// "use client";

// import TechText from "../TechText";

// const text = "Óluwadémiladé.";

// export default function HeroText() {
//   return (
//     <h1 className="h-40 w-full italic">
//       <TechText
//         text={text}
//         reveal="letter"
//         intro="type"
//         introDuration={2}
//         letterSpacing={-0.05}
//         align="center"
//         specks={15}
//         clickKick
//         draggable
//         selection
//         labels
//         sweep
//       />
//     </h1>
//   );
// }