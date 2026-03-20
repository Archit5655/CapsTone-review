import { useEffect, useState, useRef } from 'react';
import { Shield, Brain, Database, TrendingUp, ChevronDown } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2000, decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: TrendingUp, value: 97.79, suffix: '%', label: 'XGBoost Accuracy', decimals: 2 },
    { icon: Database, value: 5, suffix: '', label: 'ML Models Tested', decimals: 0 },
    { icon: Brain, value: 99.65, suffix: '%', label: 'ROC-AUC Score', decimals: 2 },
    { icon: Shield, value: 98.5, suffix: '%', label: 'F1-Score', decimals: 1 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img 
          src="/hero-bg.jpg" 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern z-[1] opacity-50" />

      {/* Radial Glow */}
      <div className="absolute inset-0 radial-glow z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-in-up">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide uppercase">
              Machine Learning Research
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Identification & Classification of</span>
            <br />
            <span className="text-gradient">Fake Social Media Profiles</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Using XGBoost, LightGBM, Random Forest and Ensemble Learning techniques 
            to detect fake profiles with 97.79% accuracy
          </p>

          {/* Authors */}
          <p className="text-sm text-muted-foreground mb-12 animate-slide-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="text-cyan-400">Purshotam Kumar, Premananda Sahu, Parisha Handa,</span>
            <br />
            <span className="text-cyan-400">Aryan Upadhyay, Madhav Gupta, Archit Garg</span>
            <br />
            <span className="text-xs">Lovely Professional University, Punjab, India</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#methodology"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-background font-semibold rounded-lg transition-all duration-300 glow-cyan hover:glow-cyan-strong flex items-center justify-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Explore Methodology
            </a>
            <a 
              href="#results"
              className="px-8 py-4 glass-card hover:border-cyan-400/50 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              View Results
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-4 sm:p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#abstract" className="flex flex-col items-center text-muted-foreground hover:text-cyan-400 transition-colors">
          <span className="text-xs mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
