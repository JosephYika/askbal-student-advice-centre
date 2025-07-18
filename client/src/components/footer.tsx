import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Student Portal", href: "#portal" },
    { name: "Assessment Deferrals", href: "#deferrals" },
    { name: "FAQs", href: "#faqs" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">ASK BAL</h3>
            <p className="text-gray-300 text-sm">
              Faculty of Business & Law Student Advice Centre - Supporting your academic journey from enrolment to graduation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <Mail className="inline h-4 w-4 mr-2" />
                askbalstudentadvice@dmu.ac.uk
              </p>
              <p>
                <Phone className="inline h-4 w-4 mr-2" />
                +44 (0)116 257 7243
              </p>
              <p>
                <MapPin className="inline h-4 w-4 mr-2" />
                Hugh Aston Building
              </p>
              <p>Student Advice Centre</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Monday - Thursday: 9:00 AM - 4:30 PM</p>
              <p>Friday: 9:00 AM - 4:00 PM</p>
              <p>Email response: 3-5 working days</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2025 De Montfort University. All rights reserved. |{" "}
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            >
              Accessibility
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
