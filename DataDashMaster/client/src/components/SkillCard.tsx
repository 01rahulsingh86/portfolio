import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  level?: number;
  skills: string[];
  className?: string;
  delay?: number;
}

const SkillCard = ({
  icon,
  title,
  level = 0,
  skills,
  className,
  delay = 0,
}: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className={cn("h-full hover:shadow-md transition-shadow", className)}>
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
              {icon}
            </div>
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
          
          {level > 0 && (
            <div className="mb-4">
              <Progress value={level} className="h-2" />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
