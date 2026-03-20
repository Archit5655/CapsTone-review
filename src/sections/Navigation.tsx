import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Abstract', href: '#abstract' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Results', href: '#results' },
    { label: 'Conclusion', href: '#conclusion' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 glass border-b border-cyan-500/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group"
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-cyan-500/20' : 'bg-cyan-500/10'
              } group-hover:bg-cyan-500/30`}>
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-white text-sm">Fake Account</span>
                <span className="text-xs text-muted-foreground block -mt-0.5">Detection Research</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-cyan-500/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#results"
                onClick={(e) => handleNavClick(e, '#results')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-background' 
                    : 'glass-card hover:border-cyan-400/50 text-white'
                }`}
              >
                View Results
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg glass-card flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-20 left-4 right-4 glass-card rounded-2xl p-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-white hover:bg-cyan-500/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-cyan-500/10">
            <a
              href="#results"
              onClick={(e) => handleNavClick(e, '#results')}
              className="block w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-background font-medium rounded-lg text-center transition-colors"
            >
              View Results
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
