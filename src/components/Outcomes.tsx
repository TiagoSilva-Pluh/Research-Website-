import { Target, Zap, Users, Lightbulb, BookOpen } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    title: "Performance",
    metric: "Quantifiable Improvements",
    description: "Measurable player performance metrics demonstrating concrete improvements in gameplay effectiveness and decision-making quality."
  },
  {
    icon: Zap,
    title: "Efficiency",
    metric: "Time Reduction",
    description: "Significant decrease in manual video review hours, allowing coaches to focus on strategic planning and player development."
  },
  {
    icon: Users,
    title: "Usability",
    metric: "Accessible Interface",
    description: "User-friendly platform design addressing current \"too complex\" feedback, making analytics accessible for coaches and players."
  },
  {
    icon: Lightbulb,
    title: "Insight Quality",
    metric: "Decision-Making Patterns",
    description: "Enhanced understanding of WHY players make specific decisions, not just WHAT happened during matches."
  },
  {
    icon: BookOpen,
    title: "Academic Contribution",
    metric: "Publishable Research",
    description: "Novel findings that advance the field of esports analytics, cognitive science in gaming, and multi-modal data integration."
  }
];

const Outcomes = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expected <span className="text-primary">Outcomes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Measurable success criteria defining the impact of Play-O-Meter
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.slice(0, 3).map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{outcome.title}</h3>
                  <div className="text-sm font-semibold text-primary mb-4">{outcome.metric}</div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {outcomes.slice(3).map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={index + 3}
                  className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{outcome.title}</h3>
                  <div className="text-sm font-semibold text-primary mb-4">{outcome.metric}</div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Statement */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Defining Success
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Success for Play-O-Meter is measured not just by technical achievement, but by{" "}
              <span className="text-primary font-semibold">real-world impact</span>: coaches saving time, 
              players improving performance, and the esports analytics field advancing through{" "}
              <span className="text-primary font-semibold">evidence-based innovation</span>. These outcomes 
              work together to demonstrate the viability of multi-modal analytics in competitive gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
