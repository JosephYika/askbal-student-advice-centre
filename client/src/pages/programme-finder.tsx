import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calculator, Users, Scale, ArrowLeft, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface Programme {
  name: string;
  level: string;
  code: string;
  school: "LMM" | "AFE" | "Law";
}

const programmes: Programme[] = [
  // School of Leadership, Management & Marketing (LMM)
  { name: "Business Management", level: "BA (Hons)", code: "BM001", school: "LMM" },
  { name: "Marketing", level: "BA (Hons)", code: "MK001", school: "LMM" },
  { name: "International Business", level: "BA (Hons)", code: "IB001", school: "LMM" },
  { name: "Human Resource Management", level: "BA (Hons)", code: "HR001", school: "LMM" },
  { name: "Strategic Management", level: "MSc", code: "SM001", school: "LMM" },
  { name: "Digital Marketing", level: "MSc", code: "DM001", school: "LMM" },
  { name: "Entrepreneurship", level: "BA (Hons)", code: "EN001", school: "LMM" },
  { name: "Project Management", level: "MSc", code: "PM001", school: "LMM" },
  { name: "Retail Management", level: "BA (Hons)", code: "RM001", school: "LMM" },
  { name: "Business Leadership", level: "MBA", code: "BL001", school: "LMM" },

  // School of Accounting, Finance & Economics (AFE)
  { name: "Accounting and Finance", level: "BA (Hons)", code: "AF001", school: "AFE" },
  { name: "Economics", level: "BA (Hons)", code: "EC001", school: "AFE" },
  { name: "Financial Mathematics", level: "BSc (Hons)", code: "FM001", school: "AFE" },
  { name: "Investment and Finance", level: "BSc (Hons)", code: "IF001", school: "AFE" },
  { name: "Banking and Finance", level: "BA (Hons)", code: "BF001", school: "AFE" },
  { name: "Business Economics", level: "BA (Hons)", code: "BE001", school: "AFE" },
  { name: "Accounting", level: "BA (Hons)", code: "AC001", school: "AFE" },
  { name: "Financial Economics", level: "MSc", code: "FE001", school: "AFE" },
  { name: "Applied Economics", level: "MSc", code: "AE001", school: "AFE" },
  { name: "Corporate Finance", level: "MSc", code: "CF001", school: "AFE" },

  // Leicester De Montfort Law School (Law)
  { name: "Law", level: "LLB (Hons)", code: "LW001", school: "Law" },
  { name: "Law with Criminology", level: "LLB (Hons)", code: "LC001", school: "Law" },
  { name: "International Law", level: "LLB (Hons)", code: "IL001", school: "Law" },
  { name: "Business Law", level: "LLB (Hons)", code: "BL002", school: "Law" },
  { name: "Criminal Law", level: "LLM", code: "CL001", school: "Law" },
  { name: "Human Rights Law", level: "LLM", code: "HR002", school: "Law" },
  { name: "Commercial Law", level: "LLM", code: "CM001", school: "Law" },
  { name: "European Law", level: "LLM", code: "EL001", school: "Law" },
  { name: "Legal Practice", level: "LPC", code: "LP001", school: "Law" },
  { name: "Bar Practice Course", level: "BPC", code: "BP001", school: "Law" },
];

const schoolInfo = {
  LMM: {
    name: "School of Leadership, Management & Marketing",
    icon: Users,
    email: "adminlmm@dmu.ac.uk",
    phone: "0116 366 4898",
    color: "bg-[#820628]/5 border-[#820628]/20",
    iconColor: "text-[#820628]",
    cardBackground: "bg-gradient-to-br from-[#2B5F57]/5 to-[#2B5F57]/15 border-[#2B5F57]/20",
  },
  AFE: {
    name: "School of Accounting, Finance & Economics",
    icon: Calculator,
    email: "admin.afe@dmu.ac.uk",
    phone: "0116 257 7300",
    color: "bg-[#820628]/5 border-[#820628]/20",
    iconColor: "text-[#820628]",
    cardBackground: "bg-gradient-to-br from-[#2B5F57]/10 to-[#2B5F57]/20 border-[#2B5F57]/30",
  },
  Law: {
    name: "Leicester De Montfort Law School",
    icon: Scale,
    email: "adminlaw@dmu.ac.uk",
    phone: "0116 250 6357",
    color: "bg-[#820628]/5 border-[#820628]/20",
    iconColor: "text-[#820628]",
    cardBackground: "bg-gradient-to-br from-[#2B5F57]/15 to-[#2B5F57]/25 border-[#2B5F57]/40",
  },
};

