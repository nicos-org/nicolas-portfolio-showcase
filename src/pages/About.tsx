const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 fade-in">
          <div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Data Scientist, Researcher, and Problem Solver
            </p>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
            <img
              src="/placeholder.svg"
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
              With a background in statistics and computer science, I specialize in developing 
              data-driven solutions that transform raw information into actionable insights. 
              My work ranges from building predictive models to creating data visualization 
              systems that help stakeholders make informed decisions.
            </p>

            <div className="pt-8">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">Expertise</h2>
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
              <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">Education</h2>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg text-foreground">Master's in Data Science</h3>
                  <p className="text-muted-foreground">University of Excellence</p>
                  <p className="text-sm text-muted-foreground mt-2">2018 - 2020</p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="font-semibold text-lg text-foreground">Bachelor's in Statistics</h3>
                  <p className="text-muted-foreground">University of Excellence</p>
                  <p className="text-sm text-muted-foreground mt-2">2015 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
