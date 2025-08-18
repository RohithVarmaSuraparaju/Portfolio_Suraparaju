import rohithAvatar from "@/assets/rohith-avatar.png";
import { Code, Database } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="profile" className="min-h-screen flex flex-col items-center justify-center hero-gradient px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 opacity-20">
        <Code size={100} className="text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-20">
        <Database size={100} className="text-secondary animate-pulse" />
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <p className="text-learner-text text-lg mb-4 font-medium glow-text">I'm a learner</p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-foreground">My name is</span>
          <br />
          <span className="name-gradient">Rohith Varma Suraparaju</span>
        </h1>
        
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-spin">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <img 
                src={rohithAvatar} 
                alt="Rohith Varma Suraparaju" 
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="text-6xl mb-8 animate-bounce">👨‍💻</div>
      </div>
    </section>
  );
};

export default HeroSection;