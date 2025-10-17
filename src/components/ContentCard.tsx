import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  date?: string;
  link?: string;
}

const ContentCard = ({ title, description, image, tags, date, link }: ContentCardProps) => {
  const CardWrapper = link ? Link : "div";

  return (
    <CardWrapper to={link || "#"} className="block group h-full">
      <Card className="h-full flex flex-col overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
        </CardContent>
        {(tags || date) && (
          <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2 items-center">
            {date && <span className="text-xs text-muted-foreground">{date}</span>}
            {tags && tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        )}
      </Card>
    </CardWrapper>
  );
};

export default ContentCard;
