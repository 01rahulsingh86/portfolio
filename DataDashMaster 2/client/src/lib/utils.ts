import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to handle smooth scrolling
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Function to download resume
export function downloadResume() {
  // Create a link element
  const link = document.createElement('a');
  
  // Set the link's href to a static path of the resume PDF
  link.href = '/resume/rahul-singh-resume.pdf';
  
  // Set the download attribute to suggest a filename
  link.download = 'Rahul-Singh-QA-Director-Resume.pdf';
  
  // Append the link to the document body
  document.body.appendChild(link);
  
  // Trigger a click on the link
  link.click();
  
  // Remove the link from the document
  document.body.removeChild(link);
}

// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};
