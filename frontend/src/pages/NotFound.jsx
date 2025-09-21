import { Footer } from "../components/Footer"
import { Navbar } from "../components/NavBar"
import { NotFoundSection } from "../components/NotFoundSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const NotFound = () => {
    

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main className="flex-grow">
                <NotFoundSection />
            </main>
            <Footer />
        </div>
    )
}