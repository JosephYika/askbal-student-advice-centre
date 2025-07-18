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
    title: 'Module & Programme Leader Search',
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
    const categoryStyle = categoryConfig[tile.category];
    
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:border-[#990033]/20 transform hover:scale-105 h-full">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between min-h-[80px]">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-[#990033]/10 border border-[#990033]/20 flex-shrink-0">
                <IconComponent className="h-6 w-6 text-[#990033]" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-[#990033] transition-colors line-clamp-2">
                  {tile.title}
                </CardTitle>
              </div>
            </div>
            {tile.priority === 'high' && (
              <Badge variant="secondary" className="bg-[#2B5F57] text-white flex-shrink-0">
                Priority
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex-1">
          <CardDescription className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
            {tile.description}
          </CardDescription>
          {tile.external && (
            <div className="mt-3">
              <Badge variant="outline" className="text-xs border-[#2B5F57] text-[#2B5F57]">
                External Link
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#990033] to-[#2B5F57] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white/80 hover:bg-white/10 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-bold mb-4">BAL Portal</h1>
            <p className="text-xl mb-6 text-white/90">
              Faculty of Business & Law Student Services
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your comprehensive hub for student services, academic support, and administrative processes. 
              Find everything you need to succeed in your studies at DMU.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">36</div>
                <div className="text-white/80">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-white/80">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Online Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-[#990033]" />
              <span className="text-gray-700 font-medium">Filter Services:</span>
            </div>
            <div className="flex items-center space-x-2">
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
      </div>

      <div className="container mx-auto px-4 py-8">


        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-[#990033]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 rounded-md px-4 py-3 text-sm h-12"
              >
                <option value="all">All Categories</option>
                {Object.entries(categoryConfig).map(([key, config]) => (
                  <option key={key} value={key}>{config.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={selectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-gray-200">
            <TabsTrigger value="all" onClick={() => setSelectedCategory('all')} className="data-[state=active]:bg-[#990033] data-[state=active]:text-white">All</TabsTrigger>
            <TabsTrigger value="academic" onClick={() => setSelectedCategory('academic')} className="data-[state=active]:bg-[#990033] data-[state=active]:text-white">Academic</TabsTrigger>
            <TabsTrigger value="support" onClick={() => setSelectedCategory('support')} className="data-[state=active]:bg-[#2B5F57] data-[state=active]:text-white">Support</TabsTrigger>
            <TabsTrigger value="finance" onClick={() => setSelectedCategory('finance')} className="data-[state=active]:bg-[#990033] data-[state=active]:text-white">Finance</TabsTrigger>
            <TabsTrigger value="student-life" onClick={() => setSelectedCategory('student-life')} className="data-[state=active]:bg-[#2B5F57] data-[state=active]:text-white">Student Life</TabsTrigger>
            <TabsTrigger value="admin" onClick={() => setSelectedCategory('admin')} className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">Admin</TabsTrigger>
          </TabsList>

          <div className="mt-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTiles.map(tile => (
                  <div key={tile.id} className="transform hover:scale-105 transition-transform flex">
                    <TileCard tile={tile} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTiles.map(tile => (
                  <div key={tile.id} className="transform hover:scale-[1.02] transition-transform">
                    <TileCard tile={tile} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Tabs>

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
      </div>
    </div>
  );
}