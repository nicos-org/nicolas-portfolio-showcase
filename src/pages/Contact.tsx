import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just having a conversation about data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Reach out directly via email
                  </p>
                  <a
                    href="mailto:nicolas@example.com"
                    className="text-primary hover:underline font-medium"
                  >
                    nicolas@example.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Connect professionally
                  </p>
                  <a
                    href="https://linkedin.com/in/nicolaslp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    linkedin.com/in/nicolaslp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Check out my code
                  </p>
                  <a
                    href="https://github.com/nicolaslp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    github.com/nicolaslp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Twitter className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Twitter</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Follow for updates
                  </p>
                  <a
                    href="https://twitter.com/nicolaslp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    @nicolaslp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="fade-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-4">Want to collaborate?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, need consulting services, or just want to 
              discuss data science trends, I'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:nicolas@example.com">Send Me a Message</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
