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
  academic: { label: 'Academic', color: 'bg-red-900/20 border-red-900/30', textColor: 'text-red-100' },
  support: { label: 'Support Services', color: 'bg-green-900/20 border-green-900/30', textColor: 'text-green-100' },
  finance: { label: 'Finance', color: 'bg-blue-900/20 border-blue-900/30', textColor: 'text-blue-100' },
  'student-life': { label: 'Student Life', color: 'bg-purple-900/20 border-purple-900/30', textColor: 'text-purple-100' },
  admin: { label: 'Administration', color: 'bg-orange-900/20 border-orange-900/30', textColor: 'text-orange-100' }
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

  const quickActionTiles = portalTiles.filter(tile => tile.quickAction);

  const TileCard = ({ tile }: { tile: PortalTile }) => {
    const IconComponent = tile.icon;
    const categoryStyle = categoryConfig[tile.category];
    
    return (
      <Card className={`group hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-700 bg-gray-800/50 backdrop-blur-sm ${categoryStyle.color}`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-red-900/20 border border-red-900/30">
                <IconComponent className="h-5 w-5 text-red-200" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors">
                  {tile.title}
                </CardTitle>
              </div>
            </div>
            {tile.priority === 'high' && (
              <Badge variant="secondary" className="bg-red-900/30 text-red-200 border-red-900/50">
                Priority
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-gray-300 text-xs leading-relaxed">
            {tile.description}
          </CardDescription>
          {tile.external && (
            <div className="mt-3">
              <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                External Link
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">BAL Portal</h1>
                <p className="text-gray-400 text-sm">Faculty of Business & Law Student Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className="text-gray-300"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('list')}
                className="text-gray-300"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-red-400" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActionTiles.map(tile => (
              <div key={tile.id} className="transform hover:scale-105 transition-transform">
                <TileCard tile={tile} />
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm"
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
          <TabsList className="grid w-full grid-cols-6 bg-gray-800 border-gray-700">
            <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>All</TabsTrigger>
            <TabsTrigger value="academic" onClick={() => setSelectedCategory('academic')}>Academic</TabsTrigger>
            <TabsTrigger value="support" onClick={() => setSelectedCategory('support')}>Support</TabsTrigger>
            <TabsTrigger value="finance" onClick={() => setSelectedCategory('finance')}>Finance</TabsTrigger>
            <TabsTrigger value="student-life" onClick={() => setSelectedCategory('student-life')}>Student Life</TabsTrigger>
            <TabsTrigger value="admin" onClick={() => setSelectedCategory('admin')}>Admin</TabsTrigger>
          </TabsList>

          <div className="mt-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTiles.map(tile => (
                  <div key={tile.id} className="transform hover:scale-105 transition-transform">
                    <TileCard tile={tile} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
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
            <p className="text-gray-400">No services found matching your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Need help? Contact the ASK BAL Student Advice Centre
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/contact" className="text-red-400 hover:text-red-300 text-sm">Contact Us</Link>
              <span className="text-gray-600">|</span>
              <Link href="/appointments" className="text-red-400 hover:text-red-300 text-sm">Book Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}