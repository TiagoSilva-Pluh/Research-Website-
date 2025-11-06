import { Database, Video, Eye, Smile, Mic, Zap, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dataStreams = [
  {
    icon: Database,
    title: "Gameplay Statistics",
    sampling: "128 Hz",
    description: "Riot Games API integration providing real-time match data including K/D ratios, ability usage, positioning data, and tactical decisions.",
    features: ["Real-time match data", "Combat statistics", "Positioning analytics", "Ability tracking"]
  },
  {
    icon: Video,
    title: "Video Recordings",
    sampling: "30-60 FPS",
    description: "Match footage synchronized with gameplay events, enabling timestamp alignment with all other data streams for comprehensive replay analysis.",
    features: ["Synchronized footage", "Event timestamping", "Multi-angle capture", "Replay alignment"]
  },
  {
    icon: Eye,
    title: "Eye Tracking",
    sampling: "30-120 Hz",
    description: "Gaze patterns and attention distribution analysis revealing where players focus during critical moments, generating visual heatmaps of focus areas.",
    features: ["Gaze patterns", "Attention mapping", "Visual heatmaps", "Focus analysis"]
  },
  {
    icon: Smile,
    title: "Facial Expression Analysis",
    sampling: "Real-time",
    description: "Privacy-first emotion detection through facial movement patterns. NO facial images are stored—only emotion scores (negative/neutral/positive/happiness).",
    features: ["Emotion scoring", "Zero visual storage", "Real-time processing", "Complete anonymization"],
    privacy: true
  },
  {
    icon: Mic,
    title: "Voice Signals",
    sampling: "Real-time",
    description: "Communication pattern analysis providing insights into team coordination quality and vocal stress indicators during high-pressure situations.",
    features: ["Communication patterns", "Team coordination", "Stress detection", "Timing analysis"]
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-24 px-4 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology & <span className="text-primary">Data Integration</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Multi-modal data streams working together to provide comprehensive performance insights
          </p>
        </div>

        {/* Data Streams Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <Card
                  key={index}
                  className={`group hover:border-primary/60 transition-all duration-300 ${
                    stream.privacy ? 'border-2 border-primary/40 bg-primary/5' : 'bg-card/50'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/20 border border-primary/40 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
                        <span className="text-xs font-semibold text-primary">{stream.sampling}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{stream.title}</CardTitle>
                    {stream.privacy && (
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary">Privacy-First</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {stream.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {stream.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Challenge */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/60 border-2 border-primary/30">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/40">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Technical Challenge: Data Stream Synchronization
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    One of the core technical challenges is synchronizing data streams with vastly different 
                    sampling rates while maintaining temporal accuracy and privacy compliance:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/40 border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">128 Hz</div>
                      <div className="text-sm text-muted-foreground">Valorant gameplay data</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/40 border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">30-120 Hz</div>
                      <div className="text-sm text-muted-foreground">Eye tracking sensors</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/40 border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">Real-time</div>
                      <div className="text-sm text-muted-foreground">Facial expression analysis</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                    Our solution employs advanced timestamp alignment algorithms and buffering strategies 
                    to ensure all data streams can be accurately correlated, regardless of their native sampling rates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
