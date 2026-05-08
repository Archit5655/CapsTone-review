// src/sections/ResultsGallery.tsx

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Target,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const graphs = [
  {
    title: "XGBoost Feature Importance",
    description:
      "Most influential features used by the XGBoost model for fake account detection.",
    image: "/outputs/06_feature_importance_xgboost.png",
    icon: BrainCircuit,
  },
  {
    title: "Random Forest Feature Importance",
    description:
      "Feature ranking learned by the Random Forest classifier.",
    image: "/outputs/06_feature_importance_randomforest.png",
    icon: BarChart3,
  },
  {
    title: "LightGBM Feature Importance",
    description:
      "Top predictive indicators identified by the LightGBM model.",
    image: "/outputs/06_feature_importance_lightgbm.png",
    icon: TrendingUp,
  },
  {
    title: "Confusion Matrices",
    description:
      "Visualization of prediction accuracy and classification errors.",
    image: "/outputs/confusion_matrices.png",
    icon: ShieldCheck,
  },
  {
    title: "Precision Recall Curves",
    description:
      "Tradeoff between precision and recall across models.",
    image: "/outputs/precision_recall_curves.png",
    icon: Target,
  },
  {
    title: "Enhanced Model Comparison",
    description:
      "Performance comparison of all machine learning models.",
    image: "/outputs/model_comparison_enhanced.png",
    icon: TrendingUp,
  },
];

export default function ResultsGallery() {
  return (
    <section
      id="visual-results"
      className="relative py-24 overflow-hidden bg-black"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-6">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              AI Analytics
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Model Visualizations
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            Advanced visual analysis of our machine learning models used
            for fake account and bot detection. These insights demonstrate
            feature importance, prediction accuracy, precision-recall
            performance, and comparative model evaluation.
          </p>
        </motion.div>

        {/* Graph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {graphs.map((graph, index) => {
            const Icon = graph.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_0_40px_rgba(0,255,255,0.08)]
                  hover:shadow-[0_0_60px_rgba(0,255,255,0.15)]
                  transition-all
                  duration-500
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />

                {/* Image Container */}
                <div className="relative bg-slate-950 p-6 flex items-center justify-center min-h-[420px]">
                  <img
                    src={graph.image}
                    alt={graph.title}
                    className="
                      max-w-full
                      max-h-[380px]
                      object-contain
                      rounded-2xl
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="p-3 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/10">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {graph.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    {graph.description}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}