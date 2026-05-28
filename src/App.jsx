import profile from './assets/profile.png'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import emailjs from "@emailjs/browser";
import { useRef } from "react";
export default function SaraswathiPortfolio() {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

       emailjs
        .sendForm(
        "service_vum2vr9",
        "template_f7gco9o",
        form.current,
        "temMGCbv8cCquuhRg"
        )
        .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
         }
        );
    };
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden scroll-smooth">
       <CustomCursor />
       <ParticlesBackground />
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-slate-900">
            Saraswathi S<span className="text-red-500">.</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {[
              'Home',
              'About',
              'Skills',
              'Services',
              'Projects',
              'Experience',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-32"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="uppercase tracking-[0.3em] text-red-500 font-semibold mb-4">
        Welcome to my portfolio
      </p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-slate-900">
        Hi, I'm <br />
        <span className="text-red-500">Saraswathi S</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Full-Stack Web Developer",
          2000,
          "Python Flask Developer",
          2000,
          "Software Engineering Enthusiast",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl md:text-3xl font-semibold text-red-500 mb-6 block"
      />

      <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mb-10">
        Enthusiastic B.Tech Information Technology student passionate
        about full-stack web development, software engineering, and
        building practical web-based solutions.
      </p>

      <div className="flex flex-wrap gap-5">
        <a
          href="#projects"
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-red-300 inline-block"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-2xl border border-slate-300 bg-white/70 backdrop-blur-md font-semibold hover:scale-105 transition-all duration-300 hover:border-red-400 inline-block"
        >
          Hire Me
        </a>

        <a
           href="/resume.pdf"
           target="_blank" rel="noreferrer"
          className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:scale-105 transition-all duration-300 inline-block"
        >
          View Resume
        </a>
        <a
           href="/resume.pdf"
           download
          className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:scale-105 transition-all duration-300 inline-block"
        >
          Download Resume
        </a>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute w-96 h-96 rounded-full bg-red-200 blur-3xl opacity-50"></div>

      <div className="relative bg-white/40 backdrop-blur-2xl p-5 rounded-[40px] shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500">
        <img
          src={profile}
          alt="Saraswathi"
          className="w-[420px] h-[520px] object-cover rounded-[30px] animate-[float_4s_ease-in-out_infinite]"
        />
      </div>
    </motion.div>

  </div>
</section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] font-semibold mb-4">
              About Me
            </p>
            <h2 className="text-5xl font-bold text-slate-900">
              Passionate About Building Modern Web Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                I am a B.Tech Information Technology student with strong
                interest in full-stack web development, backend engineering,
                database management, and software design.
              </p>

              <p>
                I enjoy creating modern web applications that solve real-world
                problems and improve user experiences.
              </p>

              <p>
                I continuously explore new technologies and focus on improving
                my technical, communication, and teamwork skills.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'B.Tech Information Technology',
                  place: 'The Kavery Engineering College, Salem',
                  year: 'Expected Graduation: 2027',
                  score: 'Current Score: 94.2%',
                },
                {
                  title: 'HSC',
                  place: 'Government Higher Secondary School',
                  year: 'Graduated: 2022',
                },
                {
                  title: 'SSLC',
                  place: 'Government Higher Secondary School',
                  year: 'Graduated: 2020',
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-xl p-7 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-slate-600">{edu.place}</p>
                  <p className="text-slate-500 mt-2">{edu.year}</p>
                  <p className="text-red-500 font-semibold mt-1">
                    {edu.score}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              ['10+', 'Projects Completed'],
              ['15+', 'Technologies Learned'],
              ['1', 'Internship Experience'],
              ['94.2%', 'Academic Score'],
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-red-50 p-8 rounded-3xl text-center shadow-lg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-4xl font-black text-red-500 mb-2">
                  {item[0]}
                </h3>
                <p className="text-slate-600 font-medium">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] font-semibold mb-4">
              Skills
            </p>
            <h2 className="text-5xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Frontend Development',
                skills: ['HTML', 'CSS', 'JavaScript'],
              },
              {
                title: 'Backend Development',
                skills: ['Python', 'Flask', 'API Development'],
              },
              {
                title: 'Database Management',
                skills: ['MySQL', 'CRUD Operations'],
              },
              {
                title: 'Software Development',
                skills: ['Problem Solving', 'Full-Stack Development'],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition-all duration-300 border border-slate-100"
              >
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill}</span>
                        <span className="text-red-500">90%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 w-[90%]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] font-semibold mb-4">
              Services
            </p>
            <h2 className="text-5xl font-bold">What I Can Do</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Full-Stack Web Development',
              'Backend Development using Flask',
              'Database Design & Management',
              'Dynamic Web Application Development',
              'Inventory & Billing Solutions',
              'Management System Development',
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-4 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 text-3xl mb-6 group-hover:scale-110 transition-all duration-300">
                  ✦
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {service}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Modern, scalable, and responsive solutions built with clean
                  UI and strong backend architecture.
                </p>

                <button className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-red-500 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] font-semibold mb-4">
              Experience
            </p>
            <h2 className="text-5xl font-bold">Internship Experience</h2>
          </div>

          <div className="relative border-l-4 border-red-400 pl-10">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-red-500 shadow-lg"></div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold mb-2">
                Intern – Web Development & Full-Stack Development
              </h3>
              <p className="text-red-500 font-semibold text-lg mb-2">
                ThinkInfo Expert Solutions
              </p>
              <p className="text-slate-500 mb-6">Duration: Two Weeks</p>

              <ul className="space-y-3 text-slate-600 text-lg">
                <li>• Developed dynamic web applications</li>
                <li>• Worked with Flask, MySQL, HTML, CSS, JavaScript</li>
                <li>• Built CRUD operations</li>
                <li>• Backend integration & API development</li>
                <li>• Responsive web application development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] font-semibold mb-4">
              Portfolio
            </p>
            <h2 className="text-5xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                title: 'College Management System',
                features: [
                  'Student management',
                  'Faculty management',
                  'Attendance',
                  'Timetable',
                  'Fee management',
                ],
              },
              {
                title: 'Smart Student Attendance Management System',
                features: [
                  'Online attendance',
                  'Parent notifications',
                  'SMS/Email alerts',
                  'Absentee tracking',
                ],
              },
              {
                title: 'Cloth Store Management System',
                features: [
                  'Inventory management',
                  'Billing system',
                  'Sales tracking',
                  'Profit monitoring',
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-[30px] overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Flask', 'MySQL', 'JavaScript'].map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-red-100 text-red-500 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-slate-600 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-red-500 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] font-semibold mb-4">
              Contact
            </p>
            <h2 className="text-5xl font-bold mb-8">Let's Work Together</h2>

            <div className="space-y-6 text-lg">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold mb-2">Phone</h3>
                <p>9047750953</p>
                <p>7092356324</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold mb-2">Email</h3>
                <p>
                  <a
                    href="mailto:kitchasaraswathi@gmail.com"
                    className="text-red-500"
                  >
                    kitchasaraswathi@gmail.com
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold mb-2">GitHub</h3>
                <p>github.com/kitchasaraswathi-cmyk</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <p>linkedin.com/in/saraswathi-s-88681a2a3</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[30px] shadow-2xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
             >
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-red-400"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-red-400"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-red-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
               Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-black">
              SS<span className="text-red-500">.</span>
            </h2>
            <p className="text-slate-400 mt-2">
              Full-Stack Developer & Software Engineering Enthusiast
            </p>
          </div>

          <div className="flex gap-6 text-slate-300">
            <a href="#home" className="hover:text-red-400 transition-all">
              Home
            </a>
            <a href="#projects" className="hover:text-red-400 transition-all">
              Projects
            </a>
            <a href="#contact" className="hover:text-red-400 transition-all">
              Contact
            </a>
          </div>

          <div className="text-slate-500 text-sm">
            © 2026 Saraswathi S. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
