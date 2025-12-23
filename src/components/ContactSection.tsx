import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, FileText, Linkedin, Github, ExternalLink } from "lucide-react";
import contactData from "@/data/contact.json";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: t.contact.success,
      description: "Thank you for reaching out!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "whatsapp":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        );
      case "email":
        return <Mail className="h-5 w-5" />;
      case "resume":
        return <FileText className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "github":
        return <Github className="h-5 w-5" />;
      case "upwork":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
          </svg>
        );
      case "medium":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        );
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  const primaryContacts = contactData.contact.filter(c => c.type === "primary");
  const socialContacts = contactData.contact.filter(c => c.type === "social");
  const documentContacts = contactData.contact.filter(c => c.type === "document");

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.contact.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Primary Contacts */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">{t.contact.reachMe}</h3>
                {primaryContacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target={contact.target}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-primary/30"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground">
                        {getIcon(contact.name)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Resume */}
              {documentContacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target={contact.target}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-primary/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground">
                      {getIcon(contact.name)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t.contact.social}</h3>
                <div className="flex flex-wrap gap-3">
                  {socialContacts.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.url}
                      target={contact.target}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-primary/30 hover:text-primary"
                      title={contact.description}
                    >
                      {getIcon(contact.name)}
                      <span className="text-sm font-medium">{contact.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder={t.contact.name}
                  required
                  className="bg-card border-border/50 focus:border-primary h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  required
                  className="bg-card border-border/50 focus:border-primary h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t.contact.message}
                  required
                  rows={5}
                  className="bg-card border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground shadow-glow hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t.contact.send}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
