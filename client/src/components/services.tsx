import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, GraduationCap, HandHeart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Assessment Support",
      items: [
        "Assessment deferral applications",
        "Extenuating circumstances guidance",
        "Academic procedure information",
        "Response time: 10-15 working days",
      ],
    },
    {
      icon: GraduationCap,
      title: "Academic Guidance",
      items: [
        "Timetable information",
        "University procedures",
        "Form assistance",
        "General academic queries",
      ],
    },
    {
      icon: HandHeart,
      title: "Student Support",
      items: [
        "Direction to specialist services",
        "Day-to-day student queries",
        "Wellbeing support referrals",
        "Academic success planning",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-heading" className="text-3xl font-bold text-center text-dmu-text mb-12">
          We Help With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-50 border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-[#990033] mb-2" />
                  <h3 className="text-xl font-semibold text-dmu-text text-center">{service.title}</h3>
                </div>
                <ul className="text-dmu-text-light space-y-2 text-center">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-center">• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
