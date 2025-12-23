import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import photo from "@/assets/photo.jpeg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-background"
    >
      {/* Background decoration - Darker/Subtler for this theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full min-h-[calc(100vh-4rem)]">
          
          {/* Left Column: Text Content */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            
            <p className="text-xl md:text-2xl text-primary font-bold tracking-wide animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {t.hero.greeting}
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-foreground">{t.hero.name.split(" ")[0]} </span>
               <br className="hidden md:block"/>
              <span className="text-gradient hover:opacity-80 transition-opacity duration-300">{t.hero.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {t.hero.title}
            </h2>

            <p className="max-w-lg text-muted-foreground text-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
              A passionate developer crafting beautiful web experiences with modern technologies. 
              {/* Using a generic placeholder for now as per user request to differentiate from About section */}
            </p>

            <div className="flex flex-wrap gap-4 mt-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Hire Me
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-primary/20 hover:border-primary text-foreground rounded-full font-semibold hover:bg-primary/5 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative animate-fade-in">
             <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                {/* Glow Effect behind image - simulating the artistic lighting */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl scale-110" />
                
                {/* Image Container with potential mask */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden md:rounded-none">
                   <img 
                    src={photo} 
                    alt="Ahmad Khairul Anwar" 
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                  />
                  
                  {/* Overlay for "artistic" feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 md:opacity-20" />
                </div>
                
                {/* Floating elements could go here */}
             </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
