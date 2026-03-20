import { useEffect, useRef, useState } from 'react';
import { Trophy, BarChart2, Target, CheckCircle, XCircle, TrendingUp, Award } from 'lucide-react';

const Results = () => {
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

  const performanceData = [
    { model: 'Random Forest', accuracy: 97.76, precision: 98.77, recall: 97.68, f1: 98.22, auc: 99.54, color: 'bg-green-500' },
    { model: 'XGBoost', accuracy: 97.79, precision: 98.88, recall: 98.13, f1: 98.50, auc: 99.65, color: 'bg-cyan-500', highlight: true },
    { model: 'LightGBM', accuracy: 97.61, precision: 98.83, recall: 97.93, f1: 98.38, auc: 99.62, color: 'bg-blue-500' },
    { model: 'Voting Ensemble', accuracy: 97.76, precision: 98.83, recall: 98.13, f1: 98.48, auc: 99.63, color: 'bg-purple-500' },
    { model: 'Stacking Ensemble', accuracy: 97.76, precision: 98.68, recall: 98.28, f1: 98.48, auc: 99.64, color: 'bg-pink-500' },
  ];

  const modelRanking = [
    { rank: 1, model: 'XGBoost', score: 99.65, metric: 'ROC-AUC' },
    { rank: 2, model: 'Stacking Ensemble', score: 99.64, metric: 'ROC-AUC' },
    { rank: 3, model: 'Voting Ensemble', score: 99.63, metric: 'ROC-AUC' },
    { rank: 4, model: 'LightGBM', score: 99.62, metric: 'ROC-AUC' },
    { rank: 5, model: 'Random Forest', score: 99.54, metric: 'ROC-AUC' },
  ];

  return (
    <section 
      id="results" 
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide uppercase">Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Experimental Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive evaluation of machine learning models demonstrating 
            XGBoost's superior performance in fake profile detection.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Performance Comparison Table */}
        <div className={`mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-6 sm:p-8 overflow-x-auto">
            <div className="flex items-center gap-3 mb-6">
              <BarChart2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Model Performance Comparison</h3>
            </div>
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Model</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Accuracy</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Precision</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Recall</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">F1-Score</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">ROC-AUC</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-cyan-500/10 ${row.highlight ? 'bg-cyan-500/5' : ''}`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${row.color}`} />
                        <span className={`font-medium ${row.highlight ? 'text-cyan-400' : 'text-white'}`}>
                          {row.model}
                        </span>
                        {row.highlight && (
                          <span className="px-2 py-0.5 text-xs bg-cyan-400 text-background rounded-full">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={`text-lg font-bold ${row.highlight ? 'text-cyan-400' : 'text-white'}`}>
                        {(row.accuracy).toFixed(4)}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-white">{(row.precision).toFixed(4)}</td>
                    <td className="text-center py-4 px-4 text-white">{(row.recall).toFixed(4)}</td>
                    <td className="text-center py-4 px-4 text-white">{(row.f1).toFixed(4)}</td>
                    <td className="text-center py-4 px-4">
                      <span className={`font-bold ${row.highlight ? 'text-cyan-400' : 'text-white'}`}>
                        {(row.auc).toFixed(4)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Metrics & Model Ranking Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Best Model Highlight */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full border-2 border-cyan-400/30">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Best Model: XGBoost</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                XGBoost achieved the highest performance across all metrics, demonstrating its effectiveness 
                in fake profile detection through gradient boosting and regularization techniques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">97.79%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">98.88%</div>
                  <div className="text-xs text-muted-foreground">Precision</div>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">98.13%</div>
                  <div className="text-xs text-muted-foreground">Recall</div>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">99.65%</div>
                  <div className="text-xs text-muted-foreground">ROC-AUC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Ranking */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Model Ranking by ROC-AUC</h3>
              </div>
              <div className="space-y-3">
                {modelRanking.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      item.rank === 1 ? 'bg-cyan-400 text-background' : 
                      item.rank === 2 ? 'bg-cyan-400/60 text-background' :
                      item.rank === 3 ? 'bg-cyan-400/40 text-background' :
                      'bg-cyan-500/10 text-cyan-400'
                    }`}>
                      {item.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-white">{item.model}</span>
                        <span className="text-sm text-cyan-400 font-medium">{item.score}%</span>
                      </div>
                      <div className="h-2 bg-cyan-500/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${(item.score - 99.5) * 200}%` : '0%',
                            transitionDelay: `${400 + index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Confusion Matrix */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Confusion Matrix - XGBoost</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              The confusion matrix shows XGBoost's classification performance with minimal errors. 
              The model correctly classified 1,942 fake profiles and 673 real profiles with very few misclassifications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-medium uppercase">True Positive</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">1,942</div>
                <div className="text-xs text-muted-foreground">Fake profiles correctly identified</div>
              </div>
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-medium uppercase">True Negative</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">673</div>
                <div className="text-xs text-muted-foreground">Real profiles correctly identified</div>
              </div>
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-xs text-red-400 font-medium uppercase">False Positive</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">22</div>
                <div className="text-xs text-muted-foreground">Real profiles marked as fake</div>
              </div>
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-yellow-400 font-medium uppercase">False Negative</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">37</div>
                <div className="text-xs text-muted-foreground">Fake profiles missed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
