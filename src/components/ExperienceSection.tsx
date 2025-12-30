import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";
import experienceData from "@/data/experience.json";

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.experience.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experienceData[language].map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-primary border-4 border-background" />

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  } pl-8 md:pl-0`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50">
                    <div
                      className={`flex items-center gap-2 text-primary mb-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                      {exp.period.includes("Present") && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                          {t.experience.current}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.type}
                    </p>

                    <div className="mt-2 space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        Responsibilities:
                      </p>
                      <ul
                        className={`text-sm text-muted-foreground space-y-1`}
                      >
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="gap-2">
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-2 space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        Key Achievements:
                      </p>
                      <ul
                        className={`text-sm text-muted-foreground space-y-1`}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="gap-2">
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
