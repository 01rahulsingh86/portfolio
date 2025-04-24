import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import aboutImagePath from "@assets/37E15665-9722-4BAA-85C9-08A8C023F14F_1_105_c.jpeg";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={aboutImagePath}
              alt="Rahul Singh"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Engineering Leader with Extensive Experience
            </h2>
            
            <p className="text-muted-foreground mb-6">
              I am Rahul Singh, a Quality Assurance Engineering Leader with sixteen years of experience in the 
              full system development life cycle. Throughout my career, I've specialized in designing, developing, 
              and implementing multiple test strategies and plans that ensure software quality and reliability.
            </p>
            
            <p className="text-muted-foreground mb-6">
              I've led diverse teams of 5-15 professionals across technology, business, and design departments in 
              multiple geographies. My leadership approach focuses on building strong cross-functional relationships 
              and driving teams to achieve excellent results through optimized resource allocation and targeted 
              skill development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-primary text-xl">16+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-primary text-xl">5-15</h3>
                  <p className="text-sm text-muted-foreground">Team Members Led</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-primary text-xl">350K+</h3>
                  <p className="text-sm text-muted-foreground">Weekly Users</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-primary text-xl">133%</h3>
                  <p className="text-sm text-muted-foreground">Feature Delivery</p>
                </CardContent>
              </Card>
            </div>

            <Button asChild size="lg">
              <Link href="/experience">
                View My Experience <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Education & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Bachelor of Engineering, Computer Science</h3>
                  <p className="text-muted-foreground mb-1">Rajiv Gandhi Prodyogiki Vishwavidhyalaya</p>
                  <p className="text-sm text-muted-foreground">Bhopal, MP, India</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">Google Project Management Professional Certificate</span>
                        <p className="text-xs text-muted-foreground">In Progress, Feb 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">Product School Product Management Certification</span>
                        <p className="text-xs text-muted-foreground">Apr 2020</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">Product School AI Product Management Certification</span>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">Microsoft Program Management Fundamentals</span>
                        <p className="text-xs text-muted-foreground">Feb 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">MIT Designing & Building AI Products and Services</span>
                        <p className="text-xs text-muted-foreground">Oct 2023</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">MIT Blockchain: Disruptive Technology</span>
                        <p className="text-xs text-muted-foreground">Apr 2021</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                      <div>
                        <span className="font-medium">Scrum Alliance Certified Scrum Master</span>
                        <p className="text-xs text-muted-foreground">Sep 2014</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
