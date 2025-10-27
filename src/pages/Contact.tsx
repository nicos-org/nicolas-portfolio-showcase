import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Bird } from "lucide-react";

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
                  <p className="text-primary font-medium">
                    nicoapg - at the google service
                  </p>
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
                    href="https://www.linkedin.com/in/nicolas-löffler-perez-phd-46245775/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Here to jump to L-I-N-K-E-D-I-N
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
                    href="https://github.com/nicoapg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    github.com/nicoapg
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Bird className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">veanu GmbH</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Check out my startup: veanu.ch
                  </p>
                  <a
                    href="https://veanu.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    veanu.ch
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
            <Button size="lg">
              Send Me a Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
