import Timeline from "@/components/Timeline";

const Experience = () => {
  const experiences = [
    {
      year: "2021 - Present",
      title: "Data Scientist",
      company: "Swissmedic",
      description:
        "Leading data analysis initiatives for pharmaceutical regulation and drug safety. Developing machine learning models for adverse event prediction and building data infrastructure for regulatory processes.",
    },
    {
      year: "2019 - 2021",
      title: "Junior Data Analyst",
      company: "Healthcare Analytics Institute",
      description:
        "Conducted statistical analyses on clinical trial data and healthcare outcomes. Collaborated with medical researchers to design and implement data collection strategies.",
    },
    {
      year: "2018 - 2019",
      title: "Research Assistant",
      company: "University Research Lab",
      description:
        "Assisted in research projects focused on statistical methods for biomedical data. Developed R packages for data analysis and visualization.",
    },
    {
      year: "2017 - 2018",
      title: "Data Science Intern",
      company: "Tech Startup",
      description:
        "Built predictive models for customer behavior analysis. Created data pipelines and automated reporting systems using Python and SQL.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Experience</h1>
          <p className="text-xl text-muted-foreground">
            My professional journey in data science and analytics
          </p>
        </div>

        <Timeline items={experiences} />

        <div className="mt-24 p-8 border border-border rounded-lg bg-card fade-in">
          <h2 className="text-2xl font-heading font-semibold mb-4">Skills & Technologies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-muted-foreground">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "R", "SQL", "JavaScript", "TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-muted-foreground">Machine Learning & Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "scikit-learn",
                  "TensorFlow",
                  "PyTorch",
                  "Pandas",
                  "NumPy",
                  "Statistical Modeling",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-muted-foreground">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "AWS", "PostgreSQL", "Jupyter", "Tableau"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
