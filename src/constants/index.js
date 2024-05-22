import { SiMaterialdesignicons, SiTaichigraphics, SiWebmoney } from "react-icons/si";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { w1, w2 } from "../assets/works";


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
    link: "#",
  },
];

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
    name: "Web developement",
    icon: SiWebmoney,
    description:
      "internships facilitates experiential learning, facilitating career readiness and cultivating leadership qualities necessary for future professional roles. SIWES also emphasizes leadership development, encouraging students to acquire basic leadership skills through mentorship opportunities with nonprofit leaders",
  },
  {
    name: "Game developement",
    icon: IoGameControllerOutline,
    description:
      "internships facilitates experiential learning, facilitating career readiness and cultivating leadership qualities necessary for future professional roles. SIWES also emphasizes leadership development, encouraging students to acquire basic leadership skills through mentorship opportunities with nonprofit leaders",
  },
  {
    name: "UI/UX design",
    icon: SiMaterialdesignicons,
    description:
      "internships facilitates experiential learning, facilitating career readiness and cultivating leadership qualities necessary for future professional roles. SIWES also emphasizes leadership development, encouraging students to acquire basic leadership skills through mentorship opportunities with nonprofit leaders",
  },
  {
    name: "Mobile app developement",
    icon: CiMobile1,
    description:
      "internships facilitates experiential learning, facilitating career readiness and cultivating leadership qualities necessary for future professional roles. SIWES also emphasizes leadership development, encouraging students to acquire basic leadership skills through mentorship opportunities with nonprofit leaders",
  },
  {
    name: "Branding",
    icon:MdOutlineBrandingWatermark,
    description:
      "internships facilitates experiential learning, facilitating career readiness and cultivating leadership qualities necessary for future professional roles. SIWES also emphasizes leadership development, encouraging students to acquire basic leadership skills through mentorship opportunities with nonprofit leaders",
  },
  {
    name: "Graphic design",
    icon: SiTaichigraphics,
    description:
      "internships facilitates experiential learning, facilitating career readiness and cultivating leadership qualities necessary for future professional roles. SIWES also emphasizes leadership development, encouraging students to acquire basic leadership skills through mentorship opportunities with nonprofit leaders",
  },
];
