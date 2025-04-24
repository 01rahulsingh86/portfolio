import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 pt-16 pb-8 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-8">
          {/* Column 1: About */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold ml-3">Rahul Singh</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Engineering Leader with extensive experience in Quality Assurance, 
              helping organizations deliver high-quality software through effective 
              testing strategies and team leadership.
            </p>
            <SocialLinks />
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 md:ml-auto">
            <h4 className="font-semibold mb-5 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <div className="flex items-center group text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="flex items-center group text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>About</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <div className="flex items-center group text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>Experience</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/skills">
                  <div className="flex items-center group text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>Skills</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <div className="flex items-center group text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>Projects</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="flex items-center group text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>Contact</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-5 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                <span className="text-muted-foreground">Seattle, Washington</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                <a 
                  href="mailto:techmr.singh@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  techmr.singh@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
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
        
        <Separator className="my-8 opacity-50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} Rahul Singh. All rights reserved.
          </p>
          <div className="text-muted-foreground order-1 md:order-2">
            QA Engineering Director
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
