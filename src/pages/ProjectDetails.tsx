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
            <h1>HIYA!</h1>
        </main>
    )
}