import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nicolas Löffler-Perez. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with care for the environment</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground max-w-md">
            This website is designed with sustainability in mind, optimized for performance and minimal carbon footprint.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
