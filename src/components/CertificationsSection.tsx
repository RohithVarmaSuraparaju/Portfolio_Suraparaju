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
            <Card key={index} className="cert-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{cert.provider}</span>
                  <span className="text-muted-foreground">{cert.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Credential ID: {cert.credentialId}
                </p>
              </CardContent>
            </Card>
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