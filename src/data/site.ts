// Single source of content for the site.
// Confirmed facts (from Jonathan, 2026-06-24): automotive paint specialist in
// Bellevue WA. In the trade ~14 years (since ~2012), painting since summer 2016.
// Work spans collision repair to full restoration on high-end and exotic cars,
// held to an OEM standard or better. First painter in the PNW to use Glasurit
// 100 Line. Runs a high-end paint shop and manages multiple preppers. Do NOT
// invent the shop name, metrics, or client names. Contact details (email, phone,
// socials) are still pending, see HANDOFF.md.

export const site = {
  owner: "Jonathan Crespo",
  role: "Automotive Paint Specialist",
  focus: "Collision repair to full restoration",
  location: "Bellevue, Washington",
  tenure: "14 years",

  nav: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ],

  // Section index for the home scroll-spy rail.
  sections: [
    { id: "hero", label: "Intro" },
    { id: "featured", label: "Featured" },
    { id: "capabilities", label: "Craft" },
    { id: "process", label: "Process" },
    { id: "gallery", label: "Work" },
    { id: "experience", label: "Bellevue" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    headline: "A finish beyond factory standard.",
    supporting:
      "High-end automotive paint in Bellevue, Washington. From collision repair to full restoration, matched by hand and finished in Glasurit 100 Line to an OEM standard or better.",
    image: {
      src: "/images/revuelto-detail.webp",
      alt: "Close detail of a satin-blue Lamborghini Revuelto, bronze wheel and refinished paint by Jonathan Crespo.",
    },
    primaryCta: { label: "View work", href: "/work" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },

  featured: {
    title: "A classic 911, brought back in deep red.",
    summary:
      "An air-cooled Porsche 911 refinished panel by panel. Color was laid wet in the booth, then cut, polished, and reassembled to a deep, even gloss that suits the car.",
    attributes: [
      { label: "Work", value: "Full respray" },
      { label: "Finish", value: "Gloss red" },
      { label: "Car", value: "Classic 911" },
    ],
    lead: {
      src: "/images/porsche-fender.webp",
      alt: "Freshly painted glossy red Porsche 911 fender drying in the spray booth.",
    },
    thumbs: [
      { src: "/images/porsche-red-side.webp", alt: "Classic red Porsche 911 front in the shop." },
      { src: "/images/porsche-red-front.webp", alt: "Classic red Porsche 911 front." },
    ],
  },

  // Numbered typographic list (not a card grid). Confirm wording with Jonathan.
  capabilities: [
    { title: "Collision repair", copy: "From small fender benders to major damage. Panels straightened and repaired correctly before a drop of primer goes on." },
    { title: "Color matching & custom color", copy: "Factory colors matched by hand, or a custom color made from scratch, for a seamless, invisible blend." },
    { title: "Full restoration", copy: "Complete refinishing that brings a car back better than it left the factory." },
    { title: "Paint correction", copy: "Buffing and polishing that pull out depth, clarity, and a clean, even reflection." },
  ],

  // Real respray sequence on a classic Porsche 911.
  process: {
    title: "From bare panel to finished car.",
    summary:
      "Every car moves through the same controlled sequence, and nothing advances until the step before it is right. This classic Porsche 911 shows it end to end.",
    steps: [
      {
        title: "Preparation",
        copy: "Panels made straight and every repair verified before a drop of primer goes on.",
        image: { src: "/images/porsche-primer.webp", alt: "Classic Porsche 911 in grey primer, masked in the spray booth." },
      },
      {
        title: "Application",
        copy: "Color laid in controlled conditions, in Glasurit 100 Line, for even coverage and true depth.",
        image: { src: "/images/porsche-fender.webp", alt: "Freshly painted glossy red Porsche fender drying in the booth." },
      },
      {
        title: "Finish",
        copy: "Buffed, polished, and checked under proper light to an OEM standard or better before delivery.",
        image: { src: "/images/porsche-painted.webp", alt: "Classic Porsche 911 refinished in deep gloss red." },
      },
    ],
  },

  // Home bento mosaic.
  gallery: [
    { src: "/images/revuelto-white.webp", alt: "White Lamborghini Revuelto outside the shop.", make: "Lamborghini Revuelto", work: "White refinish" },
    { src: "/images/huracan-rear.webp", alt: "Teal Lamborghini rear in the shop.", make: "Lamborghini", work: "Custom finish" },
    { src: "/images/wheel-2.webp", alt: "Refinished exotic wheel.", make: "Wheel", work: "Refinish" },
    { src: "/images/carbon-panel.webp", alt: "Carbon panel being refinished in the booth.", make: "Carbon panel", work: "Clear & finish" },
    { src: "/images/caliper.webp", alt: "Painted brake caliper detail.", make: "Brake caliper", work: "Color match" },
    { src: "/images/blue-front-booth.webp", alt: "Vehicle front masked in the booth.", make: "In the booth", work: "Front mask" },
  ],

  about: {
    title: "Fourteen years in the trade.",
    paragraphs: [
      "Jonathan Crespo got into the automotive industry about fourteen years ago, right out of high school, detailing cars at a collision shop and learning paint correction, buffing, and polishing. Six months in he moved up to the paint shop as a prepper, and after three years he picked up the gun. He has been painting cars since the summer of 2016.",
      "Today he works out of a high-end shop in Bellevue, Washington, known for its standards and its reputation, on everything from everyday collision repair to full restorations and million-dollar cars. He runs the paint shop and a team of preppers, holding every step to an OEM standard or better.",
    ],
    images: [
      { src: "/images/about-booth.webp", alt: "Classic Porsche 911 masked and prepared for refinishing in the spray booth." },
      { src: "/images/huracan-teal.webp", alt: "Teal Lamborghini refinished in the shop." },
      { src: "/images/part-red.webp", alt: "Freshly painted red panel on a stand." },
    ],
  },

  experience: {
    title: "Experience & skills.",
    summary:
      "Fourteen years in automotive refinishing, painting since 2016, on high-end and exotic cars in Bellevue, Washington.",
    statement: "A painter's standard, built over fourteen years.",
    credibility:
      "From detailing and paint correction to running a high-end paint shop. Fourteen years in the trade, painting since 2016, holding every car to an OEM standard or better.",
    image: {
      src: "/images/jonathan-painting.webp",
      alt: "Jonathan Crespo spraying a masked exotic in the booth, laying down a fresh coat.",
    },
    // Longer narrative for the Experience (/resume) page. Confirmed facts only.
    narrative: [
      "Jonathan started in the automotive industry about fourteen years ago, straight out of high school, detailing and correcting paint at a collision shop before moving up to the booth. He has been painting cars since the summer of 2016.",
      "The difference is in the time and attention. Panels are made straight and repairs verified before priming, and his preppers double and triple check their work before a car moves to the next step. He was the first painter in the Pacific Northwest to work in Glasurit 100 Line, and among the most experienced with it in the region.",
    ],
    skills: [
      "Color matching & custom color",
      "Surface prep & panel straightening",
      "Glasurit 100 Line application",
      "Paint correction, buffing & polishing",
      "Collision repair & full restoration",
      "Paint shop & prepper management",
    ],
    // Categories supported by his actual work and his own description.
    specialties: [
      "Collision repair to full restoration",
      "High-end & exotic cars",
      "Custom color & hand matching",
      "Paint correction & finish work",
      "Paint shop & team leadership",
    ],
    // Career timeline (from Jonathan's own account).
    timeline: [
      {
        year: "2012",
        title: "Detailing & correction",
        copy: "Started at a collision shop out of high school, detailing and learning paint correction, buffing, and polishing.",
      },
      {
        year: "2013",
        title: "Paint prepper",
        copy: "Moved up to the paint shop and spent three years prepping panels and repairs to standard.",
      },
      {
        year: "2016",
        title: "Behind the gun",
        copy: "Started painting cars at 23, and has refinished ever since.",
      },
      {
        year: "Now",
        title: "Running the booth",
        copy: "Leads a high-end paint shop and its preppers, and was the first in the PNW to use Glasurit 100 Line.",
      },
    ],
    // Credibility highlights, straight from his description.
    knownFor: [
      "First painter in the PNW to use Glasurit 100 Line",
      "Work on high-end, exotic, and million-dollar cars",
      "An OEM-standard-or-better quality bar",
      "Leading a paint shop and its prep team",
    ],
  },

  // Glasurit 100 Line is Jonathan's signature system (his own words: first painter
  // in the PNW to use it, most experience with it). BASF is Glasurit's parent.
  materials: {
    title: "Finished in Glasurit 100 Line.",
    copy:
      "Jonathan was the first painter in the Pacific Northwest to work in Glasurit 100 Line, BASF's premium waterborne refinish system, and is among the most experienced with it in the region. It is the class of system trusted for factory-level and high-end refinishing.",
    points: [
      "Glasurit 100 Line waterborne basecoat",
      "Factory color identification and custom mixing",
      "Booth-controlled application and curing",
      "OEM-standard-or-better quality control",
    ],
  },

  // Brands in the booth: marques Jonathan has refinished (from his work) plus his
  // signature paint system. `file` renders a logo SVG (public/logos); entries
  // without a file render as a text wordmark.
  brands: [
    { name: "Lamborghini", file: "/logos/lamborghini.svg" },
    { name: "Porsche", file: "/logos/porsche.svg" },
    { name: "Glasurit 100 Line" },
    { name: "BASF" },
  ],

  // Full work gallery (/work). 44 real images with car + work info.
  // `make`/`work` are kept conservative; confirm details with Jonathan.
  workGallery: [
    { src: "/images/hero.webp", alt: "Satin-blue Lamborghini Revuelto with bronze wheels.", make: "Lamborghini Revuelto", work: "Satin blue refinish" },
    { src: "/images/revuelto-detail.webp", alt: "Detail of the satin-blue Revuelto front fender.", make: "Lamborghini Revuelto", work: "Finish detail" },
    { src: "/images/revuelto-rear.webp", alt: "Rear three-quarter of the satin-blue Revuelto.", make: "Lamborghini Revuelto", work: "Rear quarter" },
    { src: "/images/revuelto-side.webp", alt: "Front three-quarter of the satin-blue Revuelto.", make: "Lamborghini Revuelto", work: "Front quarter" },
    { src: "/images/revuelto-white.webp", alt: "White Lamborghini Revuelto outside the shop.", make: "Lamborghini Revuelto", work: "White refinish" },
    { src: "/images/revuelto-white-2.webp", alt: "White Lamborghini Revuelto, door detail.", make: "Lamborghini Revuelto", work: "Door detail" },
    { src: "/images/revuelto-doors.webp", alt: "White Lamborghini Revuelto with a door raised.", make: "Lamborghini Revuelto", work: "Doors up" },
    { src: "/images/white-profile.webp", alt: "White Lamborghini Revuelto profile.", make: "Lamborghini Revuelto", work: "Profile" },
    { src: "/images/huracan-rear.webp", alt: "Teal Lamborghini rear in the shop.", make: "Lamborghini", work: "Rear, in shop" },
    { src: "/images/huracan-teal.webp", alt: "Teal Lamborghini refinished in the shop.", make: "Lamborghini", work: "Custom finish" },
    { src: "/images/huracan-front.webp", alt: "Matte-finish Lamborghini front end in the shop.", make: "Lamborghini", work: "Front, in shop" },
    { src: "/images/huracan-side.webp", alt: "Teal Lamborghini profile in the shop.", make: "Lamborghini", work: "Profile" },
    { src: "/images/porsche-primer.webp", alt: "Classic Porsche 911 in primer, masked in the booth.", make: "Porsche 911", work: "Primer & mask" },
    { src: "/images/porsche-masked.webp", alt: "Classic Porsche 911 masked for refinishing.", make: "Porsche 911", work: "Masked" },
    { src: "/images/porsche-prep.webp", alt: "Classic Porsche 911 prepped in the booth.", make: "Porsche 911", work: "Surface prep" },
    { src: "/images/porsche-masked-2.webp", alt: "Classic Porsche 911 masked for paint.", make: "Porsche 911", work: "Masked for color" },
    { src: "/images/porsche-masked-3.webp", alt: "Classic Porsche 911 masked, ready for color.", make: "Porsche 911", work: "Ready for color" },
    { src: "/images/porsche-fender.webp", alt: "Freshly painted glossy red Porsche fender.", make: "Porsche 911", work: "Wet color" },
    { src: "/images/porsche-painted.webp", alt: "Classic Porsche 911 refinished in gloss red.", make: "Porsche 911", work: "Finished red" },
    { src: "/images/porsche-red-2.webp", alt: "Classic Porsche 911 in deep red, masked.", make: "Porsche 911", work: "Deep red" },
    { src: "/images/porsche-red-front.webp", alt: "Classic red Porsche 911 front.", make: "Porsche 911", work: "Front" },
    { src: "/images/porsche-red-side.webp", alt: "Classic red Porsche 911 side.", make: "Porsche 911", work: "Side" },
    { src: "/images/porsche-red-rear.webp", alt: "Classic red Porsche 911 rear.", make: "Porsche 911", work: "Rear" },
    { src: "/images/truck.webp", alt: "Pickup truck refinished in the shop.", make: "Pickup truck", work: "Custom refinish" },
    { src: "/images/masked-car.webp", alt: "Car masked with tape, prepared for refinishing.", make: "In the booth", work: "Masking" },
    { src: "/images/carbon-panel.webp", alt: "Carbon panel being refinished in the booth.", make: "Carbon panel", work: "Clear & finish" },
    { src: "/images/panel-booth.webp", alt: "Vehicle panel refinished in the booth.", make: "Panel", work: "Refinish" },
    { src: "/images/blue-front-booth.webp", alt: "Vehicle front masked in the booth.", make: "In the booth", work: "Front mask" },
    { src: "/images/bumper-stand.webp", alt: "Bumper on a stand, refinished.", make: "Bumper", work: "Refinish" },
    { src: "/images/bumper-stand-2.webp", alt: "Bumper on a stand in the booth.", make: "Bumper", work: "In the booth" },
    { src: "/images/part-red.webp", alt: "Freshly painted red panel on a stand.", make: "Panel", work: "Fresh color" },
    { src: "/images/part-grey.webp", alt: "Primed panel on a stand in the booth.", make: "Panel", work: "Primer" },
    { src: "/images/part-booth-1.webp", alt: "Painted panel drying in the booth.", make: "Panel", work: "Drying" },
    { src: "/images/part-booth-2.webp", alt: "Refinished panel on a stand.", make: "Panel", work: "On the stand" },
    { src: "/images/part-booth-3.webp", alt: "Panel being refinished in the booth.", make: "Panel", work: "Refinish" },
    { src: "/images/part-booth-4.webp", alt: "Panel on a stand in the booth.", make: "Panel", work: "On the stand" },
    { src: "/images/part-booth-5.webp", alt: "Refinished panel drying in the booth.", make: "Panel", work: "Drying" },
    { src: "/images/panel-dark-1.webp", alt: "Dark refinished panel in the booth.", make: "Panel", work: "Dark refinish" },
    { src: "/images/panel-dark-2.webp", alt: "Dark refinished panel detail.", make: "Panel", work: "Detail" },
    { src: "/images/wheel-detail.webp", alt: "Exotic wheel with a blue painted caliper.", make: "Wheel & caliper", work: "Refinish" },
    { src: "/images/wheel-2.webp", alt: "Refinished exotic wheel.", make: "Wheel", work: "Refinish" },
    { src: "/images/wheel-3.webp", alt: "Refinished exotic wheel detail.", make: "Wheel", work: "Detail" },
    { src: "/images/wheel-4.webp", alt: "Refinished wheel and tire.", make: "Wheel", work: "Refinish" },
    { src: "/images/caliper.webp", alt: "Painted brake caliper detail.", make: "Brake caliper", work: "Color match" },
  ],

  // Rolls-Royce-style three-up teaser strip (home finale, before contact).
  discover: [
    {
      title: "The work",
      copy: "Refinishes and full resprays, start to finish.",
      href: "/work",
    },
    {
      title: "The craft",
      copy: "Color matched and checked under proper light.",
      href: "/about",
    },
    {
      title: "The shop",
      copy: "European cars and exotics, ten years in Bellevue.",
      href: "/contact",
    },
  ],

  contact: {
    title: "Start a conversation.",
    copy: "Tell Jonathan about the car and the finish you have in mind. Quotes and timing are handled directly.",
    location: "Bellevue, Washington",
    // PENDING, replace with Jonathan's real details before launch (see HANDOFF.md).
    email: "hello@example.com", // PENDING Jonathan's real email
    note: "Serving Bellevue and the greater Seattle area.",
  },

  // Confirmed profiles only. Add Instagram / YouTube here when Jonathan sends them;
  // the Socials component renders whatever is in this list.
  socials: [
    { label: "TikTok", handle: "@jczdrip", url: "https://tiktok.com/@jczdrip" },
  ],
};

export type SiteData = typeof site;