export default function ProgrammeFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const filteredProgrammes = programmes.filter((programme) => {
    const matchesSearch = programme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         programme.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSchool = selectedSchool === "" || programme.school === selectedSchool;
    return matchesSearch && matchesSchool;
  });

  const programmesBySchool = filteredProgrammes.reduce((acc, programme) => {
    if (!acc[programme.school]) {
      acc[programme.school] = [];
    }
    acc[programme.school].push(programme);
    return acc;
  }, {} as Record<string, Programme[]>);

  const totalProgrammes = filteredProgrammes.length;
  const schoolCount = Object.keys(programmesBySchool).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-[#2B5F57] shadow-lg border-b border-[#2B5F57] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-gray-200 hover:bg-white/10 transition-all duration-300 group focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-8 w-px bg-white/30" />
              <h1 className="text-2xl font-bold text-white">School Finder</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Badge variant="outline" className="text-white border-white/40 bg-white/10">
                {totalProgrammes} Programme{totalProgrammes !== 1 ? 's' : ''}
              </Badge>
              <Badge variant="outline" className="text-white border-white/40 bg-white/10">
                {schoolCount} School{schoolCount !== 1 ? 's' : ''}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-[#2B5F57] rounded-2xl p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Find Your Administration Team
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
            The Faculty of Business and Law is made up of three schools. Each school has its own administration team — please contact the correct team for your programme.
          </p>
          
          {/* School Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
              onClick={() => setSelectedSchool("AFE")}
            >
              <div className="flex flex-col items-center space-y-2">
                <Calculator className="h-8 w-8 text-white" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Accounting, Finance and Economics</h3>
                  <p className="text-xs text-white/70 mt-1">(AFE)</p>
                </div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
              onClick={() => setSelectedSchool("LMM")}
            >
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-8 w-8 text-white" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Leadership, Management and Marketing</h3>
                  <p className="text-xs text-white/70 mt-1">(LMM)</p>
                </div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
              onClick={() => setSelectedSchool("Law")}
            >
              <div className="flex flex-col items-center space-y-2">
                <Scale className="h-8 w-8 text-white" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Leicester De Montfort Law School</h3>
                  <p className="text-xs text-white/70 mt-1">(Law)</p>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search programmes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedSchool === "" ? "default" : "outline"}
                onClick={() => setSelectedSchool("")}
                className={selectedSchool === "" ? "bg-[#820628] hover:bg-[#820628]/90 text-white" : "hover:bg-[#820628]/10"}
              >
                All Schools
              </Button>
              <Button
                variant={selectedSchool === "LMM" ? "default" : "outline"}
                onClick={() => setSelectedSchool("LMM")}
                className={selectedSchool === "LMM" ? "bg-[#820628] hover:bg-[#820628]/90 text-white" : "hover:bg-[#820628]/10"}
              >
                LMM
              </Button>
              <Button
                variant={selectedSchool === "AFE" ? "default" : "outline"}
                onClick={() => setSelectedSchool("AFE")}
                className={selectedSchool === "AFE" ? "bg-[#820628] hover:bg-[#820628]/90 text-white" : "hover:bg-[#820628]/10"}
              >
                AFE
              </Button>
              <Button
                variant={selectedSchool === "Law" ? "default" : "outline"}
                onClick={() => setSelectedSchool("Law")}
                className={selectedSchool === "Law" ? "bg-[#820628] hover:bg-[#820628]/90 text-white" : "hover:bg-[#820628]/10"}
              >
                Law
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        {Object.keys(programmesBySchool).length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No programmes found</h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search terms or selecting a different school filter.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSchool("");
                }}
                variant="outline"
                className="hover:bg-[#820628]/10 hover:border-[#820628]/30 hover:text-[#820628]"
              >
                Clear all filters
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(programmesBySchool).map(([school, schoolProgrammes]) => {
              const schoolData = schoolInfo[school as keyof typeof schoolInfo];
              const Icon = schoolData.icon;
              
              return (
                <Card key={school} className={`${schoolData.cardBackground} shadow-xl border-2 overflow-hidden hover:shadow-2xl transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div className={`p-3 rounded-2xl bg-white ${schoolData.iconColor} shadow-lg`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {schoolData.name}
                          </h3>
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary" className="bg-white/80 text-[#820628]">
                              {schoolProgrammes.length} programme{schoolProgrammes.length !== 1 ? 's' : ''}
                            </Badge>
                            <Badge variant="outline" className="border-[#820628]/30 text-[#820628]">
                              {school}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 min-w-fit">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-[#820628]" />
                          Contact Information
                        </h4>
                        <div className="space-y-2">
                          <a
                            href={`mailto:${schoolData.email}`}
                            className="flex items-center text-sm text-gray-700 hover:text-[#820628] transition-colors duration-200 group"
                          >
                            <Mail className="h-4 w-4 mr-2 group-hover:text-[#820628]" />
                            {schoolData.email}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                          <a
                            href={`tel:${schoolData.phone.replace(/\s/g, '')}`}
                            className="flex items-center text-sm text-gray-700 hover:text-[#820628] transition-colors duration-200 group"
                          >
                            <Phone className="h-4 w-4 mr-2 group-hover:text-[#820628]" />
                            {schoolData.phone}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {schoolProgrammes.map((programme) => (
                        <div
                          key={programme.code}
                          className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#2B5F57]/30 hover:shadow-[#2B5F57]/10 transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <Badge variant="outline" className="text-xs border-[#820628]/30 text-[#820628] group-hover:bg-[#820628]/5">
                              {programme.code}
                            </Badge>
                            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                              {programme.level}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2 leading-snug group-hover:text-[#820628] transition-colors duration-200">
                            {programme.name}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                            <span className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {school}
                            </span>
                            <span className="group-hover:text-[#820628] transition-colors duration-200">
                              View details →
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Don't Wait Section */}
        <div className="mt-16 text-center bg-[#990033] rounded-lg p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">DON'T WAIT</h3>
          <p className="text-lg mb-6">
            If you're facing any challenges, contact the Student Advice Centre early. We're here to support students with clear guidance and necessary steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#990033] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#990033]"
              onClick={() => window.location.href = 'mailto:askbalstudentadvice@dmu.ac.uk'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#990033] px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#990033]"
              onClick={() => window.location.href = 'tel:+441162577243'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#820628]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#820628]/20 transition-colors duration-300">
                <ArrowLeft className="h-8 w-8 text-[#820628] rotate-180" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Back to Homepage</h3>
              <p className="text-sm text-gray-600 mb-4">Return to the main Student Advice Centre page</p>
              <Link href="/">
                <Button variant="outline" className="hover:bg-[#820628]/10 hover:border-[#820628]/30 hover:text-[#820628]">
                  Go Home
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#820628]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#820628]/20 transition-colors duration-300">
                <ExternalLink className="h-8 w-8 text-[#820628]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">DMU Website</h3>
              <p className="text-sm text-gray-600 mb-4">Visit the main DMU website for more information</p>
              <Button 
                variant="outline" 
                className="hover:bg-[#820628]/10 hover:border-[#820628]/30 hover:text-[#820628]"
                onClick={() => window.open('https://www.dmu.ac.uk', '_blank')}
              >
                Visit DMU
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#820628]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#820628]/20 transition-colors duration-300">
                <MapPin className="h-8 w-8 text-[#820628]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Us</h3>
              <p className="text-sm text-gray-600 mb-4">Get directions to our Student Advice Centre</p>
              <Button 
                variant="outline" 
                className="hover:bg-[#820628]/10 hover:border-[#820628]/30 hover:text-[#820628]"
                onClick={() => window.open('https://maps.google.com/maps?q=Hugh+Aston+Building+Leicester+LE2+7BY', '_blank')}
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#2B5F57] text-white py-12" role="contentinfo">
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
                <li>
                  <a
                    href="#portal"
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Student Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#deferrals"
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Assessment Deferrals
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#resources"
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Resources
                  </a>
                </li>
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
    </div>
  );
}