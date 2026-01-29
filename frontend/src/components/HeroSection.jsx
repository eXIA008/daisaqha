import { ArrowDown, FileText } from "lucide-react"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

export const HeroSection = () => <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-6 pr-2 w-2xl text-left z-10">
                <div className="text-4xl md:text-6xl font-bold tracking-light">
                    <h1 className="opacity-0 animate-fade-in">Haloo,</h1>
                    <h1 className="opacity-0 animate-fade-in-delay1">I'm
                        <span className="text-primary opacity-0 animate-fade-in-delay1"> Daisaq</span>
                    </h1>
                </div>
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto opacity-0 animate-fade-in [animation-delay:0.4s]">
                        I am an undergraduate student at Telkom University majoring in Informatics.
                    </p>
                    <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto opacity-0 animate-fade-in [animation-delay:0.5s]">
                        I am currently learning backend development, focusing on building server-side applications,
                        managing databases, and designing efficient APIs.
                    </p>
                    <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto opacity-0 animate-fade-in [animation-delay:0.6s]">
                        I enjoy exploring how systems work
                        behind the scenes and aim to create scalable, reliable, and secure solutions.
                    </p>

                </div>

                <div className="pt-4 opacity-0 animate-fade-in [animation-delay:0.8s]">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
            <div className="space-y-6 text-left px-80 pt-30">
                <div className="opacity-0 flex flex-row items-center tracking-light animate-fade-in [animation-delay:1.0s]">
                    <a href="https://github.com/eXIA008" target="_blank"
                        className="peer p-3 z-40 rounded-full hover:bg-primary/10 hover:scale-[1.15] transition-transform duration-300">
                        <SiGithub className="w-10 h-10 text-primary" />
                    </a>
                    <p className="z-10 opacity-0 peer-hover:opacity-100 peer-hover:translate-x-0 -translate-x-10 pl-4 text-lg font-medium transition-all duration-500">eXIA008</p>
                </div>
                <div className="opacity-0 flex flex-row items-center tracking-light animate-fade-in [animation-delay:1.1s]">
                    <a href="https://www.linkedin.com/in/daisaqha" target="_blank"
                        className="peer p-3 z-40 rounded-full hover:bg-primary/10 hover:scale-[1.15] transition-transform duration-300">
                        <SiLinkedin className="w-10 h-10 text-primary" />
                    </a>
                    <p className="z-10 opacity-0 peer-hover:opacity-100 peer-hover:translate-x-0 -translate-x-10 pl-4 text-lg font-medium transition-all duration-500">daisaqha</p>
                </div>
                <div className="opacity-0 flex flex-row items-center tracking-light animate-fade-in [animation-delay:1.2s]">
                    <a href="mailto:daisaq.h@gmail.com" target="_blank"
                        className="peer p-3 z-40 rounded-full hover:bg-primary/10 hover:scale-[1.15] transition-transform duration-300">
                        <SiGmail className="w-10 h-10 text-primary" />
                    </a>
                    <p className="z-10 opacity-0 peer-hover:opacity-100 peer-hover:translate-x-0 -translate-x-10 pl-4 text-lg font-medium transition-all duration-500">daisaq.h@gmail.com</p>
                </div>
                <div className="opacity-0 flex flex-row items-center tracking-light animate-fade-in [animation-delay:1.2s]">
                    <a href="https://drive.google.com/file/d/1gth9RTIRjswyuhnGLs1Oyg72-WaWBFzP/view?usp=sharing" target="_blank"
                        className="peer p-3 z-40 rounded-full hover:bg-primary/10 hover:scale-[1.15] transition-transform duration-300">
                        <FileText className="w-10 h-10 text-primary" />
                    </a>
                    <p className="z-10 opacity-0 peer-hover:opacity-100 peer-hover:translate-x-0 -translate-x-10 pl-4 text-lg font-medium transition-all duration-500">Resume</p>
                </div>
            </div>
        </div>
    </div>
    <div className="absolute bottom-8 left-1/2 trasnform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
    </div>
</section>