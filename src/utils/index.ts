import {
  iconAccessAnywhere,
  iconAnyFile,
  iconCollaboration,
  iconSecurity,
} from "../assets";

export const navLinks = [
  {
    id: 1,
    title: "Features",
  },
  {
    id: 2,
    title: "Team",
  },
  {
    id: 3,
    title: "Sign In",
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
