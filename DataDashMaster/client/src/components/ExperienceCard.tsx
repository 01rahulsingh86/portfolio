import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Achievement {
  id: number;
  description: string;
}

interface ExperienceCardProps {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: Achievement[];
  delay?: number;
}

const ExperienceCard = ({
  company,
  location,
  position,
  period,
  achievements,
  delay = 0,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <CardTitle className="text-xl text-primary">{company}</CardTitle>
              <CardDescription>{location}</CardDescription>
            </div>
            <div className="text-sm text-muted-foreground">{period}</div>
          </div>
          <h3 className="font-semibold mt-2">{position}</h3>
          <Separator className="mt-2" />
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc list-inside">
            {achievements.map((achievement) => (
              <li key={achievement.id} className="text-sm">
                {achievement.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
