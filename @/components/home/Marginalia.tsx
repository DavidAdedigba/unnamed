import { machinery } from "../../lib/data"
import DotGrid from "../DotGrid"

interface MarginaliaProps {
    isDarkMode: boolean
}

export default function Marginalia({ isDarkMode }: MarginaliaProps) {

    return (
        <article className="w-full min-h-screen overflow-hidden">

            <div style={{ width: '100%', height: '600px', position: 'relative' }}>

                {/* BG */}
                <DotGrid
                    baseColor={isDarkMode ? "#010101" : "#F5F5F2"}
                    activeColor={isDarkMode ? "#FFFFFF" : "#FFFFFF"}
                    shape="circle"
                    dotSize={3}
                    gap={18}
                    proximity={100}
                    strength={0.3}
                    bounce={0.7}
                    tension={0.5}
                    returnDuration={0.8}
                    shockRadius={320}
                    shockStrength={5}
                    swell={0.8}
                    stretch={0.5}
                    glow={0.5}
                    fade={0}
                    intro
                    opacity={1}
                    mouseInteraction
                    clickShock
                    className="z-10"
                />
                <div className="w-full absolute top-4 z-20">
                    <h2 className="">Marginalia</h2>
                </div>
            </div>

            <ul className="bg-[#f5f5f5] relative w-max flex gap-12 items-center py-4 animate-marquee">
                {[...machinery,...machinery].map((tool,index) => (
                    <li key={index} className="flex items-center gap-2 shrink-0">
                        <img src={tool.img} alt={`${tool.tool}'s icon`} className="size-4" />
                        <span className="">{tool.tool}</span>
                    </li>
                ))}
            </ul>

        </article>
    )
}