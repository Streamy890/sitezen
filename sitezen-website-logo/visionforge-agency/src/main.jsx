import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown,
  Menu, X, Sparkles, Monitor, ShoppingBag, Utensils, UserRound, Gamepad2,
  BriefcaseBusiness, Rocket, Globe, Layers3, Zap, ShieldCheck, Clock3,
  MessageCircle, Send, Play, Search, CircleHelp, CheckCircle2, Mail, ExternalLink
} from 'lucide-react';
import './styles.css';

function SitezenMark() {
  return <svg className="sitezen-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><defs><linearGradient id="sitezen-mark-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#67e8f9"/><stop offset="52%" stopColor="#8b7cff"/><stop offset="100%" stopColor="#c084fc"/></linearGradient></defs><path d="M43 19.5C39.5 15.8 34.8 14 29.5 14 20.5 14 15 19.2 15 26c0 6.4 4.3 9.2 13.9 11.4 7.4 1.7 9.8 3.1 9.8 6.2 0 3.4-3.4 5.6-8.8 5.6-5.8 0-10.1-2.1-13.9-5.7" fill="none" stroke="url(#sitezen-mark-gradient)" strokeWidth="6.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="45" cy="44" r="3.5" fill="#67e8f9"/></svg>;
}

const services = [
  { icon: BriefcaseBusiness, title: 'Business Websites', desc: 'A sharp digital home that builds trust and turns visitors into enquiries.', tags: ['Company profile', 'Lead generation'] },
  { icon: ShoppingBag, title: 'E-commerce', desc: 'Product-led storefronts designed to make browsing and buying feel effortless.', tags: ['Product catalog', 'Shopping journeys'] },
  { icon: Utensils, title: 'Restaurant & Food', desc: 'Menus, location details, and a delicious first impression for your customers.', tags: ['Digital menu', 'Reservations'] },
  { icon: UserRound, title: 'Portfolio Websites', desc: 'Show your work with a polished, memorable portfolio that feels like you.', tags: ['Case studies', 'Personal brand'] },
  { icon: Gamepad2, title: 'Gaming & Creator', desc: 'A bold home for creators, communities, esports teams, and gaming projects.', tags: ['Creator hub', 'Community links'] },
  { icon: Rocket, title: 'Startup & Landing Pages', desc: 'Focus your story, explain your product, and give visitors a clear next step.', tags: ['Product launch', 'Waitlist-ready'] },
  { icon: Globe, title: 'Blogs & Content', desc: 'Organized content experiences built for reading, discovery, and growth.', tags: ['Articles', 'Categories'] },
  { icon: Layers3, title: 'Fully Custom', desc: 'A tailored experience for ideas that do not fit inside a standard package.', tags: ['Custom features', 'Scoped together'] }
];

const plans = [
  { name: 'Starter', price: '₹4,999', sub: 'A polished starting point for a serious online presence.', featured: false, items: ['Single-page website', 'Responsive layout', 'Basic customization', 'Contact section', 'Simple animations', 'Launch assistance'] },
  { name: 'Professional', price: '₹9,999', sub: 'For growing brands ready for a more complete website.', featured: true, items: ['Up to 5 pages', 'Personalized design', 'Responsive layouts', 'Contact form', 'Smooth animations', 'Basic SEO setup', 'Agreed revision allowance'] },
  { name: 'Business Pro', price: '₹14,999', sub: 'More room for ambitious businesses to grow.', featured: false, items: ['Multi-page website', 'Premium visual styling', 'Advanced interactions', 'Custom section layouts', 'Scope-based business features', 'Performance optimization', 'Project consultation'] },
  { name: 'Premium Custom', price: '₹15,000–₹20,000+', sub: 'A bespoke experience, planned around your vision.', featured: false, items: ['Bespoke visual design', 'Multiple custom pages', 'Advanced interactions', 'E-commerce or business features', 'Third-party integrations if needed', 'Personalized consultation', 'Project-specific launch support'] }
];

const demos = [
  { title: 'Northstar Studio', type: 'Business', desc: 'A confident, minimal home for a modern creative business.', style: 'demo-blue', image: '/images/demo-business.jpg', label: 'BUSINESS / BRAND' },
  { title: 'Morrow Goods', type: 'E-commerce', desc: 'Product storytelling with a clean, editorial storefront.', style: 'demo-cream', image: '/images/demo-store.jpg', label: 'SHOP THE COLLECTION' },
  { title: 'Saffron Table', type: 'Restaurants', desc: 'A warm restaurant concept with menu-led visual hierarchy.', style: 'demo-orange', image: '/images/demo-restaurant.jpg', label: 'SEASONAL DINING' },
  { title: 'Pixel League', type: 'Gaming', desc: 'A high-energy community landing page for a gaming brand.', style: 'demo-purple', image: '/images/demo-gaming.jpg', label: 'PLAY YOUR OWN GAME' },
  { title: 'Avery Cole', type: 'Portfolios', desc: 'A personal portfolio built around projects and process.', style: 'demo-green', image: '/images/demo-portfolio.jpg', label: 'SELECTED WORK' },
  { title: 'Launchpad AI', type: 'Landing Pages', desc: 'A product launch concept with one focused call to action.', style: 'demo-pink', image: '/images/demo-startup.jpg', label: 'IDEAS, IN MOTION' },
  { title: 'Form & Field', type: 'Agencies', desc: 'An elegant agency layout with strong typography and space.', style: 'demo-slate', image: '/images/demo-agency.jpg', label: 'DESIGN / DIGITAL' },
  { title: 'The Everyday Edit', type: 'Personal Brands', desc: 'A flexible editorial identity for a creator-led business.', style: 'demo-yellow', image: '/images/demo-personal-brand.jpg', label: 'YOUR NEXT CHAPTER' }
];

