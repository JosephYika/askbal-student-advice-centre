// Import UI components and assets
import { Button } from "@/components/ui/button";        // Custom button component from shadcn/ui
import CubeText from "@/components/ui/cube-text";       // 3D cube text animation component
import hughAstonImage from "@assets/HughAston_Front_1752527078511.jpg"; // DMU building image

/**
 * Hero Component - Main landing section of the website
 * 
 * PURPOSE: Creates a split-screen hero section with DMU branding
 * CONNECTS TO: 
 * - CubeText component for 3D animation effects
 * - Button components for navigation actions
 * - Services and Contact sections via smooth scrolling
 * 
 * RESPONSIVE DESIGN:
 * - Mobile: 70/30 split (text/image)
 * - Tablet: 70/30 split with larger text
 * - Desktop: 50/50 split with full-size content
 * - iPhone SE: Full-width text section
 */
export default function Hero() {

  return (
    // Main hero section container with accessibility support
    <section
      className="relative min-h-[60vh] lg:min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"  // Links to the main heading for screen readers
    >
      {/* Split-screen container - divides hero into left text and right image */}
      <div className="flex w-full min-h-[60vh] lg:min-h-screen relative">
        
        {/* LEFT SIDE: Burgundy background with text content and call-to-action buttons */}
        <div 
          className="w-[70%] sm:w-[70%] lg:w-1/2 max-[375px]:w-full flex items-center justify-center px-3 sm:px-6 lg:px-16 py-8 lg:py-20 relative z-10"
          style={{
            // DMU brand gradient background (burgundy variations)
            background: `linear-gradient(135deg, #990033 0%, #7A0029 50%, #660022 100%)`
          }}
        >
          {/* Text content container with fade-in animation */}
          <div className="max-w-sm lg:max-w-xl text-white animate-fade-in-up text-center lg:text-left">
            
            {/* Main heading with gradient accent text */}
            <h2 
              id="hero-heading"  // Referenced by aria-labelledby for accessibility
              className="text-xl md:text-2xl lg:text-5xl font-bold mb-4 lg:mb-8"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',  // Improves text readability
                lineHeight: '1.3'  // Optimized line spacing to prevent character overlap
              }}
            >
              Supporting Students from{" "}
              {/* Gradient text effect for key phrase */}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Enrolment to Graduation
              </span>
            </h2>
            
            {/* Faculty identification subtitle */}
            <p className="text-xs md:text-sm lg:text-xl mb-2 lg:mb-4 font-medium opacity-95">
              Faculty of Business & Law Student Advice Centre
            </p>
            
            {/* Descriptive text about the service */}
            <p className="text-xs md:text-sm lg:text-lg mb-4 lg:mb-10 text-gray-100 leading-relaxed">
              Your central hub for academic support, guidance, and resources. 
              We're here to empower your educational journey every step of the way.
            </p>
            
            {/* Call-to-action button container */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 items-center lg:items-start">
              
              {/* Primary CTA button - navigates to BAL Portal */}
              <Button
                size="lg"
                className="bg-white text-[#990033] hover:bg-gray-100 font-semibold px-8 sm:px-6 lg:px-12 py-4 sm:py-3 lg:py-5 text-base sm:text-sm lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-h-[48px]"
                onClick={() => window.location.href = '/bal-portal'}
              >
                Get Started
              </Button>
              
              {/* Secondary CTA button - navigates to services section */}
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white px-8 sm:px-6 lg:px-12 py-4 sm:py-3 lg:py-5 text-base sm:text-sm lg:text-xl hover:bg-white hover:text-[#990033] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold w-full sm:w-auto min-h-[48px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* RIGHT SIDE: Hugh Aston building image with overlays and interactive elements */}
        <div 
          className="w-[30%] sm:w-[30%] lg:w-1/2 relative max-[375px]:hidden"  // Hidden on very small screens
          style={{
            backgroundImage: `url(${hughAstonImage})`,  // DMU building background
            backgroundSize: 'cover',                     // Ensures image covers full container
            backgroundPosition: 'center'                 // Centers image for best crop
          }}
        >
          {/* Dark overlay for better text contrast and visual cohesion */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* 3D Cube Text - Top Right Corner */}
          <div className="absolute top-12 right-4 z-20 animate-fade-in-up">
            {/* Custom 3D cube component displaying "2025" with DMU branding */}
            <CubeText text="2025" className="" />
          </div>
          
          {/* Building identification card - positioned responsively */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 lg:bottom-8 lg:right-8 lg:items-end lg:justify-end lg:pb-0 z-10">
            {/* Semi-transparent card with blur effect */}
            <div className="bg-black/60 backdrop-blur-sm rounded px-1 py-0.5 lg:px-3 lg:py-2 border-l lg:border-l-4 border-[#990033] animate-fade-in-up">
              
              {/* Building name */}
              <p className="text-xs lg:text-sm font-medium text-white text-center lg:text-left" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                Hugh Aston Building
              </p>
              
              {/* University name */}
              <p className="text-xs lg:text-xs text-gray-200 text-center lg:text-left" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                De Montfort University
              </p>
              
              {/* Decorative vertical line indicator matching DMU brand color */}
              <div className="w-0.5 h-1 lg:h-4 bg-[#990033] mx-auto mt-0.5 lg:mt-1 opacity-80"></div>
            </div>
          </div>
        </div>
        

      </div>
      

    </section>
  );
}