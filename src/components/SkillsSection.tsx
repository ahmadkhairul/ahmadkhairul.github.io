import { useLanguage } from "@/contexts/LanguageContext";
import {
  Code,
  Layers,
  Database,
  TestTube,
  Cog,
  Server,
  Smartphone,
  Users,
} from "lucide-react";
import skillData from "@/data/skill.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Code,
  architecture: Layers,
  stateManagement: Database,
  testing: TestTube,
  automation: Cog,
  backend: Server,
  mobile: Smartphone,
  leadership: Users,
};

const SkillsSection = () => {
  const { t } = useLanguage();

  const skills = Object.entries(skillData).map(([key, value]) => ({
    id: key,
    title: value.title,
    items: value.items,
    icon: iconMap[key] || Code,
  }));

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.skills.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.skills.subtitle}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                    {skill.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary -mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;