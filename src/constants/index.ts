import { NavLinks, PlaygroundLinks, SocialLinks } from "@/interface";

export const navLinks : Array<NavLinks> = [
    {
        title : " Index",
        link : "/"
    },
    {
        title : " About",
        link : "/about"
    },
    {
        title : " Contact",
        link : "/contact"
    },
]

export const socialLinks : Array<SocialLinks> = [
    {
        title : "Instagram",
        link : "/",
        hover: "hover:text-gray-500 transition-all"
    },
    {
        title : "Github",
        link : "/",
        hover: "hover:text-gray-500 transition-all"
    },
    {
        title : "LinkedIn",
        link : "/",
        hover: "hover:text-gray-500 transition-all"
    }
]

export const playgroundLinks : Array<PlaygroundLinks> = [
    {
        title : "Leetcode",
        link : "/",
        hover: "hover:text-gray-500 transition-all"
    },
    {
        title : "HackerRank",
        link : "/",
        hover: "hover:text-gray-500 transition-all"
    },
]