import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleData from "@/data/article.json";

const ArticlesSection = () => {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.articles.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.articles.subtitle}</p>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articleData.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-primary">
                    <span className="text-sm font-medium mr-2">{t.articles.readMore}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* More Articles Links */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              {t.articles.moreArticles}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ahmad-khairul-anwar/recent-activity/all/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a
                  href="https://95ahmadkhairul.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  Medium
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
