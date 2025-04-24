import { Link } from "wouter";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-12 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Rahul Singh</h3>
            <p className="text-muted-foreground mb-4">
              Engineering Leader with extensive experience in Quality Assurance and full system 
              development life cycle.
            </p>
            <SocialLinks />
          </div>

          <div className="col-span-1">
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/skills">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Seattle, Washington</li>
              <li>
                <a 
                  href="mailto:techmr.singh@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  techmr.singh@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14044357371" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1-404-435-7371
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Rahul Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
