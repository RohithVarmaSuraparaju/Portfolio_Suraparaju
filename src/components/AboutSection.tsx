import SkillCard from "./SkillCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  const programmingLanguages = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚡" },
    { name: "Java", icon: "☕" }
  ];

  const dataAnalysisTools = [
    { name: "EDA", icon: "📊" },
    { name: "Numpy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Scikit-learn", icon: "🤖" }
  ];

  const deepLearningFrameworks = [
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Keras", icon: "⚡" }
  ];

  const nlpTools = [
    { name: "NLTK", icon: "📝" },
    { name: "spaCy", icon: "🌐" },
    { name: "GPT", icon: "🤖" },
    { name: "Gensim", icon: "📖" },
    { name: "Sentiment Analysis", icon: "😊" },
    { name: "NER", icon: "🏷️" }
  ];

  const generativeAI = [
    { name: "OpenAI LLMs", icon: "🧠" },
    { name: "Hugging Face LLMs", icon: "🤗" },
    { name: "LangChain", icon: "⛓️" },
    { name: "RAG", icon: "🔍" },
    { name: "GANs", icon: "🎨" },
    { name: "VAEs", icon: "🔄" },
    { name: "Diffusion Models", icon: "💫" }
  ];

  const promptEngineering = [
    { name: "Zero-shot Prompting", icon: "🎯" },
    { name: "Few-shot Prompting", icon: "📚" },
    { name: "Chain-of-Thought", icon: "🧠" },
    { name: "Meta Prompting", icon: "🎭" }
  ];

  const vectorDatabases = [
    { name: "Pinecone", icon: "🌲" },
    { name: "Chroma", icon: "🎨" },
    { name: "Weaviate", icon: "🕸️" }
  ];

  const statisticalAnalysis = [
    { name: "Regression", icon: "📈" },
    { name: "Clustering", icon: "🔗" },
    { name: "Time Series", icon: "📅" },
    { name: "A/B Testing", icon: "🧪" },
    { name: "Outlier Detection", icon: "🔍" }
  ];

  const mlOps = [
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "AWS SageMaker", icon: "☁️" }
  ];

  const engineering = [
    { name: "Apache Spark", icon: "⚡" },
    { name: "Kafka", icon: "📡" },
    { name: "ETL pipelines", icon: "🔄" }
  ];

  const cloudPlatforms = [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "GCP", icon: "🌐" }
  ];

  const databases = [
    { name: "SQL", icon: "🗃️" },
    { name: "NoSQL", icon: "🍃" }
  ];

  const visualization = [
    { name: "Power BI", icon: "📊" },
    { name: "Matplotlib", icon: "📈" },
    { name: "Seaborn", icon: "🌊" },
    { name: "Plotly", icon: "📉" }
  ];

  const versionControl = [
    { name: "Git", icon: "🌳" },
    { name: "GitHub", icon: "🐙" }
  ];

  const softSkills = [
    { name: "Strategic Thinking", icon: "🎯" },
    { name: "Project Management", icon: "📋" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Communication", icon: "💬" },
    { name: "KPI-Driven Decisions", icon: "📊" }
  ];

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

  const SkillSection = ({ title, skills, emoji }: { title: string; skills: any[]; emoji: string }) => (
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
    <section id="about" className="py-20 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI & Data Science
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">
            developer
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Hello, Welcome to my Portfolio.
          </p>
          <div className="text-6xl mb-8">🧠</div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Master's student in Data Science and Artificial Intelligence with expertise in Python, C++, and Java. 
            Skilled in machine learning, deep learning, and NLP using TensorFlow, PyTorch, Keras, NLTK, spaCy, GPT, 
            and sentiment analysis. Proficient in generative AI tools including OpenAI LLMs, Hugging Face LLMs, 
            LangChain, RAG, GANs, VAEs, and diffusion models. Passion for building scalable, ethical, and data-driven 
            AI solutions for impactful business decision-making.
          </p>
          <div className="text-4xl mt-8">🐍</div>
        </div>

        <SkillSection title="Programming Languages" skills={programmingLanguages} emoji="💻" />
        <SkillSection title="Data Analysis & Libraries" skills={dataAnalysisTools} emoji="📊" />
        <SkillSection title="Deep Learning Frameworks" skills={deepLearningFrameworks} emoji="🧠" />
        <SkillSection title="Natural Language Processing" skills={nlpTools} emoji="🗣️" />
        <SkillSection title="Generative AI Skills" skills={generativeAI} emoji="🤖" />
        <SkillSection title="Prompt Engineering" skills={promptEngineering} emoji="💡" />
        <SkillSection title="Vector Databases" skills={vectorDatabases} emoji="🗄️" />
        <SkillSection title="Statistical Analysis & Modeling" skills={statisticalAnalysis} emoji="📈" />
        <SkillSection title="MLOps & Model Deployment" skills={mlOps} emoji="🚀" />
        <SkillSection title="Engineering & Pipelines" skills={engineering} emoji="⚙️" />
        <SkillSection title="Cloud Platforms" skills={cloudPlatforms} emoji="☁️" />
        <SkillSection title="Database Systems" skills={databases} emoji="🗃️" />
        <SkillSection title="Visualization Tools" skills={visualization} emoji="📊" />
        <SkillSection title="Version Control Systems" skills={versionControl} emoji="🌳" />
        <SkillSection title="Soft Skills" skills={softSkills} emoji="🤝" />

        <div className="text-center mb-16">
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