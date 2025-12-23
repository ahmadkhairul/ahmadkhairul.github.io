import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, GitlabIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectData from "@/data/project.json";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.projects.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/30"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary font-medium">
                      {project.year}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.link && (
                  <div className="px-6 pb-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:border-primary hover:bg-primary/5"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.viewCase}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* GitHub & GitLab Links */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              {t.projects.moreProjects}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a
                  href="https://github.com/ahmadkhairul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a
                  href="https://gitlab.com/95ahmadkhairul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitlabIcon className="mr-2 h-5 w-5" />
                  GitLab
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
