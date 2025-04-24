import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown, CheckCircle2 } from "lucide-react";
import { downloadResume, scrollToSection } from "@/lib/utils";
import SocialLinks from "@/components/SocialLinks";
import { Separator } from "@/components/ui/separator";
import profileImagePath from "@assets/8AE3C237-8E81-412F-9093-41FA92CDED33_1_105_c.jpeg";
import profileImage2Path from "@assets/CD76A466-C997-4D41-B650-D5B3BD3DE084_1_105_c.jpeg";
import profileImage3Path from "@assets/A7A64AE5-61A0-4DEA-9CA6-F6DCEEA150B5_1_105_c.jpeg";

const Home = () => {
  return (
    <div>
      {/* Hero Section with Visual Elements */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Background design elements - subtle gradient effects */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl" />
        
        <div className="container-custom relative z-10">
          {/* Top banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 rounded-full px-4 py-1.5 w-fit mx-auto mb-12 border border-primary/20"
          >
            <p className="text-sm font-medium text-primary/90 text-center">
              QA Director with over 16 years of experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-7 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-primary mb-4 inline-block tracking-wide uppercase">
                QA Engineering Director
              </span>
              
              <h1 className="mb-6 tracking-tight">
                <span className="text-gradient font-bold">Rahul Singh</span> — Expert in 
                <span className="block mt-1">Quality Engineering Leadership</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                With over 16 years of experience, I help organizations build robust quality 
                assurance processes and lead high-performing QA teams to deliver exceptional 
                software products.
              </p>
              
              {/* Featured highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Leadership of 5-15 member QA teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">End-to-end QA & test automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Software quality strategy development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Process optimization & innovation</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="button-primary rounded-full shadow-md hover:shadow-lg" size="lg" asChild>
                  <Link href="/contact">
                    Work with me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={downloadResume}
                  className="rounded-full"
                >
                  Download CV <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <SocialLinks className="mt-6" />
            </motion.div>
            
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
              {/* Decorative elements behind photo */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border-2 border-dashed border-primary/30 opacity-70" />
              <div className="absolute -bottom-8 -left-8 w-60 h-60 rounded-full border-2 border-dashed border-primary/30 opacity-70" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Main profile photo */}
                <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img
                    src={profileImagePath}
                    alt="Rahul Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Location tag */}
                <div className="absolute -bottom-4 -right-4 bg-background rounded-lg py-2 px-4 shadow-lg border border-border">
                  <div className="text-sm font-medium">Seattle, Washington</div>
                  <div className="text-sm text-muted-foreground">16+ Years Experience</div>
                </div>
                
                {/* Smaller image elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img src={profileImage2Path} alt="Rahul Singh working" className="w-full h-full object-cover" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 left-12 w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img src={profileImage3Path} alt="Rahul Singh presenting" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection('expertise')}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Learn more about my expertise</span>
              <ChevronDown className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-10 border-y border-border/60">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">16+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5-15</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">350K+</div>
              <div className="text-sm text-muted-foreground">Weekly Users</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">133%</div>
              <div className="text-sm text-muted-foreground">Feature Delivery</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Expertise Summary Section */}
      <section id="expertise" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-1 bg-primary mx-auto"></div>
            </motion.div>
            
            <motion.h2 
              className="section-title mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Expertise
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I specialize in quality engineering leadership across various domains
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-8 rounded-xl shadow-md border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-6 h-6 text-primary">🧠</div>
              </div>
              <h3 className="section-subtitle mb-4">Quality Strategy</h3>
              <p className="text-muted-foreground">
                Developing comprehensive test strategies aligned with business goals and product requirements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-8 rounded-xl shadow-md border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-6 h-6 text-primary">👥</div>
              </div>
              <h3 className="section-subtitle mb-4">Team Leadership</h3>
              <p className="text-muted-foreground">
                Building and managing high-performing QA teams across multiple geographies and technologies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-8 rounded-xl shadow-md border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-6 h-6 text-primary">⚙️</div>
              </div>
              <h3 className="section-subtitle mb-4">Process Optimization</h3>
              <p className="text-muted-foreground">
                Implementing efficient QA processes to enhance productivity and software quality.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/about">
                Learn more about me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
