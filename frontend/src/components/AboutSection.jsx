import { Code, Briefcase, Download } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-24 relative"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate App Developer & Gooner Experties</h3>
                    <p className="text-muted-foreground">
                        Actually i wasn't suppose to be here, btu here i'am in the programming world. Currently learning
                        how to make reliable, secure, and performant web applications using modern technologies. 
                    </p>

                    <p className="text-muted-foreground">
                        Lorem Ipsum
                    </p>

                    <div className="flex flex-cols sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            Get in Touch
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=1CyIOa7LewVYh2R6qzqSNMTptQ-7Tg0H5" className="flex gap-2 items-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                            Download CV  <Download size={16}/>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 ">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            {/* Ini buat logonya */}
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            {/* Ini buat teksnya */}
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> WebApp Development</h4>
                                <p className="text-muted-foreground">
                                    Creating web application with modern frameworks
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">
                                    Planning project using various methodologies to optimize workflows
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> </h4>
                                <p className="text-muted-foreground">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}