import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import actricesImg from "@/public/actrices.png";
import serpentImg from "@/public/serpent.png";
import voyageImg from "@/public/voyage.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor en Sciences Politiques",
    location: "ULB, Bruxelles",
    description:
      "Participation aux travaux de doctorat de plusieurs professeurs à travers des travaux pratiques.",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2019",
  },
  {
    title: "Master en Sciences Politiques",
    location: "ULB, Bruxelles",
    description:
      " Thèse : ''La place de la femme dans les organes de directions des fédérations sportives olympiques en France''.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Certification Full-Stack",
    location: "Udemy, Google ",
    description:
      " The Complete 2023 Web Development Bootcamp. Formation Marketing Numérique (Atelier Digital). Formation Complète Développeur Web 2023.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Snake le jeu",
    description:
      "Projet d'approche du Javascript avec pour réalisation une copie alternative du célèbre jeu vidéo Snake.",
    tags: ["Javascript"],
    imageUrl: serpentImg,
  },
  {
    title: "Vitrine HTML CSS",
    description:
      "Projet d'initiation à l'HTML et à CSS visant à réaliser un site web vitrine pour agence de voyage.",
    tags: ["HTML", "CSS"],
    imageUrl: voyageImg,
  },
  {
    title: "Vitrine d'interactivité Javascript simple",
    description:
      "Projet d'initiation à l'interactivité au sein d'une page web, représentant une mise en valeure de star de cinéma et de leurs plus grands films.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: actricesImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Framer Motion",
] as const;
