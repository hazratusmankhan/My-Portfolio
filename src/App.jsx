import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Brain, 
  Code, 
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  User,
  Menu,
  X,
  Download,
  Award,
  ArrowUp,
  FileText,
  Send,
  Globe,
  CheckCircle,
  Zap,
  MessageSquare,
  Server,
  Eye,
  Cloud,
  FileBadge
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const roles = ["AI Engineer", "Computer Vision Specialist", "Software Engineer"];
  
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Presentations", value: "3" },
    { label: "Certifications", value: "5" }
  ];

  const services = [
    {
      title: "Computer Vision Systems",
      desc: "Developing advanced detection models using YOLOv8, Vision Transformers (ViT), and OpenCV for real-time monitoring.",
      icon: Eye,
      color: "cyan"
    },
    {
      title: "Generative AI & RAG",
      desc: "Building intelligent chatbots and Q&A systems using LangChain, Groq, and Pinecone for document-aware interactions.",
      icon: MessageSquare,
      color: "fuchsia"
    },
    {
      title: "MLOps & Cloud Deployment",
      desc: "Orchestrating automated ML pipelines and deploying scalable models using n8n, Docker, AWS, and Flask.",
      icon: Server,
      color: "cyan"
    }
  ];

  const education = [
    {
      degree: "MS Software Engineering",
      school: "Cecos University Peshawar",
      year: "2024 - 2026",
      grade: "Completed",
      desc: "Focusing on advanced AI research and software architecture."
    },
    {
      degree: "BS Software Engineering",
      school: "Cecos University Peshawar",
      year: "2020 - 2024",
      grade: "Completed",
      desc: "Strong foundation in software engineering principles. Completed comprehensive coursework in AI and Machine Learning."
    }
  ];

  const certifications = [
    {
      title: "Intro to AI & ML on Google Cloud",
      provider: "Coursera",
      icon: Cloud,
      link: "https://www.coursera.org/account/accomplishments/verify/257NHH90Y6GL",
      desc: "Deployed scalable AI solutions using Google Cloud Vertex AI."
    },
    {
      title: "AWS Cloud Technical Essentials",
      provider: "Coursera",
      icon: Server,
      link: "https://www.coursera.org/account/accomplishments/verify/0YD6ZLWEDDQF",
      desc: "Fundamental proficiency in AWS architecture and services."
    },
     {
      title: "Introduction to DevOps",
      provider: "Coursera",
      icon: Layers,
      link: "https://www.coursera.org/account/accomplishments/verify/DCBHZGQMDMRT",
      desc: "Test Driven Development (TDD), CI/CD, Cross-Functional Collaboration."
    },
    {
      title: "Programming for Everybody (Python)",
      provider: "Coursera",
      icon: Code,
      link: "https://www.coursera.org/account/accomplishments/verify/NN4T2WB2N5DB",
      desc: "Advanced Python scripting and data structures mastery."
    },
     {
      title: "Deep Learning Specialization",
      provider: "Coursera",
      icon: Brain,
      link: "https://www.coursera.org",
      desc: "Mastered neural networks, CNNs, RNNs, LSTM, and Transformers."
    },
  ];

  const presentations = [
    {
      title: "ICT Pasha Awards",
      platform: "Competition",
      date: "Aug 2024",
      readTime: "Finalist",
      link: "#"
    },
    {
      title: "Research Presentation",
      platform: "ICTIS UET Peshawar",
      date: "Apr 2024",
      readTime: "Conference",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "Traffic Management System",
      category: "Computer Vision",
      description: "Engineered a comprehensive system detecting vehicles, helmets, and license plates (OCR) using three fine-tuned YOLOv8 models.",
      tech: ["YOLOv8", "OpenCV", "Transfer Learning"],
      gradient: "from-cyan-900 to-blue-900",
      github: "#",
      demo: "#"
    },
    {
      title: "RAG-Based Intelligent Chatbot",
      category: "GenAI",
      description: "End-to-end document-aware Q&A system using Pinecone vector search and Groq LLM with a Gradio interface.",
      tech: ["LangChain", "Pinecone", "Groq", "Gradio"],
      gradient: "from-fuchsia-900 to-purple-900",
      github: "#",
      demo: "#"
    },
    {
      title: "Honey Adulteration Detection",
      category: "ML",
      description: "Deployed a hyperspectral detection system using classical ML algorithms (SVM, XGBoost) served via a Flask API.",
      tech: ["Scikit-learn", "XGBoost", "Flask"],
      gradient: "from-cyan-900/80 to-emerald-900/80",
      github: "#",
      demo: "#"
    },
    {
      title: "Interactive ML Dashboards",
      category: "Data Viz",
      description: "Developed user-friendly Streamlit web applications allowing stakeholders to interact with complex ML model results.",
      tech: ["Streamlit", "Python", "Pandas"],
      gradient: "from-purple-900 to-fuchsia-900",
      github: "#",
      demo: "#"
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const skills = [
    { name: "Python & SQL", icon: Code, color: "text-cyan-400" },
    { name: "PyTorch & TensorFlow", icon: Brain, color: "text-fuchsia-400" },
    { name: "Computer Vision (YOLO)", icon: Eye, color: "text-cyan-400" },
    { name: "Generative AI (LLMs)", icon: MessageSquare, color: "text-fuchsia-400" },
    { name: "AWS & Docker", icon: Server, color: "text-cyan-400" },
    { name: "DevOps & CI/CD", icon: Layers, color: "text-fuchsia-400" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      
      const sections = ['home', 'about', 'services', 'experience', 'projects', 'education', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top < 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setTypingText(isDeleting 
        ? fullText.substring(0, typingText.length - 1) 
        : fullText.substring(0, typingText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum, roles, typingSpeed]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const NavLink = ({ id, label, mobile = false }) => (
    <button 
      onClick={() => scrollTo(id)}
      className={`${mobile 
        ? 'block w-full text-left py-4 text-2xl font-light border-b border-white/10' 
        : 'text-sm font-medium transition-colors duration-300'} 
        ${activeSection === id ? 'text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'text-slate-300 hover:text-white'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-cyan-500/30 font-sans relative overflow-x-hidden">
      
      {/* Background with subtle animated gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#030712]">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[#030712]/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
              <Cpu className="text-cyan-500 w-6 h-6" />
            </div>
            <span>HU<span className="text-cyan-500">.</span>AI</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['home', 'about', 'services', 'projects', 'skills', 'certifications'].map((item) => (
              <NavLink key={item} id={item} label={item.charAt(0).toUpperCase() + item.slice(1)} />
            ))}
            <a 
              href="/Hazrat_Usman_CV.pdf" 
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-full hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <Download size={14} /> CV
            </a>
          </div>

          <button 
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030712] pt-24 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col h-full">
             {['home', 'about', 'services', 'projects', 'skills', 'certifications'].map((item) => (
               <NavLink key={item} id={item} label={item.charAt(0).toUpperCase() + item.slice(1)} mobile />
             ))}
             <a 
               href="/Hazrat_Usman_CV.pdf" 
               download
               className="mt-8 w-full py-4 text-xl font-medium text-white bg-cyan-600 rounded-xl flex items-center justify-center gap-2"
             >
               <Download size={20} /> Download Resume
             </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        
        {/* Scanner Animation in Cyan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="w-full h-[2px] bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-scan-line top-0 absolute"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[128px] pointer-events-none animate-pulse-slow delay-1000" />

        <div className="w-full max-w-7xl px-6 text-center z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold uppercase tracking-wider animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System Operational
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            Hazrat Usman
          </h1>
          
          <div className="h-12 mb-8">
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light flex justify-center items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-medium">
                {typingText}
              </span>
              <span className="w-0.5 h-8 bg-cyan-400 animate-blink"></span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Architecting intelligent systems at the intersection of <span className="text-cyan-400">Computer Vision</span> and <span className="text-fuchsia-400">Generative AI</span>. 
            Transforming complex data into actionable insights with production-grade MLOps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
            >
              View Projects <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-[#050914] hover:bg-[#0a0a0a] text-white rounded-full font-medium transition-all border border-white/10 hover:border-cyan-500/50 backdrop-blur-sm flex items-center justify-center gap-2 group"
            >
              <Mail size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" /> Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Side-by-Side Layout */}
      <section id="about" className="py-32 bg-[#050914] relative border-y border-white/5">
        <div className="w-full max-w-[95%] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Image (Sticky on Desktop) */}
            <div className="flex justify-center lg:sticky lg:top-32">
              <div className="relative group perspective-1000 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative bg-[#030712] rounded-full w-full h-full flex items-center justify-center border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                   <img 
                      src="profile.jpeg" 
                      alt="Hazrat Usman" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-spin-slow-reverse pointer-events-none" style={{animationDuration: '15s'}}></div>
                   <div className="absolute inset-4 border border-fuchsia-500/20 rounded-full animate-spin-slow pointer-events-none" style={{borderStyle: 'dashed', animationDuration: '20s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Content */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <User className="text-cyan-500" />
                <h2 className="text-4xl font-bold text-white">About Me</h2>
              </div>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  As an <strong className="text-white">Aspiring AI Engineer</strong>, I don't just train models—I engineer <strong className="text-cyan-400">production-ready systems</strong>. 
                  Bridging the gap between data science and software engineering, I ensure AI solutions are scalable, maintainable, and impactful.
                </p>
                <p>
                  My experience at <strong className="text-fuchsia-400">NCAI (UET Peshawar)</strong> honed my ability to move beyond notebooks. I architect end-to-end pipelines using 
                  <strong className="text-cyan-400"> Flask/FastAPI</strong>, automate workflows with <strong className="text-cyan-400">n8n</strong>, and deploy on <strong className="text-cyan-400">AWS</strong>. 
                  My research on hyperspectral honey adulteration detection stands as a testament to my rigorous approach to supervised learning.
                </p>
                <p>
                  Currently seeking a <strong className="text-cyan-400">Full Stack AI Engineer</strong> role to apply this holistic skillset—solving problems from core algorithms to the user interface.
                </p>
              </div>

              {/* STYLED GRID CARDS - Line 424 Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                {[
                  { label: "AI Automation", icon: Zap, color: "cyan" },
                  { label: "Computer Vision", icon: Eye, color: "fuchsia" },
                  { label: "Generative AI", icon: Brain, color: "cyan" },
                  { label: "MLOps", icon: Server, color: "fuchsia" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-[#080c1b] border border-white/5 
                                hover:border-${item.color}-500/60 hover:bg-[#0d1226] 
                                hover:shadow-[0_0_30px_rgba(${item.color === 'cyan' ? '6,182,212' : '217,70,239'},0.2)] 
                                transition-all duration-300 cursor-default group`}
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${item.color}-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className={`p-3 rounded-xl bg-${item.color}-500/10 text-${item.color}-500 group-hover:text-${item.color}-400 group-hover:bg-${item.color}-500/20 transition-colors`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-slate-300 font-bold tracking-wide group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-white/5 bg-[#030712]">
        <div className="w-full max-w-[95%] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group p-6 rounded-2xl hover:bg-[#050914] transition-colors border border-transparent hover:border-white/5">
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider group-hover:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#030712]">
        <div className="w-full max-w-[95%] mx-auto px-6">
          <div className="flex items-center gap-3 mb-20 justify-center">
            <Zap className="text-cyan-500" />
            <h2 className="text-4xl font-bold text-white">What I Do</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-[#050914] p-10 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity text-${service.color}-500`}>
                  <service.icon size={120} />
                </div>
                
                <div className={`w-16 h-16 rounded-2xl bg-[#030712] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-${service.color}-500/50`}>
                  <service.icon className={`text-${service.color}-500`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 bg-[#050914] relative border-y border-white/5">
        <div className="w-full max-w-[90%] mx-auto px-6">
          <div className="flex items-center gap-3 mb-20 justify-center">
            <Briefcase className="text-cyan-500" />
            <h2 className="text-4xl font-bold text-white">Experience Timeline</h2>
          </div>

          <div className="relative border-l border-slate-800/50 ml-3 md:ml-6 space-y-16">
            {[
              {
              role: "AI Intern", //[cite: 1]
              company: "CyberZeus Software Systems", //[cite: 1]
              period: "July 2026 - Sep 2026", //[cite: 1]
              location: "CyberZeus Software Systems",
              description: "Built an out-of-core Polars EDA pipeline for a 6.55 GB network intrusion dataset, trained binary and multi-class XGBoost classifiers, and researched Contextual RAG strategies for the CISGuard Intelligence Layer to design an AI report-generation pipeline[cite: 1].",
              icon: Eye,
              current: false,
              tags: ["Polars", "XGBoost", "RAG", "Data Pipelines"]
            },
              {
              role: "Artificial Intelligence Apprentice", //[cite: 1]
              company: "Centre of Digital Governance and Agentic Innovation (CDGAI)", //[cite: 1]
              period: "Feb 2026 - July 2026", //[cite: 1]
              location: "Peshawar, Pakistan", //[cite: 1]
              description: "Developed a RAG admissions chatbot for Cecos University using FAISS and BM25 retrieval, and built a production chatbot on PostgreSQL pgvector[cite: 1]. Engineered a lightweight chatbot using Turbo Vec 4-bit vector quantization, and used Google Earth Engine (GEE) to analyze satellite and multispectral UAV imagery for environmental monitoring[cite: 1].",
              icon: Eye,
              current: false, 
              tags: ["RAG", "Vector Databases", "Google Earth Engine", "Chatbots"]
            },      
              
              {
                role: "AI Computer Vision Intern",
                company: "National Center of Artificial Intelligence (NCAI)",
                period: "May 2025 - Jan 2026",
                location: "Onsite, Peshawar",
                description: "Developed hyperspectral Honey Adulteration Detection using SVM/XGBoost. Engineered a Traffic Management System (Vehicle, Helmet, OCR) using YOLOv8. Built RAG-based chatbots and automated ML pipelines with n8n and AWS.",
                icon: Eye,
                current: true,
                tags: ["Computer Vision", "RAG", "AWS"]
              },
              {
                role: "Artificial Intelligence Intern",
                company: "Khyber Pakhtunkhwa IT Board (KPITB)",
                period: "April 2025 - June 2025",
                location: "Hybrid, Peshawar",
                description: "Built and optimized supervised ML models (Random Forest, XGBoost) on tabular datasets. Performed hyperparameter tuning and deployed interactive dashboards using Streamlit and Flask APIs.",
                icon: Brain,
                current: false,
                tags: ["ML", "Streamlit", "Flask"]
              }
            ].map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-16 group">
                <div className={`absolute -left-[9px] md:-left-[10px] top-0 h-5 w-5 rounded-full border-4 transition-all duration-300 ${
                  exp.current 
                    ? 'bg-cyan-500 border-[#030712] shadow-[0_0_0_4px_rgba(6,182,212,0.2)] scale-110' 
                    : 'bg-[#050914] border-slate-700 group-hover:bg-cyan-400 group-hover:border-[#030712]'
                }`} />
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="text-fuchsia-400 font-medium">{exp.company}</span>
                </div>
                
                <div className="flex gap-4 mb-4 text-sm">
                   <span className="text-slate-500 font-mono flex items-center gap-1"><Globe size={12}/> {exp.location}</span>
                   <span className="text-cyan-400/80 font-mono bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">{exp.period}</span>
                </div>
                
                <p className="text-slate-300 leading-relaxed max-w-3xl mb-6 text-lg">
                  {exp.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-xs font-medium text-slate-400 bg-[#030712] border border-white/10 px-3 py-1 rounded-full group-hover:border-cyan-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-[#030712]">
        <div className="w-full max-w-[95%] mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-cyan-500" />
              <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            </div>
            <p className="text-slate-400 text-center max-w-xl mb-10 text-lg">
              Real-world, production-ready AI solutions leveraging state-of-the-art models and robust engineering.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-[#050914] text-slate-400 border border-white/10 hover:border-cyan-500/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group bg-[#050914] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col h-full">
                <div className={`h-72 w-full relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <div className="absolute inset-0 bg-[#030712]/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 bg-[#030712]/60 backdrop-blur-md text-xs font-bold text-white rounded-full border border-white/10 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-base mb-8 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs text-cyan-300 font-mono bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <button className="flex-1 py-3.5 rounded-xl bg-[#030712] border border-white/10 text-sm font-medium text-white hover:bg-cyan-600 hover:border-cyan-600 transition-all flex items-center justify-center gap-2 group/btn">
                      <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-white" /> Code
                    </button>
                    <button className="flex-1 py-3.5 rounded-xl border border-white/10 text-sm font-medium text-white hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                      <Globe className="w-4 h-4 text-slate-400 group-hover/btn:text-white" /> Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-[#050914] border-y border-white/5">
        <div className="w-full max-w-[90%] mx-auto px-6">
          <div className="flex items-center gap-3 mb-20 justify-center">
            <GraduationCap className="text-cyan-500" />
            <h2 className="text-4xl font-bold text-white">Education</h2>
          </div>

          <div className="grid gap-8">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 p-10 rounded-3xl bg-[#030712] border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="md:w-1/3">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                   <p className="text-fuchsia-400 font-medium mb-3">{edu.school}</p>
                   <span className="inline-block px-4 py-1 rounded-full bg-[#050914] text-xs text-slate-400 font-mono border border-white/10">{edu.year}</span>
                </div>
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                   <div className="flex items-center justify-between mb-4">
                     <span className="text-sm font-bold text-green-500 px-3 py-1 bg-green-500/10 rounded-lg border border-green-500/20">{edu.grade}</span>
                   </div>
                   <p className="text-slate-300 leading-relaxed text-lg">
                     {edu.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-[#030712]">
        <div className="w-full max-w-[95%] mx-auto px-6">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <Terminal className="text-cyan-500" />
            <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-[#050914] p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col items-center justify-center text-center group hover:-translate-y-1">
                <skill.icon size={32} className={`mb-4 ${skill.color} group-hover:scale-110 transition-transform`} />
                <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 bg-[#050914] border-y border-white/5">
        <div className="w-full max-w-[95%] mx-auto px-6">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <FileBadge className="text-cyan-500" />
            <h2 className="text-4xl font-bold text-white">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <a 
                key={i} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-5 p-6 rounded-2xl bg-[#030712] border border-white/5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group cursor-pointer"
              >
                 <div className="p-3 bg-[#050914] rounded-xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <cert.icon size={24} />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">{cert.title}</h3>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-2">{cert.provider}</p>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {cert.desc}
                    </p>
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations & Awards Section */}
      <section className="py-32 bg-[#030712] relative">
        {/* Background decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-20"></div>
        
        <div className="w-full max-w-[95%] mx-auto px-6">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <Award className="text-fuchsia-500 w-8 h-8" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Presentations & Awards</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {presentations.map((pub, i) => (
              <div key={i} className="bg-[#050914] p-8 rounded-3xl border border-white/5 hover:border-fuchsia-500/40 transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] relative overflow-hidden">
                 
                 {/* Decorative glow inside card */}
                 <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-fuchsia-500/20 transition-colors"></div>

                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="px-3 py-1 bg-fuchsia-500/10 rounded-full text-xs font-mono text-fuchsia-400 border border-fuchsia-500/20 group-hover:bg-fuchsia-500/20 transition-colors">{pub.platform}</span>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors line-clamp-2 relative z-10">
                   {pub.title}
                 </h3>
                 <div className="flex items-center gap-3 text-sm text-slate-500 mt-6 border-t border-white/5 pt-4 relative z-10">
                    <span className="group-hover:text-slate-300 transition-colors">{pub.date}</span>
                    <span className="w-1 h-1 rounded-full bg-fuchsia-500"></span>
                    <span className="group-hover:text-slate-300 transition-colors">{pub.readTime}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 bg-[#030712] border-t border-white/10 relative overflow-hidden">
        
        <div className="w-full max-w-[95%] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold text-white mb-8">Let's Connect</h2>
              <p className="text-slate-300 mb-12 leading-relaxed text-lg">
                I'm based in Lahore, Pakistan, and currently looking for opportunities to leverage my AI engineering skills.
                Whether you have a question about my research or want to collaborate, my inbox is open.
              </p>
              
              <div className="flex flex-col gap-6 mb-12">
                 <div className="flex items-center gap-4 text-slate-300 text-lg">
                    <div className="p-3 bg-[#050914] rounded-full border border-white/10"><Mail size={20} className="text-cyan-500" /></div>
                    <span>hazratusmankhan39@gmail.com</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-300 text-lg">
                    <div className="p-3 bg-[#050914] rounded-full border border-white/10"><Globe size={20} className="text-fuchsia-500" /></div>
                    <span>Lahore, Pakistan</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-300 text-lg">
                    <div className="p-3 bg-[#050914] rounded-full border border-white/10"><Brain size={20} className="text-cyan-500" /></div>
                    <span>+92-3469026006</span>
                 </div>
              </div>

              <div className="flex gap-6">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/hazratusmankhan/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/hazratusmankhan", label: "GitHub" },
                  { icon: FileText, href: "#", label: "Resume" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="p-4 bg-[#050914] border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <form onSubmit={handleContactSubmit} className="space-y-6 bg-[#050914] p-10 rounded-3xl border border-white/5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-[#030712] border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-[#030712] border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="4"
                    className="w-full px-6 py-4 rounded-xl bg-[#030712] border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="How can we work together?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-5 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                    formStatus === 'success' 
                      ? 'bg-green-600 text-white' 
                      : formStatus === 'submitting'
                      ? 'bg-slate-700 text-slate-300 cursor-wait'
                      : 'bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25'
                  }`}
                >
                  {formStatus === 'idle' && <><Send size={20} /> Send Message</>}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && <><CheckCircle size={20} /> Message Sent!</>}
                </button>
              </form>
            </div>
          </div>
          
          <div className="text-slate-500 text-sm text-center mt-24 pt-10 border-t border-white/5">
            <p>© {new Date().getFullYear()} Hazrat Usman. All rights reserved.</p>
            <p className="mt-2 text-slate-600">Built with React, Tailwind CSS & Artificial Intelligence</p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      <button
        onClick={() => scrollTo('top')}
        className={`fixed bottom-10 right-10 p-4 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
};

export default App;