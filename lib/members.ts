export interface Member {
  slug: string;
  name: string;
  company: string;
  category: string;
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  bio?: string;
  areaOfFocus?: string;
  companyBio?: string;
  yearsInGroup?: number;
  hasPhoto?: boolean;
}

export const members: Member[] = [
{
    slug: "brian-dodd",
    name: "Brian Dodd",
    company: "Next Path Career Partners",
    category: "Employee IT Staffing",
    email: "bdodd@nextpathcp.com",
    phone: "(813) 230-8678",
  },
  {
    slug: "chris-stewart",
    name: "Chris Stewart",
    company: "Networking Consultant",
    category: "Networking Consulting",
    email: "stewy560@gmail.com",
    phone: "(813) 382-7631",
  },
  {
    slug: "daniel-brunal",
    name: "Daniel Brunal",
    company: "Parrot Productions",
    category: "Video Production",
    email: "daniel@parrot.productions",
    phone: "(850) 218-6486",
    companyBio: "Vibrant, story-driven video that gets results. Based in Tampa Bay, we create cinematic videos for businesses, nonprofits, and organizations that need to connect with their audience and drive action.",
    linkedin: "https://www.linkedin.com/in/daniel-brunal-322b57294/",
  },
  {
    slug: "fred-wallrapp",
    name: "Fred Wallrapp",
    company: "Tribute Telecom",
    category: "Telecom Cabling / Hosted VOIP",
    email: "fred@wallrapp.com",
    phone: "(813) 285-0308",
  },
  {
    slug: "gil-fernandez",
    name: "Gil Fernandez",
    company: "The Bank of Tampa",
    category: "Commercial Lending",
    email: "gfernandez@bankoftampa.com",
    phone: "(813) 690-6742",
  },
  {
    slug: "jeff-orchard",
    name: "Jeff Orchard",
    company: "Supporting Strategies",
    category: "Bookkeeping & Accounting",
    email: "jorchard@supportingstrategies.com",
    phone: "(813) 205-4533",
  },
  {
    slug: "jennifer-ihrig",
    name: "Jennifer Ihrig",
    company: "Propelr Payments",
    category: "Merchant Services",
    email: "jihrig@propelrpay.com",
    phone: "(740) 359-6065",
    areaOfFocus: "A variety of industries, including restaurants, retail, healthcare and medical practices, automotive, hospitality, professional services, home services, and franchise or multi-location businesses.",
    bio: "As a Senior Payments Advisor with Propelr Pay, I help businesses find smarter, more cost-effective payment solutions. With over 13 years of industry experience, I provide customized payment processing, POS systems, surcharge and cash-discount programs, ACH solutions, and integrations—all backed by transparent pricing and personalized support.",
    linkedin: "https://www.linkedin.com/in/jennifer-ihrig-58766912/",
    hasPhoto: true,
  },
  {
    slug: "jon-slater",
    name: "Jon Slater",
    company: "Lincoln Property Company",
    category: "Real Estate - Commercial Sales & Leasing",
    email: "jslater@lpc.com",
    phone: "(813) 505-3612",
  },
  {
    slug: "juan-segura",
    name: "Juan Segura",
    company: "Segura Gallo HR / Consulting",
    category: "Payroll",
    email: "juan@seguragallo.com",
    phone: "(813) 727-4703",
  },
  {
    slug: "justin-cole",
    name: "Justin Cole",
    company: "HALO",
    category: "Promotional Products",
    email: "Justin.Cole@halo.com",
    phone: "(813) 358-8583",
  },
  {
    slug: "larry-stephen",
    name: "Larry Stephen",
    company: "The Design Firm, Inc",
    category: "Commercial Audio & Video",
    email: "larry.stephen@thedesignfirminc.com",
    phone: "(727) 271-7307",
  },
  {
    slug: "mark-purtee",
    name: "Mark Purtee",
    company: "Murphy Business Sales",
    category: "Business Broker",
    email: "m.purtee@murphybusiness.com",
    phone: "(727) 518-5620",
    companyBio: "Founded in a small Clearwater office in 1994, Murphy Business Sales has grown into one of the country’s largest and longest-established business brokerages, with offices in 38 states and Canada. The firm represents more than $1 billion in businesses each year and is known for its highly trained brokers and commitment to ethical practices.",
    areaOfFocus: "Mark helps people buy and sell businesses of all kinds. He helps clients understand the value of a company and some of the available financing structures. As someone who had sold his business, and had acquired businesses personally, Mark’s mission is to help others with the entire process of transitioning a business. Whether it is maximizing the value of the sale of a business so the owner can enjoy retirement or helping someone evaluate and scrutinize a business to acquire.",
    bio: "At age 22, Mark launched his first company while studying finance at Georgia State University. He later became a stockbroker, acquired a golf course, twice built national companies to more than eight figures, and sold his interests to move to the beach. After relocating to Florida, Mark worked with major developers, completed executive training in implementing change at Wharton, and received negotiations training at Harvard. He also studied business valuation through Duke University and is currently pursuing his Business Certified Appraiser designation.",
    linkedin: "https://www.linkedin.com/in/markpurtee/",
  },
  {
    slug: "michael-higgins",
    name: "Michael Higgins",
    company: "ULTRA Design Agency",
    category: "Websites: Design | Maintain | Govern",
    email: "michael@ultradesignagency.com",
    phone: "(813) 205-6160",
    website: "https://ultradesignagency.com",
    linkedin: "https://linkedin.com/in/higginsmichaelw/",
    bio: "Michael's life revolves around work, church, and his big family activities. You'll also find him camping, watching & playing soccer, teaching, and grilling. He holds a B.A. from Ave Maria University and an MA in Humanities from California State University. Before running ULTRA he taught at Jesuit High School for five years — and maintains relationships within both alumni communities.",
    areaOfFocus: "Michael Higgins is the Director of Operations and manages both Sales & Project Management.",
    companyBio: "ULTRA Design Agency develops, maintains, and governs websites for small to medium sized businesses throughout the United States and Europe. The particular verticals it excels in are Finance, Legal, Healthcare, Multi-Location Service Businesses, Defense, and Hospitality.",
    yearsInGroup: 8,
    hasPhoto: true,
  },
  {
    slug: "michael-kimling",
    name: "Michael Kimling",
    company: "John Michael Enterprises, LLC",
    category: "Insurance (Health / Life)",
    email: "mkimling@mail.com",
    phone: "(727) 642-4366",
    hasPhoto: true,
  },
  {
    slug: "nick-smith",
    name: "Nick Smith",
    company: "Fortified Technology",
    category: "Managed IT Services",
    email: "nick@fortifiedtech.net",
    phone: "(813) 404-6724",
    linkedin: "https://www.linkedin.com/in/nick-smith-sec",
    bio: "Nick's life revolves around his family, his church, and his friends. A Tampa native, he lives in Ybor, minutes from downtown. He has a passion for European soccer and you may run into him on Saturday morning watching matches at a local pub. Before founding Fortified Technology, Nick spent six years in cybersecurity supporting Fortune 100 companies. He holds a B.A. from Moody Bible Institute in Chicago, Illinois.",
    areaOfFocus: "Nick Smith is the President and Owner of Fortified Technology",
    companyBio: "Fortified Technology procures, manages, and protects technology for small and medium-sized businesses. The company offers Managed and Co-Managed IT Services, Cloud Services, Cybersecurity, Disaster Recovery/Business Continuance, and Business Phone (VoIP) solutions.",
  },
  {
    slug: "rob-shobe",
    name: "Rob Shobe",
    company: "Insurance Office of America (IOA)",
    category: "Insurance (Commercial P & C)",
    email: "rob.shobe@ioausa.com",
    phone: "(727) 916-1981",
  },
  {
    slug: "robert-bishop",
    name: "Robert Bishop",
    company: "Bishop Marketing Strategy",
    category: "Digital Marketing & CRM",
    email: "robert@robertbishop.us",
    phone: "(310) 760-6365",
    companyBio: "Bishop Marketing Strategy is a digital marketing and growth firm based in Tampa Bay. The firm works with owner-run companies in the skilled trades, construction, and medical fields, from established shops that want to grow to new practices opening their doors. Most engagements start with the Foundation Package, a short diagnostic that sorts out who the business is really for, what it should be saying, and what to fix first. From there the work usually includes search engine optimization, Google Ads, paid social, CRM setup, and podcast production. Every client gets one point of contact and a straight answer about what the marketing is producing.",
    areaOfFocus: "Robert is TBBF's Digital Marketing and CRM specialist. He works with skilled trades, construction and building companies, and medical and healthcare practices across Tampa Bay and the rest of the country. His work covers search engine optimization, Google Ads, paid social, and building out CRM systems so leads stop falling through the cracks after they come in. He also runs a diagnostic process for owners who aren't sure what's broken yet, which sorts out who the business is really for, what it should be saying, and what to fix first. He's a good referral when an owner is spending money on marketing and can't tell what it's producing, when the phone rings but the jobs aren't closing, or when a new practice or shop is opening and needs its marketing built from scratch.",
    bio: "Robert grew up in Phoenix, Arizona and moved to Tampa Bay in 2020. Outside of work, he helps his wife run her Pilates studio and spends as much time at the beach as he can get. He's an Eagle Scout and still teaches merit badge classes on business and salesmanship from time to time. Through Bishop Marketing Strategy, he works mostly with skilled trades and home service companies, helping owners see exactly where their growth is breaking down instead of guessing at it.",
    linkedin: "https://www.linkedin.com/in/lereybishop/",
  },
  {
    slug: "ron-martin",
    name: "Ron Martin",
    company: "Southlake Signs Tampa",
    category: "Signs & Graphics",
    email: "ron@southlakesignstampa.com",
    phone: "(207) 272-6348",
    companyBio: "Southlake Signs was founded in 2023 with a vision of bringing a highly consultative approach to the sign industry. We pride ourselves in quality project management.",
    areaOfFocus: "Southlake Signs supports their corporate clients branding solutions. They can help their clients get their branding on any physical surface. Their primary streams of revenue are from permitted exterior signs and interior ADA packages. Their product offerings cover both interior and exterior sign packages.",
    bio: "Ron brings several years of corporate operations management to the sign industry. He has been building his brand and offerings over the last four years in business.",
    linkedin: "https://www.linkedin.com/in/ron-martin40656264?",
  },
  {
    slug: "sergei-galeano",
    name: "Sergei Galeano",
    company: "Galeano Consulting, Inc",
    category: "CFO and Strategic Services",
    email: "sgaleano@galeanocfo.com",
    phone: "(603) 661-1085",
  },
  {
    slug: "shane-mihok",
    name: "Shane Mihok",
    company: "Reimagined Office Furnishings (ROF)",
    category: "Commercial Office Furniture",
    email: "shane.mihok@rofinc.com",
    phone: "(813) 690-0893",
  },
  {
    slug: "shawn-spiering",
    name: "Shawn Spiering",
    company: "ADT Security",
    category: "Business & Residential Security",
    email: "sspiering@adt.com",
    phone: "(727) 742-4648",
    bio: "20 years of high performance. Conssistant Centurian Club winner. Focused on small businesses and residential security. Alarm, cameras, access contrl",
  },
  {
    slug: "gary-hoffman",
    name: "Gary Hoffman",
    company: "Olympia Moving",
    category: "Commercial Mover",
    email: "ghoffman@olympiamoving.com",
    phone: "(813) 362-0199",
  },
  {
    slug: "vanessa-ferguson",
    name: "Vanessa Ferguson",
    company: "Fidara Legal, PLLC",
    category: "Corporate Attorney",
    email: "vanessa@fidaralegal.com",
    phone: "(813) 419-0128",
    linkedin: "http://www.linkedin.com/in/vnessaferguson",
  },
  {
    slug: "freddie-rappina",
    name: "Freddie Rappina",
    company: "Opta Financial",
    category: "Wealth Management",
    email: "frappina@optafinancial.com",
    phone: "(703) 544-7960",
  },
];

export function getMemberBySlug(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
