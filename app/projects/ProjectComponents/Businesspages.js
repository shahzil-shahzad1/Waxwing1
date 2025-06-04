"use client";
import FadeInSection from "@/components/FadeinSection";
import React from "react";

const businessdata = [
  {
    name: "Corporate Website",
    description: "A professional online presence for a company that shares its brand, values, mission, services, and contact info.",
    uses: "Brand awareness, investor relations, hiring, B2B",
    examples: ["apple.com", "accenture.com", "ibm.com"],
      image: "/Projectpage/coorporate.png",
      link: "https://vercel.com",
  },
  {
    name: "Product Microsite",
    description: "A single-page site focused on a specific product, campaign, or offer.",
    uses: "Product launches, lead generation, promotions",
    examples: ["stripe.com/atlas", "airbnb.com/luxe"],
    image: "/Projectpage/landingpage.png",
    link: "https://vercel.com",
  },
  {
    name: "Blogging Website",
    description: "Central platform to publish content for marketing, SEO, and education.",
    uses: "Thought leadership, SEO traffic, engagement",
    examples: ["neilpatel.com", "moz.com/blog", "medium.com"],
    image: "/Projectpage/blogwebsite.png",
    link: "https://vercel.com",
  },
  {
    name: "Nonprofit Website",
    description: "Promotes a cause or movement, accepts donations, and shares impact stories.",
    uses: "Fundraising, awareness, volunteer signups",
    examples: ["charitywater.org", "redcross.org"],
    image: "/Projectpage/nonprofit.png",
    link: "https://vercel.com",
  }
]



const Businesspages = () => {
  return (
     <div className='h-fit w-full py-20 flex flex-col gap-12 items-center justify-center bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316]' id='busweb'>
            {/* <div className=""> */}
            <FadeInSection direction="right" classes="flex flex-col items-center gap-5">
                <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center ">Business Websites</h1>
                <p className="text-center text-sm sm:text-base w-[60%] text-white">We can build coorporate websites and web apps for business usage</p>
            </FadeInSection>
            {/* </div> */}

            {/* <div className=""> */}
            <FadeInSection direction="left" classes="flex justify-center gap-7 w-full items-center flex-wrap relative max-sm:px-4">

        {businessdata.map((business, index) => (
          <a
            href={business.link}
            target="_blank"
            className="lmscard flex justify-center items-center flex-col 
                 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] 
                 min-w-[120px] max-w-[180px] h-44"
            key={index}
          >
            <div className="w-10 h-10 text-white">
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-full invert object-cover"
              />
            </div>
            <span className="text-[14px] md:text-[16px] font-[600] mt-[20px] text-center">
              {business.name}
            </span>
          </a>
        ))}
        </FadeInSection>
      {/* </div> */}

            

      
    </div>
  );
};

export default Businesspages;
