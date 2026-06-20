// Single source of content for the site.
// Confirmed facts only: Jonathan Crespo, automotive paint specialist, European
// cars and exotics, Bellevue WA, 10+ years. Anything still pending from Jonathan
// is noted in HANDOFF.md. Do not invent metrics, client names, or shop names.

export const site = {
  owner: "Jonathan Crespo",
  role: "Automotive Paint Specialist",
  focus: "European cars & exotics",
  location: "Bellevue, Washington",
  tenure: "10+ years",

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
    headline: "Paintwork built for European cars.",
    supporting:
      "Automotive paint specialist in Bellevue, Washington. More than ten years refinishing European cars and exotics to an exact, lasting finish.",
    image: {
      src: "/images/hero.webp",
      alt: "Satin-blue Lamborghini Revuelto with bronze wheels, refinished by Jonathan Crespo.",
    },
    primaryCta: { label: "View work", href: "/work" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },

  featured: {
    title: "Satin blue, carried across every panel.",
    summary:
      "A Lamborghini Revuelto refinished and detailed start to finish. The color holds evenly from nose to tail, the bronze wheels redone, the center stripe matched by hand.",
    attributes: [
      { label: "Work", value: "Full refinish & detail" },
      { label: "Finish", value: "Satin blue" },
      { label: "Wheels", value: "Refinished bronze" },
    ],
    lead: {
      src: "/images/revuelto-detail.webp",
      alt: "Close detail of the satin-blue Lamborghini Revuelto front fender and bronze wheel.",
    },
    thumbs: [
      { src: "/images/revuelto-rear.webp", alt: "Rear three-quarter of the satin-blue Revuelto." },
      { src: "/images/revuelto-side.webp", alt: "Front three-quarter of the satin-blue Revuelto." },
    ],
  },

  // Numbered typographic list (not a card grid). Confirm wording with Jonathan.
  capabilities: [
    { title: "Color matching", copy: "Factory color identification and custom mixing for a seamless, invisible match." },
    { title: "Panel & paint repair", copy: "Damage repair and refinishing that restores the original surface and edge." },
    { title: "Full resprays", copy: "Complete refinishing for a uniform, showroom-level result on the whole vehicle." },
    { title: "Finish correction", copy: "Correction and refinement of existing paint for depth, clarity, and a clean reflection." },
  ],

  // Real respray sequence on a classic Porsche 911.
  process: {
    title: "From bare panel to finished car.",
    summary:
      "Every car moves through the same controlled sequence. This classic Porsche 911 shows it end to end.",
    steps: [
      {
        title: "Preparation",
        copy: "Surfaces corrected and masked with the patience the final coat depends on.",
        image: { src: "/images/porsche-primer.webp", alt: "Classic Porsche 911 in grey primer, masked in the spray booth." },
      },
      {
        title: "Application",
        copy: "Color laid in controlled conditions for even coverage and true depth.",
        image: { src: "/images/porsche-fender.webp", alt: "Freshly painted glossy red Porsche fender drying in the booth." },
      },
      {
        title: "Finish",
        copy: "Checked under proper light for match and clarity before delivery.",
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
    title: "Bellevue-based, European-focused.",
    paragraphs: [
      "Jonathan Crespo has spent more than ten years refinishing automobiles in Bellevue, Washington, with a focus on European cars and exotics and the exact standard their owners expect.",
      "The work is steady and deliberate: matching color precisely, keeping edges clean, and delivering a finish that holds up over time. Reputation here is built one car at a time.",
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
      "More than ten years of hands-on automotive refinishing in Bellevue, Washington, specializing in European cars and exotics.",
    statement: "Ten years of European paint, built in Bellevue.",
    credibility:
      "A decade refinishing high-end European cars and exotics in Bellevue, Washington. The standard is set by the cars that come through the door, and it holds on every one.",
    image: {
      src: "/images/revuelto-side.webp",
      alt: "Satin-blue Lamborghini Revuelto refinished by Jonathan Crespo.",
    },
    skills: [
      "Color matching & custom mixing",
      "Surface preparation & correction",
      "Spray application & blending",
      "Clear-coat & finish work",
      "Panel & collision refinishing",
      "Detailing & final inspection",
    ],
  },

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

  contact: {
    title: "Start a conversation.",
    copy: "Tell Jonathan about the car and the finish you have in mind. Quotes and timing are handled directly.",
    location: "Bellevue, Washington",
    email: "hello@example.com", // PENDING: replace with Jonathan's real email before launch
    note: "Serving Bellevue and the greater Seattle area.",
  },
};

export type SiteData = typeof site;
