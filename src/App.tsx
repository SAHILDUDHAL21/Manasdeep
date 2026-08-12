import React, { useState } from 'react';
import {
  Heart,
  Brain,
  Users,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  X,
  Send,
  BookOpen,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Globe,
  LifeBuoy,
  HandHeart,
  Building2,
  Smile,
  FileText
} from 'lucide-react';
import mlogo from './assets/mlogo.jpeg';
import './App.css';

export function App() {
  const [activeNav, setActiveNav] = useState<string>('home');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('General Counselling');

  // Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'counselling',
    message: ''
  });

  const focusAreas = [
    { title: 'Mental Health & Psychological Well-being', icon: <Brain size={22} />, desc: 'Promoting emotional resilience and psychological wellness across all sections of society.' },
    { title: 'Counselling & Psychotherapy', icon: <Heart size={22} />, desc: 'Professional, ethical, and confidential support tailored to individual and family needs.' },
    { title: 'Career Guidance & Life Skills', icon: <GraduationCap size={22} />, desc: 'Empowering youth with direction, emotional intelligence, leadership, and soft skills.' },
    { title: 'Employee Assistance Programs (EAP)', icon: <Briefcase size={22} />, desc: 'Delivering corporate stress management and employee mental health initiatives.' },
    { title: 'School & College Mental Health', icon: <BookOpen size={22} />, desc: 'Conducting workshops for students, parents, and teachers to build supportive environments.' },
    { title: 'Women, Children & Senior Support', icon: <Users size={22} />, desc: 'Dedicated programs for vulnerable demographics, healthy ageing, and emotional care.' },
    { title: 'Addiction Awareness & Rehabilitation', icon: <LifeBuoy size={22} />, desc: 'Substance abuse education, tobacco/alcohol counselling, and suicide prevention.' },
    { title: 'Community Development & Social Welfare', icon: <Globe size={22} />, desc: 'Outreach initiatives in rural, urban, and tribal areas across Maharashtra and India.' }
  ];

  const objectivesList = [
    {
      title: 'Mental Health Promotion',
      icon: <Brain size={22} />,
      items: ['Promote awareness about mental health and ensure access to counselling and psychological support services for individuals from all sections of society.']
    },
    {
      title: 'Counselling Services',
      icon: <Heart size={22} />,
      items: ['Provide professional counselling and guidance for Students, Parents, Teachers, Employees, Women, Senior Citizens, and Persons with Disabilities.']
    },
    {
      title: 'Community Outreach',
      icon: <Globe size={22} />,
      items: ['Conduct awareness and mental health programs in rural, urban, tribal, and underserved communities to improve psychological well-being and social welfare.']
    },
    {
      title: 'Education & Skill Development',
      icon: <GraduationCap size={22} />,
      items: ['Organize workshops and training on Life Skills, Personality Development, Leadership Development, Emotional Intelligence, Career Guidance, and Soft Skills.']
    },
    {
      title: 'Employee Wellness (EAP)',
      icon: <Briefcase size={22} />,
      items: ['Partner with organizations to deliver Employee Assistance Programs, Stress Management, Workplace Mental Health, Psychological Counselling, and Employee Well-being Initiatives.']
    },
    {
      title: 'Addiction Awareness',
      icon: <LifeBuoy size={22} />,
      items: ['Create awareness and provide counselling related to Substance Abuse, Alcohol Addiction, Tobacco Addiction, Suicide Prevention, Depression, Anxiety, and Stress Management.']
    },
    {
      title: 'Child & Adolescent Mental Health',
      icon: <Smile size={22} />,
      items: ['Support children and adolescents through Psychological Assessments, Behavioural Interventions, Learning Support, Emotional Counselling, and Parenting Guidance.']
    },
    {
      title: 'Women Empowerment',
      icon: <HandHeart size={22} />,
      items: ['Promote women’s mental health, skill development, career guidance, entrepreneurship, and emotional well-being through dedicated support programs.']
    },
    {
      title: 'Senior Citizen Support',
      icon: <Users size={22} />,
      items: ['Conduct programs focused on Mental Health, Emotional Support, Social Inclusion, Healthy Ageing, and Recreational Activities.']
    },
    {
      title: 'Inclusive Development',
      icon: <ShieldCheck size={22} />,
      items: ['Support persons with disabilities, orphaned children, economically weaker sections, and socially marginalized communities through counselling, rehabilitation, and empowerment initiatives.']
    },
    {
      title: 'Professional Training',
      icon: <Award size={22} />,
      items: ['Conduct training for Counsellors, Teachers, Psychologists, Social Workers, Police Personnel, NGOs, Healthcare Professionals, and Community Volunteers.']
    },
    {
      title: 'Research & Publications',
      icon: <FileText size={22} />,
      items: ['Undertake research, documentation, publications, and evidence-based studies in the fields of psychology, education, mental health, and social development.']
    },
    {
      title: 'Institutional Partnerships',
      icon: <Building2 size={22} />,
      items: ['Collaborate with Schools, Colleges, Universities, Industries, Hospitals, Corporate Organizations, NGOs, and Government Departments to implement impactful programs.']
    },
    {
      title: 'Training Centres',
      icon: <Building2 size={22} />,
      items: ['Establish Counselling Centres, Mental Health Clinics, Community Resource Centres, Training Institutes, Rehabilitation Services, and Helpline Support.']
    },
    {
      title: 'Disaster & Community Support',
      icon: <LifeBuoy size={22} />,
      items: ['Promote awareness and preparedness regarding Disaster Management, Community Resilience, Civic Responsibility, Human Values, and Social Harmony.']
    },
    {
      title: 'Human Rights & Social Welfare',
      icon: <ShieldCheck size={22} />,
      items: ['Work towards protecting and promoting Human Rights, Women’s Rights, Child Rights, Senior Citizen Rights, Rights of Persons with Disabilities, and Social Justice.']
    },
    {
      title: 'Accessible Mental Healthcare',
      icon: <Heart size={22} />,
      items: ['Ensure affordable, high-quality, and evidence-based psychological services are available to all sections of society.']
    },
    {
      title: 'Capacity Building',
      icon: <GraduationCap size={22} />,
      items: ['Develop skilled professionals through Certification Programs, Internship Opportunities, Practical Training, Workshops, Skill Development Courses, and Community Leadership Programs.']
    }
  ];

  const servicesList = [
    'Individual Counselling',
    'Child Counselling',
    'Family Counselling',
    'Couple Counselling',
    'Career Counselling',
    'Psychological Assessments',
    'School Mental Health Programs',
    'Employee Assistance Programs (EAP)',
    'Corporate Wellness Programs',
    'Addiction Counselling',
    'Stress Management Workshops',
    'Life Skills Education',
    'Community Awareness Campaigns',
    'Mental Health Training',
    'Faculty Development Programs',
    'Research & Consultancy'
  ];

  const whyChooseList = [
    { title: 'Qualified Professionals', desc: 'Team of experienced, licensed mental health experts and psychologists.' },
    { title: 'Evidence-Based Practices', desc: 'Therapeutic techniques grounded in clinical research and proven methodologies.' },
    { title: 'Community-Centered Approach', desc: 'Tailored outreach for urban, rural, and underserved populations across India.' },
    { title: 'Ethical & Confidential', desc: '100% safe, non-judgmental, and confidential psychological support.' },
    { title: 'Affordable & Accessible', desc: 'Ensuring quality mental healthcare is available to all economic sections.' },
    { title: 'Collaborative Partnerships', desc: 'Active network with schools, corporate partners, hospitals, and government bodies.' },
    { title: 'Holistic Care Model', desc: 'Balanced focus on prevention, early intervention, and long-term rehabilitation.' }
  ];

  const getInvolvedList = [
    { title: 'Volunteering', desc: 'Share your skills, time, or expertise in field outreach, event coordination, and awareness drives.' },
    { title: 'Partnering With Us', desc: 'Collaborate as an educational institution, hospital, or NGO to expand mental health access.' },
    { title: 'Sponsoring Programs', desc: 'Sponsor subsidized therapy, school mental health toolkits, or community health camps.' },
    { title: 'Corporate CSR Collaboration', desc: 'Fulfill CSR mandates with high-impact community mental health and workplace EAP initiatives.' },
    { title: 'Organizing Awareness Campaigns', desc: 'Host stigma-breaking workshops in your community, college, or workplace.' },
    { title: 'Donating to Initiatives', desc: 'Contribute to sustain our 24/7 confidential helpline and subsidized counselling services.' }
  ];

  const openModalWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', category: 'counselling', message: '' });
    }, 2800);
  };

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Top Helpline Banner */}
      <div className="top-bar">
        <div className="top-bar-left">
          <Sparkles size={14} style={{ color: 'var(--accent-purple)' }} />
          <span>Manasdeep Helpline: Confidential Mental Health Support & Counselling</span>
        </div>
        <div className="top-bar-right">
          <a href="#contact" className="top-bar-link" onClick={() => scrollToSection('contact')}>Contact Us</a>
          <span style={{ color: 'var(--border-light)' }}>|</span>
          <span style={{ fontWeight: 600, color: 'var(--accent-purple)' }}>+91 70836 11222 • Pune, India</span>
        </div>
      </div>

      {/* Main Header / Clean White Navbar */}
      <header className="site-header">
        <div className="brand-logo" onClick={() => scrollToSection('hero')}>
          <div className="brand-icon">M</div>
          <div>
            <div className="brand-text-title">Manasdeep Foundation</div>
            <div className="brand-text-sub">Empowering Minds, Enriching Lives.</div>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a
              id="nav-home-btn"
              className={`nav-link-item ${activeNav === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              id="nav-about-btn"
              className={`nav-link-item ${activeNav === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              id="nav-objectives-btn"
              className={`nav-link-item ${activeNav === 'objectives' ? 'active' : ''}`}
              onClick={() => scrollToSection('objectives')}
            >
              Our Objectives
            </a>
          </li>
          <li>
            <a
              id="nav-services-btn"
              className={`nav-link-item ${activeNav === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              id="nav-why-btn"
              className={`nav-link-item ${activeNav === 'why' ? 'active' : ''}`}
              onClick={() => scrollToSection('why')}
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              id="nav-involved-btn"
              className={`nav-link-item ${activeNav === 'involved' ? 'active' : ''}`}
              onClick={() => scrollToSection('involved')}
            >
              Get Involved
            </a>
          </li>
        </ul>

        <div className="header-cta-group">
          <button
            id="nav-volunteer-btn"
            className="btn btn-secondary-white"
            style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            onClick={() => openModalWithService('Become a Volunteer Registration')}
          >
            Become a Volunteer
          </button>
          <button
            id="nav-donate-btn"
            className="btn btn-primary-filled"
            style={{ padding: '8px 22px', fontSize: '0.88rem' }}
            onClick={() => openModalWithService('Donate to Mental Health Initiatives')}
          >
            Donate Now <ArrowRight size={14} />
          </button>
        </div>
      </header>

      <main>
        {/* SECTION 1: HERO (HOME) */}
        <section id="hero" className="hero-section">
          <div className="hero-pill-badge">
            <Sparkles size={14} /> Non-Profit Mental Health & Social Development Organization
          </div>
          <h1 className="hero-title-main">
            Building Stronger Minds.<br />
            <span style={{ color: 'var(--accent-purple)' }}>Healthier Communities. Brighter Futures.</span>
          </h1>
          <p className="hero-subtitle-text">
            Manasdeep Foundation is a non-profit organization committed to promoting mental health, psychological well-being, education, social development, and community empowerment. We believe that every individual deserves access to quality mental health support, guidance, and opportunities to live a healthy, meaningful, and dignified life.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '820px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Through counselling, awareness programs, educational initiatives, rehabilitation support, employee wellness programs, research, and community outreach, we strive to create a mentally healthier and socially inclusive society. Together, we can break stigma, build resilience, and transform lives.
          </p>

          <div className="hero-cta-buttons">
            <button
              id="hero-donate-btn"
              className="btn btn-primary-filled"
              onClick={() => openModalWithService('Donate to Mental Health Initiatives')}
            >
              Donate Now <ArrowRight size={16} />
            </button>
            <button
              id="hero-volunteer-btn"
              className="btn btn-secondary-white"
              onClick={() => openModalWithService('Become a Volunteer Registration')}
            >
              Become a Volunteer →
            </button>
          </div>
        </section>

        {/* SECTION 2: OUR FOCUS AREAS */}
        <section className="about-section" style={{ background: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
              <span className="section-label">Core Thrust Areas</span>
              <h2 className="section-heading-serif">Our Focus Areas</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Targeted initiatives designed to foster emotional resilience, mental wellness, and community upliftment across demographics.
              </p>
            </div>

            <div className="focus-areas-grid">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="focus-card-clean">
                  <div className="focus-icon-box">{area.icon}</div>
                  <div>
                    <div className="focus-card-title">{area.title}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: ABOUT US (WHO WE ARE, VISION, MISSION) */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading-serif">
                Dedicated to improving mental, emotional, and social well-being across India.
              </h2>
              <p className="about-text-content">
                Manasdeep Foundation is dedicated to improving the mental, emotional, educational, and social well-being of individuals and communities across Maharashtra and India.
              </p>
              <p className="about-text-content">
                We work with students, parents, teachers, employees, women, senior citizens, persons with disabilities, tribal communities, and underprivileged populations by providing professional counselling, awareness initiatives, training, rehabilitation support, and community-based interventions.
              </p>
              <p className="about-text-content">
                Our goal is not only to provide mental health services but also to empower people with knowledge, resilience, and opportunities for personal and social growth.
              </p>
            </div>

            <div className="card-clean" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-purple-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>Manasdeep Foundation</h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Empowering Minds, Enriching Lives.</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-purple)' }} />
                  <span>Licensed & Certified Mental Health Professionals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-purple)' }} />
                  <span>Confidential & Non-Judgmental Therapy Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-purple)' }} />
                  <span>Corporate Employee Assistance Programs (EAP)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-purple)' }} />
                  <span>Community & Rural Mental Health Clinics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: VISION & MISSION CARDS */}
        <section id="vision" className="vision-section">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="section-label">Guiding Principles</span>
            <h2 className="section-heading-serif">Our Vision & Mission</h2>
          </div>

          <div className="vm-grid">
            <div className="vm-card-white card-clean">
              <span className="vm-badge-number">V</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Sparkles size={24} style={{ color: 'var(--accent-purple)' }} />
                <h3 className="vm-card-title" style={{ margin: 0 }}>Our Vision</h3>
              </div>
              <p className="vm-card-text">
                To create a society where every individual is mentally healthy, emotionally resilient, socially responsible, and empowered to reach their fullest potential.
              </p>
            </div>

            <div className="vm-card-white card-clean">
              <span className="vm-badge-number">M</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Heart size={24} style={{ color: 'var(--accent-purple)' }} />
                <h3 className="vm-card-title" style={{ margin: 0 }}>Our Mission</h3>
              </div>
              <p className="vm-card-text">
                To promote mental health, education, social welfare, and community empowerment through counselling, awareness, training, research, rehabilitation, and collaborative community initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR OBJECTIVES */}
        <section id="objectives" className="programs-section">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <span className="section-label">Pillars of Action</span>
            <h2 className="section-heading-serif">Our Objectives</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              A multi-faceted framework spanning mental health promotion, specialized counselling, corporate wellness, inclusion, professional training, and institutional partnerships.
            </p>
          </div>

          <div className="objectives-grid-full">
            {objectivesList.map((obj, idx) => (
              <div key={idx} className="objective-card-item">
                <div className="objective-card-header">
                  <div style={{ color: 'var(--accent-purple)' }}>{obj.icon}</div>
                  <h3 className="objective-card-title">{obj.title}</h3>
                </div>
                <ul className="objective-card-list">
                  {obj.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: OUR SERVICES */}
        <section id="services" className="impact-section" style={{ background: '#ffffff' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="section-label">Comprehensive Care</span>
            <h2 className="section-heading-serif">Our Services</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Empowering individuals, families, schools, and corporate organizations through evidence-based psychological support and training.
            </p>
          </div>

          <div className="focus-areas-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {servicesList.map((service, idx) => (
              <div key={idx} className="focus-card-clean" style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="focus-icon-box" style={{ width: '36px', height: '36px' }}>
                    <Heart size={18} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                    {service}
                  </span>
                </div>
                <button
                  className="btn btn-secondary-white"
                  style={{ padding: '4px 12px', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)' }}
                  onClick={() => openModalWithService(service)}
                >
                  Book →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE MANASDEEP FOUNDATION */}
        <section id="why" className="about-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
              <span className="section-label">Our Strengths</span>
              <h2 className="section-heading-serif">Why Choose Manasdeep Foundation?</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                We are committed to delivering compassionate, evidence-based, and confidential care to build resilient individuals and communities.
              </p>
            </div>

            <div className="why-choose-grid">
              {whyChooseList.map((item, idx) => (
                <div key={idx} className="why-card-clean">
                  <div className="focus-icon-box" style={{ flexShrink: 0 }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: GET INVOLVED */}
        <section id="involved" className="programs-section">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="section-label">Join The Movement</span>
            <h2 className="section-heading-serif">Get Involved</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Join us in creating a mentally healthier and more compassionate society. Together, we can break stigma, build resilience, and transform lives.
            </p>
          </div>

          <div className="get-involved-grid">
            {getInvolvedList.map((opt, idx) => (
              <div key={idx} className="involved-card-clean">
                <div>
                  <div className="focus-icon-box" style={{ margin: '0 auto 1.25rem', width: '52px', height: '52px' }}>
                    <HandHeart size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem', color: 'var(--accent-purple)' }}>
                    {opt.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {opt.desc}
                  </p>
                </div>
                <button
                  id={`involved-opt-btn-${idx}`}
                  className="btn btn-secondary-white"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                  onClick={() => openModalWithService(`Get Involved: ${opt.title}`)}
                >
                  Participate / Inquire →
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL POPUP (Counselling / Support Inquiry) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content animate-float" onClick={(e) => e.stopPropagation()} style={{ background: '#ffffff', color: 'var(--text-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-purple)' }}>
                Manasdeep Foundation Request
              </h3>
              <button
                id="modal-close-btn"
                className="btn btn-secondary-white"
                style={{ width: '36px', height: '36px', padding: 0, justifyContent: 'center' }}
                onClick={() => setIsModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ background: 'var(--accent-purple-bg)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(84, 48, 138, 0.2)', marginBottom: '1.25rem', fontSize: '0.88rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
              Target Initiative: {selectedService}
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--accent-purple)' }}>
                <CheckCircle2 size={52} style={{ margin: '0 auto 1rem', color: 'var(--accent-green)' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Your confidential message has been received. Our counsellors will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Full Name
                  </label>
                  <input
                    id="modal-form-name"
                    type="text"
                    className="input-field-clean"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Email Address
                  </label>
                  <input
                    id="modal-form-email"
                    type="email"
                    className="input-field-clean"
                    placeholder="yourname@domain.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Phone Number
                  </label>
                  <input
                    id="modal-form-phone"
                    type="tel"
                    className="input-field-clean"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    How can Manasdeep Foundation support you?
                  </label>
                  <textarea
                    id="modal-form-message"
                    className="input-field-clean"
                    style={{ borderRadius: 'var(--radius-md)', height: '80px' }}
                    placeholder="Provide preferred timing or specific request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button id="modal-form-submit-btn" type="submit" className="btn btn-primary-filled" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={16} /> Send Confidential Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER - Matching Manasdeep Screenshot */}
      <footer id="contact" className="site-footer">
        <div className="footer-watermark">manasdeep</div>

        <div className="footer-container">
          {/* Column 1: EXPLORE */}
          <div>
            <h4 className="footer-section-title">EXPLORE</h4>
            <ul className="footer-link-list">
              <li><a className="footer-link-item" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a className="footer-link-item" onClick={() => scrollToSection('vision')}>Vision & Mission</a></li>
              <li><a className="footer-link-item" onClick={() => scrollToSection('objectives')}>Projects</a></li>
              <li><a className="footer-link-item" onClick={() => scrollToSection('services')}>Events</a></li>
              <li><a className="footer-link-item" onClick={() => scrollToSection('hero')}>Gallery</a></li>
            </ul>
          </div>

          {/* Column 2: REACH US */}
          <div>
            <h4 className="footer-section-title">REACH US</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={22} className="footer-contact-icon" />
                <span>Pune, Maharashtra, India</span>
              </div>

              <div className="footer-contact-item">
                <Phone size={22} className="footer-contact-icon" />
                <div>
                  <div>+91 70836 11222</div>
                  <div style={{ marginTop: '0.2rem' }}>+91 88052 63733</div>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={22} className="footer-contact-icon" />
                <a href="mailto:contact@manasdeepfoundation.org" style={{ color: '#e2e8f0', textDecoration: 'none' }}>
                  contact@manasdeepfoundation.org
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social-links">
              <a href="#" className="footer-social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer-social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="footer-social-icon-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} Manasdeep Foundation. All rights reserved.</div>
          <div>Empowering Minds • Enriching Lives</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
