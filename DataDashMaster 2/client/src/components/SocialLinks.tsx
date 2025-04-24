import { cn } from "@/lib/utils";
import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className, iconSize = 18 }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <a
        href="https://linkedin.com/in/rahuls01"
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      
      <a
        href="https://github.com/01rahulsingh86"
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm"
        aria-label="GitHub"
      >
        <FaGithub size={iconSize} />
      </a>
      
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm"
        aria-label="Twitter"
      >
        <FaTwitter size={iconSize} />
      </a>
      
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm"
        aria-label="Medium"
      >
        <FaMedium size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
