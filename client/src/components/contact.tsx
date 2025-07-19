import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import richardContactImage from "@assets/RichardContactUs_1752591903331.jpg";
import hughAstonContactImage from "@assets/HughAstonContactUs_1752592103664.jpg";
import emailContactUsImage from "@assets/EmailContactUs_1752593547856.png";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 3-5 working days.",
      contact: "askbalstudentadvice@dmu.ac.uk",
      href: "mailto:askbalstudentadvice@dmu.ac.uk",
      image: emailContactUsImage,
      imageAlt: "DMU student Dylan composing email to Student Advice Centre about starting studies",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our advisors directly during office hours.",
      contact: "+44 (0)116 257 7243",
      href: "tel:+441162577243",
      image: richardContactImage,
      imageAlt: "Student advisor Richard providing phone support with headset in office environment",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office in person during opening hours.",
      contact: "Hugh Aston Building, Student Advice Centre",
      address: "The Newarke, Leicester LE2 7BY",
      href: "#location",
      image: hughAstonContactImage,
      imageAlt: "Hugh Aston Building entrance with students walking through modern university facility",
    },
  ];

  const schoolContacts = [
    {
      school: "School of Leadership, Management & Marketing",
      email: "adminlmm@dmu.ac.uk",
      phone: "0116 366 4898",
    },
    {
      school: "School of Accounting, Finance & Economics",
      email: "admin.afe@dmu.ac.uk",
      phone: "0116 257 7300",
    },
    {
      school: "Leicester De Montfort Law School",
      email: "adminlaw@dmu.ac.uk",
      phone: "0116 250 6357",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="text-3xl font-bold text-center text-dmu-text mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <CardContent className="p-6 text-center">
                <img
                  src={method.image}
                  alt={method.imageAlt}
                  className="w-full h-48 object-cover object-center rounded-lg mb-4"
                />
                <div className="bg-[#990033] rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dmu-text mb-2">{method.title}</h3>
                <p className="text-dmu-text-light mb-4">{method.description}</p>
                {method.title === "Visit Us" ? (
                  <div className="text-[#990033] font-medium">
                    <p>{method.contact}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Hugh+Aston+Building+De+Montfort+University+The+Newarke+Leicester+LE2+7BY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm mt-1 text-dmu-text-light hover:text-[#990033] underline transition-colors duration-200 block"
                    >
                      {method.address}
                    </a>
                    <p className="text-sm mt-2 text-dmu-text-light">Mon-Thu: 9:00 AM - 4:30 PM</p>
                    <p className="text-sm text-dmu-text-light">Fri: 9:00 AM - 4:00 PM</p>
                  </div>
                ) : (
                  <a
                    href={method.href}
                    className="text-[#990033] hover:text-[#660022] font-medium break-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"
                  >
                    {method.contact}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* School Contacts */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dmu-text mb-6 text-center">
              School Contacts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:grid-rows-[auto_1fr]">
              {schoolContacts.map((school, index) => (
                <div key={index} className="text-center flex flex-col">
                  <div className="h-16 flex items-start justify-center mb-1">
                    <h4 className="text-lg font-semibold text-dmu-text leading-tight">{school.school}</h4>
                  </div>
                  <div className="flex-1 flex flex-col justify-start">
                    <p className="text-dmu-text-light mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      <a
                        href={`mailto:${school.email}`}
                        className="text-[#990033] hover:text-[#660022] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"
                      >
                        {school.email}
                      </a>
                    </p>
                    <p className="text-dmu-text-light">
                      <Phone className="inline h-4 w-4 mr-2" />
                      <a
                        href={`tel:+44${school.phone.replace(/\s/g, '')}`}
                        className="text-[#990033] hover:text-[#660022] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"
                      >
                        {school.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-dmu-text-light mt-6">
              Unsure who to contact?{" "}
              <a
                href="/programme-finder"
                className="text-[#990033] hover:text-[#660022] underline transition-colors duration-200"
              >
                Check which school your programme belongs to.
              </a>
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-[#990033] rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">DON'T WAIT</h3>
          <p className="text-lg mb-6">
            If you're facing any challenges, contact the Student Advice Centre early. We're here to support students with clear guidance and necessary steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#990033] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              onClick={() => window.location.href = 'mailto:askbalstudentadvice@dmu.ac.uk'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#990033] px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              onClick={() => window.location.href = 'tel:+441162577243'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
