import { useEffect, useRef, useState } from 'react';
import { FileText, Target, AlertTriangle, Lightbulb } from 'lucide-react';

const Abstract = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Target,
      title: 'Research Objective',
      description: 'Build a reliable system to identify and classify fake social media profiles using machine learning and ensemble learning techniques.',
    },
    {
      icon: AlertTriangle,
      title: 'The Challenge',
      description: 'Fake profiles spread misinformation, send spam, and manipulate online discussions, making it hard to trust social media platforms.',
    },
    {
      icon: Lightbulb,
      title: 'Our Solution',
      description: 'XGBoost model achieved 97.79% accuracy with 98.88% precision and 99.65% ROC-AUC score for fake profile detection.',
    },
  ];

  const keywords = [
    'Fake Profile Detection',
    'Machine Learning',
    'Ensemble Learning',
    'XGBoost',
    'Random Forest',
    'LightGBM',
    'Social Media Security',
    'Twitter Dataset',
  ];

  return (
    <section 
      id="abstract" 
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide uppercase">Research Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Abstract
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Abstract Text */}
          <div 
            className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-cyan-400" />
              </span>
              Research Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Social media platforms are growing rapidly, enabling people to communicate and share information online. 
              However, this growth has led to an increase in fake profiles used to spread misinformation, send spam 
              messages, and conduct malicious activities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This study presents a machine learning approach to identify social media profiles using a 
              <span className="text-cyan-400 font-semibold"> Twitter dataset from Botometer Bot Repository</span> maintained by the Observatory on Social Media at Indiana University. 
              We employed multiple algorithms including <span className="text-cyan-400 font-semibold">Random Forest, XGBoost, and LightGBM</span>, along with ensemble 
              techniques like Voting Ensemble and Stacking Ensemble.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our results demonstrate that the <span className="text-cyan-400 font-semibold">XGBoost model</span> achieved the best performance with 
              <span className="text-cyan-400 font-semibold"> 97.79% accuracy</span>, <span className="text-cyan-400 font-semibold">98.88% precision</span>, 
              <span className="text-cyan-400 font-semibold"> 98.13% recall</span>, <span className="text-cyan-400 font-semibold">98.50% F1-score</span>, and 
              <span className="text-cyan-400 font-semibold"> 99.65% ROC-AUC</span>. The ensemble models also performed exceptionally well, 
              showing that machine learning can significantly improve fake profile detection.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`glass-card rounded-xl p-5 sm:p-6 hover:border-cyan-400/40 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Keywords */}
            <div 
              className={`glass-card rounded-xl p-5 sm:p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract;
