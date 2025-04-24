import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { LucideBarChart2, TestTube, Code, FileCode, Cog, Users } from "lucide-react";
import skillsImagePath from "@assets/37E15665-9722-4BAA-85C9-08A8C023F14F_1_105_c.jpeg";

const Skills = () => {
  const technicalSkills = [
    {
      id: 1,
      title: "Test Automation",
      icon: <TestTube className="h-6 w-6" />,
      level: 90,
      skills: ["Selenium", "JUnit", "TestNG", "Postman", "API Testing", "UI Testing"]
    },
    {
      id: 2,
      title: "CI/CD & DevOps",
      icon: <Cog className="h-6 w-6" />,
      level: 85,
      skills: ["Jenkins", "CI/CD Pipelines", "Docker", "Kubernetes"]
    },
    {
      id: 3,
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      level: 75,
      skills: ["Java", "SQL", "REST API", "SOAP", "MongoDB"]
    },
    {
      id: 4,
      title: "Testing Methodologies",
      icon: <FileCode className="h-6 w-6" />,
      level: 95,
      skills: ["Manual Testing", "Performance Testing", "Regression Testing", "End-to-End Testing"]
    },
    {
      id: 5,
      title: "Analytics & Monitoring",
      icon: <LucideBarChart2 className="h-6 w-6" />,
      level: 80,
      skills: ["DORA Metrics", "Grafana", "Kibana", "Quality Metrics Tracking"]
    },
    {
      id: 6,
      title: "Leadership",
      icon: <Users className="h-6 w-6" />,
      level: 95,
      skills: ["Team Building", "Strategic Planning", "OKR Setting", "Process Optimization"]
    }
  ];

  const nonTechnicalSkills = [
    "Cross-Functional Team Leadership",
    "Strategic Planning",
    "Process Optimization",
    "OKR Setting",
    "Team Building",
    "Stakeholder Communication",
    "Problem-Solving",
    "Root Cause Analysis",
    "Training and Mentorship",
    "Risk Management",
    "Conflict Resolution",
    "Analytical Thinking",
    "Collaboration",
    "Change Management",
    "Agile Methodologies"
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional skillset encompasses technical QA expertise and leadership capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              level={skill.level}
              skills={skill.skills}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-muted rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Leadership & Soft Skills</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {nonTechnicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background px-4 py-2 rounded-full shadow-sm text-sm font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Quality-Driven Approach
              </h2>
              
              <p className="text-muted-foreground mb-6">
                My approach to quality assurance is data-driven and results-oriented. I've successfully 
                implemented comprehensive testing strategies that have significantly improved product quality 
                while optimizing team efficiency.
              </p>
              
              <p className="text-muted-foreground mb-6">
                By focusing on the right mix of manual and automated testing, along with continuous improvement 
                of processes, I've helped organizations achieve higher deployment frequencies with fewer defects.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">100% P0 Automation Coverage</h3>
                    <p className="text-sm text-muted-foreground">Achieved full coverage for critical API and UI tests</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">133% Feature Delivery Increase</h3>
                    <p className="text-sm text-muted-foreground">Quarter-over-quarter improvement through process optimization</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={skillsImagePath}
                alt="Quality assurance testing"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
