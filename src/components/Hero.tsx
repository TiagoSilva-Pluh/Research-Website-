import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Database, Lock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 border border-primary/40 backdrop-blur-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">18-Week Research Project at BUas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-primary">Play-O-Meter</span>
            <br />
            <span className="text-foreground text-3xl md:text-5xl lg:text-6xl">
              Multi-Modal Analytics for Competitive Valorant
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Transforming performance data into{" "}
            <span className="text-primary font-bold">actionable coaching insights</span>
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto">
            Enhancing esports analytics for the <span className="text-primary font-semibold">Breda Guardians Valorant team</span> through 
            advanced multi-modal data integration and cognitive science research
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              variant="hero" 
              className="group"
              onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the Technology
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Research Approach
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300">
              <Database className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Data Streams Integrated</div>
            </div>
            
            <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300">
              <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary">GDPR</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Article 9 Compliant</div>
            </div>
            
            <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow-gold transition-all duration-300">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Week Research Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
