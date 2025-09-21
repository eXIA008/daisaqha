import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay1"> Daisaq</span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay2"> Hadya</span>
                    <span className="text-linear  opacity-0 animate-fade-in-delay3"> Albar</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay4">
                    I am an undergraduate student at Telkom University majoring in Informatics. 
                    I am currently learning backend development, focusing on building server-side applications, 
                    managing databases, and designing efficient APIs. I enjoy exploring how systems work 
                    behind the scenes and aim to create scalable, reliable, and secure solutions. 
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay5">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 trasnform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}