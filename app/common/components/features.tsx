import { Shield, Rocket, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description:
        "Launch AI solutions in days, not months. Our ready-to-use agents get you to market faster.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Your data stays safe with enterprise-grade security, compliance certifications, and end-to-end encryption.",
    },
    {
      icon: Clock,
      title: "24/7 Reliability",
      description:
        "99.9% uptime guarantee with continuous monitoring and automatic failover—your systems keep running.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Get help when you need it. Our AI specialists are available 24/7 to guide you every step of the way.",
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text ">Kagentic</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to deploy Agentic AI with confidence—security, speed, and expert guidance included
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-primary/5 border border-primary/20 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-primary">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-secondary">
                10x
              </div>
              <div className="text-sm text-muted-foreground">
                Faster Deployment
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-primary">
                50+
              </div>
              <div className="text-sm text-muted-foreground">AI Models</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-secondary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
