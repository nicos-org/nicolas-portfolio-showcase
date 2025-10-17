interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />
            
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-medium">{item.year}</div>
              <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
              <div className="text-primary font-medium">{item.company}</div>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
