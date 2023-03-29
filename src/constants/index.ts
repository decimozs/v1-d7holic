import { AchievementsLinks, CertificationLinks, NavLinks, PlaygroundLinks, SocialLinks } from "@/interface";

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


export const achievementsLinks : Array<AchievementsLinks> = [
    {
        title : "Best Developer Presenter",
        link : "/",
        hover: "hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
    {
        title : "Best Overall System",
        link : "/",
        hover: "hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
    {
        title : "Best System Design",
        link : "/",
        hover: "hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
    {
        title : "Best System Funcionality",
        link : "/",
        hover: "hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
]

export const certificationLinks : Array<CertificationLinks> = [
    {
        title : "Problem Solving 1",
        link : "/",
        hover: "hover:text-black hover:font-bold transition-all hover:underline-offset-4 hover:underline"
    },
]