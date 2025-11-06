import { GraduationCap, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-primary/30 py-12 px-4 mt-24">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">Play-O-Meter</div>
                  <div className="text-sm text-muted-foreground">Esports Analytics Research</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Multi-modal analytics platform for competitive Valorant performance optimization.
              </p>
            </div>

            {/* Stakeholders */}
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Stakeholders
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Breda University of Applied Sciences</li>
                <li>• Breda Guardians Valorant Team</li>
                <li>• Cradle Lab Research Partners</li>
                <li>• Tilburg University</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span><br />
                  <a href="mailto:220673@buas.nl" className="text-primary hover:underline">
                    220673@buas.nl
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Institution:</span><br />
                  Breda University of Applied Sciences
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2025 Play-O-Meter Research Project. 18-Week Academic Initiative.
              </p>
              <p className="text-xs text-muted-foreground/60 text-center md:text-right">
                All data collection complies with GDPR Article 9 regulations
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground/60 text-center leading-relaxed">
              This project is part of academic research at Breda University of Applied Sciences. 
              All data collection and processing complies with GDPR regulations and institutional ethics guidelines. 
              <span className="text-primary font-medium"> Facial images are NEVER stored—only emotion scores are recorded.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
