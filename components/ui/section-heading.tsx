import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionHeading = ({
  title,
  subtitle,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="font-outfit text-4xl md:text-5xl font-bold">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-lg text-foreground/80 mt-2">{subtitle}</p>
    </div>
  );
};
