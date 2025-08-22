import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import logo from "@/assets/logo.jpg"; // Assuming you have a logo image

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
       <Link to="/" className="flex items-center gap-3 no-underline">
  <img 
    src={logo} 
    alt="Emilia Trust Logo" 
    className="h-12 w-12 rounded-full object-cover shadow-md border border-gray-200" 
  />
  <span className="font-display text-lg font-semibold tracking-wide text-primary">
    Maria Emilia Burton Trust
  </span>
</Link>



        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about-us" className="hover:text-primary transition-colors">About</Link>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link to="/volunteer" className="hover:text-primary transition-colors">Volunteer</Link>
          <Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link>

        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm">
            <Link to="/#donate" aria-label="Donate to Emilia Burton Trust">Donate</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
