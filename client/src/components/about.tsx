import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import whatWeDoImage from "@assets/WhatWeDo_1752590026705.jpg";
import whatWeDo2Image from "@assets/WhatWeDo2_1752590163562.jpg";

export default function About() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 id="about-heading" className="text-3xl font-bold text-dmu-text mb-6">
              What We Do
            </h2>
            <p className="text-lg text-dmu-text-light mb-6 leading-relaxed text-justify">
              Welcome to our <strong>Faculty of Business & Law (BAL) Student Advice Centre</strong>, where we are dedicated to empowering students on their educational journey. With a team of experienced advisors and a wealth of resources at your disposal, we are here to provide guidance and support during your studies.
            </p>
            <p className="text-lg text-dmu-text-light mb-8 lg:mb-8 leading-relaxed text-justify">
              Our mission is to ensure <strong>your success and well-being</strong> throughout your academic endeavours. We serve as the main point of contact for information about timetables, university procedures, forms, specialist support, and day-to-day questions for the largest faculty at the university, serving 10,000 students.
            </p>

            <Card className="bg-[#990033] text-white border-0 mt-20 lg:mt-0">
              <CardContent className="p-6 text-center lg:text-left">
                <h3 className="text-xl font-semibold mb-3">Don't Wait - Get Help Early</h3>
                <p className="mb-4">
                  If you are struggling with anything during the year, we highly encourage you to contact us as soon as possible, so that we can advise you on the necessary steps.
                </p>
                <Button
                  className="bg-white text-[#990033] border-2 border-white hover:bg-[#990033] hover:text-white hover:border-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-200"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="relative mb-16 lg:mb-0">
            <img
              src={whatWeDoImage}
              alt="Student Advice Centre reception area with staff assisting students at De Montfort University"
              className="w-full rounded-lg shadow-lg transform translate-y-0 lg:-translate-y-12"
            />
            <img
              src={whatWeDo2Image}
              alt="Student Advice Centre staff providing personalized support and guidance to students"
              className="absolute bottom-0 left-1/2 w-4/5 rounded-lg shadow-xl border-4 border-white transform -translate-x-1/2 translate-y-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
