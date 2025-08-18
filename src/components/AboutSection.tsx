import SkillCard from "./SkillCard";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
  const programmingLanguages = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚡" },
    { name: "Java", icon: "☕" }
  ];

  const deepLearningFrameworks = [
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Keras", icon: "⚡" }
  ];

  const nlpAndTextProcessing = [
    { name: "NLTK", icon: "📝" },
    { name: "spaCy", icon: "🌐" },
    { name: "GPT", icon: "🤖" },
    { name: "Gensim", icon: "📖" },
    { name: "Sentiment Analysis", icon: "😊" },
    { name: "NER", icon: "🏷️" }
  ];

  const cloudAndDevOps = [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" }
  ];

  const databasesAndStorage = [
    { name: "SQL", icon: "🗃️" },
    { name: "NoSQL", icon: "🍃" },
    { name: "Pinecone", icon: "🌲" },
    { name: "Chroma", icon: "🎨" }
  ];

  const webFrameworks = [
    { name: "React", icon: "⚛️" },
    { name: "FastAPI", icon: "🚀" },
    { name: "Flask", icon: "🌶️" }
  ];

  const dataVisualization = [
    { name: "Power BI", icon: "📊" },
    { name: "Matplotlib", icon: "📈" },
    { name: "Seaborn", icon: "🌊" },
    { name: "Plotly", icon: "📉" }
  ];

  const softSkills = [
    { name: "Strategic Thinking", icon: "🎯" },
    { name: "Project Management", icon: "📋" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Communication", icon: "💬" },
    { name: "Leadership", icon: "👑" }
  ];

  const allSkills = [
    ...programmingLanguages,
    ...deepLearningFrameworks,
    ...nlpAndTextProcessing,
    ...cloudAndDevOps,
    ...databasesAndStorage,
    ...webFrameworks,
    ...dataVisualization,
    ...softSkills
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % allSkills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Smart Elevator System with Object Detection",
      description: "Published at the 2024 International Conference on Advances in Data Engineering and Intelligent Computing Systems (ADICS). Designed and implemented an intelligent elevator system utilizing object detection to dynamically prioritize floor selection based on real-time passenger presence.",
      skills: ["Computer Vision", "Machine Learning", "Object Detection", "Python"]
    },
    {
      title: "Smart Attendance Management System",
      description: "Developed a web-based attendance tracking system integrating face recognition and geofencing to ensure accurate and location-based attendance logging. Implemented facial recognition using computer vision techniques and integrated GPS-based geofencing for location validation.",
      skills: ["Face Recognition", "Geofencing", "Computer Vision", "Web Development"]
    }
  ];

  const SkillSection = ({ title, emoji, skills }: { title: string; emoji: string; skills: Array<{ name: string; icon: string }> }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
        </div>

        {/* Bio and Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section - Left Side */}
          <div className="cert-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-foreground">AI/ML Engineer & Researcher</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Passionate about pushing the boundaries of artificial intelligence and machine learning. 
                I specialize in developing innovative AI solutions that solve real-world problems.
              </p>
              <p>
                With expertise spanning deep learning, natural language processing, and cloud technologies, 
                I bring a comprehensive approach to AI development.
              </p>
              <p>
                Currently focused on advancing the field through research and practical applications 
                in areas like computer vision, NLP, and distributed systems.
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4>
                <p>Master's in Data Science and Artificial Intelligence</p>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Focus Areas</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Machine Learning & Deep Learning</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>Generative AI & LLMs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Animated Skills - Right Side */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Featured Skills</h3>
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin"></div>
              <div className="skill-card-large p-8 rounded-full text-center w-48 h-48 flex flex-col items-center justify-center">
                <div className="text-6xl mb-2">{allSkills[currentSkillIndex]?.icon}</div>
                <p className="text-sm font-medium text-foreground">
                  {allSkills[currentSkillIndex]?.name}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Skills rotating every 1.5 seconds
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <SkillSection title="Programming Languages" emoji="💻" skills={programmingLanguages} />
          <SkillSection title="Deep Learning Frameworks" emoji="🧠" skills={deepLearningFrameworks} />
          <SkillSection title="NLP & Text Processing" emoji="📝" skills={nlpAndTextProcessing} />
          <SkillSection title="Cloud & DevOps" emoji="☁️" skills={cloudAndDevOps} />
          <SkillSection title="Databases & Storage" emoji="🗄️" skills={databasesAndStorage} />
          <SkillSection title="Web Frameworks" emoji="🌐" skills={webFrameworks} />
          <SkillSection title="Data Visualization" emoji="📊" skills={dataVisualization} />
          <SkillSection title="Soft Skills" emoji="🤝" skills={softSkills} />
        </div>

        <div className="text-center mb-16 mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Showcasing my work and problem-solving abilities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="cert-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;