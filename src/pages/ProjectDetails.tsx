import { useParams } from "react-router-dom"


import { mobileProjects } from "../../@/lib/data"

export default function ProjectDetailsPage() {

    const { slug } = useParams()

    const project = mobileProjects.find((p) => p.slug === slug)

    if(!project) {

        // NOT FOUND PAGE
        return <h1> Project not found! </h1>
    }
    return (
        <main className="">
            
            <section>
                <h3 className="lg:w-4/6">{project.title}.</h3>
                <div className="bg-green-700 w-full min-h-127" />
                <p className="">
                    {project.description}
                </p>
            </section>


            <section>

                <div className="">
                    <h4>The Machinery</h4>
                    <ul className="">
                        {project.tools.map((t) => (
                            <li key={t.title} className="">
                                {t.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <h4>Field Notes</h4>
                    <p className=" font-normal">
                        {project.experience}
                    </p>
                </div>

                <p>
                    Designed & Built <span className="text-black">by Yours truly.</span>
                </p>
            </section>
        </main>
    )
}