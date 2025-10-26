import ContentCard from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const titles = [
    "I'm a Data Scientist at Swissmedic",
    "I'm a Founder and Data Scientist at veanu GmbH",
    "I'm a Scientist in the life sciences"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(Math.floor(Math.random() * titles.length));
  const [displayedText, setDisplayedText] = useState(titles[Math.floor(Math.random() * titles.length)]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentTitleIndex];
      const baseText = "I'm a";
      
      if (isDeleting) {
        // Delete characters until we reach "I'm a"
        if (displayedText.length > baseText.length) {
          setDisplayedText(prev => prev.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex(prev => (prev + 1) % titles.length);
        }
      } else {
        // Type out the new title
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    };

    const interval = setInterval(typeWriter, 70); // Adjust speed here
    return () => clearInterval(interval);
  }, [currentTitleIndex, displayedText, isDeleting, titles]);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Hi, I'm Nicolas Löffler-Perez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground min-h-[3rem] flex items-center justify-center">
            <span>
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="group">
              <Link to="/portfolio">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Data Scientist, Founder, Researcher, and Problem Solver
              </p>
            </div>

            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <img
                src="/nico_landscape.jpg"
                alt="Nicolas Löffler-Perez"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm Nicolas Löffler-Perez, a Data Scientist at Swissmedic where I work at the 
                intersection of data science, machine learning, and pharmaceutical regulation. 
                My role involves analyzing complex datasets to ensure drug safety and support 
                regulatory decision-making.
              </p>

              <p className="text-lg leading-relaxed">
                With a background in engineering and machine learning, I specialize in developing 
                data-driven solutions that transform raw information into actionable insights.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Statistical Analysis",
                    "Machine Learning",
                    "Python & R",
                    "Data Visualization",
                    "Regulatory Data Science",
                    "Healthcare Analytics",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="p-4 border border-border rounded-lg bg-card hover:shadow-md transition-shadow"
                    >
                      <span className="font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">Education</h3>
                <div className="space-y-4">
                  <div className="p-6 border border-border rounded-lg bg-card">
                    <h4 className="font-semibold text-lg text-foreground">PhD in Chemical and Biomolecular Engineering</h4>
                    <p className="text-muted-foreground">Johns Hopkins University</p>
                    <p className="text-sm text-muted-foreground mt-2">2014 - 2019</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg bg-card">
                    <h4 className="font-semibold text-lg text-foreground">Master's in Engineering Science - Biomedical Engineering</h4>
                    <p className="text-muted-foreground">Pontifical Catholic University of Chile</p>
                    <p className="text-sm text-muted-foreground mt-2">2013 - 2014</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg bg-card">
                    <h4 className="font-semibold text-lg text-foreground">Bachelor's in Physics</h4>
                    <p className="text-muted-foreground">Pontifical Catholic University of Chile</p>
                    <p className="text-sm text-muted-foreground mt-2">2008 - 2012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Portfolio</h2>
            <p className="text-muted-foreground text-lg">
              A selection of projects showcasing my work in data science, machine learning, 
              and regulatory analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceutical Market Oversight",
                description: "Developed MediCrawl and NightCrawler at Swissmedic to identify non-compliant and illegal medicaments sold in ecommerce",
                image: "/image_nico_amld.png",
                tags: ["Machine Learning", "Healthcare", "Python", "Microservices", "Azure", "Crawling"],
                date: "2021-2025",
              },
              {
                title: "Regulatory Data Dashboard",
                description: "Built an interactive dashboard for monitoring drug approval processes and compliance metrics.",
                image: "/placeholder.svg",
                tags: ["Data Viz", "React", "D3.js"],
                date: "2023",
              },
              {
                title: "Statistical Modeling Framework",
                description: "Created a reusable framework for statistical analysis in pharmaceutical research.",
                image: "/placeholder.svg",
                tags: ["R", "Statistics", "Package Dev"],
                date: "2023",
              },
            ].map((project, index) => (
              <div key={index} className="fade-in h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <ContentCard {...project} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center space-y-6 fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Turning Data Into Insights
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise in statistical analysis, machine learning, and regulatory data science, 
            I help organizations make informed decisions through data-driven approaches. 
            Currently working at Swissmedic, I focus on pharmaceutical safety and regulatory excellence.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-4">
            <Link to="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
