import { Shield, Lock, Eye, FileCheck, UserCheck, Database } from "lucide-react";

const Privacy = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy & <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            GDPR Article 9 compliant biometric data handling with privacy-first architecture
          </p>
        </div>

        {/* Critical Privacy Guarantee */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/60">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary text-primary-foreground">
                <Shield className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Facial Privacy Guarantee
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  <span className="text-primary font-bold">Facial images are NEVER stored or saved.</span>
                </p>
                <div className="space-y-3 text-base text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Only facial movement patterns are analyzed in <span className="text-primary font-semibold">real-time</span></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Immediate conversion to emotion scores (negative/neutral/positive/happiness)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p><span className="text-primary font-semibold">Zero visual data retention</span> - system processes and discards facial imagery instantly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Complete anonymization ensures player privacy is protected at all times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GDPR Compliance */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <FileCheck className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">GDPR Article 9</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Full compliance with special category data regulations for processing biometric 
                and health-related information.
              </p>
            </div>

            {/* Data Anonymization */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Data Anonymization</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Advanced anonymization protocols ensure player identities are protected while 
                maintaining data utility for analysis.
              </p>
            </div>

            {/* Security Protocols */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Security Protocols</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Industry-standard encryption and access controls protect sensitive performance 
                data throughout collection, processing, and storage.
              </p>
            </div>

            {/* Informed Consent */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <UserCheck className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Informed Consent</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Clear consent procedures ensure all players understand what data is collected 
                and how it will be used in the research.
              </p>
            </div>

            {/* Transparent Usage */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Transparent Policies</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Open documentation of data usage policies and procedures ensures accountability 
                and builds trust with participants.
              </p>
            </div>

            {/* Player Rights */}
            <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-foreground">Data Access Control</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Players maintain full rights to access, modify, or delete their data at any time 
                throughout the research period.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy-by-Design Statement */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="p-8 rounded-xl bg-muted/40 border border-primary/20 text-center">
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Privacy-by-design</span> is not an afterthought—it's 
              the foundation of Play-O-Meter. Our system architecture ensures that player privacy is protected 
              at every stage, from initial data collection through final analysis and reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
