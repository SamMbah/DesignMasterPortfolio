import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillBar from "./SkillBar";
import { skills } from "@/data/skills";
import { 
  SiAdobe, SiFigma, SiSketch, SiInvision, SiTrello, SiJira, 
  SiGithub, SiHtml5
} from "react-icons/si";
import { BiNote } from "react-icons/bi";
import { BsSticky } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";

const Skills = () => {
  const { uxSkills, uiSkills, tools, methodologies } = skills;

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* UX Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">UX Design & Research</h3>
              <div className="space-y-3">
                {uxSkills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* UI Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">UI Design & Visual Design</h3>
              <div className="space-y-3">
                {uiSkills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tools Expertise */}
        <div className="mb-16">
          <h3 className="font-bold text-lg mb-6 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiFigma className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Figma</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiSketch className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Sketch</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiAdobe className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Adobe XD</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiInvision className="text-3xl mb-2 text-primary" />
                <p className="font-medium">InVision</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <BiNote className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Miro</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiJira className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Jira</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiGithub className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Git/GitHub</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiTrello className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Trello</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <SiHtml5 className="text-3xl mb-2 text-primary" />
                <p className="font-medium">HTML/CSS</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="p-0 flex flex-col items-center">
                <FaChartBar className="text-3xl mb-2 text-primary" />
                <p className="font-medium">Analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Methodologies */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-center">Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {methodologies.map((methodology, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                {methodology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
