import { NavLinks } from "@/interface";

interface Link extends NavLinks {
  hover: string;
}

export const navLinks: Link[] = [
  { title: "Index", link: "/", hover: "Home" },
  { title: "About", link: "/about", hover: "Info" },
  { title: "Contact", link: "/contact", hover: "Get in Touch" },
];

const hover ="hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline";

export const socialLinks: Link[] = [
  { title: "Instagram", link: "/", hover: hover },
  { title: "Github", link: "/", hover: hover },
  { title: "LinkedIn", link: "/", hover: hover },
];

export const playgroundLinks: Link[] = [
  { title: "Leetcode", link: "/", hover: hover },
  { title: "HackerRank", link: "/", hover: hover },
  { title: "Codewars", link: "/", hover: hover },
];

export const achievementsLinks: Link[] = [
  { title: "Best Developer Presenter", link: "/", hover: hover },
  { title: "Best Overall System", link: "/", hover: hover },
  { title: "Best System Design", link: "/", hover: hover },
  { title: "Best System Functionality", link: "/", hover: hover },
];hover

export const certificationLinks: Link[] = [
  { title: "Problem Solving 1", link: "/", hover: hover },
];

export const contactLinks: Link[] = [
  { title: "resume", link: "/", hover: hover },
  { title: "contact form", link: "/", hover: hover },
  { title: "@decimolabs", link: "/", hover: hover },
  { title: "@decimodev", link: "/", hover: hover },
];
