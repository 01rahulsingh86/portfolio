import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import projectImagePath from "@assets/CD76A466-C997-4D41-B650-D5B3BD3DE084_1_105_c.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Global Account Validation Service",
      description: "Led QA for a global account validation service, achieving 99.99% validation accuracy and handling 1M+ daily validation requests across 200+ countries.",
      image: projectImagePath,
      tags: ["API Testing", "Performance", "Global Scale"]
    },
    {
      id: 2,
      title: "BIN Lookup Service",
      description: "Independently tested and deployed a BIN Lookup service with 99.95% query accuracy processing 500K+ daily validation requests and reduced lookup latency by 20%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Financial Services", "Database Testing", "Performance"]
    },
    {
      id: 3,
      title: "SOAP-to-JSON Translator",
      description: "Ensured seamless migration by testing a SOAP-to-JSON translator for legacy merchants, achieving 99.9% translation accuracy for 1M+ daily API requests.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["API", "Migration", "Legacy Systems"]
    },
    {
      id: 4,
      title: "Codeless API and UI Automation Framework",
      description: "Designed and implemented robust Codeless API and UI automation frameworks, increasing test coverage by 70% and reducing regression testing time by 30%.",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Automation", "Framework", "CI/CD"]
    },
    {
      id: 5,
      title: "Resume Search Quality Assurance",
      description: "Managed QA for Indeed's Resume Search, ensuring recruiters find qualified candidates seamlessly through comprehensive manual and automated testing.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Search Algorithms", "UI Testing", "Performance"]
    },
    {
      id: 6,
      title: "Quality Dashboards with DORA Metrics",
      description: "Directed the development of Quality Dashboards, improving DORA metrics for deployment frequency and stability at Indeed Inc.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Analytics", "DevOps", "Metrics"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Key Projects & Achievements</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing significant projects and initiatives I've led throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Want to Collaborate?</h2>
          <p className="mb-6 text-muted-foreground max-w-xl mx-auto">
            I'm always interested in discussing new projects, challenges and opportunities in the quality assurance space.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
