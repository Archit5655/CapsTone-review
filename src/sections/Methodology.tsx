import { useEffect, useRef, useState } from 'react';
import { 
  Database, 
  Settings, 
  Cpu, 
  BarChart3, 
  Users, 
  Activity, 
  FileText, 
  MessageCircle,
  CheckCircle2,
  Globe
} from 'lucide-react';

const Methodology = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const datasetFeatures = [
    { label: 'Followers Count', icon: Users },
    { label: 'Following Count', icon: Users },
    { label: 'Tweets Count', icon: MessageCircle },
    { label: 'Account Age', icon: Activity },
    { label: 'Retweet Frequency', icon: Activity },
    { label: 'Profile Details', icon: FileText },
  ];

  const featureCategories = [
    {
      category: 'Profile Metadata',
      icon: Users,
      items: [
        'Number of followers & following',
        'Follower-following ratio',
        'Profile completeness',
        'Account age',
        'Bio length',
      ],
      formula: 'R = Followers / (Following + 1)',
    },
    {
      category: 'Activity-Based',
      icon: Activity,
      items: [
        'Tweets per day',
        'Posting frequency',
        'Retweet ratio',
        'Time between posts',
        'Activity patterns',
      ],
    },
    {
      category: 'Content-Based',
      icon: FileText,
      items: [
        'Keyword frequency analysis',
        'Hashtag usage patterns',
        'Sentiment analysis',
        'Text preprocessing (URLs, punctuation)',
        'Content uniqueness',
      ],
    },
    {
      category: 'Engagement Metrics',
      icon: MessageCircle,
      items: [
        'Number of likes received',
        'Retweets received',
        'Reply frequency',
        'Interaction patterns',
        'Engagement authenticity',
      ],
    },
  ];

  const models = [
    {
      name: 'Random Forest',
      description: 'Ensemble algorithm creating multiple decision trees and aggregating results through majority voting.',
      accuracy: '97.38%',
      auc: '99.54%',
      color: 'from-green-500/20 to-green-600/10',
    },
    {
      name: 'XGBoost',
      description: 'Gradient Boosting with regularization to reduce overfitting. Each new tree corrects errors of previous trees.',
      accuracy: '97.79%',
      auc: '99.65%',
      color: 'from-cyan-500/20 to-cyan-600/10',
      highlight: true,
    },
    {
      name: 'LightGBM',
      description: 'Optimized Gradient Boosting framework using leaf-wise tree growth strategy for faster training.',
      accuracy: '97.61%',
      auc: '99.62%',
      color: 'from-blue-500/20 to-blue-600/10',
    },
    {
      name: 'Voting Ensemble',
      description: 'Combines predictions from multiple models through voting to improve reliability and stability.',
      accuracy: '97.76%',
      auc: '99.63%',
      color: 'from-purple-500/20 to-purple-600/10',
    },
    {
      name: 'Stacking Ensemble',
      description: 'Uses meta-classifier to combine predictions from base models for enhanced performance.',
      accuracy: '97.76%',
      auc: '99.64%',
      color: 'from-pink-500/20 to-pink-600/10',
    },
  ];

  return (
    <section 
      id="methodology" 
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Settings className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide uppercase">Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Methodology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive six-step machine learning pipeline: data acquisition, 
            preprocessing, feature extraction, model construction, ensemble learning, and performance evaluation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Dataset Overview */}
        <div className={`mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Data Collection</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Twitter dataset from <span className="text-cyan-400">Botometer Bot Repository</span> maintained by the Observatory on Social Media at Indiana University. 
              The dataset contains labeled profiles (real and fake) with comprehensive user behavior and profile information.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {datasetFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                  <feature.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-white">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preprocessing */}
        <div className={`mb-16 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Preprocessing & Feature Engineering</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wide">Data Cleaning</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Missing data handling with statistical imputation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Label Encoding & One-Hot Encoding for categorical features
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Min-Max Normalization for feature standardization
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Class imbalance handling with oversampling/undersampling
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wide">Normalization Formula</h4>
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 font-mono text-sm text-cyan-400">
                  X<sub>norm</sub> = (X - X<sub>min</sub>) / (X<sub>max</sub> - X<sub>min</sub>)
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Where X is the original value, X<sub>min</sub> is the minimum, and X<sub>max</sub> is the maximum value for that feature.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Engineering */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-semibold text-white">Multimodal Feature Extraction</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCategories.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-5 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">{feature.category}</h4>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {feature.formula && (
                  <div className="mt-4 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-xs font-mono text-cyan-400">{feature.formula}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ML Models */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-semibold text-white">Machine Learning Models</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, index) => (
              <div 
                key={index}
                className={`relative rounded-xl p-6 overflow-hidden transition-all duration-300 ${
                  model.highlight 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-2 border-cyan-400/50' 
                    : 'glass-card hover:border-cyan-400/30'
                }`}
              >
                {model.highlight && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-semibold bg-cyan-400 text-background rounded-full">
                      Best
                    </span>
                  </div>
                )}
                <h4 className="text-lg font-semibold text-white mb-2">{model.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyan-500/10">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Accuracy</span>
                    <p className={`text-xl font-bold ${model.highlight ? 'text-cyan-400' : 'text-white'}`}>
                      {model.accuracy}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">ROC-AUC</span>
                    <p className={`text-xl font-bold ${model.highlight ? 'text-cyan-400' : 'text-white'}`}>
                      {model.auc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Implementation */}
        <div className={`mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Web-Based Implementation</h3>
            </div>
            <p className="text-muted-foreground">
              A user-friendly web interface was developed to demonstrate the fake profile detection model in action. 
              Users can input profile information such as follower count, following count, tweet frequency, and engagement metrics. 
              The trained machine learning model then analyzes these inputs and predicts whether the profile is likely real or fake, 
              showcasing real-world applicability of the detection system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
