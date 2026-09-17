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
  BookOpen,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Globe,
  LifeBuoy,
  HandHeart,
  Building2,
  Smile,
  FileText,
  User,
  Quote,
  Menu
} from 'lucide-react';
import mlogo from './assets/mlogo.jpeg';
import './App.css';

const boardMembers = [
  {
    id: 'rushikesh-ingulkar',
    name: 'Rushikesh Ingulkar',
    role: 'Founder & Visionary',
    badge: 'Founder & Visionary, Manasdeep Foundation',
    bio: [
      'Mr. Rushikesh Ingulkar is a Psychology professional, educator, counsellor, EAP practitioner, and social entrepreneur dedicated to making psychological awareness and support more accessible to communities that are often overlooked.',
      'With experience in higher education, psychology teaching, counselling, employee assistance programmes (EAP), psychological assessment, student guidance, and community-based awareness initiatives, Rushikesh has worked closely with students, employees, and individuals from diverse social and economic backgrounds. His professional journey has provided him with a practical understanding of the psychological, educational, and social challenges faced by individuals and communities.',
      'As an educator, he has been involved in teaching Psychology at undergraduate and postgraduate levels, coordinating academic activities, conducting practical sessions, guiding students, and contributing to academic and research-oriented work. His experience in EAP has further enabled him to work with employees and understand workplace mental-health concerns, stress management, emotional well-being, and the importance of accessible psychological support.',
      'Driven by the belief that mental health awareness should not be limited to urban or privileged communities, Rushikesh founded Manasdeep Foundation with a vision of taking psychological awareness, counselling, life-skills education, addiction-prevention initiatives, career guidance, and community support to underserved populations, particularly in rural areas.',
      'Through Manasdeep Foundation, his vision is to build a platform where awareness leads to early intervention, guidance leads to better choices, and psychological support becomes accessible to every section of society.'
    ],
    vision: '“To create mentally healthier, better-informed and empowered communities where every individual has access to awareness, guidance and support when they need it.”',
    quote: 'Rushikesh believes that meaningful social change begins with awareness, empathy and timely intervention. Through Manasdeep Foundation, he aims to bring together psychology professionals, educators, volunteers, institutions, corporates and communities to create sustainable initiatives that improve mental well-being and strengthen individuals and families.'
  },
  {
    id: 'shubham-shinde',
    name: 'Mr. Shubham Shinde',
    role: 'President',
    badge: 'President, Manasdeep Foundation',
    bio: [
      'Mr. Shubham Shinde is a dedicated social contributor and an experienced professional with a diverse career journey across various fields. Having completed his education and gained valuable professional experience, he has developed a broad understanding of people, communities, and the challenges faced by society.',
      'Driven by a strong desire to give back to society and contribute towards meaningful social change, Shubham actively participates in social awareness initiatives and community-oriented activities. His approach combines practical experience, compassion, and a strong sense of responsibility towards society.',
      'As the President of Manasdeep Foundation, he plays an active role in guiding the organisation, supporting its programmes, and ensuring that its activities remain aligned with its core mission. His ability to understand different perspectives and connect with people from diverse backgrounds contributes significantly to the Foundation’s work.',
      'With a clear vision for the future, Mr. Shubham Shinde is committed to strengthening Manasdeep Foundation as an organisation that works with communities, for communities, focusing on awareness, empowerment, mental well-being, education, addiction prevention, and social development.'
    ],
    vision: '“To transform social awareness into meaningful action and build stronger, healthier and more empowered communities through collective responsibility and consistent efforts.”',
    quote: 'With his leadership, experience, and commitment to social welfare, Mr. Shubham Shinde continues to actively contribute to the growth of Manasdeep Foundation and its mission of creating positive and sustainable change in society.'
  },
  {
    id: 'rushikesh-kakade',
    name: 'Mr. Rushikesh Kakade',
    role: 'Vice President',
    badge: 'Vice President, Manasdeep Foundation',
    bio: [
      'Mr. Rushikesh Kakade, a postgraduate in Master of Social Work (MSW), is actively committed to supporting students and individuals from tribal and economically disadvantaged communities.',
      'Through his work, he focuses on student development, youth empowerment, career guidance, and social support, helping young individuals identify opportunities and make informed decisions about their education and future.',
      'He also encourages youth towards entrepreneurship and business initiatives, guiding them in identifying available resources and opportunities that can support their personal and professional growth.',
      'As the Vice President of Manasdeep Foundation, he contributes his social-work experience and community understanding towards the Foundation’s vision of creating opportunities, awareness and empowerment for underserved communities.'
    ]
  },
  {
    id: 'shivtej-ingulkar',
    name: 'Mr. Shivtej Ingulkar',
    role: 'Secretary',
    badge: 'Secretary, Manasdeep Foundation',
    bio: [
      'Mr. Shivtej Ingulkar is a seasoned journalist and social observer with over 15+ years of professional experience in journalism, covering a wide range of issues including crime, politics, public affairs, and matters concerning society and communities.',
      'Throughout his career, he has developed a strong understanding of social challenges through close interaction with people and extensive field experience. His professional journey has also provided him with valuable exposure to the healthcare sector and community-related services, strengthening his understanding of the needs and challenges faced by individuals and families.',
      'A writer with a strong vision for positive social change, Mr. Ingulkar believes in using experience, awareness, and collective action to address issues affecting society. His commitment to contributing towards meaningful change led him to become part of Manasdeep Foundation, where he currently serves as the Secretary.',
      'As Secretary, he contributes his experience, communication skills, field knowledge, and social perspective towards strengthening the Foundation’s initiatives and supporting its mission of creating a more aware, empowered, and inclusive society.'
    ]
  },
  {
    id: 'diksha-ingulkar',
    name: 'Ms. Diksha Ingulkar',
    role: 'Treasurer',
    badge: 'Treasurer, Manasdeep Foundation',
    bio: [
      'Ms. Diksha Ingulkar is an MBA graduate and corporate professional with over 6+ years of experience in the corporate sector. Alongside her professional career, she has developed a strong commitment towards women empowerment and addressing women-centric social issues.',
      'With her corporate expertise, organizational skills, financial understanding, and responsible approach, she contributes significantly to the effective functioning and development of Manasdeep Foundation. Her compassionate and helpful nature motivates her to actively support individuals and communities in need.',
      'As the Treasurer of Manasdeep Foundation, Ms. Diksha Ingulkar plays an important role in supporting the Foundation’s financial planning, accountability, and responsible resource management. She works towards ensuring that the organization’s resources are utilized effectively and in alignment with its social objectives.',
      'Her professional experience, commitment to women’s empowerment, and dedication to social welfare make her an important part of the Foundation’s leadership team.'
    ]
  }
];

