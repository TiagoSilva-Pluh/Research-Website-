import { AlertCircle, Clock, TrendingDown, HelpCircle } from "lucide-react";

const Challenge = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">Challenge</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the current limitations in esports performance analysis
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Pain Point 1 */}
          <div className="p-8 rounded-xl bg-card border-2 border-destructive/40 hover:border-destructive/60 transition-all duration-300">
            <Clock className="w-12 h-12 text-destructive mb-4" />
            <h3 className="text-xl font-bold mb-3 text-foreground">Time-Consuming Review</h3>
            <p className="text-muted-foreground leading-relaxed">
              Coaches spend <span className="text-primary font-semibold">extensive hours</span> manually reviewing 
              match footage, struggling to identify meaningful patterns in player performance.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="p-8 rounded-xl bg-card border-2 border-destructive/40 hover:border-destructive/60 transition-all duration-300">
            <HelpCircle className="w-12 h-12 text-destructive mb-4" />
            <h3 className="text-xl font-bold mb-3 text-foreground">Missing Connection</h3>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Cannot effectively connect</span> player stress and focus 
              states to in-game decisions—understanding WHAT happened without knowing WHY.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="p-8 rounded-xl bg-card border-2 border-destructive/40 hover:border-destructive/60 transition-all duration-300">
            <TrendingDown className="w-12 h-12 text-destructive mb-4" />
            <h3 className="text-xl font-bold mb-3 text-foreground">Missed Opportunities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Critical <span className="text-primary font-semibold">performance insights and optimization opportunities</span> are 
              lost in the data gap between collection and actionable analysis.
            </p>
          </div>
        </div>

        {/* Visual Gap Representation */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="p-10 rounded-2xl bg-card/60 border-2 border-primary/30">
            <div className="flex items-center justify-center gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">The Data-to-Insight Gap</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-4xl mb-2">📊</div>
                <div className="font-semibold text-foreground mb-2">Data Collected</div>
                <div className="text-sm text-muted-foreground">
                  Match stats, videos, biometrics
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-4xl text-destructive">❌</div>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-4xl mb-2">💡</div>
                <div className="font-semibold text-foreground mb-2">Actionable Insights</div>
                <div className="text-sm text-muted-foreground">
                  Coaching strategies, improvements
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm leading-relaxed">
              Current workflows struggle to transform raw performance data into meaningful, 
              actionable coaching insights that drive player improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
