import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-2xl bg-gradient-to-br from-card to-card/60 border-2 border-primary/40 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Interested in Learning More?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're a researcher, coach, or esports professional interested in multi-modal analytics, 
                we'd love to hear from you.
              </p>
              
              <Button 
                size="lg" 
                variant="hero"
                className="group text-lg px-8 py-6"
                onClick={() => window.location.href = 'mailto:220673@buas.nl'}
              >
                Contact Us for More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                Email: <a href="mailto:220673@buas.nl" className="text-primary hover:underline font-medium">220673@buas.nl</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
