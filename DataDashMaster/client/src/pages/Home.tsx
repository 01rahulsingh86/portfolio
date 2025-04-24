import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { downloadResume } from "@/lib/utils";
import SocialLinks from "@/components/SocialLinks";
import profileImagePath from "@assets/8AE3C237-8E81-412F-9093-41FA92CDED33_1_105_c.jpeg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="text-primary">Rahul Singh</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6">
                Engineering Leader in Quality Assurance
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                With sixteen years of experience in full system development lifecycle, 
                I specialize in designing, developing, and implementing test strategies 
                and plans. I've led teams across technology, business, and design 
                departments globally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={downloadResume}
                >
                  Download CV <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <SocialLinks />
            </motion.div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={profileImagePath}
                  alt="Rahul Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg py-2 px-4 shadow-lg border border-border">
                <div className="text-sm font-medium">Seattle, Washington</div>
                <div className="text-sm text-muted-foreground">QA Director</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
