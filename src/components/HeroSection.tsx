import rohithAvatar from "@/assets/rohith-avatar.png";
import { Code, Database } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = [
    "I'M AN AI ENTHUSIAST",
    "I'M A LEARNER", 
    "I'M A DEVELOPER", 
    "I'M A PROGRAMMER",
    "I'M A DATA ANALYST"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center relative parallax-bg overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-20 text-4xl text-primary/20 floating">
        <Code className="hover-glow" />
      </div>
      <div className="absolute bottom-20 right-20 text-4xl text-primary/20 floating">
        <Database className="hover-glow" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-2xl text-primary/10 floating">
        ⚡
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl text-primary/10 floating">
        🚀
      </div>
      
      {/* Subtle Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center px-6 z-10 glass-card p-12 max-w-4xl mx-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="name-gradient block hover-lift">Rohith Varma</span>
            <span className="name-gradient block hover-lift">Suraparaju</span>
          </h1>
          
          <div className="relative h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold dynamic-text relative">
              <span 
                key={currentRole}
                className="absolute inset-0 flex items-center justify-center animate-role-transition"
                style={{ 
                  animation: 'fadeSlide 0.6s ease-in-out',
                  letterSpacing: '0.1em'
                }}
              >
                {roles[currentRole]}
              </span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into intelligent solutions through 
            <span className="glow-text"> AI & Data Science</span>
          </p>
        </div>
        
        {/* Professional Avatar Section */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-subtle"></div>
            <img 
              src={rohithAvatar} 
              alt="Rohith Varma" 
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary/30 shadow-xl transform transition-all duration-300 group-hover:scale-105 hover-glow"
            />
            <div className="absolute -bottom-1 -right-1 text-3xl animate-fade-in">
              👨‍💻
            </div>
          </div>
        </div>
        
        {/* Professional Call to Action */}
        <div className="mt-12">
          <button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg hover-lift focus-ring transition-all duration-300">
            Explore My Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;