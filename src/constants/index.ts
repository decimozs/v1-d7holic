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
        hover: "hover:text-pink-500 hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
    {
        title : "Github",
        link : "/",
        hover: "hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
    {
        title : "LinkedIn",
        link : "/",
        hover: "hover:text-blue-600 hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    }
]

export const playgroundLinks : Array<PlaygroundLinks> = [
    {
        title : "Leetcode",
        link : "/",
        hover: "hover:text-yellow-500 hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
    {
        title : "HackerRank",
        link : "/",
        hover: "hover:text-green-500 hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
]