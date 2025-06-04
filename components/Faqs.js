"use client"; // Required for interactivity (Next.js 13+)

import { useState } from 'react';
import FadeInSection from './FadeinSection';
// import { ChevronDown, Search } from 'lucide-react';

const Faqs = () => {
  const [activeIcon, setactiveIcon] = useState("+");
  const [searchTerm, setSearchTerm] = useState('');

  const [faqs, setfaqs] = useState([
    {
      question: "How long does it take to build and deliver a custom website?",
      answer: "Typically, a basic website takes 2-4 weeks, while complex projects (e-commerce, CMS) may take 6-8 weeks. Timeline depends on your requirements, feedback speed, and content readiness. We’ll provide a detailed schedule after our initial consultation.",
      icon: "+"
    },
    {
      question: "What’s included in your website development pricing?",
      answer: "Our pricing covers design, development, responsiveness, basic SEO setup, and 1 round of revisions. Additional costs may apply for extra features (e.g., payment integration, custom animations). We offer transparent quotes with no hidden fees.",
      icon: "+"
    },
    {
      question: "Do you provide website maintenance after delivery?",
      answer: "Yes! We offer monthly maintenance plans (updates, backups, security checks) starting at $99/month. One-time fixes are also available. All post-delivery support is optional.",
      icon: "+"
    },
    {
      question: "Can I request changes after the website is completed?",
      answer: "Absolutely. You get 1 free round of revisions post-delivery. Additional changes are billed hourly ($50-$90/hour). Major redesigns may require a new project scope.",
      icon: "+"
    },
    {
      question: "Will my website be mobile-friendly and SEO-optimized?",
      answer: "Yes! All our websites are responsive (work on all devices) and include basic SEO (meta tags, sitemaps, speed optimization). Advanced SEO services (content strategy, backlinks) are available as add-ons.",
      icon: "+"
    },
    {
      question: "Who owns the website after payment?",
      answer: "You own 100% of the website files and content. We’ll transfer all credentials (hosting, domain if purchased through us) and provide a handover document. Source code is included.",
      icon: "+"
    }
  ])

  const showans = (index) => {
    const getItems = [...faqs]
    getItems[index].icon == '+' ? getItems[index].icon = '-': getItems[index].icon = '+'
    setfaqs(getItems)
  }


  return (
    <section className="bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316]">
      <FadeInSection direction="up" classes="relative w-full py-10 md:py-16 lg:py-24 h-fit ">

      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-50 font-bold mb-8 md:mb-12">FAQ'S</h2>


      {/* FAQ List */}
      <div className="faqcontainer w-[90%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col justify-center items-center gap-4 md:gap-5 my-6 md:my-10">
        {faqs.map((faq, index) => (
          <div className="faq bg-gray-800 rounded-lg w-full text-white" key={index}>
            <div className="question text-base md:text-lg bg-gray-800 hover:bg-gray-900 transition-all duration-200 p-4 md:p-6 rounded-t-lg cursor-pointer flex justify-between items-center" onClick={() => showans(index)}>
              {faq.question}
              <span className={`text-xl md:text-2xl transition-transform duration-300 ${faq.icon === "-" ? "rotate-180" : " "}`}>{faq.icon}</span>
            </div>
            <div className={`${faq.icon === "+" ? "max-h-0 opacity-0 px-4 py-0 text-sm md:text-base" : "max-h-[500px] opacity-100 px-4 py-4 md:px-6 md:py-6"} transition-all duration-300 ease-out overflow-hidden text-sm md:text-base`}>{faq.answer}</div>
          </div>
        ))}
      </div>
        </FadeInSection>
    </section>
  );
};

export default Faqs;