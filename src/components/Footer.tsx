import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ahmad Khairul Anwar. {t.footer.rights}
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            {t.footer.madeWith} <Heart className="h-4 w-4 text-accent fill-accent" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
