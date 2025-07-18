import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import dmuLogo from "@assets/DMU Logo_1752527394887.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Help", href: "#services" },
    { name: "BAL Portal", href: "/bal-portal" },
    { name: "Contact", href: "#contact" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-300 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* DMU Logo and ASK BAL */}
          <div className="flex items-center">
            <img
              src={dmuLogo}
              alt="De Montfort University Logo"
              className="h-12 w-auto"
            />
            <div className="ml-3">
              <h1 className="text-lg font-semibold text-dmu-primary">ASK BAL</h1>
              <p className="text-sm text-dmu-text-light">Student Advice Centre</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dmu-text hover:text-dmu-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-3 py-2 hover:bg-gray-50 transform hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav role="navigation" aria-label="Mobile navigation" className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-dmu-text hover:text-dmu-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded hover:bg-gray-50 transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
