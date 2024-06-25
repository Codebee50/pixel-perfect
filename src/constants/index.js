import { SiMaterialdesignicons, SiTaichigraphics, SiWebmoney } from "react-icons/si";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { w1, w2 } from "../assets/works";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";



export const socialMedia = [
  { src: FaTwitter, alt: "Twitter logo", href: ''},
  { src: FaWhatsapp, alt: "Whatsapp logo", href: '' },
  { src: FaInstagram, alt: "instagram logo", href: '' },
];

export const navLinks = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Services",
    link: "#services",
  },
  {
    label: "Our work",
    link: "#projects",
  },
  {
    label: "Testimonials",
    link: "#testimonials",
  },
];

export const testimonialList = [
  {
    name: 'Mr. Lumana Bayero', 
    position: 'CEO, Hannatu Halan Foundation', 
    comment: 'As I scrolled through the website delivered by Pixel Perfect, I was really Impressed'
  },
  {
    name: 'Mr. Suleiman Abdulahi', 
    position: 'CEO, Auspicious Network Solutions', 
    comment: "Pixel Perfect absolutely nailed the homepage hero section, mobile responsiveness. It's clear they put a lot of thought into user experience"
  },
]

export const projectsList = [
  {
    title: 'Beautiful website for a Cause-Driven NGO to clearly communicate its mission.',
    image:w1,
    link: 'https://hannatuhalanfoundation.com',
    name: 'Hannatu halan foundation',
    highlights: [
      'Website',
      'Branding',

    ]
  },
  {
    title: 'User friendly website for a Nigerian based solar installation company.',
    image:w2,
    link: 'https://auspiciousnetworksolutions.com.ng/',
    name: 'Auspicious network solutions',
    highlights: [
      'Website',
      'Logo design',
      'Branding',

    ]
  }
]

export const servicesList = [
  {
    name: "Web development",
    icon: SiWebmoney,
    description:
      "From simple landing pages to complex web applications, our team crafts websites that are not only visually appealing but also highly functional. We utilize the latest technologies and frameworks to ensure your website is fast, secure, and scalable. Let us help you establish a strong online presence that drives engagement and growth.",
  },
  {
    name: "Game development",
    icon: IoGameControllerOutline,
    description:
      "Whether it’s a mobile game or a full-scale console game, we specialize in developing engaging and immersive gaming experiences. Our team of expert developers and designers work collaboratively to create games that are not only fun to play but also deliver a seamless user experience. From concept to launch, we handle every aspect of game development to bring your vision to reality.",
  },
  {
    name: "UI/UX design",
    icon: SiMaterialdesignicons,
    description:
      "Our designers create user-centric interfaces that enhance user experience and ensure your product is both beautiful and easy to use. We conduct thorough research and user testing to understand your audience and their needs, ensuring that every design decision contributes to a cohesive and intuitive user journey. Transform your digital products with our innovative and effective UI/UX solutions.",
  },
  {
    name: "Mobile app development",
    icon: CiMobile1,
    description:
      "We build robust, user-friendly mobile apps for both iOS and Android, tailored to meet your specific business needs. Our development process involves rigorous testing and quality assurance to ensure your app performs flawlessly across all devices. Whether you need a simple utility app or a complex mobile platform, we have the expertise to deliver high-quality mobile solutions.",
  },
  {
    name: "Branding",
    icon:MdOutlineBrandingWatermark,
    description:
      "From logo design to complete brand guidelines, we help you establish a strong, consistent brand that resonates with your audience. Our branding services include market research, brand strategy, and visual identity design, all aimed at creating a cohesive brand experience. Let us help you build a memorable brand that stands out in the competitive market.",
  },
  {
    name: "Graphic design",
    icon: SiTaichigraphics,
    description:
      "Our graphic designers create eye-catching visuals for all your needs, from marketing materials to digital content. We combine creativity with strategic thinking to produce designs that effectively communicate your message and captivate your audience. Whether you need promotional graphics, infographics, or custom illustrations, our team is here to bring your ideas to life.",
  },
];

export const footerLinks = [
  {
      title: "Services",
      links: servicesList.map((item)=>(
        {
          name:item.name,
          link: '#contact'
        }
      )),
  },
  {
      title: "Discover",
      links: navLinks.map((item)=>({
        name: item.label,
        link: item.link
      })),
  },
  {
      title: "Get in touch",
      links: [
          { name: "hello@pixelperfect.com", link: "mailto:hello@pixelperfect.com" },
          { name: "+92554862354", link: "tel:+08143015512" },
      ],
  },
];


export const budjetList = [
  '20k-100k',
  '100k-500k',
  '500k-2M',
  'Above 2M'
]