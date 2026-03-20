import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Zap, Globe, Brain, Shield } from 'lucide-react';

const Conclusion = () => {
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

  const keyFindings = [
    'XGBoost achieved the highest accuracy of 97.79% with 99.65% ROC-AUC',
    'Ensemble methods (Voting & Stacking) provided stable, reliable predictions',
    'All models demonstrated high precision and recall with minimal false positives',
    'Feature engineering significantly improved detection performance',
    'Cross-validation confirmed model stability without overfitting',
  ];

  const futureWork = [
    {
      icon: Globe,
      title: 'Multi-Platform Extension',
      description: 'Extend the detection system to other social media platforms like Instagram, Facebook, and LinkedIn.',
    },
    {
      icon: Zap,
      title: 'Real-Time Detection',
      description: 'Implement real-time monitoring systems for immediate fake profile identification.',
    },
    {
      icon: Brain,
      title: 'Deep Learning Integration',
      description: 'Explore neural network architectures for improved feature representation.',
    },
  ];

  return (
    <section 
      id="conclusion" 
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide uppercase">Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Conclusion
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Main Conclusion Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Key Findings */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Key Findings</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This study proposed a machine learning framework for identifying and classifying fake social media 
                profiles using supervised learning algorithms. Multiple models including XGBoost, LightGBM, Random Forest, 
                Voting Ensemble, and Stacking Ensemble were evaluated.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The <span className="text-cyan-400 font-semibold">XGBoost model</span> achieved the best overall performance 
                with <span className="text-cyan-400 font-semibold">97.79% accuracy</span>, 
                <span className="text-cyan-400 font-semibold"> 98.50% F1-score</span>, and 
                <span className="text-cyan-400 font-semibold"> 99.65% ROC-AUC</span>. This demonstrates XGBoost's 
                excellent balance of precision and recall for fake profile classification.
              </p>
              <div className="space-y-3">
                {keyFindings.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact & Applications */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Impact & Applications</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The findings suggest that using XGBoost with ensemble methods can help achieve excellent results 
                in fake profile detection. The confusion matrix analysis showed that the system correctly identifies 
                most fake accounts while minimizing misclassification of real users.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Platform Security</div>
                    <div className="text-sm text-muted-foreground">Helps social media platforms maintain trust and safety</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Misinformation Control</div>
                    <div className="text-sm text-muted-foreground">Reduces spread of false information and spam</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Automated Detection</div>
                    <div className="text-sm text-muted-foreground">Enables real-time fake profile identification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Work */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Future Research Directions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {futureWork.map((item, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 sm:p-12 inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Making Social Media Safer
            </h3>
            <p className="text-muted-foreground mb-6">
              By identifying fake social media profiles, these systems can help make social media platforms 
              more secure and reliable, reducing the spread of false information and malicious activities.
            </p>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-background font-semibold rounded-lg transition-all duration-300 glow-cyan"
            >
              Back to Top
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
