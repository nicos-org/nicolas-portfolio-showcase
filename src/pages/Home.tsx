import ContentCard from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const recentPosts = [
    {
      title: "Understanding Machine Learning in Healthcare",
      description: "Exploring how ML algorithms are transforming medical diagnostics and patient care.",
      image: "/placeholder.svg",
      tags: ["Machine Learning", "Healthcare"],
      date: "March 2024",
    },
    {
      title: "Data Science at Swissmedic",
      description: "A look into regulatory data analysis and pharmaceutical safety assessment.",
      image: "/placeholder.svg",
      tags: ["Data Science", "Regulation"],
      date: "February 2024",
    },
    {
      title: "Python for Statistical Analysis",
      description: "Best practices and tools for statistical computing in Python.",
      image: "/placeholder.svg",
      tags: ["Python", "Statistics"],
      date: "January 2024",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Hi, I'm Nicolas Löffler-Perez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            I'm a Data Scientist at Swissmedic
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

      {/* Recent Posts Section */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Recent Posts & Videos</h2>
            <p className="text-muted-foreground text-lg">
              Thoughts and insights on data science, machine learning, and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ContentCard {...post} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/portfolio">View All Work</Link>
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
