import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export const Footer = () => {
  const scrollToTop =() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  return (
  <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-4 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy;{new Date().getFullYear()} IsaaqNewton.co. All rights reserved.
      </p>
      <a onClick={scrollToTop} className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}/>
      </a>
  </footer> )
}