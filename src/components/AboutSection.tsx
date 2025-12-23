import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Briefcase, Users } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Code, value: "10+", label: t.about.yearsExp },
    { icon: Briefcase, value: "30+", label: t.about.projectsDone },
    { icon: Users, value: "10+", label: t.about.happyClients },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.about.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.about.subtitle}</p>
          </div>

          <div className="grid gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;