import {ExternalLink, Github, ArrowRight} from "lucide-react"
const projects = [
    {
        id: 1,
        title: "Blogger-Platform Manager",
        description: "A terminal-based application (CLI) to help manage a blog efficiently.",
        image: "/projects/project1.png",
        tags: ["C++", "Terminal"],
        demo: "#",
        githubUrl: "https://github.com/eXIA008/blogger-manager",
    },
    {
        id: 2,
        title: "siKeyboard E-commerce Platform",
        description: "Simple e-commerce platform for keyboards and it accessories.",
        image: "/projects/project2.png",
        tags: ["Java", "JDBC", "JSP"],
        demo: "#",
        githubUrl: "https://github.com/catsapricot/siKeyboard",
    },
    {
        id: 3,
        title: "Coming Soon",
        description: "",
        image: "/projects/project3png",
        tags: [],
        demo: "#",
        githubUrl: "#",
    }
]

export const ProjectSection = () => {
    

    return <section id="projects" className="py-24 px-24 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured<span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each project is my part of my learning progress
                to master web development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((projects, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projects.tags.map((tags) => (
                                    <span className="px-2 py-1  text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tags}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{projects.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                    {projects.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" href={projects.demo}>
                                        <ExternalLink size={20}/>
                                    </a> 
                                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" href={projects.githubUrl} >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/eXIA008">
                    Check my Github <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>
}