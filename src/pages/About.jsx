import { Lightbulb, Target, Users, Zap, Globe, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="bg-brand-bg text-white min-h-screen">
      {/* Section: About Intro */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">About Creative Pair</h2>
        <p className="text-lg text-brand-soft max-w-3xl mx-auto">
          Founded on the belief that great ideas deserve exceptional execution, Creative Pair is
          where innovation meets artistry.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-6 md:px-20 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-6">Our Story</h3>
          <p className="text-brand-soft mb-6 leading-relaxed">
            Creative Pair was born from a shared vision between{" "}
            <span className="font-bold text-white">Mashal Farhat</span> and{" "}
            <span className="font-bold text-white">Ammal Raheem</span> — two passionate innovators
            who believed that the best creative solutions emerge when diverse perspectives unite
            around a common goal.
          </p>
          <p className="text-brand-soft leading-relaxed">
            Since our inception, we've been dedicated to transforming complex challenges into elegant
            solutions. Our approach combines strategic thinking with creative execution, ensuring
            every project not only meets but exceeds expectations.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-glass border border-brand-card">
            <img
              src="/images/about-placeholder.jpg"
              alt="Creative team"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-brand-secondary">2024</p>
          <p className="text-brand-soft">Founded</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-brand-primary">50+</p>
          <p className="text-brand-soft">Projects</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-brand-secondary">25+</p>
          <p className="text-brand-soft">Happy Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-brand-primary">100%</p>
          <p className="text-brand-soft">Success Rate</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 md:px-20 grid md:grid-cols-2 gap-8">
        <div className="bg-brand-card rounded-2xl p-6 shadow-glass">
          <h4 className="flex items-center gap-2 text-xl font-semibold mb-2">
            <Globe className="text-brand-secondary" /> Vision
          </h4>
          <p className="text-brand-soft">
            Empowering businesses through innovative digital solutions.
          </p>
        </div>
        <div className="bg-brand-card rounded-2xl p-6 shadow-glass">
          <h4 className="flex items-center gap-2 text-xl font-semibold mb-2">
            <Heart className="text-brand-primary" /> Mission
          </h4>
          <p className="text-brand-soft">
            Creating exceptional experiences that drive results.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-20">
        <h3 className="text-3xl font-semibold text-center mb-12">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="mx-auto mb-4 text-yellow-400 w-8 h-8" />,
              title: "Innovation",
              text: "We thrive on creative ideas and modern solutions.",
            },
            {
              icon: <Users className="mx-auto mb-4 text-blue-400 w-8 h-8" />,
              title: "Collaboration",
              text: "Teamwork and partnerships drive our success.",
            },
            {
              icon: <Zap className="mx-auto mb-4 text-purple-500 w-8 h-8" />,
              title: "Efficiency",
              text: "Delivering impactful results with speed and quality.",
            },
            {
              icon: <Target className="mx-auto mb-4 text-green-400 w-8 h-8" />,
              title: "Agility",
              text: "We adapt quickly to change and embrace challenges.",
            },
            {
              icon: <Award className="mx-auto mb-4 text-orange-400 w-8 h-8" />,
              title: "Excellence",
              text: "Striving for the highest standards in everything we do.",
            },
            {
              icon: <Heart className="mx-auto mb-4 text-red-400 w-8 h-8" />,
              title: "Empathy",
              text: "Understanding and valuing the needs of people we serve.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-card shadow-glass text-center 
                         transition transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-brand-primary/20"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-brand-soft">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
