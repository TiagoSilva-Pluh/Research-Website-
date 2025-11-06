import { BookOpen, Users2, TrendingUp, CheckCircle2, AlertTriangle, Target } from "lucide-react";

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 px-4 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="text-primary">Methodology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Rigorous academic approach combining technical development and empirical validation
          </p>
        </div>

        {/* Approach Overview */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Academic Rigor</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                APA 7 citation standards with authentic sources and verifiable URLs. All research 
                claims are backed by peer-reviewed literature.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border-2 border-primary/30">
              <Users2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Collaboration Framework</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Partnership between BUas and Tilburg University, leveraging expertise from both 
                institutions and the Cradle lab.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border-2 border-primary/30">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Mixed-Methods</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Combining technical system development with empirical validation through real-world 
                testing with the Breda Guardians team.
              </p>
            </div>
          </div>
        </div>

        {/* Validation Metrics */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="text-primary">Validation</span> Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="font-bold text-foreground">Performance Improvements</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Measurable quantitative improvements in player performance metrics tracked throughout 
                the 18-week research period.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="font-bold text-foreground">Review Time Reduction</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Documented reduction in hours spent on manual video review by coaching staff compared 
                to baseline measurements.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="font-bold text-foreground">Usability Assessments</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Coach and player feedback collected through surveys and interviews to ensure system 
                accessibility and practical utility.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h4 className="font-bold text-foreground">Academic Contribution</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Publishable research findings that advance the field of esports analytics and 
                cognitive performance analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Project Constraints */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Project <span className="text-primary">Constraints & Reality</span>
          </h3>
          
          <div className="p-10 rounded-2xl bg-card/60 border-2 border-primary/30">
            <div className="flex items-start gap-6 mb-8">
              <AlertTriangle className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Transparent Limitations</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As an 18-week academic research project, we acknowledge and work within certain constraints 
                  while maintaining our commitment to real-world applicability.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>University infrastructure limitations (hardware access, server capacity)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Limited specialized hardware availability for biometric sensors</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Expert supervision constraints within academic timeline</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>18-week timeline for proof-of-concept development</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Focus on demonstrating feasibility rather than commercial deployment</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Resource allocation balanced with other academic responsibilities</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-primary" />
                <h5 className="font-bold text-foreground">Research Focus</h5>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Despite these constraints, our goal is to deliver a robust proof-of-concept that demonstrates 
                the viability and value of multi-modal analytics for competitive esports, with findings that 
                can inform future commercial and research applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
