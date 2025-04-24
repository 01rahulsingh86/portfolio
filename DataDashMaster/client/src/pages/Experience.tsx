import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tiktok Inc",
      location: "Seattle, WA",
      position: "Engineering Leader QA",
      period: "2023 – Present",
      achievements: [
        {
          id: 1,
          description: "Strong cross-functional relationships with 15+ software development, 7 data warehouse engineers and 8 product managers and 10+ operation teams ensuring seamless collaboration on quality initiatives."
        },
        {
          id: 2,
          description: "Led a team to achieve 100% automation coverage for P0 API and UI tests and 50% coverage for P1 APIs across key products by implementing robust frameworks and integrating with CI/CD pipelines."
        },
        {
          id: 3,
          description: "Directed a team responsible for the quality assurance of 4 products with a combined user base of 350K+ weekly active users (DAU), ensuring high-quality releases, streamlined testing processes, and customer satisfaction."
        },
        {
          id: 4,
          description: "Developed global quality roadmap via 9+ QA engineers across 4 products for APAC US and UK regions."
        },
        {
          id: 5,
          description: "Conducted regular root cause analysis sessions on weekly basis for recurring defects, leading to implementation of enhancement reducing similar defects by 100%."
        }
      ]
    },
    {
      id: 2,
      company: "Indeed Inc",
      location: "Austin, TX",
      position: "QA Manager",
      period: "2022 – 2023",
      achievements: [
        {
          id: 1,
          description: "Managed a team of 4 test engineers (2 Manual and 2 SDETs) for quality assurance, automation, and release management of Resume Search, ensuring recruiters find qualified candidates seamlessly."
        },
        {
          id: 2,
          description: "Directed the development of Quality Dashboards, improving DORA metrics for deployment frequency and stability."
        },
        {
          id: 3,
          description: "Enabled push-on-green deployments by supervising integration test suite creation and updating CI/CD pipelines."
        },
        {
          id: 4,
          description: "Oversaw the release of a major feature with zero customer issues, leveraging a mix of manual and automated testing."
        },
        {
          id: 5,
          description: "Delivered workshops on QA strategies, enhancing skills and collaboration within the team."
        }
      ]
    },
    {
      id: 3,
      company: "Visa Inc",
      location: "Austin, TX",
      position: "Staff Test Engineer",
      period: "2018 – 2022",
      achievements: [
        {
          id: 1,
          description: "Tested and deployed a global account validation service, achieving 99.99% validation accuracy and handling 1M+ daily validation requests across 200+ countries, while reducing processing errors by 30%."
        },
        {
          id: 2,
          description: "Independently Tested and deployed a BIN Lookup service, achieving 99.95% query accuracy and processing 500K+ daily BIN validation requests. Reduced lookup latency by 20% and ensured seamless integration across 50+ payment partners worldwide."
        },
        {
          id: 3,
          description: "Ensured Seamless Migration by testing and deploying a SOAP-to-JSON translator for legacy merchants using an enterprise solution, achieving 99.9% translation accuracy for 1M+ daily API requests and reducing integration errors by 25% across 100+ merchants."
        },
        {
          id: 4,
          description: "Designed and implemented robust Codeless API and UI automation frameworks, increasing test coverage by 70% and reducing regression testing time by 30%."
        }
      ]
    },
    {
      id: 4,
      company: "Previous Experience",
      location: "",
      position: "",
      period: "2004 – 2018",
      achievements: [
        {
          id: 1,
          description: "AT&T Inc (TekSystems), Dallas, TX (2016 – 2018)"
        },
        {
          id: 2,
          description: "Verizon Wireless (Mastech Inc), Seattle, WA (2016 – 2018)"
        },
        {
          id: 3,
          description: "TechMahindra Inc, Atlanta, GA + India (2004 – 2016)"
        }
      ]
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey spans over 16 years in various roles focused on quality assurance and engineering leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              company={experience.company}
              location={experience.location}
              position={experience.position}
              period={experience.period}
              achievements={experience.achievements}
              delay={index}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Software development team"
            className="rounded-lg shadow-lg max-w-3xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
