import { Lightbulb, TrendingUp, Clock, Brain, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Evolution from basic data collection to an integrated analytics platform
          </p>
        </div>

        {/* Core Innovation */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/40">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Core Innovation
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                    Play-O-Meter reveals <span className="text-primary font-bold">WHY</span> players make decisions, 
                    not just <span className="text-foreground font-semibold">WHAT</span> happened in the match.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    By integrating gameplay data with biometric signals and cognitive state analysis, 
                    we provide coaches with unprecedented insights into the decision-making process during 
                    high-pressure competitive moments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Key <span className="text-primary">Benefits</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Reduced Review Time</h4>
              <p className="text-muted-foreground leading-relaxed">
                Significantly cut down manual video review hours by automatically correlating 
                gameplay events with physiological and emotional states.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Deeper Understanding</h4>
              <p className="text-muted-foreground leading-relaxed">
                Gain comprehensive insights into player decision-making by understanding the 
                cognitive and emotional context behind every action.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Evidence-Based Strategies</h4>
              <p className="text-muted-foreground leading-relaxed">
                Develop performance improvement strategies backed by concrete data rather 
                than subjective observations alone.
              </p>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Coaching Workflow <span className="text-primary">Transformation</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-xl bg-destructive/10 border-2 border-destructive/40">
              <h4 className="text-xl font-bold mb-6 text-destructive">Before Play-O-Meter</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-destructive mt-1">❌</span>
                  <span>Hours of manual video review</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-destructive mt-1">❌</span>
                  <span>Subjective performance assessments</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-destructive mt-1">❌</span>
                  <span>Limited insight into player mental state</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-destructive mt-1">❌</span>
                  <span>Reactive rather than predictive coaching</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="p-8 rounded-xl bg-primary/10 border-2 border-primary/40">
              <h4 className="text-xl font-bold mb-6 text-primary">With Play-O-Meter</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automated correlation of events and states</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Data-driven performance insights</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Comprehensive cognitive & emotional analysis</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Proactive optimization strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
