import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Landmark, ShieldAlert, Briefcase, Zap, X,
  ArrowRight, Info, Users, HeartHandshake,
  Smartphone, GraduationCap, ChevronRight, Mail, Sparkles,
  Trees, Waves, Sprout, Map
} from 'lucide-react';

// --- IDENTIDADE VISUAL: O Galo da Serra (Símbolo da Nossa Gente) ---

const GaloDaSerra = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="corpoGalo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF4500' }} />
        <stop offset="100%" style={{ stopColor: '#DC2626' }} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#022C22" />
    <path d="M75 45C75 30 60 20 45 20C30 20 25 35 25 50C25 65 40 80 55 90C70 80 85 65 85 50" fill="url(#corpoGalo)" />
    <circle cx="48" cy="38" r="4" fill="white" />
  </svg>
);

// --- COMPONENTE DE CARD SOCIAL ---

const ImpactCard = ({ item, onClick }) => (
  <motion.div
    layoutId={item.id}
    onClick={() => onClick(item)}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`${item.grid} bg-[#0a0a0a] p-8 md:p-10 rounded-[3rem] border border-white/5 cursor-pointer relative overflow-hidden group shadow-2xl`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-2xl ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500`}>
          {item.icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tighter leading-tight">{item.title}</h3>
        <p className="text-neutral-400 font-medium text-base md:text-lg leading-snug">{item.desc}</p>
      </div>
      <div className="mt-10 flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">
        Ver compromisso social <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [selected, setSelected] = useState(null);

  // PILARES REFORÇADOS COM VISÃO RURAL E SOCIAL
  const pillars = [
    {
      id: 1, title: "Apoiar o Morador", desc: "Ajudar quem vive no ramal e na cidade a dominar o Gov.br e bancos.",
      long: "Muitos dos nossos irmãos de comunidades rurais sofrem para acessar seus direitos básicos por falta de instrução digital. Vou ensinar cada um a usar o celular como ferramenta de autonomia, garantindo que o idoso e o agricultor não dependam de ninguém para ver sua aposentadoria ou auxílio.",
      icon: <Landmark size={32} />, color: "from-emerald-500 to-teal-700", grid: "md:col-span-8"
    },
    {
      id: 2, title: "Proteger seu Patrimônio", desc: "Blindar o celular de quem tem pouco e ensinar a fugir de golpes.",
      long: "Quem tem menos é quem mais sofre com golpes de WhatsApp e Pix. Vou ensinar o morador a proteger o pouco que tem, mostrando as armadilhas dos criminosos de forma simples e humana, direto nos bairros e comunidades.",
      icon: <ShieldAlert size={32} />, color: "from-red-500 to-rose-700", grid: "md:col-span-4"
    },
    {
      id: 3, title: "Trabalho e Insumos", desc: "Ajudar a valorizar o que é nosso, do cupuaçu à hospitalidade.",
      long: "Apoiar o pequeno produtor e o jovem em busca de renda. Ensinar a divulgar nossos insumos locais e criar currículos que mostrem o valor do trabalhador de Figueiredo para o mundo.",
      icon: <Sprout size={32} />, color: "from-blue-500 to-indigo-700", grid: "md:col-span-4"
    },
    {
      id: 4, title: "Identidade Digital", desc: "Ensinar a gerenciar e-mails para garantir acessos e direitos.",
      long: "Para quem tem pouca instrução, um e-mail perdido é uma porta fechada. Vou apoiar a recuperação de contas e ensinar a organizar a vida digital de forma que ninguém perca uma oportunidade por falta de acesso.",
      icon: <Mail size={32} />, color: "from-slate-600 to-slate-800", grid: "md:col-span-4"
    },
    {
      id: 5, title: "Inovação para Todos", desc: "IA para ajudar o estudante e o microempreendedor do ramal.",
      long: "A Inteligência Artificial vai ajudar o filho do agricultor nos estudos e o produtor local a organizar suas vendas. Vou ensinar como essa tecnologia pode simplificar a vida de quem trabalha duro.",
      icon: <Sparkles size={32} />, color: "from-orange-500 to-amber-700", grid: "md:col-span-4"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center px-6 md:px-12 justify-between">
        <div className="flex items-center gap-4">
          <GaloDaSerra className="w-11 h-11" />
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter leading-none text-white">CONECTA<span className="text-emerald-500 italic uppercase">Figueiredo</span></span>
            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mt-1">SEMS • Inovação Social</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 bg-white/5 px-5 py-2 rounded-full border border-white/10">
          <GraduationCap size={18} className="text-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Rafael Paiva • IFSP</span>
        </div>
      </nav>

      {/* HERO SECTION - FOCO NA CIDADE E NAS ÁGUAS */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        {/* Efeito de Cachoeira no Fundo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-10 animate-pulse" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 text-emerald-400 mb-8 font-black text-xs uppercase tracking-[0.3em] bg-white/5 w-fit px-4 py-2 rounded-full border border-white/5">
            <Waves size={20} className="animate-bounce" /> Terra das Cachoeiras
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
            Cuidar da Terra, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-white italic">Apoiar a Gente.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl mb-14 leading-relaxed border-l-4 border-emerald-500 pl-8">
            Das águas da Iracema ao asfalto da AM-010. Sou <strong>Rafael Paiva (IFSP)</strong> e vim usar meus 15 anos de estrada para garantir que a tecnologia seja o caminho da liberdade para cada cidadão de Figueiredo.
          </p>
          <button
            onClick={() => document.getElementById('social').scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-white text-neutral-950 font-black py-6 px-12 rounded-[2rem] flex items-center justify-center gap-4 shadow-2xl hover:bg-emerald-500 hover:text-white transition-all text-lg"
          >
            VER PLANO PARA A COMUNIDADE <ArrowRight size={24} />
          </button>
        </motion.div>
      </header>

      {/* SEÇÃO AMBIENTAL E RURAL (ENFATIZADA) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white/5 border-y border-white/5 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic uppercase text-emerald-500">A Força do Nosso Chão</h2>
            <p className="text-lg md:text-xl text-neutral-400 font-bold leading-relaxed mb-10">
              Presidente Figueiredo não é só código; é vida pulsando nas comunidades. Meu projeto vai até o pequeno produtor de cupuaçu e as famílias dos ramais para ensinar que o digital pode valorizar nosso trabalho e proteger nossas águas.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-8 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 shadow-xl">
                <Waves className="mx-auto text-blue-500 mb-4" size={40} />
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Natureza</span>
                <p className="text-xl font-bold mt-2">Cachoeiras Protegidas</p>
              </div>
              <div className="p-8 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 shadow-xl">
                <Trees className="mx-auto text-emerald-500 mb-4" size={40} />
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Trabalho</span>
                <p className="text-xl font-bold mt-2">Insumos Valorizados</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] absolute animate-pulse" />
            <GaloDaSerra className="w-64 h-64 relative z-10 drop-shadow-[0_0_50px_rgba(255,69,0,0.3)]" />
          </div>
        </div>
      </section>

      {/* GRID SOCIAL */}
      <section id="social" className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {pillars.map((p) => (
          <ImpactCard key={p.id} item={p} onClick={setSelected} />
        ))}
      </section>

      {/* MODAL RESPONSIVO */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-neutral-950/95 backdrop-blur-3xl"
          >
            <motion.div
              layoutId={selected.id}
              className="bg-[#111] w-full max-w-2xl rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[92vh]"
            >
              <div className={`bg-gradient-to-r ${selected.color} p-10 md:p-12 text-white flex justify-between items-center shrink-0`}>
                <div className="flex items-center gap-5">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md shadow-inner">{selected.icon}</div>
                  <h4 className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none">{selected.title}</h4>
                </div>
                <button onClick={() => setSelected(null)} className="p-3 bg-white/10 rounded-full hover:bg-white/30 transition-colors"><X size={32} /></button>
              </div>

              <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar">
                <p className="text-neutral-300 text-2xl md:text-3xl leading-relaxed font-bold italic mb-10">
                  "{selected.long}"
                </p>
                <div className="flex items-start gap-5 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 mb-10">
                  <HeartHandshake className="text-emerald-500 shrink-0" size={32} />
                  <p className="text-base md:text-lg font-medium text-neutral-400 leading-snug">Este compromisso foca em acolher quem mais precisa, levando educação e segurança onde o asfalto termina e a comunidade começa.</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-full bg-white text-black font-black py-6 rounded-3xl uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-emerald-500 hover:text-white transition-all"
                >
                  Voltar para Figueiredo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER - IDENTIDADE FINAL */}
      <footer className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/10 rounded-full blur-[100px] -z-10" />
        <GaloDaSerra className="w-28 h-28 mx-auto mb-10 opacity-30 grayscale" />
        <h4 className="text-5xl font-black tracking-tighter mb-4 italic text-white uppercase tracking-widest">Rafael Paiva</h4>
        <p className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[11px] mb-14">Analista de Sistemas • Graduado IFSP • 15 Anos de Mercado</p>
        <div className="flex items-center justify-center gap-3 mb-16 opacity-40">
          <Map size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Presidente Figueiredo • Amazonas • Brasil</span>
        </div>
        <p className="text-neutral-500 text-xl md:text-2xl leading-relaxed font-bold italic max-w-2xl mx-auto mb-16 underline decoration-emerald-500/20 underline-offset-8">
          "A tecnologia serve para unir as cachoeiras ao mundo, protegendo nossa gente e valorizando o que é nosso."
        </p>
        <div className="flex justify-center gap-10 text-[10px] font-black text-neutral-700 uppercase tracking-[0.4em]">
          <span>Candidato 02 • SEMS</span>
          <span>Justiça Social Digital 2026</span>
        </div>
      </footer>
    </div>
  );
}