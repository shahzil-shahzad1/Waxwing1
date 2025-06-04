import FadeInSection from "@/components/FadeinSection";

const teamMembers = [
  {
    name: "Rasmus Makwarth",
    title: "Founder & CEO",
    image: "/Aboutpage/random1.jpg",
    // links: ["linkedin", "x"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Ron Cohen",
    title: "Co-founder & CTO",
    image: "/Aboutpage/random2.jpg",
    // links: ["linkedin", "x", "website"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Lasse B. Andersen",
    title: "Designer",
    image: "/Aboutpage/random3.jpg",
    // links: ["linkedin", "x", "website"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Alexandru Ciobanu",
    title: "Product Engineer",
    image: "/Aboutpage/random4.jpg",
    // links: ["linkedin"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Matuš Vacula",
    title: "Product Engineer",
    image: "/Aboutpage/random5.jpg",
    // links: ["linkedin"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Erik Hughes",
    title: "Product Engineer",
    image: "/Aboutpage/random6.webp",
    // links: ["linkedin"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Flo Merian",
    title: "Community Manager",
    image: "/Aboutpage/random7.jpg",
    // links: ["linkedin", "x", "website"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  },
  {
    name: "Gareth Wilson",
    title: "Product Marketing Manager",
    image: "/Aboutpage/random8.jpg",
    // links: ["linkedin", "website"]
    socials: [
      "https://www.linkedin.com",
      "https://www.x.com",
      "example@gmail.com"
    ]
  }
];

const links = [
  "/Aboutpage/linkedin.png",
  "/Aboutpage/x.png",
  "/Aboutpage/mail.png"
]
const iconMap = {
  linkedin: "https://www.linkedin.com",
  x: "https://x.com",
  website: "https://example.com"
};

export default function TeamPage() {
  return (
    <main className="bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] text-white min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
      <FadeInSection direction="down" classes="flex flex-col items-center gap-5 mb-12">
        {/* <div className=""> */}
          <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center">Meet the team</h1>
          <p className="text-center text-sm sm:text-base w-[60%] text-white"> We’re product builders. We’re a group of experienced people who care deeply about making innovative software.</p>
        {/* </div> */}
      </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="mt-5">
              <div className="w-full flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[50%] rounded-md grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="mt-4 text-left w-fit max-w-[70%] flex flex-col mx-auto pl-[1.5rem]">
                <h3 className="text-sm font-medium">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.title}</p>
                <div className="flex gap-2 mt-2">
                  {member.socials.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm capitalize"
                    >
                      <img src={links[i]} className="invert w-4 h-4" alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
