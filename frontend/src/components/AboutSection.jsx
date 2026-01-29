import { Code, Briefcase, Download } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="relative py-24 z-10 bg-transparent items-center justify-center"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                Still About<span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-left">
                    <h3 className="text-2xl font-semibold">Passionate Fullstack Developer</h3>
                    <p className="text-muted-foreground">
                        Actually i wasn't suppose to be here, but here i'am in the programming world. Currently learning
                        how to make reliable, secure, and performant web applications using modern technologies. 
                    </p>
                    <p className="text-muted-foreground">
                        Lorem Ipsum ibfiebfiybfiwybfiybfeiewebfwibfwyefbiwfbywibfd
                        uwdiwdnwidwwidnwidwidwduwdiwndidnwdiwdiwdwidwd
                        anjinguadbaubaydbauwdyaubywduawbdaywbyaudywdbd
                        odnqindqidqdiqwdumdwodddd
                        wdnwd
                        wdnwdwd
                    </p>
                    <div className="flex md:flex-cols flex-row gap-4 pt-4 justify-center text-center">
                        <a href="#contact" className="cosmic-button "> 
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
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
                </div>
            </div>
        </div>
    </section>
}