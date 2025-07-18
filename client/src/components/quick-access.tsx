import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, HelpCircle, ArrowRight } from "lucide-react";

export default function QuickAccess() {
  const quickLinks = [
    {
      icon: GraduationCap,
      title: "BAL Portal",
      description:
        "Extensions, Deferrals, Change of Timetable, Change of Programme, Search for Tutors.",
      href: "#portal",
    },
    {
      icon: Calendar,
      title: "Assessment Deferrals",
      description:
        "Apply for assessment deferrals due to extenuating circumstances.",
      href: "#deferrals",
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description:
        "Find answers to frequently asked questions about academic procedures.",
      href: "#faqs",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="quick-access-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="quick-access-heading"
          className="text-3xl font-bold text-center text-dmu-text mb-12"
        >
          Quick Access
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#990033] rounded-full p-3 mr-4">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dmu-text">
                    {link.title}
                  </h3>
                </div>
                <p className="text-dmu-text-light mb-4">{link.description}</p>
                <Button
                  className="btn-primary inline-flex items-center"
                  onClick={() => {
                    // Handle navigation based on link type
                    if (link.href === "#portal") {
                      window.location.href =
                        "mailto:askbalstudentadvice@dmu.ac.uk?subject=Student Portal Access";
                    } else if (link.href === "#deferrals") {
                      window.location.href =
                        "mailto:askbalstudentadvice@dmu.ac.uk?subject=Assessment Deferral Application";
                    } else if (link.href === "#faqs") {
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.title === "BAL Portal"
                    ? "Access Portal"
                    : link.title === "Assessment Deferrals"
                      ? "Apply Now"
                      : "Browse FAQs"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
