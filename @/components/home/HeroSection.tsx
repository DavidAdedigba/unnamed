import HeroText from "./HeroText"

export default function HeroSection() {

    return (

        <section className="">
            
            <div className="">
                <HeroText />
                <div className="w-full flex justify-between items-baseline px-2.5">
                    <span className=".accent-p inline-block">Frontend Engineer</span>
                    <p className="">Lagos, Nigeria.</p>
                </div>
            </div>
        </section>
    )
}