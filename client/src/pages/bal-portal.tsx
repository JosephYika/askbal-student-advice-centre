import { useState } from 'react';
import { Link } from 'wouter';
import { 
  GraduationCap, BookOpen, UserCheck, Users, Globe, 
  FileText, Clock, AlertCircle, Heart, Pause, 
  Scale, RefreshCw, Calendar, Award, Search,
  CreditCard, TrendingUp, Headphones, HelpCircle, 
  MapPin, Phone, FileQuestion, CalendarCheck, 
  CreditCard as StudentCard, Book, Building,
  Home, ArrowLeft, Filter, Grid, List
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PortalTile {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'academic' | 'support' | 'finance' | 'student-life' | 'admin';
  priority: 'high' | 'medium' | 'low';
  quickAction?: boolean;
  external?: boolean;
  href?: string;
}

const portalTiles: PortalTile[] = [
  // Academic Services
  {
    id: 'my-marks',
    title: 'My Marks',
    description: 'View your assessment results and module grades',
    icon: GraduationCap,
    category: 'academic',
    priority: 'high',
    quickAction: true,
    external: true,
    href: '#'
  },
  {
    id: 'academic-regulations',
    title: 'Academic Regulations',
    description: 'University policies and academic guidelines',
    icon: BookOpen,
    category: 'academic',
    priority: 'medium'
  },
  {
    id: 'module-changes',
    title: 'Module Changes',
    description: 'Request changes to your module selection',
    icon: RefreshCw,
    category: 'academic',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'personal-tutors',
    title: 'Personal Tutors',
    description: 'Connect with your academic mentor',
    icon: UserCheck,
    category: 'academic',
    priority: 'high'
  },
  {
    id: 'assignments-exams',
    title: 'Assignments & Exams',
    description: 'View upcoming deadlines and exam schedules',
    icon: FileText,
    category: 'academic',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'module-programme-search',
    title: 'Staff Directory',
    description: 'Find contact details for academic staff',
    icon: Search,
    category: 'academic',
    priority: 'medium'
  },
  {
    id: 'study-support',
    title: 'Study Support',
    description: 'Academic skills and learning resources',
    icon: Book,
    category: 'academic',
    priority: 'medium'
  },
  {
    id: 'academic-appeals',
    title: 'Academic Appeals',
    description: 'Appeal academic decisions or grades',
    icon: Scale,
    category: 'academic',
    priority: 'low'
  },

  // Student Support Services
  {
    id: 'international-students',
    title: 'International Students',
    description: 'Support for international student needs',
    icon: Globe,
    category: 'support',
    priority: 'high'
  },
  {
    id: 'disability-support',
    title: 'Disability Advice & Support',
    description: 'Accessibility services and reasonable adjustments',
    icon: Heart,
    category: 'support',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'visa-advice',
    title: 'Visa Advice',
    description: 'Immigration and visa guidance',
    icon: CreditCard,
    category: 'support',
    priority: 'medium'
  },
  {
    id: 'healthy-dmu',
    title: 'Healthy DMU',
    description: 'Mental health and wellbeing support',
    icon: Heart,
    category: 'support',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'careers',
    title: 'Careers',
    description: 'Career guidance and job opportunities',
    icon: TrendingUp,
    category: 'support',
    priority: 'medium'
  },

  // Finance & Admin
  {
    id: 'student-finance',
    title: 'Student Finance',
    description: 'Fees, loans, and payment information',
    icon: CreditCard,
    category: 'finance',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'scholarships',
    title: 'Scholarships',
    description: 'Funding opportunities and bursaries',
    icon: Award,
    category: 'finance',
    priority: 'medium'
  },
  {
    id: 'registrations',
    title: 'Registrations',
    description: 'Module registration and enrollment',
    icon: FileText,
    category: 'admin',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'extensions-deferrals',
    title: 'Extensions & Deferrals',
    description: 'Request deadline extensions or assessment deferrals',
    icon: Clock,
    category: 'admin',
    priority: 'high',
    quickAction: true
  },
  {
    id: 'student-card',
    title: 'Student Card',
    description: 'Manage your student ID card',
    icon: StudentCard,
    category: 'admin',
    priority: 'medium'
  },

  // Student Life
  {
    id: 'student-gateway',
    title: 'Student Gateway',
    description: 'Central hub for student services',
    icon: Building,
    category: 'student-life',
    priority: 'high',
    external: true,
    href: '#'
  },
  {
    id: 'your-dmu-future',
    title: 'Your DMU Future',
    description: 'Graduate opportunities and alumni network',
    icon: TrendingUp,
    category: 'student-life',
    priority: 'medium'
  },
  {
    id: 'campus-buildings',
    title: 'Campus & Buildings',
    description: 'Campus maps and building information',
    icon: MapPin,
    category: 'student-life',
    priority: 'low'
  },
  {
    id: 'av-loans',
    title: 'AV Loans',
    description: 'Borrow audio-visual equipment',
    icon: Headphones,
    category: 'student-life',
    priority: 'low'
  },

  // Administrative
  {
    id: 'withdrawal',
    title: 'Withdrawal From Studies',
    description: 'Process for leaving your programme',
    icon: AlertCircle,
    category: 'admin',
    priority: 'low'
  },
  {
    id: 'pause-studies',
    title: 'Pause My Studies',
    description: 'Temporary suspension of studies',
    icon: Pause,
    category: 'admin',
    priority: 'low'
  },
  {
    id: 'change-programme',
    title: 'Change of Programme',
    description: 'Transfer to a different course',
    icon: RefreshCw,
    category: 'admin',
    priority: 'medium'
  },
  {
    id: 'change-timetable',
    title: 'Change of Timetable',
    description: 'Modify your class schedule',
    icon: Calendar,
    category: 'admin',
    priority: 'medium'
  },
  {
    id: 'apprenticeship',
    title: 'Apprenticeship Degrees',
    description: 'Information about degree apprenticeships',
    icon: Award,
    category: 'admin',
    priority: 'low'
  },

  // Information & Support
  {
    id: 'academic-glossary',
    title: 'Academic Glossary',
    description: 'Definitions of university terminology',
    icon: Book,
    category: 'student-life',
    priority: 'low'
  },
  {
    id: 'student-handbook',
    title: 'Student Handbook',
    description: 'Complete guide to student life at DMU',
    icon: Book,
    category: 'student-life',
    priority: 'medium'
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'Important phone numbers and email addresses',
    icon: Phone,
    category: 'student-life',
    priority: 'medium'
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Technical help and computer services',
    icon: Headphones,
    category: 'support',
    priority: 'medium'
  },
  {
    id: 'faqs',
    title: 'FAQs',
    description: 'Frequently asked questions and answers',
    icon: HelpCircle,
    category: 'support',
    priority: 'medium'
  },
  {
    id: 'appointments',
    title: 'Appointments',
    description: 'Book meetings with advisors and staff',
    icon: CalendarCheck,
    category: 'support',
    priority: 'high',
    quickAction: true
  }
];

const categoryConfig = {
  academic: { label: 'Academic', color: 'bg-[#990033]/5 border-[#990033]/20', textColor: 'text-[#990033]' },
  support: { label: 'Support Services', color: 'bg-[#2B5F57]/5 border-[#2B5F57]/20', textColor: 'text-[#2B5F57]' },
  finance: { label: 'Finance', color: 'bg-[#990033]/5 border-[#990033]/20', textColor: 'text-[#990033]' },
  'student-life': { label: 'Student Life', color: 'bg-[#2B5F57]/5 border-[#2B5F57]/20', textColor: 'text-[#2B5F57]' },
  admin: { label: 'Administration', color: 'bg-gray-50 border-gray-200', textColor: 'text-gray-700' }
};

export default function BALPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTiles = portalTiles.filter(tile => {
    const matchesSearch = tile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tile.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tile.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const TileCard = ({ tile }: { tile: PortalTile }) => {
    const IconComponent = tile.icon;
    
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:border-[#990033]/30 transform hover:scale-105 h-32 w-full">
        <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center">
          <div className="mb-3">
            <div className="p-2 rounded-lg bg-[#990033]/10 border border-[#990033]/20 inline-flex">
              <IconComponent className="h-5 w-5 text-[#990033]" />
            </div>
          </div>
          <CardTitle className="text-sm font-semibold text-gray-900 group-hover:text-[#990033] transition-colors leading-tight">
            {tile.title}
          </CardTitle>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#990033] shadow-lg border-b border-[#990033] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-gray-200 hover:bg-white/10 transition-all duration-300 group focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#990033]"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-8 w-px bg-white/30" />
              <h1 className="text-2xl font-bold text-white">BAL Portal</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Badge variant="outline" className="text-white border-white/40 bg-white/10">
                36 Services
              </Badge>
              <Badge variant="outline" className="text-white border-white/40 bg-white/10">
                5 Categories
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <div className="bg-[#2B5F57] rounded-2xl mx-4 sm:mx-6 lg:mx-8 mt-8 p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Student Services Hub
        </h2>
        <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
          Your comprehensive hub for student services, academic support, and administrative processes. 
          Find everything you need to succeed in your studies at the Faculty of Business & Law.
        </p>
        
        {/* Quick Category Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
            onClick={() => setSelectedCategory('academic')}
          >
            <div className="flex flex-col items-center space-y-2">
              <BookOpen className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-semibold text-white text-sm">Academic</h3>
                <p className="text-xs text-white/70 mt-1">Support</p>
              </div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
            onClick={() => setSelectedCategory('support')}
          >
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-semibold text-white text-sm">Support</h3>
                <p className="text-xs text-white/70 mt-1">Services</p>
              </div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
            onClick={() => setSelectedCategory('finance')}
          >
            <div className="flex flex-col items-center space-y-2">
              <CreditCard className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-semibold text-white text-sm">Finance</h3>
                <p className="text-xs text-white/70 mt-1">& Funding</p>
              </div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
            onClick={() => setSelectedCategory('student-life')}
          >
            <div className="flex flex-col items-center space-y-2">
              <Heart className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-semibold text-white text-sm">Student</h3>
                <p className="text-xs text-white/70 mt-1">Life</p>
              </div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 p-6 h-auto text-center transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2B5F57]"
            onClick={() => setSelectedCategory('admin')}
          >
            <div className="flex flex-col items-center space-y-2">
              <FileText className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-semibold text-white text-sm">Admin</h3>
                <p className="text-xs text-white/70 mt-1">Services</p>
              </div>
            </div>
          </Button>
        </div>
      </div>



      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="border-[#990033] text-[#990033] hover:bg-[#990033] hover:text-white"
              >
                Clear All
              </Button>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-[#990033] text-white' : 'text-gray-600'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-[#990033] text-white' : 'text-gray-600'}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Showing {filteredTiles.length} of {portalTiles.length} services
              {selectedCategory !== 'all' && (
                <span className="ml-2 text-[#990033] font-medium">
                  in {categoryConfig[selectedCategory as keyof typeof categoryConfig]?.label}
                </span>
              )}
            </p>
          </div>

          <div className="mt-8">
            {viewMode === 'grid' ? (
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {filteredTiles.map(tile => (
                    <div key={tile.id} className="transform hover:scale-105 transition-transform">
                      <TileCard tile={tile} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTiles.map(tile => (
                    <div key={tile.id} className="transform hover:scale-[1.02] transition-transform">
                      <TileCard tile={tile} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {filteredTiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No services found matching your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 border-[#990033] text-[#990033] hover:bg-[#990033] hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Need help? Contact the ASK BAL Student Advice Centre
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/#contact" className="text-[#990033] hover:text-[#2B5F57] text-sm font-medium">Contact Us</Link>
              <span className="text-gray-400">|</span>
              <Link href="/appointments" className="text-[#990033] hover:text-[#2B5F57] text-sm font-medium">Book Appointment</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}