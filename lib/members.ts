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
    company: "Loros Productions",
    category: "Video Production",
    email: "daniel.brunal@lorosproductions.com",
    phone: "(813) 603-7567",
  },
  {
    slug: "fred-wallrapp",
    name: "Fred Wallrapp",
    company: "Tribute Telecom",
    category: "Telecom & Hosted VoIP",
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
    company: "Propelr",
    category: "Merchant Services",
    email: "jihrig@propelrpay.com",
    phone: "(740) 359-6065",
  },
  {
    slug: "jon-slater",
    name: "Jon Slater",
    company: "Lincoln Property Company of Florida",
    category: "Commercial Real Estate",
    email: "jslater@lpc.com",
    phone: "(813) 505-3612",
  },
  {
    slug: "juan-segura",
    name: "Juan Segura",
    company: "Segura Gallo HR / Consulting",
    category: "Payroll & HR",
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
  },
  {
    slug: "michael-higgins",
    name: "Michael Higgins",
    company: "ULTRA Design Agency",
    category: "Websites: Deploy | Maintain | Govern",
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
    category: "Health & Life Insurance",
    email: "mkimling@mail.com",
    phone: "(727) 642-4366",
  },
  {
    slug: "nick-smith",
    name: "Nick Smith",
    company: "Fortified Tech",
    category: "Managed IT Services",
    email: "nick@fortifiedtech.net",
    phone: "(813) 404-6724",
  },
  {
    slug: "rob-shobe",
    name: "Rob Shobe",
    company: "Insurance Office of America (IOA)",
    category: "Commercial Insurance",
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
  },
  {
    slug: "ron-martin",
    name: "Ron Martin",
    company: "Southlake Signs Tampa",
    category: "Signs & Graphics",
    email: "ron@southlakesignstampa.com",
    phone: "(727) 746-5899",
  },
  {
    slug: "sergei-galeano",
    name: "Sergei Galeano",
    company: "Galeano Consulting, Inc",
    category: "CFO & Strategic Services",
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
  },
  {
    slug: "gary-hoffman",
    name: "Gary Hoffman",
    company: "Olympia Moving",
    category: "Commercial Mover",
    email: "ghoffman@olympiamoving.com",
    phone: "(813) 736-1662",
  },
  {
    slug: "vanessa-ferguson",
    name: "Vanessa Ferguson",
    company: "Fidara Legal, PLLC",
    category: "Corporate Attorney",
    email: "vanessa@fidaralegal.com",
    phone: "(813) 419-0128",
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
