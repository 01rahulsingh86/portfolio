import { cn } from "@/lib/utils";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className, iconSize = 20 }: SocialLinksProps) => {
  return (
    <div className={cn("flex space-x-4", className)}>
      <a
        href="https://linkedin.com/in/rahuls01"
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="GitHub"
      >
        <FaGithub size={iconSize} />
      </a>
      
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="Twitter"
      >
        <FaTwitter size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
