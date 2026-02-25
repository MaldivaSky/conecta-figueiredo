import React, { useState, useEffect, useRef } from 'react';
import logoGaloImg from './assets/galobg.png';
import segurancaImg from './assets/seguranca.jpg';
import gov from './assets/gov.png';
import casinhaImg from './assets/casinha-amor.png';
import csaImg from './assets/csa.png';
import iaIMG from './assets/ia-img.png';
import idDigital from './assets/id-digital.png';

import ChatGrok from './ChatGrok';

// Importação do vídeo para garantir que o Webpack/Vite encontre o arquivo
import heroVideo from './assets/hero1.mp4';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  ShieldAlert, Briefcase, X, HeartHandshake, Quote,
  GraduationCap, ChevronRight, Sparkles, Sprout,
  Map, CheckCircle2, MessageCircle, Zap,
  Database, Store, Utensils, BrainCircuit,
  Terminal, Lightbulb, Mountain, Droplets,
  Menu, Globe, Shield, Mail, ScanFace,
  Type, ShieldCheck, ArrowRight, TreePine, Navigation
} from 'lucide-react';

// --- 1. CONFIGURAÇÃO DE ATIVOS & TEMAS ---
const ASSETS = {
  hero: heroVideo,
  cidadania: gov,
  seguranca: segurancaImg,
  producao: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=1200",
  inovacao: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  logoGalo: logoGaloImg,
  casinha: casinhaImg,
  csa: csaImg,
  idDigital: idDigital
};

// --- 2. COMPONENTES DE EFEITO MASTER ---

const FogParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-emerald-500/5 blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: `${300 + i * 100}px`,
          height: `${300 + i * 100}px`,
          left: `${i * 15}%`,
          top: `${i * 10}%`,
        }}
      />
    ))}
  </div>
);

