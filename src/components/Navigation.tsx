import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-3">
      <Button 
        variant="outline" 
        className="nav-button text-foreground hover:text-primary"
        onClick={() => scrollToSection('profile')}
      >
        Profile
      </Button>
      <Button 
        variant="outline" 
        className="nav-button text-foreground hover:text-primary"
        onClick={() => scrollToSection('certifications')}
      >
        Certifications
      </Button>
      <Button 
        variant="outline" 
        className="nav-button text-foreground hover:text-primary"
        onClick={() => scrollToSection('about')}
      >
        About
      </Button>
      <Button 
        variant="outline" 
        className="nav-button text-foreground hover:text-primary"
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </Button>
    </nav>
  );
};

export default Navigation;