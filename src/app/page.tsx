import React from "react";
import Profil from "@/components/profil";
import Footer from "@/components/footer";
import Programs from "@/components/programs";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Profil></Profil>

      <Programs></Programs>
      <Contact></Contact>
      
    </main>
  );
}
