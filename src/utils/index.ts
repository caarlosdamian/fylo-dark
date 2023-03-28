import {
  fb,
  iconAccessAnywhere,
  iconAnyFile,
  iconCollaboration,
  iconSecurity,
  instagram,
  profileOne,
  profileThree,
  profileTwo,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: 1,
    title: "Features",
    url: '#features'
  },
  {
    id: 2,
    title: "Team",
    url: '#team'
  },
  {
    id: 3,
    title: "Sign In",
    url: '#'
  },
];

export const featuresInfo = [
  {
    id: "1a",
    title: "Access your files, anywhere",
    desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    img: iconAccessAnywhere,
  },
  {
    id: "2a",
    title: "Security you can trust",
    desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    img: iconSecurity,
  },
  {
    id: "3a",
    title: "Real-time collaboration",
    desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    img: iconCollaboration,
  },
  {
    id: "4a",
    title: "Store any type of file",
    desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    img: iconAnyFile,
  },
];

export interface Testimonial {
  id: string;
  desc: string;
  name: string;
  title: string;
  img: string;
}

export const testimonialInfo: Testimonial[] = [
  {
    id: "1b",
    desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
    img: profileOne,
  },
  {
    id: "2b",
    desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
    img: profileTwo,
  },
  {
    id: "3b",
    desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    title: "Founder & CEO, Huddle",
    img: profileThree,
  },
];

export const footerLinks = [
  {
    id: "1c",
    label: "About Us",
  },
  {
    id: "2c",
    label: "Jobs",
  },
  {
    id: "3c",
    label: "Press",
  },
  {
    id: "4c",
    label: "Blog",
  },
];
export const footerLinksContact = [
  {
    id: "1d",
    label: "Contact Us",
  },
  {
    id: "2d",
    label: "Terms",
  },
  {
    id: "3d",
    label: "Privacy",
  },
];

export const mediaIcons = [
  {
    id: "1e",
    icon: fb,
  },
  {
    id: "2e",
    icon: twitter,
  },
  {
    id: "3e",
    icon: instagram,
  },
];
