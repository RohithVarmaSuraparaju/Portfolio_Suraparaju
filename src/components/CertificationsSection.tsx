import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Artificial Intelligence (AI)",
      provider: "IBM",
      date: "June 2025",
      description: "Comprehensive introduction to AI concepts, machine learning fundamentals, and practical applications in various industries.",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Ethics", "Problem Solving"],
      credentialId: "IBM-AI-2025-001"
    },
    {
      title: "Go Beyond the Numbers: Translate Data into Insights",
      provider: "Google",
      date: "Feb 2025",
      description: "Advanced data analysis techniques focusing on extracting meaningful insights from complex datasets and communicating findings effectively.",
      skills: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Business Intelligence"],
      credentialId: "GOOGLE-DATA-2025-002"
    },
    {
      title: "Python for Data Science",
      provider: "Google",
      date: "Jan 2025",
      description: "Comprehensive Python programming course focused on data science applications, including pandas, numpy, and machine learning libraries.",
      skills: ["Python", "Pandas", "NumPy", "Data Science", "Machine Learning"],
      credentialId: "GOOGLE-PYTHON-2025-003"
    },
    {
      title: "Foundations of Data Science",
      provider: "Google",
      date: "Dec 2024",
      description: "Fundamental concepts of data science including data collection, cleaning, analysis, and interpretation methodologies.",
      skills: ["Data Science", "Statistics", "Data Cleaning", "Research Methods"],
      credentialId: "GOOGLE-FOUNDATIONS-2024-004"
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      provider: "Google",
      date: "Sep 2023",
      description: "Introduction to the data analytics field, covering the data analysis process and key analytical thinking concepts.",
      skills: ["Data Analytics", "Analytical Thinking", "Data Lifecycle", "Data Ethics"],
      credentialId: "GOOGLE-FOUNDATIONS-2023-005"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional achievements and continuous learning in AI & Data Science
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-8 rounded-lg hover-lift group relative overflow-hidden">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center floating">
                <Award className="w-6 h-6 text-primary" />
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-semibold text-lg flex items-center gap-2">
                    🏢 {cert.provider}
                  </span>
                  <span className="text-muted-foreground bg-primary/10 px-3 py-1 rounded-full text-sm">
                    📅 {cert.date}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors">
                {cert.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  🎯 Skills Acquired:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="glass-card px-3 py-2 text-xs font-medium text-primary hover-scale cursor-pointer">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  🆔 Credential ID: <span className="font-mono text-primary">{cert.credentialId}</span>
                </p>
                <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I am committed to staying current with the latest developments in AI and Data Science. 
            These certifications represent my dedication to professional growth and expertise in cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;