const leadershipTeam = [
  {
    id: 'lead-rushikesh',
    name: 'Rushikesh Ingulkar',
    role: 'Founder & Visionary',
    badge: 'Founder & Visionary, Manasdeep Foundation',
    bio: 'Rushikesh Ingulkar is a Psychology professional, educator, counsellor, and EAP practitioner committed to making mental-health support accessible to all. With experience in higher education, counselling, psychological assessment, and workplace well-being, he has worked with diverse communities and individuals. As the founder of Manasdeep Foundation, he is dedicated to promoting psychological awareness, life skills, career guidance, addiction prevention, and community well-being, especially among underserved and rural populations.'
  },
  {
    id: 'lead-shashank',
    name: 'Shashank Saraf',
    role: 'Psychology Advisor',
    badge: 'Psychology Advisor',
    credentials: 'M.A. Clinical Psychology & Counselling Psychology Professional',
    bio: 'Psychology Advisor with expertise across psychological services, counselling, employee assistance programs, and community mental health outreach.',
    areas: ['Psychological Services', 'Counselling', 'EAP', 'Community Mental Health'],
    areaLabel: 'Core Focus'
  },
  {
    id: 'lead-sameer',
    name: 'Sameer Sadanand Kedar',
    role: 'Managing Director',
    badge: 'Managing Director | Psychologist & Counsellor',
    bio: 'Sameer Sadanand Kedar is a Psychologist and Counsellor with professional experience in mental health, palliative care, counselling, and community-based psychological support. He has expertise in psychosocial assessment, counselling, crisis intervention, grief support, and career guidance. As the Managing Director of the Foundation, he is committed to strengthening mental health awareness, promoting holistic well-being, and developing accessible support initiatives for individuals, families, and communities.',
    areas: ['Mental Health', 'Counselling', 'Palliative Care', 'Youth & Career Guidance', 'Community Mental Health', 'Psychosocial Support'],
    areaLabel: 'Areas of Focus'
  },
  {
    id: 'lead-bhagwat',
    name: 'Bhagwat Laxman Kate',
    role: 'Team Leader',
    badge: 'Team Leader | Psychologist & Counsellor',
    bio: 'Mr. Bhagwat Laxman Kate is a Clinical Psychologist and Counsellor with professional experience in mental health, psychological counselling, community-based mental health services, psychosocial support, and mental health research. He holds a Master’s degree in Clinical Psychology and has worked across community, academic, research, and mental health-focused settings. He has been associated with the National Mental Health Survey-2 (NMHS-2) at B.J. Government Medical College & Sassoon General Hospital, Pune, where he contributed to community-based mental health research and participated in training on structured psychiatric assessment based on ICD-11. His professional experience also includes counselling and coordination at Swa-Roopwardhinee, as well as working as a Project Technical Support-III (Psychologist) at Bharati Vidyapeeth\'s Interactive Research School for Health Affairs (IRSHA) on an ICMR-funded neurodevelopmental research project. Through his work in counselling and digital mental health support, including his association with Health Genni, he has developed experience in providing accessible psychological support and counselling services to individuals from diverse backgrounds.',
    areas: ['Mental Health', 'Psychological Counselling', 'Community Mental Health', 'Psychosocial Support', 'Mental Health Research', 'Psychological Assessment', 'Child & Adolescent Mental Health', 'Neurodevelopmental Support', 'Career & Educational Guidance'],
    areaLabel: 'Areas of Focus'
  },
  {
    id: 'lead-nagesh',
    name: 'Mr. Nagesh Gawali',
    role: 'Counselling Psychologist',
    badge: 'Counselling Psychologist | Manasdeep Foundation',
    bio: 'Nagesh Gawali is a Counselling Psychologist with a Master’s degree in Clinical Psychology and a Postgraduate Diploma in Guidance and Counselling. He is committed to providing professional, compassionate, and client-centred psychological support to individuals navigating personal, emotional, behavioural, and interpersonal challenges. At Manasdeep Foundation, he contributes to counselling services, psychological awareness initiatives, and community-based mental health programs. His approach focuses on creating a safe, empathetic, confidential, and non-judgmental environment where individuals can express themselves openly, gain greater self-understanding, and develop healthier ways of coping with life’s challenges. His counselling approach is client-centred and evidence-informed, with an emphasis on practical coping strategies, emotional well-being, self-awareness, and sustainable personal growth. Through his work, he aims to promote greater awareness of mental health and make psychological support more accessible and approachable within the community.',
    areas: ['Individual Counselling & Psychological Support', 'Emotional Well-being & Stress Management', 'Personal Growth & Self-Awareness', 'Guidance & Counselling', 'Mental Health Awareness Programs'],
    areaLabel: 'Areas of Contribution'
  },
  {
    id: 'lead-rushikesh-m',
    name: 'Rushikesh Madale',
    role: 'Counselor',
    badge: 'Counselor | Manasdeep Foundation',
    bio: 'Rushikesh Madale is a Clinical Psychology postgraduate with an M.A. in Clinical Psychology and a PG Diploma in Guidance and Counselling Psychology. He has experience in career counselling, student guidance, counselling, and awareness workshops. With a compassionate and client-centred approach, he focuses on understanding individual needs and building meaningful rapport. His work is dedicated to supporting individuals in their personal growth, academic development, and career planning.',
    areas: ['Career Counselling', 'Student Guidance', 'Counselling', 'Awareness Workshops', 'Personal Development', 'Academic & Career Support'],
    areaLabel: 'Areas of Focus'
  },
  {
    id: 'lead-saniya',
    name: 'Ms. Saniya Wadke',
    role: 'Counselor',
    badge: 'Counselor | Manasdeep Foundation',
    bio: 'Saniya Wadke is a Clinical Psychology postgraduate student with a Master’s degree in Clinical Psychology and practical exposure to rehabilitation and mental health care settings. She is committed to developing a compassionate, professional, and client-centred approach to psychological support, with an interest in understanding individual emotional, behavioural, interpersonal, and developmental needs. At Manasdeep Foundation, she contributes to psychological support, mental health awareness initiatives, and community-oriented activities aimed at promoting psychological well-being. Her involvement focuses on creating a supportive, empathetic, and non-judgmental environment where individuals feel comfortable expressing themselves, developing greater self-awareness, and seeking appropriate support for their emotional and personal concerns. Her approach emphasises active listening, empathetic communication, behavioural understanding, rapport building, and meaningful interpersonal engagement. Through her academic and practical experiences, she aims to strengthen her clinical understanding and contribute to accessible and supportive mental health services. She is particularly interested in promoting emotional well-being, psychological awareness, healthy coping, and personal development through evidence-informed and supportive practices.'
  }
];

