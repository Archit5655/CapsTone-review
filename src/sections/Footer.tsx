import { Shield, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Abstract', href: '#abstract' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Results', href: '#results' },
    { label: 'Conclusion', href: '#conclusion' },
  ];

  const technologies = [
    'XGBoost',
    'Random Forest',
    'LightGBM',
    'Ensemble Learning',
    'Python',
    'Scikit-learn',
  ];

  const authors = [
    'Purshotam Kumar',
    'Premananda Sahu',
    'Parisha Handa',
    'Aryan Upadhyay',
    'Madhav Gupta',
    'Archit Garg',
  ];

  return (
    <footer className="relative py-16 overflow-hidden border-t border-cyan-500/10">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Fake Profile Detection</h3>
                <p className="text-xs text-muted-foreground">ML Research Project</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              A comprehensive machine learning research project focused on identifying and classifying 
              fake social media profiles using XGBoost, ensemble learning, and advanced feature engineering techniques.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Lovely Professional University, Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-white mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Authors */}
        <div className="py-8 border-t border-cyan-500/10 mb-8">
          <h4 className="text-sm font-semibold text-white mb-4">Research Authors</h4>
          <div className="flex flex-wrap gap-3">
            {authors.map((author, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-sm bg-cyan-500/5 text-muted-foreground rounded-lg border border-cyan-500/10"
              >
                {author}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Fake Social Media Profile Detection Research. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Dept. of CSE, Lovely Professional University</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
