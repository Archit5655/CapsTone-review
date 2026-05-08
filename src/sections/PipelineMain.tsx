// src/sections/PipelineSimulation.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Play,
  CheckCircle2,
  Cpu,
  Shield,
  Activity,
} from "lucide-react";

const terminalLines = [
  "[INFO] Initializing Fake Account Detection Pipeline...",
  "[INFO] Loading dataset: TwitterBotDataset.csv",
  "[INFO] Cleaning and preprocessing data...",
  "[INFO] Extracting behavioral features...",
  "[INFO] Training Random Forest model...",
  "[SUCCESS] Random Forest Accuracy: 97.38%",
  "[INFO] Training LightGBM model...",
  "[SUCCESS] LightGBM Accuracy: 97.61%",
  "[INFO] Training XGBoost model...",
  "[SUCCESS] XGBoost Accuracy: 97.79%",
  "[INFO] Generating feature importance plots...",
  "[INFO] Creating confusion matrices...",
  "[INFO] Generating precision-recall curves...",
  "[SUCCESS] All plots saved to outputs/ folder",
  "[SUCCESS] Pipeline execution completed successfully.",
];

const stats = [
  {
    title: "Best Accuracy",
    value: "97.79%",
    subtitle: "XGBoost",
    icon: Shield,
  },
  {
    title: "Best F1 Score",
    value: "98.50%",
    subtitle: "Ensemble Model",
    icon: Activity,
  },
  {
    title: "ROC-AUC",
    value: "99.65%",
    subtitle: "XGBoost",
    icon: Cpu,
  },
];

const modelResults = [
  {
    model: "Random Forest",
    accuracy: "97.38%",
    precision: "98.77%",
    recall: "97.08%",
    f1: "98.22%",
  },
  {
    model: "LightGBM",
    accuracy: "97.61%",
    precision: "98.83%",
    recall: "97.93%",
    f1: "98.58%",
  },
  {
    model: "XGBoost",
    accuracy: "97.79%",
    precision: "98.88%",
    recall: "98.13%",
    f1: "98.50%",
  },
];

export default function     PipelineMain() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const runSimulation = () => {
    setVisibleLines([]);
    setRunning(true);
    setCompleted(false);

    let currentLines: string[] = [];

    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        currentLines = [...currentLines, line];
        setVisibleLines([...currentLines]);

        if (index === terminalLines.length - 1) {
          setRunning(false);
          setCompleted(true);
        }
      }, index * 850);
    });
  };

  return (
    <section className="relative py-24 bg-[#020817] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 text-cyan-400 text-sm tracking-widest uppercase mb-4">
            <Terminal className="w-4 h-4" />
            Results & Visualization
          </div>

          <h2 className="text-5xl font-bold text-white mb-5">
            Run the Pipeline
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Simulate execution of the machine learning pipeline for fake
            account and bot detection in real time.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-[#061325]
            overflow-hidden
            shadow-[0_0_60px_rgba(0,255,255,0.12)]
          "
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#071a31]">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-cyan-400" />

              <div className="text-white font-medium">
                python main.py
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={running}
              className="
                flex items-center gap-2
                px-5 py-2 rounded-xl
                bg-cyan-500 hover:bg-cyan-400
                text-black font-semibold
                transition duration-300
                disabled:opacity-50
              "
            >
              <Play className="w-4 h-4" />

              {running ? "Running..." : "Run Pipeline"}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="bg-black px-6 py-6 font-mono text-sm min-h-[420px]">
            {!running && visibleLines.length === 0 && (
              <div className="text-slate-500">
                Click "Run Pipeline" to execute main.py
              </div>
            )}

            {visibleLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`mb-3 ${
                  line.includes("[SUCCESS]")
                    ? "text-green-400"
                    : line.includes("[INFO]")
                    ? "text-cyan-300"
                    : "text-white"
                }`}
              >
                {line}
              </motion.div>
            ))}

            {/* Cursor */}
            {running && (
              <div className="flex items-center gap-1 text-cyan-400">
                <span>$</span>
                <span className="animate-pulse">█</span>
              </div>
            )}
          </div>

          {/* Results */}
          {completed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-[#07111f]"
            >
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={index}
                      className="
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        p-6
                      "
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-slate-400 text-sm">
                          {stat.title}
                        </div>

                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>

                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {stat.value}
                      </div>

                      <div className="text-slate-500 text-sm">
                        {stat.subtitle}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 text-sm">
                      <th className="text-left py-4">Model</th>
                      <th className="text-left py-4">Accuracy</th>
                      <th className="text-left py-4">Precision</th>
                      <th className="text-left py-4">Recall</th>
                      <th className="text-left py-4">F1 Score</th>
                    </tr>
                  </thead>

                  <tbody>
                    {modelResults.map((model, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="py-5 text-white font-medium">
                          {model.model}
                        </td>

                        <td className="py-5 text-cyan-400">
                          {model.accuracy}
                        </td>

                        <td className="py-5 text-slate-300">
                          {model.precision}
                        </td>

                        <td className="py-5 text-slate-300">
                          {model.recall}
                        </td>

                        <td className="py-5 text-green-400 font-semibold">
                          {model.f1}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="mt-10 flex items-center gap-3 text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                Pipeline execution completed successfully.
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}