export function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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
    { title: 'Mental Health Promotion', icon: <Brain size={22} />, items: ['Promote awareness about mental health and ensure access to counselling and psychological support services for individuals from all sections of society.'] },
    { title: 'Counselling Services', icon: <Heart size={22} />, items: ['Provide professional counselling and guidance for Students, Parents, Teachers, Employees, Women, Senior Citizens, and Persons with Disabilities.'] },
    { title: 'Community Outreach', icon: <Globe size={22} />, items: ['Conduct awareness and mental health programs in rural, urban, tribal, and underserved communities to improve psychological well-being and social welfare.'] },
    { title: 'Education & Skill Development', icon: <GraduationCap size={22} />, items: ['Organize workshops and training on Life Skills, Personality Development, Leadership Development, Emotional Intelligence, Career Guidance, and Soft Skills.'] },
    { title: 'Employee Wellness (EAP)', icon: <Briefcase size={22} />, items: ['Partner with organizations to deliver Employee Assistance Programs, Stress Management, Workplace Mental Health, Psychological Counselling, and Employee Well-being Initiatives.'] },
    { title: 'Addiction Awareness', icon: <LifeBuoy size={22} />, items: ['Create awareness and provide counselling related to Substance Abuse, Alcohol Addiction, Tobacco Addiction, Suicide Prevention, Depression, Anxiety, and Stress Management.'] },
    { title: 'Child & Adolescent Mental Health', icon: <Smile size={22} />, items: ['Support children and adolescents through Psychological Assessments, Behavioural Interventions, Learning Support, Emotional Counselling, and Parenting Guidance.'] },
    { title: 'Women Empowerment', icon: <HandHeart size={22} />, items: ['Promote women’s mental health, skill development, career guidance, entrepreneurship, and emotional well-being through dedicated support programs.'] },
    { title: 'Senior Citizen Support', icon: <Users size={22} />, items: ['Conduct programs focused on Mental Health, Emotional Support, Social Inclusion, Healthy Ageing, and Recreational Activities.'] },
    { title: 'Inclusive Development', icon: <ShieldCheck size={22} />, items: ['Support persons with disabilities, orphaned children, economically weaker sections, and socially marginalized communities through counselling, rehabilitation, and empowerment initiatives.'] },
    { title: 'Professional Training', icon: <Award size={22} />, items: ['Conduct training for Counsellors, Teachers, Psychologists, Social Workers, Police Personnel, NGOs, Healthcare Professionals, and Community Volunteers.'] },
    { title: 'Research & Publications', icon: <FileText size={22} />, items: ['Undertake research, documentation, publications, and evidence-based studies in the fields of psychology, education, mental health, and social development.'] },
    { title: 'Institutional Partnerships', icon: <Building2 size={22} />, items: ['Collaborate with Schools, Colleges, Universities, Industries, Hospitals, Corporate Organizations, NGOs, and Government Departments to implement impactful programs.'] },
    { title: 'Training Centres', icon: <Building2 size={22} />, items: ['Establish Counselling Centres, Mental Health Clinics, Community Resource Centres, Training Institutes, Rehabilitation Services, and Helpline Support.'] },
    { title: 'Disaster & Community Support', icon: <LifeBuoy size={22} />, items: ['Promote awareness and preparedness regarding Disaster Management, Community Resilience, Civic Responsibility, Human Values, and Social Harmony.'] },
    { title: 'Human Rights & Social Welfare', icon: <ShieldCheck size={22} />, items: ['Work towards protecting and promoting Human Rights, Women’s Rights, Child Rights, Senior Citizen Rights, Rights of Persons with Disabilities, and Social Justice.'] },
    { title: 'Accessible Mental Healthcare', icon: <Heart size={22} />, items: ['Ensure affordable, high-quality, and evidence-based psychological services are available to all sections of society.'] },
    { title: 'Capacity Building', icon: <GraduationCap size={22} />, items: ['Develop skilled professionals through Certification Programs, Internship Opportunities, Practical Training, Workshops, Skill Development Courses, and Community Leadership Programs.'] }
  ];

  const servicesList = [
    'Individual Counselling', 'Child Counselling', 'Family Counselling', 'Couple Counselling',
    'Career Counselling', 'Psychological Assessments', 'School Mental Health Programs',
    'Employee Assistance Programs (EAP)', 'Corporate Wellness Programs', 'Addiction Counselling',
    'Stress Management Workshops', 'Life Skills Education', 'Community Awareness Campaigns',
    'Mental Health Training', 'Faculty Development Programs', 'Research & Consultancy'
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

  const navigateToPage = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <a className="top-bar-link" onClick={() => navigateToPage('contact')}>Contact Us</a>
          <span style={{ color: 'var(--border-light)' }}>|</span>
          <span style={{ fontWeight: 600, color: 'var(--accent-purple)' }}>+91 70836 11222 • Pune, India</span>
        </div>
      </div>

      {/* Main Header / Clean White Navbar */}
      <header className="site-header">
        <div className="brand-logo" onClick={() => navigateToPage('home')}>
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
              className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => navigateToPage('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              id="nav-about-btn"
              className={`nav-link-item ${activePage === 'about' ? 'active' : ''}`}
              onClick={() => navigateToPage('about')}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              id="nav-board-btn"
              className={`nav-link-item ${activePage === 'board' ? 'active' : ''}`}
              onClick={() => navigateToPage('board')}
            >
              Board of Directors
            </a>
          </li>
          <li>
            <a
              id="nav-leadership-btn"
              className={`nav-link-item ${activePage === 'leadership' ? 'active' : ''}`}
              onClick={() => navigateToPage('leadership')}
            >
              Leadership Team
            </a>
          </li>
          <li>
            <a
              id="nav-objectives-btn"
              className={`nav-link-item ${activePage === 'objectives' ? 'active' : ''}`}
              onClick={() => navigateToPage('objectives')}
            >
              Our Objectives
            </a>
          </li>
          <li>
            <a
              id="nav-services-btn"
              className={`nav-link-item ${activePage === 'services' ? 'active' : ''}`}
              onClick={() => navigateToPage('services')}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              id="nav-why-btn"
              className={`nav-link-item ${activePage === 'why' ? 'active' : ''}`}
              onClick={() => navigateToPage('why')}
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              id="nav-involved-btn"
              className={`nav-link-item ${activePage === 'involved' ? 'active' : ''}`}
              onClick={() => navigateToPage('involved')}
            >
              Get Involved
            </a>
          </li>
          <li>
            <a
              id="nav-contact-btn"
              className={`nav-link-item ${activePage === 'contact' ? 'active' : ''}`}
              onClick={() => navigateToPage('contact')}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="header-cta-group">
          <button
            id="nav-volunteer-btn"
            className="btn btn-secondary-white"
            style={{ padding: '6px 14px', fontSize: '0.82rem' }}
            onClick={() => navigateToPage('involved')}
          >
            Become a Volunteer
          </button>
          <button
            id="nav-donate-btn"
            className="btn btn-primary-filled"
            style={{ padding: '6px 16px', fontSize: '0.82rem' }}
            onClick={() => navigateToPage('contact')}
          >
            Donate Now <ArrowRight size={13} />
          </button>
        </div>

        <button
          className="mobile-toggle-btn"
          aria-label="Toggle Navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-list">
            <li className={`mobile-nav-item ${activePage === 'home' ? 'active' : ''}`} onClick={() => navigateToPage('home')}>Home</li>
            <li className={`mobile-nav-item ${activePage === 'about' ? 'active' : ''}`} onClick={() => navigateToPage('about')}>About Us</li>
            <li className={`mobile-nav-item ${activePage === 'board' ? 'active' : ''}`} onClick={() => navigateToPage('board')}>Board of Directors</li>
            <li className={`mobile-nav-item ${activePage === 'leadership' ? 'active' : ''}`} onClick={() => navigateToPage('leadership')}>Leadership Team</li>
            <li className={`mobile-nav-item ${activePage === 'objectives' ? 'active' : ''}`} onClick={() => navigateToPage('objectives')}>Our Objectives</li>
            <li className={`mobile-nav-item ${activePage === 'services' ? 'active' : ''}`} onClick={() => navigateToPage('services')}>Our Services</li>
            <li className={`mobile-nav-item ${activePage === 'why' ? 'active' : ''}`} onClick={() => navigateToPage('why')}>Why Choose Us</li>
            <li className={`mobile-nav-item ${activePage === 'involved' ? 'active' : ''}`} onClick={() => navigateToPage('involved')}>Get Involved</li>
            <li className={`mobile-nav-item ${activePage === 'contact' ? 'active' : ''}`} onClick={() => navigateToPage('contact')}>Contact Us</li>
          </ul>
          <div className="mobile-cta-group">
            <button
              className="btn btn-secondary-white"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => navigateToPage('involved')}
            >
              Become a Volunteer
            </button>
            <button
              className="btn btn-primary-filled"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => navigateToPage('contact')}
            >
              Donate Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* MULTI-PAGE VIEW MAIN CONTAINER */}
      <main>
        {/* PAGE 1: HOME */}
        {activePage === 'home' && (
          <div className="page-view">
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
                  onClick={() => navigateToPage('contact')}
                >
                  Donate Now <ArrowRight size={16} />
                </button>
                <button
                  id="hero-volunteer-btn"
                  className="btn btn-secondary-white"
                  onClick={() => navigateToPage('involved')}
                >
                  Become a Volunteer →
                </button>
              </div>
            </section>

            {/* Quick Core Thrust Areas */}
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

            {/* Overview Quick Links */}
            <section className="programs-section">
              <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
                <span className="section-label">Explore Manasdeep</span>
                <h2 className="section-heading-serif">Learn More About Our Work & Leadership</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div className="card-clean" style={{ padding: '2rem', textAlign: 'center' }}>
                  <Users size={36} style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Board of Directors</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Meet our governing body, founder, president, and executive board members.</p>
                  <button className="btn btn-secondary-white" onClick={() => navigateToPage('board')}>View Governing Body →</button>
                </div>
                <div className="card-clean" style={{ padding: '2rem', textAlign: 'center' }}>
                  <Award size={36} style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Leadership Team</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Explore our clinical psychologists, counsellors, and operational experts.</p>
                  <button className="btn btn-secondary-white" onClick={() => navigateToPage('leadership')}>View Leadership Team →</button>
                </div>
                <div className="card-clean" style={{ padding: '2rem', textAlign: 'center' }}>
                  <Heart size={36} style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Our Services</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Individual, family, student, and employee assistance counselling programs.</p>
                  <button className="btn btn-secondary-white" onClick={() => navigateToPage('services')}>View Services →</button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: ABOUT US */}
        {activePage === 'about' && (
          <div className="page-view">
            <section className="about-section">
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

            {/* Vision & Mission */}
            <section className="vision-section">
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
          </div>
        )}

        {/* PAGE 3: BOARD OF DIRECTORS */}
        {activePage === 'board' && (
          <div className="page-view">
            <section className="about-section" style={{ background: '#ffffff' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
                  <span className="section-label">Governing Body</span>
                  <h2 className="section-heading-serif">Board of Directors</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                    Guided by dedicated social visionaries, psychology professionals, journalists, and corporate leaders committed to community empowerment and accessible mental healthcare.
                  </p>
                </div>

                {/* Featured Board Members (Founder & President) */}
                <div className="board-featured-grid">
                  {boardMembers.slice(0, 2).map((member) => (
                    <div key={member.id} className="board-featured-card">
                      <div className="board-member-header">
                        <div className="board-avatar-circle">
                          <User size={28} />
                        </div>
                        <div>
                          <h3 className="board-member-name">{member.name}</h3>
                          <div className="board-role-badge">{member.badge}</div>
                        </div>
                      </div>

                      <div className="board-member-bio">
                        {member.bio.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>

                      {member.vision && (
                        <div className="vision-quote-box">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            <Quote size={16} /> His Vision
                          </div>
                          <p className="vision-quote-text">{member.vision}</p>
                        </div>
                      )}

                      {member.quote && (
                        <p className="board-belief-note">{member.quote}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Other Board Members (Vice President, Secretary, Treasurer) */}
                <div className="board-compact-grid">
                  {boardMembers.slice(2).map((member) => (
                    <div key={member.id} className="board-compact-card">
                      <div className="board-member-header">
                        <div className="board-avatar-circle" style={{ width: '48px', height: '48px', fontSize: '1.1rem' }}>
                          <User size={22} />
                        </div>
                        <div>
                          <h3 className="board-member-name" style={{ fontSize: '1.3rem' }}>{member.name}</h3>
                          <div className="board-role-badge">{member.badge}</div>
                        </div>
                      </div>

                      <div className="board-member-bio" style={{ fontSize: '0.95rem' }}>
                        {member.bio.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 4: LEADERSHIP TEAM */}
        {activePage === 'leadership' && (
          <div className="page-view">
            <section className="programs-section">
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
                <span className="section-label">Clinical & Operational Experts</span>
                <h2 className="section-heading-serif">Manasdeep Foundation Leadership Team</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                  Our multidisciplinary team of clinical psychologists, counsellors, advisors, and social development experts working together for community well-being.
                </p>
              </div>

              <div className="leadership-team-grid">
                {leadershipTeam.map((leader) => (
                  <div key={leader.id} className="leadership-card">
                    <div>
                      <div className="leadership-card-top">
                        <div className="leadership-avatar-icon">
                          <User size={24} />
                        </div>
                        <div>
                          <h3 className="leadership-name">{leader.name}</h3>
                          <div className="leadership-badge">{leader.badge}</div>
                        </div>
                      </div>

                      {leader.credentials && (
                        <div className="leadership-credentials">
                          <Award size={15} style={{ flexShrink: 0, color: 'var(--accent-purple)' }} />
                          <span>{leader.credentials}</span>
                        </div>
                      )}

                      <p className="leadership-bio">{leader.bio}</p>
                    </div>

                    {leader.areas && leader.areas.length > 0 && (
                      <div className="leadership-areas-block">
                        <div className="leadership-areas-title">
                          {leader.areaLabel || 'Areas of Focus'}:
                        </div>
                        <div className="leadership-tags-flex">
                          {leader.areas.map((area, tagIdx) => (
                            <span key={tagIdx} className="area-pill-tag">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PAGE 5: OUR OBJECTIVES */}
        {activePage === 'objectives' && (
          <div className="page-view">
            <section className="programs-section">
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
          </div>
        )}

        {/* PAGE 6: OUR SERVICES */}
        {activePage === 'services' && (
          <div className="page-view">
            <section className="impact-section" style={{ background: '#ffffff' }}>
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
                      onClick={() => navigateToPage('contact')}
                    >
                      Book →
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PAGE 7: WHY CHOOSE US */}
        {activePage === 'why' && (
          <div className="page-view">
            <section className="about-section">
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
          </div>
        )}

        {/* PAGE 8: GET INVOLVED */}
        {activePage === 'involved' && (
          <div className="page-view">
            <section className="programs-section">
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
                      onClick={() => navigateToPage('contact')}
                    >
                      Participate / Inquire →
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PAGE 9: CONTACT US */}
        {activePage === 'contact' && (
          <div className="page-view">
            <section className="about-section" style={{ background: '#ffffff' }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
                  <span className="section-label">Get In Touch</span>
                  <h2 className="section-heading-serif">Contact Manasdeep Foundation</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Have questions or need psychological support? Reach out to our team today.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                  <div className="card-clean" style={{ padding: '2rem', textAlign: 'center' }}>
                    <MapPin size={32} style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Our Location</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Pune, Maharashtra, India</p>
                  </div>
                  <div className="card-clean" style={{ padding: '2rem', textAlign: 'center' }}>
                    <Phone size={32} style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Helpline Phones</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>+91 70836 11222<br />+91 88052 63733</p>
                  </div>
                  <div className="card-clean" style={{ padding: '2rem', textAlign: 'center' }}>
                    <Mail size={32} style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Email Support</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>contact@manasdeepfoundation.org</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* COMPACT SMALL FOOTER */}
      <footer className="site-footer">
        <div className="footer-compact-container">
          <div className="footer-brand-info">
            <div className="brand-icon" style={{ width: '32px', height: '32px', fontSize: '0.95rem' }}>M</div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--accent-purple)', fontSize: '0.92rem' }}>Manasdeep Foundation</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>© {new Date().getFullYear()} All rights reserved.</div>
            </div>
          </div>

          <ul className="footer-links-inline">
            <li><a onClick={() => navigateToPage('about')}>About Us</a></li>
            <li><a onClick={() => navigateToPage('board')}>Board of Directors</a></li>
            <li><a onClick={() => navigateToPage('leadership')}>Leadership Team</a></li>
            <li><a onClick={() => navigateToPage('objectives')}>Objectives</a></li>
            <li><a onClick={() => navigateToPage('services')}>Services</a></li>
            <li><a onClick={() => navigateToPage('involved')}>Get Involved</a></li>
            <li><a onClick={() => navigateToPage('contact')}>Contact</a></li>
          </ul>

          <div className="footer-right-details">
            <span>+91 70836 11222 • Pune</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                </svg>
              </a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
