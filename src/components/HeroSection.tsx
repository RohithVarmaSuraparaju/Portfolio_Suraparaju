import rohithAvatar from "@/assets/rohith-avatar.png";
import { Code, Database } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = ["learner", "programmer", "developer", "ai enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center relative parallax-bg overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 text-6xl text-primary/30 floating">
        <Code className="hover-glow" />
      </div>
      <div className="absolute bottom-20 right-20 text-6xl text-primary/30 floating">
        <Database className="hover-glow" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-4xl text-secondary/20 floating">
        ⚡
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-4xl text-accent/20 floating">
        🚀
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center px-6 z-10 glass-card p-12 max-w-4xl mx-4">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            I'm a{" "}
            <span className="dynamic-text text-accent font-bold text-3xl md:text-4xl">
              {roles[currentRole]}
            </span>
          </h3>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="name-gradient block">Rohith Varma</span>
            <span className="name-gradient block">Suraparaju</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into intelligent solutions through 
            <span className="glow-text"> AI & Data Science</span>
          </p>
        </div>
        
        {/* Enhanced Avatar Section */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img 
              src={rohithAvatar} 
              alt="Rohith Varma" 
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/50 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute -bottom-2 -right-2 text-5xl animate-bounce hover-scale">
              👨‍💻
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-primary/30 animate-ping"></div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12">
          <button className="glass-card px-8 py-4 text-lg font-semibold text-primary hover-lift hover-glow transition-all duration-300">
            Explore My Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;