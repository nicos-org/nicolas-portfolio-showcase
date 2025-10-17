import ContentCard from "@/components/ContentCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Pharmaceutical Safety Analysis",
      description: "Developed ML models to predict adverse drug reactions using historical data from clinical trials.",
      image: "/placeholder.svg",
      tags: ["Machine Learning", "Healthcare", "Python"],
      date: "2024",
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
    {
      title: "Clinical Trial Optimization",
      description: "Applied optimization algorithms to improve clinical trial design and patient recruitment.",
      image: "/placeholder.svg",
      tags: ["Optimization", "Python", "Research"],
      date: "2022",
    },
    {
      title: "Drug Interaction Predictor",
      description: "Built a system to predict potential drug interactions using network analysis.",
      image: "/placeholder.svg",
      tags: ["ML", "Graph Theory", "Healthcare"],
      date: "2022",
    },
    {
      title: "Data Quality Monitoring",
      description: "Implemented automated data quality checks for regulatory submissions.",
      image: "/placeholder.svg",
      tags: ["Data Quality", "Automation", "Python"],
      date: "2021",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A selection of projects showcasing my work in data science, machine learning, 
            and regulatory analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ContentCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