const faqs = [
  ['How much does a website cost?', 'Packages start at ₹4,999. The final quote depends on pages, functionality, content, and the agreed scope.'],
  ['Are your prices negotiable?', 'Yes. Share your budget and the essentials you need. We can discuss a suitable scope, but discounts are not automatic or guaranteed.'],
  ['Can I request a custom website?', 'Absolutely. Use the custom request form to describe your idea, preferred style, features, and budget.'],
  ['Do you provide domain and hosting?', 'Domain and hosting can be discussed separately. Third-party subscriptions and renewal charges are not included unless your written quote says otherwise.'],
  ['How long does a website take?', 'Timing depends on the scope and how quickly content and feedback are provided. We will agree on an estimate before work begins.'],
  ['How many revisions are included?', 'The revision allowance will be written into your project quote before you approve it.'],
  ['Can you build an online store?', 'Yes, subject to an agreed scope. Product management, payment gateways, shipping, and other integrations may add cost and setup requirements.'],
  ['What happens after I submit a request?', 'Your requirements should be reviewed first. A project is not booked until the scope, price, timeline, and next steps are confirmed.']
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [intro, setIntro] = useState(!sessionStorage.getItem('vf-intro-seen'));
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState('Business');
  const [previewType, setPreviewType] = useState('Gaming');
  const [previewFont, setPreviewFont] = useState('Manrope');
  const [previewColor, setPreviewColor] = useState('#8b78ff');
  const [search, setSearch] = useState('');
  const [faqOpen, setFaqOpen] = useState(0);
  const [modal, setModal] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [formType, setFormType] = useState('Business');
  const [formBudget, setFormBudget] = useState('₹5,000–₹10,000');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formPages, setFormPages] = useState('1–5 pages');
  const [formFeatures, setFormFeatures] = useState(['Contact form']);
  const [formStyle, setFormStyle] = useState('Premium and elegant');
  const [formTimeline, setFormTimeline] = useState('Flexible');
  const [formBusiness, setFormBusiness] = useState('');
  const [formReference, setFormReference] = useState('');
  const [formExtra, setFormExtra] = useState('');
  const [formSpecificBudget, setFormSpecificBudget] = useState('');
  const [formProject, setFormProject] = useState('Custom quote');
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!intro) return;
    const timer = setTimeout(() => {
      setIntro(false);
      sessionStorage.setItem('vf-intro-seen', '1');
    }, 2900);
    return () => clearTimeout(timer);
  }, [intro]);

  useEffect(() => {
    document.body.style.overflow = modal || intro ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal, intro]);

  const openRequest = (plan = '', type = 'Custom quote') => {
    setSelectedPlan(plan);
    setFormProject(type);
    setFormSent(false);
    setModal('request');
  };

  const filteredDemos = demos.filter(d => (activeFilter === 'All' || d.type === activeFilter) && `${d.title} ${d.type} ${d.desc}`.toLowerCase().includes(search.toLowerCase()));

  const toggleFeature = (feature) => setFormFeatures(prev => prev.includes(feature) ? prev.filter(x => x !== feature) : [...prev, feature]);

  const submitRequest = async (e) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formPhone.trim() || !formDetails.trim()) return;
    // Formspree endpoint configured for the enquiry form.
    const endpoint = 'https://formspree.io/f/mwlvzqgj';
    const request = {
      _subject: `New Sitezen website enquiry from ${formName.trim()}`,
      _replyto: formEmail.trim(),
      name: formName.trim(), email: formEmail.trim(), phone: formPhone.trim(), business: formBusiness.trim(),
      projectType: formType, selectedPackage: selectedPlan || formProject,
      budget: formSpecificBudget || formBudget, pages: formPages, style: formStyle,
      features: formFeatures.join(', '), timeline: formTimeline, reference: formReference.trim(),
      details: formDetails.trim(), additional: formExtra.trim()
    };
    setFormSubmitting(true);
    setFormError('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(request)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Your request could not be sent. Please try again later.');
      setFormSent(true);
    } catch (error) {
      setFormError(error.message || 'Network error. Please try again later.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const copySummary = () => {
    const summary = `Website request\nName: ${formName}\nEmail: ${formEmail}\nPhone: ${formPhone}\nBusiness: ${formBusiness || 'Not supplied'}\nWebsite type: ${formType}\nPackage: ${selectedPlan || formProject}\nBudget: ${formSpecificBudget || formBudget}\nPages: ${formPages}\nStyle: ${formStyle}\nFeatures: ${formFeatures.join(', ') || 'None selected'}\nTimeline: ${formTimeline}\nReference: ${formReference || 'Not supplied'}\nDetails: ${formDetails}\nAdditional: ${formExtra || 'None'}`;
    navigator.clipboard?.writeText(summary).then(() => setToast('Request summary copied.')).catch(() => setToast('Copy was blocked by your browser.'));
    setTimeout(() => setToast(''), 2600);
  };

  return <>
    {intro && <div className="intro-screen" aria-label="Intro animation">
      <div className="intro-orb orb-a"></div><div className="intro-orb orb-b"></div>
      <div className="intro-brand"><span className="brand-mark"><SitezenMark /></span><span>SITE<span className="gradient-text">ZEN</span></span></div>
      <div className="intro-lines"><div>YOUR VISION.</div><div className="intro-second">OUR CODE.</div></div>
      <p className="intro-caption">DIGITAL EXPERIENCES, BUILT AROUND YOU</p>
      <div className="intro-progress"><span /></div>
      <button className="intro-skip" onClick={() => { setIntro(false); sessionStorage.setItem('vf-intro-seen', '1'); }}>Skip intro <ArrowRight size={14}/></button>
    </div>}

    <header className="site-header">
      <a href="#home" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark"><SitezenMark /></span><span>SITE<span className="gradient-text">ZEN</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {[['Services','#services'],['Pricing','#pricing'],['Demos','#demos'],['Process','#process'],['About','#about'],['FAQ','#faq']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <button className="mobile-cta" onClick={() => { setMenuOpen(false); openRequest('', 'Custom quote'); }}>Get your website <ArrowUpRight size={16}/></button>
      </nav>
      <div className="header-actions"><button className="text-link login-link" onClick={() => setModal('account')}>Client area</button><button className="btn btn-primary header-cta" onClick={() => openRequest('', 'Custom quote')}>Get your website <ArrowUpRight size={16}/></button></div>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid"></div><div className="hero-glow"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> INDEPENDENT DIGITAL STUDIO <span className="eyebrow-line"></span></div>
          <h1>Your business deserves a website that <span className="gradient-text">stands out.</span></h1>
          <p className="hero-sub">We build stunning, fast, and responsive websites for businesses, creators, and ambitious brands. Premium design, flexible budgets, and custom solutions made around your vision.</p>
          <div className="hero-actions"><button className="btn btn-primary btn-large" onClick={() => openRequest('', 'Custom website')}>Build my website <ArrowUpRight size={18}/></button><a className="btn btn-outline btn-large" href="#demos">Explore live demos <ArrowDownRight size={18}/></a></div>
          <button className="budget-link" onClick={() => openRequest('', 'Negotiation')}>Have a budget in mind? <span>Let’s discuss your price <ArrowRight size={14}/></span></button>
          <div className="hero-values"><div><CheckCircle2 size={16}/><span>Budget-friendly pricing</span></div><div><CheckCircle2 size={16}/><span>Custom website designs</span></div><div><CheckCircle2 size={16}/><span>Flexible project packages</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Website concept previews">
          <div className="visual-label"><span className="visual-label-dot"></span> DESIGNING WHAT'S NEXT</div>
          <div className="browser browser-main"><div className="browser-bar"><div className="browser-dots"><i></i><i></i><i></i></div><span>northstar.studio</span><span className="browser-lock">↗</span></div><div className="browser-content main-preview"><div className="preview-nav"><b>northstar®</b><span>WORK&nbsp;&nbsp;&nbsp; ABOUT&nbsp;&nbsp;&nbsp; CONTACT</span></div><div className="preview-kicker">INDEPENDENT CREATIVE STUDIO</div><h3>Make your<br/><em>next move.</em></h3><div className="preview-bottom"><span>Strategy meets imagination.</span><span className="preview-circle"><ArrowUpRight size={17}/></span></div><div className="preview-shape"></div></div></div>
          <div className="browser browser-small browser-top"><div className="browser-bar"><div className="browser-dots"><i></i><i></i><i></i></div><span>morrow.goods</span></div><div className="mini-store"><div className="mini-product"></div><div><small>THE EVERYDAY COLLECTION</small><b>Objects<br/>with purpose.</b><span>Explore collection ↗</span></div></div></div>
          <div className="browser browser-small browser-bottom"><div className="browser-bar"><div className="browser-dots"><i></i><i></i><i></i></div><span>pixelleague.gg</span></div><div className="mini-game"><span>READY PLAYER ONE</span><b>PLAY<br/>BEYOND.</b><i>JOIN THE SQUAD ↗</i></div></div>
          <div className="float-chip chip-one"><span className="chip-icon"><Zap size={16}/></span><span><b>Made for your goals</b><small>Design with purpose</small></span></div>
          <div className="float-chip chip-two"><span className="chip-check"><Check size={15}/></span><span><b>Responsive by design</b><small>Desktop to mobile</small></span></div>
          <div className="visual-ring"></div>
        </div>
        <a className="scroll-cue" href="#services"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span></a>
      </section>

      <section className="ticker" aria-label="Services"><div className="ticker-track">{['DESIGN WITH INTENT','DEVELOP WITH CARE','BUILT FOR YOUR BRAND','FLEXIBLE BY NATURE','DESIGN WITH INTENT','DEVELOP WITH CARE','BUILT FOR YOUR BRAND','FLEXIBLE BY NATURE'].map((t,i)=><span key={i}>{t}<i>✳</i></span>)}</div></section>

      <section className="section section-wrap" id="services">
        <div className="section-heading"><div><div className="eyebrow">WHAT WE CREATE <span className="eyebrow-line"></span> 01</div><h2>Good design is just<br/>the <span className="gradient-text">beginning.</span></h2></div><p>From your first landing page to a feature-rich digital storefront, we shape the right experience for your next chapter.</p></div>
        <div className="services-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-top"><span className="service-icon"><s.icon size={21}/></span><span className="service-index">0{i+1}</span></div><h3>{s.title}</h3><p>{s.desc}</p><div className="service-tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><button className="card-link" onClick={() => {setFormType(s.title.replace(' Websites','')); openRequest('', s.title);}}>Explore service <ArrowUpRight size={15}/></button></article>)}</div>
      </section>

      <section className="pricing-section" id="pricing"><div className="section section-wrap">
        <div className="section-heading pricing-heading"><div><div className="eyebrow">STRAIGHTFORWARD STARTING POINTS <span className="eyebrow-line"></span> 02</div><h2>Find your fit.<br/><span className="gradient-text">Keep your freedom.</span></h2></div><p>Start with a package, then shape the scope together. Every quote is confirmed before a project begins.</p></div>
        <div className="pricing-grid">{plans.map((p,i)=><article key={p.name} className={`price-card ${p.featured?'featured':''} ${i===3?'premium':''}`}><div className="plan-topline">{p.featured?<span className="plan-badge"><Sparkles size={12}/> MOST POPULAR</span>:<span className="plan-number">PACKAGE 0{i+1}</span>}<span className="plan-arrow"><ArrowUpRight size={17}/></span></div><h3>{p.name}</h3><p className="plan-desc">{p.sub}</p><div className="plan-price">{p.price}</div><div className="price-note">{i===3?'Project range · complex scopes may cost more':'Starting at · final quote depends on scope'}</div><div className="plan-divider"></div><ul>{p.items.map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul><button className={p.featured?'btn btn-primary plan-btn':'btn btn-outline plan-btn'} onClick={() => openRequest(p.name, 'Package enquiry')}>{i===3?'Discuss my project':`Choose ${p.name}`}<ArrowRight size={16}/></button></article>)}</div>
        <div className="negotiation-banner"><div className="negotiation-icon"><MessageCircle size={23}/></div><div><span className="eyebrow">FLEXIBLE DOESN'T MEAN COMPROMISED</span><h3>Your budget matters. <span className="gradient-text">Our prices are negotiable.</span></h3><p>Found a package you like but have a different budget? Tell us what you need. We’ll review your requirements and discuss a price that works for both sides.</p></div><button className="btn btn-primary" onClick={() => openRequest('', 'Negotiation')}>Negotiate my price <ArrowUpRight size={17}/></button></div>
        <p className="pricing-footnote"><ShieldCheck size={15}/> Domain, hosting, paid plugins, payment-provider fees, and ongoing maintenance are separate unless your confirmed quote explicitly includes them.</p>
      </div></section>

      <section className="section section-wrap" id="demos">
        <div className="section-heading"><div><div className="eyebrow">A FEEL FOR THE POSSIBILITIES <span className="eyebrow-line"></span> 03</div><h2>Explore the <span className="gradient-text">showcase.</span></h2></div><p>These concept previews show possible directions—not client projects or live websites. Have a favorite? We can plan a similar direction around your brand.</p></div>
        <div className="demo-controls"><div className="filter-tabs">{['All','Business','E-commerce','Restaurants','Portfolios','Gaming','Agencies','Landing Pages','Personal Brands'].map(f=><button key={f} className={activeFilter===f?'active':''} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div><label className="demo-search"><Search size={16}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search concepts"/></label></div>
        <div className="demo-lab">
          <div className="demo-lab-copy">
            <div className="eyebrow">TRY THE LOOK <span className="eyebrow-line"></span> LIVE STYLE LAB</div>
            <h3>Make it feel <span className="gradient-text">like yours.</span></h3>
            <p>Choose a website type, font and accent colour. The preview updates instantly so visitors can picture their own website before requesting a quote.</p>
            <div className="lab-control"><label>01 / WEBSITE TYPE</label><div className="lab-pills">{['Gaming','Business','Restaurant','Portfolio','Store'].map(t=><button key={t} className={previewType===t?'selected':''} onClick={()=>setPreviewType(t)}>{t}</button>)}</div></div>
            <div className="lab-control"><label>02 / FONT STYLE</label><div className="lab-fonts">{[['Manrope','Modern'],['Georgia','Elegant'],['Arial','Clean'],['monospace','Tech']].map(([f,n])=><button key={f} className={previewFont===f?'selected':''} style={{fontFamily:f}} onClick={()=>setPreviewFont(f)}>{n}<span>Aa</span></button>)}</div></div>
            <div className="lab-control"><label>03 / ACCENT COLOUR</label><div className="lab-colours">{[['#8b78ff','Violet'],['#38d9ff','Cyber blue'],['#ff6b8a','Pink'],['#a6e86c','Lime'],['#ffad55','Orange'],['#f2d36b','Gold']].map(([c,n])=><button key={c} title={n} aria-label={n} className={previewColor===c?'selected':''} style={{background:c}} onClick={()=>setPreviewColor(c)}/>)}</div></div>
            <button className="btn btn-primary" onClick={()=>{setFormType(previewType);setFormDetails(`I want a ${previewType.toLowerCase()} website with ${previewFont} typography and ${previewColor} accent colour.`);openRequest('', 'Style lab request');}}>Request this style <ArrowUpRight size={16}/></button>
          </div>
          <div className="lab-preview" style={{'--lab-accent':previewColor,fontFamily:previewFont}}>
            <div className="lab-preview-top"><span><i></i><i></i><i></i></span><b>{previewType==='Gaming'?'NEXUS / GAMING':previewType==='Restaurant'?'SAGE & SALT':previewType==='Store'?'OBJECTS / STORE':previewType==='Portfolio'?'ALEX MORGAN':'NORTHSTAR CO.'}</b><span>LIVE PREVIEW</span></div>
            <div className={`lab-preview-hero lab-${previewType.toLowerCase()}`}><span className="lab-kicker">{previewType==='Gaming'?'PLAYER ONE. YOUR RULES.':previewType==='Restaurant'?'FRESH IDEAS, SEASONAL PLATES.':previewType==='Store'?'MADE TO BE KEPT.':previewType==='Portfolio'?'DESIGNER · CREATOR · THINKER':'A BETTER WAY TO BUILD.'}</span><h4>{previewType==='Gaming'?'LEVEL UP YOUR\nWORLD.':previewType==='Restaurant'?'A LITTLE MORE\nFLAVOUR.':previewType==='Store'?'THE EVERYDAY,\nREIMAGINED.':previewType==='Portfolio'?'IDEAS MADE\nVISIBLE.':'MAKE YOUR\nNEXT MOVE.'}</h4><p>{previewType==='Gaming'?'A home for your games, squad and creator story.':previewType==='Restaurant'?'A warm welcome to good food and good company.':previewType==='Store'?'Thoughtful products. A simpler way to shop.':previewType==='Portfolio'?'Selected work, process and the story behind it.':'A clear, confident digital home for your brand.'}</p><span className="lab-cta">{previewType==='Gaming'?'ENTER THE ARENA ↗':previewType==='Restaurant'?'VIEW THE MENU ↗':previewType==='Store'?'SHOP COLLECTION ↗':previewType==='Portfolio'?'VIEW MY WORK ↗':'EXPLORE MORE ↗'}</span><div className="lab-art-orb"></div><div className="lab-art-mark">{previewType==='Gaming'?'✦':previewType==='Restaurant'?'✿':previewType==='Store'?'◈':previewType==='Portfolio'?'✳':'✧'}</div></div>
            <div className="lab-preview-footer"><span>DESIGNED AROUND YOUR IDEA</span><span style={{color:previewColor}}>01 — 04</span></div>
          </div>
        </div>
        <div className="demo-video-card"><div className="demo-video-heading"><span className="eyebrow">WATCH A SAMPLE <span className="eyebrow-line"></span></span><h3>See a website <span className="gradient-text">come to life.</span></h3><p>Choose a category to watch a separate short website concept walkthrough. Each video uses its own visual direction, layout and call-to-action.</p><div className="video-category-picker" role="group" aria-label="Choose demo video">{[{name:'Business',file:'business',poster:'/images/demo-business.jpg'},{name:'Restaurant',file:'restaurant',poster:'/images/demo-restaurant.jpg'},{name:'E-commerce',file:'store',poster:'/images/demo-store.jpg'},{name:'Gaming',file:'gaming',poster:'/images/demo-gaming.jpg'},{name:'Portfolio',file:'portfolio',poster:'/images/demo-portfolio.jpg'},{name:'Startup',file:'startup',poster:'/images/demo-startup.jpg'},{name:'Agency',file:'agency',poster:'/images/demo-agency.jpg'},{name:'Personal brand',file:'personal-brand',poster:'/images/demo-personal-brand.jpg'}].map(v=><button type="button" key={v.name} className={activeVideo===v.name?'selected':''} onClick={()=>setActiveVideo(v.name)}>{v.name}</button>)}</div></div><div className="demo-video-frame"><video key={activeVideo} controls muted loop playsInline preload="metadata" poster={`/images/demo-${({'Business':'business','Restaurant':'restaurant','E-commerce':'store','Gaming':'gaming','Portfolio':'portfolio','Startup':'startup','Agency':'agency','Personal brand':'personal-brand'})[activeVideo]}.jpg`}><source src={`/videos/${({'Business':'business','Restaurant':'restaurant','E-commerce':'store','Gaming':'gaming','Portfolio':'portfolio','Startup':'startup','Agency':'agency','Personal brand':'personal-brand'})[activeVideo]}.mp4`} type="video/mp4"/>Your browser does not support embedded video.</video><div className="video-caption"><Play size={17}/><span><b>{activeVideo.toUpperCase()} WEBSITE CONCEPT</b><small>Sample walkthrough · concept only, not a live client website</small></span><span className="video-tag">DEMO VIDEO</span></div></div></div>
        <div className="demos-grid">{filteredDemos.map((d,i)=><article className="demo-card" key={d.title}><div className={`demo-art ${d.style}`}><img className="demo-photo" src={d.image} alt={`${d.title} ${d.type.toLowerCase()} website concept`} loading="lazy"/><div className="demo-photo-shade"></div><div className="demo-photo-copy"><span>{d.label}</span><h3>{d.title}</h3><p>{d.type==='Restaurants'?'A taste worth remembering.':d.type==='Gaming'?'ENTER THE ARENA.':d.type==='E-commerce'?'Objects made to be kept.':d.type==='Portfolios'?'Selected work and visual stories.':d.type==='Landing Pages'?'Meet what comes next.':'Make room for what’s next.'}</p><span className="demo-photo-cta">EXPLORE ↗</span></div><span className="demo-number">0{i+1}</span></div><div className="demo-meta"><div><span className="demo-category">{d.type}</span><h3>{d.title}</h3></div><button aria-label={`Request a website like ${d.title}`} onClick={()=>{setFormType(d.type);setFormDetails(`I like the ${d.title} concept direction. ${d.desc}`);openRequest('', 'Similar design request');}}><ArrowUpRight size={18}/></button></div><p>{d.desc}</p><div className="demo-label"><span></span> Concept preview · not a live site</div></article>)}</div>
        {filteredDemos.length===0&&<div className="empty-state">No concepts match that search. Try another keyword.</div>}
      </section>

      <section className="custom-section"><div className="section section-wrap custom-layout"><div className="custom-copy"><div className="eyebrow">BUILT AROUND YOUR IDEA <span className="eyebrow-line"></span> 04</div><h2>Your idea.<br/>Your style.<br/><span className="gradient-text">Your website.</span></h2><p>No technical vocabulary needed. Tell us what you’re imagining, pick the features that matter, and share the budget you’re comfortable with.</p><div className="custom-benefits"><div><span><Check size={15}/></span><div><b>Start with an idea</b><small>Even if it’s only a rough concept.</small></div></div><div><span><Check size={15}/></span><div><b>Choose your essentials</b><small>Keep the scope focused and clear.</small></div></div><div><span><Check size={15}/></span><div><b>Agree before we build</b><small>Final price and scope are confirmed together.</small></div></div></div><button className="btn btn-primary btn-large" onClick={()=>openRequest('', 'Custom website builder')}>Start your custom request <ArrowUpRight size={18}/></button></div><div className="builder-card"><div className="builder-top"><span className="builder-dots"><i></i><i></i><i></i></span><span>PROJECT BUILDER <b>01 / 04</b></span></div><div className="builder-progress"><span></span></div><div className="builder-question">WHAT ARE WE BUILDING?</div><div className="builder-options">{[['Business website',BriefcaseBusiness],['Online store',ShoppingBag],['Portfolio',UserRound],['Gaming / creator',Gamepad2]].map(([name,Icon])=><button key={name} onClick={()=>{setFormType(name);openRequest('', 'Custom website builder');}}><Icon size={19}/><span>{name}</span><ArrowUpRight size={15}/></button>)}</div><div className="builder-bottom"><span>Not sure yet? That’s okay.</span><button onClick={()=>openRequest('', 'Custom website builder')}>Let’s talk <ArrowRight size={15}/></button></div></div></div></section>

      <section className="section section-wrap" id="process"><div className="section-heading"><div><div className="eyebrow">A CLEAR PATH FORWARD <span className="eyebrow-line"></span> 05</div><h2>From first thought<br/>to <span className="gradient-text">launch day.</span></h2></div><p>Good projects come from clear expectations. Here’s how we’ll work together, one step at a time.</p></div><div className="process-grid">{[{n:'01',title:'Discover',desc:'Choose a package or tell us the idea you want to bring to life.',icon:Search},{n:'02',title:'Plan',desc:'Discuss your requirements, budget, timeline, and project scope.',icon:Layers3},{n:'03',title:'Design & build',desc:'We create the agreed website and share progress as planned.',icon:Code2},{n:'04',title:'Review & launch',desc:'Review the result, complete agreed revisions, and prepare for launch.',icon:Rocket}].map(({n,title,desc,icon:Icon})=><article className="process-step" key={n}><div className="process-number">{n}<Icon size={21}/></div><div className="process-line"></div><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <section className="about-section" id="about"><div className="section section-wrap about-layout"><div className="about-visual"><div className="about-grid"></div><div className="about-stamp"><Code2 size={31}/><span>IDEAS INTO<br/>INTERFACES</span></div><div className="about-code"><span>const vision =</span><b>“your next chapter”;</b><span>build(vision); <i>↗</i></span></div><div className="about-orb"></div></div><div className="about-copy"><div className="eyebrow">SMALL STUDIO. BIG IDEAS. <span className="eyebrow-line"></span> 06</div><h2>Digital work with<br/><span className="gradient-text">a human side.</span></h2><p>We believe a great website should fit the business behind it—not force the business into a template. Our approach starts with your goals, keeps the details transparent, and builds toward a result that feels right for you.</p><p>We’re here for practical launches, ambitious ideas, and everything in between. No mystery pricing, no fake promises—just a clear conversation about what you need.</p><div className="about-points"><span><CheckCircle2 size={16}/> Clear scope</span><span><CheckCircle2 size={16}/> Flexible budgets</span><span><CheckCircle2 size={16}/> Thoughtful design</span></div><button className="btn btn-outline" onClick={()=>openRequest('', 'Introductory consultation')}>Tell us your idea <ArrowUpRight size={16}/></button></div></div></section>

      <section className="section section-wrap faq-section" id="faq"><div className="section-heading"><div><div className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS <span className="eyebrow-line"></span> 07</div><h2>Before we <span className="gradient-text">begin.</span></h2></div><p>Still wondering how it works? Here are a few useful details. Anything project-specific will be confirmed in your quote.</p></div><div className="faq-layout"><div className="faq-aside"><CircleHelp size={27}/><h3>Something else<br/>on your mind?</h3><p>Send us your question and we’ll figure out the right next step.</p><button className="text-link" onClick={()=>openRequest('', 'Question / contact')}>Ask us directly <ArrowUpRight size={15}/></button></div><div className="faq-list">{faqs.map(([q,a],i)=><article className={`faq-item ${faqOpen===i?'expanded':''}`} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)} aria-expanded={faqOpen===i}><span><small>0{i+1}</small>{q}</span><ChevronDown size={18}/></button>{faqOpen===i&&<p>{a}</p>}</article>)}</div></div></section>

      <section className="contact-cta"><div className="contact-cta-glow"></div><div className="section section-wrap contact-cta-inner"><div className="eyebrow"><span className="status-dot"></span> YOUR NEXT CHAPTER STARTS HERE</div><h2>Have an idea?<br/><span className="gradient-text">Let’s make it real.</span></h2><p>Tell us what you need, what you want to spend, and what success looks like to you.</p><div className="hero-actions"><button className="btn btn-primary btn-large" onClick={()=>openRequest('', 'Custom quote')}>Request a custom quote <ArrowUpRight size={18}/></button><button className="btn btn-outline btn-large" onClick={()=>openRequest('', 'Question / contact')}>Contact the studio <MessageCircle size={17}/></button></div><div className="cta-foot"><span><Clock3 size={15}/> No pressure. Just a conversation.</span><span><ShieldCheck size={15}/> Scope agreed before work begins.</span></div></div></section>
    </main>

    <footer className="footer"><div className="section section-wrap"><div className="footer-main"><div className="footer-brand"><a href="#home" className="brand"><span className="brand-mark"><SitezenMark /></span><span>SITE<span className="gradient-text">ZEN</span></span></a><p>Thoughtful websites for businesses, creators, and ideas ready to move forward.</p><span className="footer-tagline">YOUR VISION. OUR DESIGN. YOUR WEBSITE.</span></div><div className="footer-column"><b>Explore</b><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#demos">Website concepts</a><a href="#process">How it works</a></div><div className="footer-column"><b>Get started</b><button onClick={()=>openRequest('', 'Custom quote')}>Request a quote</button><button onClick={()=>openRequest('', 'Negotiation')}>Negotiate pricing</button><button onClick={()=>openRequest('', 'Custom website')}>Custom website</button><button onClick={()=>setModal('account')}>Client area</button></div><div className="footer-column"><b>Policies</b><button onClick={()=>setModal('privacy')}>Privacy overview</button><button onClick={()=>setModal('terms')}>Terms overview</button><button onClick={()=>setModal('refund')}>Refund overview</button><span className="policy-note">Drafts — review before publishing.</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sitezen Studio.</span><span>Designed with intent <span className="footer-heart">✳</span></span><a href="#home">Back to top ↑</a></div></div></footer>

    {modal && <div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setModal('');}}><div className={`modal ${modal==='request'?'request-modal':''}`} role="dialog" aria-modal="true" aria-label={modal==='request'?'Website project request':modal==='account'?'Client area':'Policy information'}><button className="modal-close" onClick={()=>setModal('')} aria-label="Close dialog"><X size={20}/></button>
      {modal==='request' && <>{!formSent ? <><div className="modal-kicker"><span className="status-dot"></span> LET’S TALK ABOUT YOUR PROJECT</div><h2>Let’s build something <span className="gradient-text">great.</span></h2><p className="modal-intro">Share a few details. Your request is sent securely to the studio when the enquiry service is configured.</p><form className="request-form" onSubmit={submitRequest}><div className="form-grid"><label>Full name *<input required value={formName} onChange={e=>setFormName(e.target.value)} placeholder="Your name"/></label><label>Email address *<input required type="email" value={formEmail} onChange={e=>setFormEmail(e.target.value)} placeholder="you@example.com"/></label><label>Phone / WhatsApp *<input required type="tel" value={formPhone} onChange={e=>setFormPhone(e.target.value)} placeholder="+91…"/></label><label>Business / brand name<input value={formBusiness} onChange={e=>setFormBusiness(e.target.value)} placeholder="Optional"/></label><label>Website type<select value={formType} onChange={e=>setFormType(e.target.value)}>{['Business','E-commerce','Restaurant','Portfolio','Gaming / creator','Blog','Booking','Startup','Other'].map(x=><option key={x}>{x}</option>)}</select></label><label>Preferred package<select value={selectedPlan || formProject} onChange={e=>setSelectedPlan(e.target.value)}>{['Custom quote','Starter','Professional','Business Pro','Premium Custom','Negotiation','Custom website builder','Question / contact'].map(x=><option key={x}>{x}</option>)}</select></label><label>Budget range<select value={formBudget} onChange={e=>setFormBudget(e.target.value)}>{['₹5,000–₹10,000','₹10,000–₹15,000','₹15,000–₹20,000','₹20,000–₹30,000','Above ₹30,000','Custom budget'].map(x=><option key={x}>{x}</option>)}</select></label><label>Specific budget (optional)<input value={formSpecificBudget} onChange={e=>setFormSpecificBudget(e.target.value)} placeholder="e.g. ₹6,000"/></label><label>Number of pages<select value={formPages} onChange={e=>setFormPages(e.target.value)}>{['1 page','1–5 pages','6–10 pages','10+ pages','Not sure yet'].map(x=><option key={x}>{x}</option>)}</select></label><label>Design style<select value={formStyle} onChange={e=>setFormStyle(e.target.value)}>{['Minimal and clean','Premium and elegant','Dark and futuristic','Colorful and creative','Corporate and professional','Reference-based design'].map(x=><option key={x}>{x}</option>)}</select></label><label>Expected timeline<select value={formTimeline} onChange={e=>setFormTimeline(e.target.value)}>{['As soon as practical','Within 2 weeks','Within a month','Flexible','Specific date to discuss'].map(x=><option key={x}>{x}</option>)}</select></label></div><fieldset className="feature-fieldset"><legend>Features you may need</legend><div className="feature-options">{['Contact form','Product catalog','Shopping cart','Online payments','Customer accounts','Booking system','Admin dashboard','Blog','Animations','Search & filters','Custom integrations'].map(f=><label key={f} className={formFeatures.includes(f)?'selected':''}><input type="checkbox" checked={formFeatures.includes(f)} onChange={()=>toggleFeature(f)}/><span>{formFeatures.includes(f)&&<Check size={12}/>}</span>{f}</label>)}</div></fieldset><label>Reference website links<input value={formReference} onChange={e=>setFormReference(e.target.value)} placeholder="https://... (optional)"/></label><label>Tell us about your idea *<textarea required rows="4" value={formDetails} onChange={e=>setFormDetails(e.target.value)} placeholder="What should the website do? Who is it for? What matters most?"/></label><label>Anything else? (optional)<textarea rows="2" value={formExtra} onChange={e=>setFormExtra(e.target.value)} placeholder="Content, special requirements, questions..."/></label><div className="form-consent"><ShieldCheck size={16}/><span>Your details are used to respond to this enquiry. Avoid sending passwords or other sensitive information.</span></div>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="btn btn-primary btn-large form-submit" type="submit" disabled={formSubmitting}>{formSubmitting ? "Sending request…" : "Send project request"} <ArrowRight size={17}/></button></form></> : <div className="success-state"><div className="success-icon"><CheckCircle2 size={31}/></div><div className="eyebrow">REQUEST SUMMARY CREATED</div><h2>Your idea is <span className="gradient-text">taking shape.</span></h2><p>Your request was submitted. The studio will review your requirements and contact you using the details you provided.</p><div className="summary-preview"><div><span>Project</span><b>{selectedPlan || formProject}</b></div><div><span>Website type</span><b>{formType}</b></div><div><span>Budget</span><b>{formSpecificBudget || formBudget}</b></div><div><span>Pages</span><b>{formPages}</b></div><div><span>Contact</span><b>{formEmail}</b></div><div><span>Phone</span><b>{formPhone}</b></div></div><button className="btn btn-primary btn-large form-submit" onClick={copySummary}>Copy request summary <ArrowRight size={17}/></button><button className="text-link success-close" onClick={()=>setModal('')}>Close window</button></div>}</>}
      {modal==='account' && <div className="account-state"><div className="account-icon"><ShieldCheck size={25}/></div><div className="eyebrow">CLIENT AREA</div><h2>Your project,<br/><span className="gradient-text">all in one place.</span></h2><p>Secure sign-in, customer dashboards, and admin tools need a real authentication provider and database. They are not enabled in this frontend starter.</p><div className="account-requirements"><div><CheckCircle2 size={16}/><span>Connect Supabase or another auth provider</span></div><div><CheckCircle2 size={16}/><span>Configure database tables and access policies</span></div><div><CheckCircle2 size={16}/><span>Set up owner/admin roles on the server</span></div></div><button className="btn btn-primary btn-large form-submit" onClick={()=>openRequest('', 'Account setup enquiry')}>Request project access <ArrowRight size={17}/></button><p className="tiny-note">No fake login form or pretend account has been created.</p></div>}
      {['privacy','terms','refund'].includes(modal) && <div className="policy-modal"><div className="eyebrow">POLICY DRAFT</div><h2>{modal==='privacy'?'Privacy overview':modal==='terms'?'Terms overview':'Refund overview'}</h2><p>This is a starter placeholder, not a finalized legal policy. Have the business owner review and customize it before publishing.</p>{modal==='privacy'?<ul><li>Explain what personal data is collected and why.</li><li>Describe where inquiries are stored, who can access them, and how long they are retained.</li><li>Document any analytics, cookies, email services, and third-party providers.</li><li>Provide a contact method for privacy questions and deletion requests.</li></ul>:modal==='terms'?<ul><li>Define project scope, deliverables, milestones, and acceptance criteria.</li><li>Specify payment terms, revisions, ownership, and client responsibilities.</li><li>Describe domain, hosting, third-party services, maintenance, and support.</li><li>Explain how changes to scope and timelines are agreed.</li></ul>:<ul><li>State when a deposit or milestone payment becomes refundable.</li><li>Explain cancellation steps and treatment of completed work.</li><li>Clarify third-party costs that cannot be recovered.</li><li>Ensure the policy matches applicable law and actual business practices.</li></ul>}<button className="btn btn-primary" onClick={()=>setModal('')}>I understand <Check size={16}/></button></div>}
    </div></div>}
    {toast&&<div className="toast"><CheckCircle2 size={16}/>{toast}</div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
