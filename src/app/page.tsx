'use client';

import Image from "next/image";
import Logo from '@/assets/logo.svg';
import { useEffect, useState } from "react";
import { Card } from "@/components/card";
import Link from "next/link";

type Psicologo = {
  id: number,
  nickName: string,
  bio: string,
  sessionPrice: number,
  montlyPrice: number,
  specialization: string,
  crp: string,
  avatarUrl: string
};


export default function Home() {
  const [psicologos, setPsicologos] = useState<Psicologo[]>([]);

  useEffect(() => {
    fetch('/api/psicologos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPsicologos(data))
      .catch(error => console.error('Erro ao buscar psicólogos:', error));
  }, []);

  return (
    <section className="p-6 sm:p-12 lg:p-24">
      <header>
        <Image
          src={Logo}
          alt="Logo"
          className="w-[136px] mb-6"
        />
      </header>
      <main>
        <section className="max-w-[742px]">
          <h1 className="text-[52px] font-bold text-primary-pink leading-[62px] mb-6">Encontre a profissional certa e transforme sua vida.</h1>
          <p className="text-txt-blue font-normal max-w-[590px]">Encontramos alguns psis que se encaixam em seu perfil, veja mais detalhes de cada profissional e agende sua primeira consulta.</p>
        </section>
        <div className="flex gap-6 mt-7 overflow-x-auto p-4">
          {psicologos.map(psicologo => (
            <Link key={psicologo.id} href={`/psi/${psicologo.id}`}>
            <Card
              avatarUrl={psicologo.avatarUrl}
              key={psicologo.id}
              nickName={psicologo.nickName}
              bio={psicologo.bio}
              sessionPrice={psicologo.sessionPrice}
              montlyPrice={psicologo.montlyPrice}
              specialization={psicologo.specialization}
              crp={psicologo.crp}
            />
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