const MouseGlow = () => {
  const mouseX = useSpring(0, { stiffness: 40, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 opacity-40"
      style={{
        background: useTransform([mouseX, mouseY], ([x, y]) =>
          `radial-gradient(800px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.15), transparent 80%)`)
      }}
    />
  );
};

// --- 3. UI COMPONENTS ---

const ActionCard = ({ item, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      layoutId={item.id}
      onClick={() => onClick(item)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -10, scale: 1.01 }}
      className={`${item.grid} group relative min-h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-emerald-900/20 shadow-2xl transition-all duration-500`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{
          backgroundImage: `url(${item.img})`,
          filter: 'brightness(0.4) saturate(0.5)'
        }}
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-[#050a08] via-[#050a08]/70 to-transparent group-hover:via-[#050a08]/40 transition-all duration-500`} />

      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:shadow-emerald-500/20 transition-all`}>
          {React.cloneElement(item.icon, { size: 28 })}
        </div>
        <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">
          {item.tag}
        </span>
        <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase leading-[0.9] mb-4 group-hover:text-emerald-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-neutral-400 font-medium text-sm md:text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
          {item.desc}
        </p>

        <div className="mt-6 flex items-center gap-2 text-white/50 group-hover:text-emerald-400 transition-colors text-[10px] font-bold uppercase tracking-widest">
          Expandir Estratégia <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. MAIN APPLICATION ---

export default function App() {
  const [selected, setSelected] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const workshopData = {
    id: 'workshop',
    tag: "Educação Digital",
    title: "Engenharia de Prompts & EAD MEC",
    long: "Minha proposta é criar uma rede de capacitação. Além do meu workshop presencial de IA, ou seja, Engenharia de Prompts e uso das principais ferramentas gratuitas como Gemini e DeepSeek. Também vou atuar como tutor e facilitador para que o cidadão acesse as plataformas do MEC e dos Institutos Federais. São milhares de cursos gratuitos com certificação oficial que o povo de Figueiredo muitas vezes não sabe como acessar ou concluir. Eu serei a ponte.",
    img: iaIMG,
    color: "from-emerald-500 to-cyan-600",
    isWorkshop: true // Marcador para personalizarmos o moda
  };

  const testimonials = [
    {
      name: "Dona Maria",
      role: "Produtora Rural - Ramal da Cachoeira",
      text: "Eu achava que o Gov.br era um bicho de sete cabeças. O Rafael me ensinou a usar o celular e hoje eu mesma resolvo minhas coisas do INSS sem precisar pagar ninguém.",
      impact: "Autonomia Digital"
    },
    {
      name: "Seu Mauro - Mercadinho 3 Irmãos",
      role: "Comerciante - Comunidade Marcos Freire",
      text: "O sistema que ele montou para o meu mercadinho mudou tudo. Agora eu sei exatamente o que tenho no estoque pelo celular. É a tecnologia chegando no interior.",
      impact: "Gestão Real"
    },
    {
      name: "Ariel Molina",
      role: "Jovem Empreendedor - Comunidade Marcos Freire",
      text: "O workshop de IA abriu minha mente. Eu não sabia que podia usar o Gemini para organizar meu plano de negócios. O Rafael explica de um jeito que a gente entende.",
      impact: "Capacitação"
    }
  ];

  const pillars = [
    {
      id: 'p1', tag: "Cidadania", title: "Destravar o Gov.br",
      desc: "Eliminar atravessadores. Autonomia total para INSS, SUS e Bancos.",
      long: "Minha técnica servirá para viabilizar o acesso. Vou capacitar o cidadão para acessar o Gov.br sozinho, garantindo o controle total de seus direitos sem intermediários.",
      icon: <ScanFace />, color: "from-emerald-600 to-green-950", grid: "lg:col-span-8 md:col-span-12", img: ASSETS.cidadania
    },
    {
      id: 'p2', tag: "Segurança", title: "Escudo Anti-Golpe",
      desc: "Proteção avançada para Pix e WhatsApp. Segurança é dignidade.",
      long: "Segurança é a base da dignidade. Quero reduzir a possibilidade de caírem em golpes digitais e engenharia social, combatendo prejuízos financeiros e emocionais.",
      icon: <ShieldCheck />, color: "from-orange-600 to-red-950", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.seguranca
    },
    {
      id: 'p3', tag: "Autonomia", title: "Renda com Marketplaces",
      desc: "Vender Cupuaçu, Tucumã e outros insumos para o Brasil via Internet.",
      long: "Vou ensinar a usar a internet tanto para comprar quanto para vender insumos regionais para o mercado nacional. Tecnologia gerando dinheiro direto no bolso do produtor de Figueiredo.",
      icon: <Sprout />, color: "from-green-600 to-emerald-900", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.producao
    },
    {
      id: 'p4', tag: "Inovação", title: "IA: Alfabetização Digital",
      desc: "Engenharia de Prompts para produtividade real.",
      long: "IA não é mágica, é ferramenta de trabalho. Vou ensinar a usar IA para estudar, organizar informações e criar conteúdo eficiente.",
      icon: <BrainCircuit />, color: "from-cyan-600 to-blue-900", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.inovacao
    },
    {
      id: 'p5', tag: "Social", title: "ID Digital Plena",
      desc: "Crie uma conta no Google, crie e-mails e contas. Ninguém ficará para trás.",
      long: "Um e-mail perdido é uma porta fechada. Vou apoiar a gestão de contas digitais para garantir que o acesso aos serviços nunca pare.",
      icon: <Mail />, color: "from-teal-1000 to-red-900", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.idDigital
    }
  ];

  return (
    <div className="min-h-screen bg-[#030706] text-white selection:bg-emerald-500/40 overflow-x-hidden">
      <MouseGlow />
      <FogParticles />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[200] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <nav className="fixed top-0 w-full z-[150] h-24 flex items-center px-6 md:px-12 justify-between backdrop-blur-md bg-[#030706]/80 border-b border-emerald-900/20">
        <div className="flex items-center gap-4 group">
          <div className="relative overflow-hidden rounded-full p-1 bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-all">
            <img src={ASSETS.logoGalo} alt="Galo" className="w-12 h-12 object-cover rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter leading-none italic uppercase">Rafael Paiva</span>
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-[0.2em] mt-1">Presidente Figueiredo</span>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 w-14 h-14 rounded-full bg-emerald-500 flex flex-col items-center justify-center gap-1.5 hover:scale-110 active:scale-90 transition-all"
        >
          {isMenuOpen ? <X className="text-black" /> : (
            <>
              <div className="w-6 h-0.5 bg-black" />
              <div className="w-6 h-0.5 bg-black" />
              <div className="w-4 h-0.5 bg-black self-end mr-4" />
            </>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] bg-[#030706]/98 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full">
              <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.5em] mb-8 block border-l-2 border-emerald-500 pl-4">
                Navegação Estratégica
              </span>

              {/* Grid de Itens: 1 coluna no mobile, 2 colunas no desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8">
                {[
                  { t: 'Início', s: 'Visão Geral', id: 'hero' },
                  { t: 'Tríade CSA', s: 'Cidadania e Autonomia', id: 'section-0' },
                  { t: 'Sistemas e Workshop', s: 'Apps em Produção', id: 'section-1' },
                  { t: 'Vozes', s: 'Testemunhos Reais', id: 'testemunhos' },
                  { t: 'Parceiros', s: 'Ecoturismo Rural', id: 'section-2' },
                  { t: 'Contato', s: 'Whatsapp', id: 'contato' } 
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col border-b border-white/5 pb-4 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-emerald-500 font-mono text-xs">0{i + 1}</span>
                      <span className="text-3xl md:text-5xl font-black italic uppercase group-hover:text-emerald-400 transition-colors leading-[0.8] tracking-tighter">
                        {item.t}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-neutral-500 group-hover:text-white transition-colors ml-10 uppercase tracking-widest mt-1">
                      {item.s}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Rodapé do Menu mais compacto */}
              <div className="mt-12 flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/5 gap-4">
                <div className="flex gap-4">
                  <span className="text-[10px] font-black text-white/40 uppercase">IFSP + Amazonas</span>
                  <span className="text-[10px] font-black text-white/40 uppercase">2024-2026</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-emerald-500 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  [ Fechar Menu ]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION COM VÍDEO IMPLEMENTADO */}
      <header id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 pt-24">
        {/* INÍCIO DO BLOCO DE VÍDEO SOLICITADO */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 grayscale saturate-50"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#040a08] via-[#2e6758]/80 to-transparent" />
        </div>
        {/* FIM DO BLOCO DE VÍDEO SOLICITADO */}

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Zap size={14} className="animate-pulse" /> Humildade para somar • Técnica para resolver
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] italic uppercase tracking-tighter mb-10">
              Facilitar o <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Entendimento,</span><br />
              Viabilizar o Acesso.
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed border-l-4 border-emerald-500 pl-8 italic">
                A técnica ensinada no <strong>Instituto Federal de SP</strong> a serviço do povo. Minha missão é traduzir e facilitar o digital para que cada cidadão de Figueiredo tenha autonomia real.
              </p>
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {["Inclusão", "Segurança", "Autonomia", "IA"].map((t, i) => (
                  <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-emerald-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section id="section-0" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-6">Tríade CSA</h2>
          <div className="h-1 w-24 bg-emerald-500 mb-8" />
          <p className="text-xl md:text-3xl text-neutral-400 italic font-medium uppercase">Cidadania, Segurança e Autonomia.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {pillars.map((item) => (
            <ActionCard key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>
      </section>

      <section id="section-1" className="py-32 bg-emerald-950/10 border-y border-emerald-900/10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald-500 font-black text-xs uppercase tracking-widest block mb-6">Impacto Local</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.74] mb-12">Sistemas <br />desenvolvidos por mim.</h2>

            <div className="space-y-6">
              {[
                {
                  title: "MercadinhoSys",
                  icon: <Store />,
                  desc: "Gestão para o produtor rural e comércio de ramal.",
                  url: "https://mercadinhosys.vercel.app/"
                },
                {
                  title: "Projeto Mise",
                  icon: <Utensils />,
                  desc: "Valorização e precificação de insumos amazônicos.",
                  url: "https://mise-app-gest-o-de-cozinha.vercel.app/"
                }
              ].map((proj, i) => (
                <a
                  key={i}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-[2rem] bg-[#050a08] border border-emerald-900/30 flex gap-6 items-start hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group block"
                >
                  <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    {proj.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-black italic uppercase text-white group-hover:text-emerald-400 transition-colors">
                        {proj.title}
                      </h4>
                      <ArrowRight size={18} className="text-emerald-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    <p className="text-neutral-400">{proj.desc}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-500/50 uppercase tracking-widest">Acesse o Sistema</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-[100px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity" />

            <div className="relative bg-[#050a08]/90 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] border border-emerald-900/30 h-full flex flex-col justify-between overflow-hidden shadow-2xl">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <BrainCircuit size={50} className="text-emerald-400" />
                  <div className="flex gap-4">
                    <img src="https://claude.ai/favicon.ico" alt="Claude" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                    <img src="https://chatgpt.com/favicon.ico" alt="ChatGPT" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                    <img src="https://deepseek.com/favicon.ico" alt="DeepSeek" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                    <img src="https://www.google.com/favicon.ico" alt="Gemini" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-6 leading-tight">
                  O Futuro <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">é Conectado.</span>
                </h3>

                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 italic font-medium">
                  Não usaremos IA para substituir pessoas, mas para dar superpoderes ao cidadão de Figueiredo. Alfabetização digital de última geração.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  onClick={() => setSelected(workshopData)}
                  className="relative overflow-hidden flex flex-col gap-2 p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-black rounded-3xl shadow-xl cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <Terminal size={24} />
                    <span className="font-black text-sm uppercase tracking-tighter">Workshop: Engenharia de Prompts</span>
                    <ArrowRight size={18} className="ml-auto group-hover:translate-x-2 transition-transform" />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-black text-emerald-500 text-[9px] font-black rounded-full animate-pulse">
                      INSCRIÇÕES EM BREVE
                    </span>
                    <span className="text-[9px] font-bold text-black/70 uppercase">
                      + Mentoria EAD MEC/IFSP
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none font-mono text-[10px] text-emerald-500">
                <pre>
                  {`const smartCity = () => {
                    integrate(IA, "Amazonas");
                    empower(Citizens);
                    protect(Direitos Digitais);}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testemunhos" className="py-32 bg-gradient-to-b from-transparent to-emerald-950/10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.3em]">Resultados Reais</span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mt-4">Vozes da Mudança</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-[2.5rem] bg-[#050a08] border border-emerald-900/20 relative group hover:border-emerald-500/50 transition-all"
              >
                <Quote className="absolute top-6 right-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" size={60} />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, star) => (
                      <Sparkles key={star} size={12} className="text-emerald-500" />
                    ))}
                  </div>

                  <p className="text-lg text-neutral-300 italic mb-8 leading-relaxed">
                    "{t.text}"
                  </p>

                  <div className="border-t border-emerald-900/30 pt-6">
                    <h4 className="font-black text-white uppercase italic">{t.name}</h4>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-tighter">{t.role}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-black rounded-full uppercase">
                      {t.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: CASINHA DO AMOR --- */}
      <section id="section-2" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="group relative min-h-[500px] rounded-[3.5rem] overflow-hidden border border-emerald-500/20 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url(${ASSETS.casinha})`,
              filter: 'brightness(0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030706] via-[#030706]/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-20 max-w-2xl">
            <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em] mb-6 block">
              Conexão & Natureza
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6">
              Casinha do Amor <br />
              <span className="text-2xl md:text-3xl text-emerald-500/80 block mt-2">Hostel & Hospedagem Rural</span>
            </h2>
            <p className="text-xl text-neutral-300 italic mb-8 leading-relaxed">
              O lugar ideal para se conectar com a natureza e sentir a paz interior vibrar. Aqui, animais silvestres são seus vizinhos em uma experiência única de imersão amazônica.
            </p>
            <div className="flex gap-4">
              <span className="px-6 py-3 rounded-full bg-emerald-500 text-black font-black text-[12px] uppercase tracking-widest text-balance">
                Eco-Hospedagem - Ecoturismo - Presidente Figueiredo - AM
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Casinha+do+Amor+-+Hospedagem+Rural+e+Glamping&query_place_id=ChIJOdkZ_ckDcpIRaNugEqZXQX8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-emerald-500 transition-colors group flex items-center justify-center"
                title="Ver localização no Maps"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 group-hover:text-black">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER ATUALIZADO --- */}
      <footer className="py-24 px-6 md:px-12 border-t border-emerald-900/20 bg-[#020504] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">

            <div className="max-w-md">
              <img src={ASSETS.logoGalo} alt="Logo" className="w-20 h-20 mb-8 rounded-full border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
              <h4 className="text-4xl font-black italic uppercase mb-4">Rafael Paiva</h4>
              <p className="text-neutral-500 font-medium italic">
                Formado pelo IFSP, residente em Presidente Figueiredo.
                Tecnologia, Cidadania e Respeito.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full md:w-auto">
              <div className="flex flex-col gap-4"></div>
               
              <div className="flex flex-col gap-3" id="contato">
                <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">Contato</span>
                <a href="https://wa.me/5511919889233" className="text-xl font-bold hover:text-emerald-400 transition-colors italic uppercase">
                  <span><MessageCircle size={36} className="text-green group-hover:rotate-12 transition-transform" /></span>
                WhatsApp</a>
              </div>
              
              
              {/* Apoio - Agora com Logos */}
              <div className="flex flex-col gap-6">
                <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">Apoio Estratégico</span>
                <div className="flex flex-col gap-4">
                  {/* Contato */}
              
                  <div className="flex items-center gap-4 group">
                    <img src={ASSETS.casinha} className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-emerald-900/30" alt="Casinha do Amor" />
                    <div>
                      <p className="text-xs font-black uppercase text-white">Casinha do Amor</p>
                      <p className="text-[10px] text-neutral-500 uppercase">Hospedagem Rural</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <img src={ASSETS.csa} className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-emerald-900/30" alt="CSA" />
                    <div>
                      <p className="text-xs font-black uppercase text-white">CSA Figueiredo</p>
                      <p className="text-[10px] text-neutral-500 uppercase">Comunidade que Sustenta a Agricultura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-20 pt-8 border-t border-emerald-900/10 text-center">
            <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em]">
              Desenvolvido com Tecnologia IFSP & Alma Amazônica - Todos os direitos reservados © 2026
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              layoutId={selected.id}
              className="bg-[#050a08] w-full max-w-5xl rounded-[3rem] border border-emerald-900/30 overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-50 p-4 bg-black/50 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selected.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={selected.title} />
                <div className={`absolute inset-0 bg-gradient-to-r ${selected.color} mix-blend-multiply opacity-60`} />
              </div>

              <div className="w-full md:w-1/2 p-12 md:p-16 overflow-y-auto">
                <span className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-4 block italic">{selected.tag}</span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none mb-8">{selected.title}</h2>
                <p className="text-xl md:text-2xl text-neutral-300 italic leading-relaxed mb-12">
                  "{selected.long}"
                </p>
                
                <div className="p-8 mt-4 bg-emerald-900/10 rounded-2xl border border-emerald-500/20">
                  <div className="flex items-center gap-4 text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-4">
                    <CheckCircle2 size={16} /> Objetivo Técnico
                  </div>
                  <p className="text-sm text-neutral-400 font-medium italic">
                    Implementação de protocolos de segurança e capacitação direta via workshops presenciais nos ramais e sede.
                  </p>
                </div>

                {selected.isWorkshop && (
                  <div className="mt-8 p-6 border border-emerald-500/30 rounded-3xl bg-emerald-500/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Inscrições em breve</span>
                    </div>
                    <button className="w-full py-4 bg-emerald-500 text-black font-black uppercase text-xs rounded-xl hover:bg-white hover:scale-[1.02] transition-all">
                      Quero ser avisado da primeira turma
                    </button>
                    <p className="text-[9px] text-center text-neutral-500 mt-4 uppercase font-bold tracking-tighter">
                      Parceria Técnica: Tutoria EAD - MEC / Institutos Federais
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ChatGrok /> {/* O chat ficará flutuando sobre tudo */}
    </div>
  );
}