import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "suraparajurohithvarma@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      action: () => window.open("mailto:suraparajurohithvarma@gmail.com", "_blank"),
      buttonText: "Send Email"
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/rohith-varma-suraparaju-9a73531b7/",
      icon: <Linkedin className="h-6 w-6" />,
      action: () => window.open("https://www.linkedin.com/in/rohith-varma-suraparaju-9a73531b7/", "_blank"),
      buttonText: "Connect on LinkedIn"
    },
    {
      title: "GitHub",
      value: "github.com/rohithvarma",
      icon: <Github className="h-6 w-6" />,
      action: () => window.open("https://github.com/rohithvarma", "_blank"),
      buttonText: "View GitHub"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: <Phone className="h-6 w-6" />,
      action: () => window.open("tel:+15551234567", "_blank"),
      buttonText: "Call Me"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's connect and discuss your next project!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="cert-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="text-primary">
                    {method.icon}
                  </div>
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 break-all">
                  {method.value}
                </p>
                <Button 
                  onClick={method.action}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {method.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;