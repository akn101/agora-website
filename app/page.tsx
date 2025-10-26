import Image from "next/image";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/logo.svg"
              alt="Agora Logo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight">
            Agora
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A world where no refugee has to feel alone
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-50 transition-all hover:scale-105 shadow-lg border-2 border-slate-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* What is Agora Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            What is Agora?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Agora is a secure, community-driven mobile platform designed to help refugees overcome social isolation by connecting with others who share their cultural, linguistic, and regional backgrounds. Built in collaboration with refugee support organisations and global experts, Agora is designed to be simple, safe, and scalable — giving refugees the tools they need to create their own meaningful support networks.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/aknHatchet - Agora - Screenshot 00000.png"
                alt="Agora App Screenshot - Groups"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/aknHatchet - Agora - Screenshot 00001.png"
                alt="Agora App Screenshot - Chat"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            At its core, Agora is about <strong>belonging</strong>: it empowers refugees to take control of their social integration journey by forming or joining localised digital communities, hosting and attending events, and engaging in conversation in their own language, within groups tailored to their identity and experience.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            The Problem
          </h2>
          <div className="prose prose-lg mx-auto text-slate-700">
            <p className="text-lg leading-relaxed mb-6">
              Social isolation is one of the most urgent and under-addressed challenges facing refugees today. Refugees often arrive in unfamiliar cities, separated from family and friends, unable to speak the local language, and unsure of how to find others like them.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              This isolation can lead to severe mental health challenges — including anxiety, depression, and PTSD — and can slow or even prevent successful integration into new communities.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Research Found:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-slate-900 font-bold mr-3">•</span>
                  <span>Over two-thirds of refugees felt isolated when they first arrived</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-900 font-bold mr-3">•</span>
                  <span>Half felt like outsiders in the UK</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-900 font-bold mr-3">•</span>
                  <span>Many had no idea how to meet others from their country or culture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-900 font-bold mr-3">•</span>
                  <span>Current services were either unsafe, hard to access, or lacked autonomy</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed italic text-center">
              Agora was built to directly address these gaps — with input from refugees themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            The Solution
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Agora is a mobile app that allows refugees to join or create digital groups with others who share their language, nationality, gender, age, and location. These groups function like small, trusted communities where users can chat, organise meetups, share advice, and build friendships — all within a secure, moderated environment.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Group Discovery</h3>
              <p className="text-slate-600 leading-relaxed">
                Join or create groups based on shared identity, language, and location. Find your community with hyperlocal filtering.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Secure Chat</h3>
              <p className="text-slate-600 leading-relaxed">
                End-to-end encrypted messaging in your own language. Connect, plan, and build friendships safely.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Safety First</h3>
              <p className="text-slate-600 leading-relaxed">
                Peer-to-peer verification, AI moderation, and panic button protection for real-world meetups.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Event Hosting</h3>
              <p className="text-slate-600 leading-relaxed">
                Propose and attend real-life group meetups. Cultural events, language practice, local walks, and more.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multilingual</h3>
              <p className="text-slate-600 leading-relaxed">
                Customized onboarding in your preferred language. Connect with others who speak your language.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Privacy Protected</h3>
              <p className="text-slate-600 leading-relaxed">
                Minimal data collection. Non-precise location. End-to-end encryption. Your privacy is paramount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Impact & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Launch Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-lg">May 2025</p>
                    <p className="text-slate-300">Launch in Slough with Slough Refugee Support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-lg">December 2025</p>
                    <p className="text-slate-300">National expansion through charity partnerships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-lg">Mid-2026</p>
                    <p className="text-slate-300">International rollout: Hong Kong, United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Backed by Experts</h3>
              <ul className="space-y-4 text-slate-300">
                <li><strong className="text-white">Dina Haynes</strong>, Yale Law School</li>
                <li><strong className="text-white">Adio Dinika</strong>, Distributed AI Research Institute</li>
                <li><strong className="text-white">Vivian Cheung</strong>, Equal Justice Hong Kong</li>
                <li><strong className="text-white">Jean Kelly</strong>, Slough Refugee Support</li>
                <li><strong className="text-white">Uday Khemka</strong>, Khemka Foundation & UNHCR Partner</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-light italic text-slate-200">
              A world where no refugee has to feel alone
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Get Involved
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join us in building a world where no refugee has to feel alone.
            We&apos;re always looking for passionate individuals and organizations to partner with.
          </p>
          <ContactButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="/logo.svg"
            alt="Agora Logo"
            width={60}
            height={60}
            className="mx-auto mb-6 opacity-80"
          />
          <p className="text-slate-600 mb-2">
            &copy; {new Date().getFullYear()} Agora. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            an akn innovation
          </p>
        </div>
      </footer>
    </div>
  );
}
