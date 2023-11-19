"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos de moi</SectionHeading>
      <p className="mb-3">
        Passionné par les nouvelles {" "}<span className="font-medium">technologies, le web,</span> et le monde du
        numérique en général depuis le plus jeune âge. C'est après mon{" "}<span className="font-medium"> master</span> à
        l'ULB en Sciences Politiques, que je me suis finalement décidé à emboiter
        le pas, et me lancer cœur et âme dans ma passion du numérique.
      </p> 
      <p> C'est avec la plus grande {" "}<span className="font-medium">détermination</span> que j'ai obtenu divers certifications, et
        avec la plus grande {" "}<span className="font-medium">motivation</span> que je recherche maintenant une
        {" "}<span className="font-medium">opportunité de carrière</span> en tant que développeur web.
        </p>
        

      
    </motion.section>
  );
}
