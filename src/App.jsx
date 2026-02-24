import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ShieldAlert, Briefcase, X, HeartHandshake,
  GraduationCap, ChevronRight, Sparkles, Sprout,
  Map, CheckCircle2, MessageCircle, Zap,
  Database, Store, Utensils, BrainCircuit,
  Terminal, Lightbulb, Mountain, Droplets,
  Menu, Globe, Shield, Mail, ScanFace,
  Type, ShieldCheck, ArrowRight, TreePine, Navigation
} from 'lucide-react';

// --- 1. ATIVOS VISUAIS: A ALMA DE PRESIDENTE FIGUEIREDO E DO BRASIL ---
const ASSETS = {
  // Cachoeiras, pedras e o verde denso (Terra das Cachoeiras)
  hero: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=2000",
  // Cidadania Digital: O trabalhador brasileiro conectado, cores quentes
  cidadania: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1200",
  // Segurança: Tecnologia e proteção de dados em ambiente moderno e real
  seguranca: "https://images.unsplash.com/photo-1614064641913-6b7140414c71?auto=format&fit=crop&q=80&w=1200",
  // Produção Local: O manejo da terra, folhas tropicais, agricultura real
  producao: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=1200",
  // Inovação Social: Computador e tecnologia chegando no interior
  inovacao: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
};

// --- 2. MOTORES DE UI - CORES DA AMAZÔNIA ---
const MouseGlow = () => {
  const mouseX = useSpring(0, { stiffness: 50, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 25 });
  useEffect(() => {
    const handleMouseMove = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-30 opacity-20"
      // Gradiente verde/água remetendo às águas de Figueiredo
      style={{ background: useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.25), transparent 80%)`) }}
    />
  );
};

const GaloLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="48" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
    <path d="M75 45C75 30 60 20 45 20C30 20 25 35 25 50C25 65 40 80 55 90C70 80 85 65 85 50" fill="#f97316" />
    <circle cx="48" cy="38" r="5" fill="#ecfdf5" />
  </svg>
);

// --- 3. DADOS ESTRATÉGICOS (TEXTOS CONTIDOS E RESPONSIVOS) ---
const pillars = [
  {
    id: 'p1', tag: "Cidadania", title: "Destravar o Gov.br",
    desc: "Acabar com a dependência de atravessadores para acessar Banco, INSS, SUS e outros aplicativos do GOV.BR",
    long: "Minha técnica servirá para viabilizar o acesso. Vou capacitar o cidadão para acessar o Gov.br sozinho, garantindo o controle total de seus direitos sem intermediários, assim como outros aplicativos ligados ao governo.",
    icon: <ScanFace />, color: "from-emerald-600 to-teal-900", grid: "lg:col-span-8 md:col-span-12", img: ASSETS.cidadania
  },
  {
    id: 'p2', tag: "Segurança", title: "Escudo Anti-Golpe",
    desc: "Técnica real para proteger o Pix e o WhatsApp contra fraudes e estelionato.",
    long: "Segurança é a base da dignidade. Quero reduzir a possibilidade de caírem em golpes digitais e engenharia social, que leva a muito prejuízo financeiro e emocional.",
    icon: <ShieldCheck />, color: "from-amber-600 to-orange-900", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.seguranca
  },
  {
    id: 'p3', tag: "Autonomia", title: "Renda com a Terra (Marketplaces)",
    desc: "Facilitar a aprendizagem de como funcionam os principais marketplaces e como podem se beneficiar.",
    long: "Vou ensinar a população a usar a internet para comprar e também vender insumos regionais (cupuaçu, queijo, tucumã) para o mercado nacional. Tecnologia gerando dinheiro no bolso.",
    icon: <Sprout />, color: "from-green-600 to-emerald-900", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.producao
  },
  {
    id: 'p4', tag: "Inovação", title: "IA como Ferramenta",
    desc: "Engenharia de Prompts para aproximar a população do que há de mais avançado na internet.",
    long: "IA não é mágica, é trabalho. Vou ensinar as pessoas a usarem IA para estudar, organizar informações e criar conteúdo de forma eficiente.",
    icon: <BrainCircuit />, color: "from-cyan-600 to-blue-950", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.inovacao
  },
  {
    id: 'p5', tag: "Social", title: "Identidade Digital",
    desc: "Criar contas, email e acessar todos os serviços digitais.",
    long: "Um e-mail perdido é uma porta fechada. Vou apoiar a gestão de contas digitais para garantir que o acesso nunca pare por falha técnica.",
    icon: <Mail />, color: "from-teal-600 to-emerald-950", grid: "lg:col-span-4 md:col-span-12", img: ASSETS.hero
  }
];

const expertise = [
  { label: "Analista e Desenvolvedor", sub: "Linguagens de Programação", icon: <CheckCircle2 /> },
  { label: "Comercial e Treinamentos", sub: "Experiência no Mercado de Trabalho", icon: <Database /> },
  { label: "Cidade das Cachoeiras", sub: "Residente e Atuante", icon: <Map /> },
  { label: "Tríade CSA", sub: "Inclusão Social - Cidadania, Segurança e Autonomia", icon: <Shield /> }
];

// --- 4. COMPONENTES DE UI (BLINDADOS CONTRA CORTES DE TEXTO) ---

const ActionCard = ({ item, onClick }) => (
  <motion.div
    layoutId={item.id}
    onClick={() => onClick(item)}
    whileHover={{ y: -8 }}
    // Padding ajustado para o mobile respirar
    className={`${item.grid} bg-[#0a0f0d] min-h-[400px] md:min-h-[480px] rounded-[2.5rem] border border-emerald-900/30 cursor-pointer relative overflow-hidden group shadow-2xl flex flex-col justify-end p-6 md:p-12 transition-all`}
  >
    <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-700 saturate-[0.8] group-hover:saturate-100 mix-blend-luminosity" style={{ backgroundImage: `url(${item.img})` }} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#050a08] via-[#050a08]/80 to-transparent" />

    <div className="relative z-10 text-left w-full">
      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-2xl ring-1 ring-emerald-500/20 group-hover:scale-105 transition-transform`}>
        {React.cloneElement(item.icon, { size: 28 })}
      </div>
      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-emerald-400 mb-3 block leading-none">{item.tag}</span>

      {/* TIPOGRAFIA SEGURA: Sem tracking gigante, com hyphens e quebra natural */}
      <h3 className="text-2xl md:text-4xl font-black mb-4 text-white leading-tight italic uppercase break-words hyphens-auto drop-shadow-lg">{item.title}</h3>

      <p className="text-neutral-300 font-medium text-sm md:text-lg leading-relaxed line-clamp-3 mb-6 drop-shadow-md">{item.desc}</p>
      <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
        Ver Detalhes <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </motion.div>
);

// --- 5. COMPONENTE PRINCIPAL (O MANIFESTO RAFAEL PAIVA) ---

export default function App() {
  const [selected, setSelected] = useState(null);
  const [isLargeFont, setIsLargeFont] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    // Fundo não é mais preto absoluto, é um verde/pedra bem escuro da Amazônia
    <div className={`min-h-screen bg-[#050a08] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden ${isLargeFont ? 'text-xl' : 'text-base'}`}>
      <MouseGlow />

      {/* HEADER DE ELITE - TEXTOS CONTIDOS */}
      <nav className="fixed top-0 w-full z-[100] bg-[#050a08]/95 backdrop-blur-xl border-b border-emerald-900/30 h-20 flex items-center px-4 md:px-12 justify-between shadow-2xl">
        <div className="flex items-center gap-3 md:gap-4">
          <GaloLogo className="w-10 h-10 shadow-2xl drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
          <div className="flex flex-col text-left">
            <span className="font-black text-lg md:text-2xl tracking-tighter leading-none text-white italic uppercase text-left">RAFAEL PAIVA</span>
            <span className="text-[8px] md:text-[9px] font-bold text-emerald-600/80 uppercase tracking-widest mt-1 text-left italic">Presidente Figueiredo • AM</span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 relative z-[120]">
          <button onClick={() => setIsLargeFont(!isLargeFont)} className="hidden md:flex bg-white/5 p-3 rounded-full border border-emerald-900/50 hover:bg-emerald-500/20 transition-all shadow-inner text-emerald-400">
            <Type size={18} />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-3 rounded-full shadow-xl hover:scale-105 transition-all ${isMenuOpen ? 'bg-orange-600 text-white' : 'bg-emerald-600 text-white'}`}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* OVERLAY MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[105] bg-[#030605] flex flex-col md:flex-row overflow-hidden pt-20"
            >
              <div className="flex-1 p-8 md:p-24 flex flex-col justify-center gap-8 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[200px] -z-10" />
                <span className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-2">Visão de Governo</span>
                {['Estratégia CSA', 'Inovação Social', 'Economia Local', 'Contato Direto'].map((item, idx) => (
                  <a key={idx} href={idx === 3 ? "https://wa.me/5511919889233" : `#section-${idx}`} onClick={() => setIsMenuOpen(false)} className="text-3xl md:text-6xl font-black italic uppercase text-neutral-500 hover:text-white transition-all flex items-center gap-4 group tracking-tight">
                    <ChevronRight className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all" size={28} /> {item}
                  </a>
                ))}
              </div>
              <div className="hidden md:flex flex-1 bg-white/[0.02] p-24 flex flex-col justify-end text-left border-l border-emerald-900/30">
                <h4 className="text-5xl font-black italic uppercase leading-[0.9] mb-10 text-white tracking-tighter text-left">Code is <br /><span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-[12px]">Freedom.</span></h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-emerald-400 font-bold uppercase text-[10px] tracking-widest leading-none text-left"><CheckCircle2 size={18} /> Analista de Sistemas - IFSP</div>
                  <div className="flex items-center gap-4 text-emerald-400 font-bold uppercase text-[10px] tracking-widest leading-none text-left"><CheckCircle2 size={18} /> 15 Anos de Mercado Real</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION: FONTES CALIBRADAS, SEM QUEBRA BIZARRA */}
      <header className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-left overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 saturate-[0.9] mix-blend-luminosity" style={{ backgroundImage: `url(${ASSETS.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a08] via-[#050a08]/80 to-transparent" />

        <motion.div style={{ scale }} className="w-full relative z-10 text-left mt-10 md:mt-0">
          <div className="flex items-center gap-3 text-emerald-300 mb-8 font-black text-[9px] md:text-[11px] uppercase tracking-widest bg-emerald-900/20 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-emerald-500/30 shadow-2xl">
            <Zap size={18} className="animate-pulse text-emerald-400" /> Humildade para Somar • Técnica para Resolver
          </div>

          {/* TÍTULO BLINDADO: text-balance e clamp seguro */}
          <h1 className="text-[clamp(2.2rem,7vw,5rem)] font-black tracking-tighter leading-[1] mb-10 text-left text-white uppercase italic break-words hyphens-none text-balance">
            Facilitar o entendimento, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-white leading-none">Viabilizar o acesso.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end text-left italic">
            <p className="text-lg md:text-3xl text-neutral-300 font-medium leading-[1.3] border-l-4 border-emerald-500 pl-6 md:pl-8 text-left italic drop-shadow-md">
              Saí de São Paulo e cheguei em Presidente Figueiredo, com 15 anos de experiência no mercado de trabalho. Será uma honra incluir tudo que aprendi no <strong>IFSP</strong> para instruir e facilitar a vida dos cidadãos desta terra.
            </p>
            <div className="flex flex-wrap gap-3 justify-start md:justify-end">
              {["IA & Prompts", "CSA", "IFSP", "Amazônia", "Facilitar Acesso", "Incluir Populações", "Desenvolver Habilidades", "Dar Autonomia", "Entender Necessidades"].map((tag, i) => (
                <span key={i} className="px-6 py-3 bg-[#0a0f0d]/80 backdrop-blur-md rounded-full border border-emerald-900/50 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-emerald-400 shadow-xl">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      {/* CREDENCIAIS CORRIGIDAS - SEM CORTES, PADDING AJUSTADO */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-y border-emerald-900/20 bg-[#070d0a] text-left relative z-10 shadow-inner">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-left">
          {expertise.map((s, i) => (
            <div key={i} className="flex flex-col gap-4 md:gap-6 group text-left p-4 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{React.cloneElement(s.icon, { size: 36 })}</div>
              <div className="text-left overflow-hidden w-full">
                {/* Sem tracking maluco, break-words seguro */}
                <h4 className="text-lg md:text-2xl font-black text-white italic uppercase tracking-tight leading-tight mb-1 break-words">{s.label}</h4>
                <p className="text-[9px] md:text-xs font-bold text-emerald-600/80 uppercase tracking-widest leading-tight break-words">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OS 5 PILARES */}
      <section id="section-0" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-emerald-900/20 relative z-10">
        <div className="mb-20 text-left italic">
          <span className="text-emerald-500 font-black text-[11px] uppercase tracking-widest mb-4 block italic leading-none uppercase text-left">Governança Digital na Prática</span>
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black tracking-tighter text-white mb-8 uppercase italic leading-[0.9] text-left break-words drop-shadow-xl">Tríade CSA</h2>
          <p className="text-neutral-300 text-xl md:text-3xl font-medium max-w-4xl border-l-4 border-emerald-500 pl-8 text-left leading-tight italic uppercase drop-shadow-md">Cidadania, Segurança e Autonomia: meu plano de ação para destravar a vida de quem vive aqui.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {pillars.map((item) => (
            <ActionCard key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* RECHEIO TÉCNICO */}
      <section id="section-1" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-emerald-900/20 bg-gradient-to-b from-transparent to-[#0a0f0d] relative overflow-hidden z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
          <div className="text-left italic">
            <h3 className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-8 italic leading-none uppercase text-left">Meus Projetos e Desenvolvimentos</h3>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black tracking-tighter mb-12 italic uppercase text-white leading-[0.9] text-left break-words uppercase text-left drop-shadow-xl">Sistemas de <br /><span className="text-cyan-400">Ação Real.</span></h2>
            <div className="space-y-12 mt-16 text-left">
              <div className="flex gap-6 group text-left items-start bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all">
                <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0"><Store size={36} /></div>
                <div className="text-left">
                  <h4 className="text-2xl font-black italic uppercase mb-2 text-white tracking-tight break-words">MercadinhoSys</h4>
                  <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">Solução prática para organizar o comércio local e de ramal. Controle de estoque e gestão de lucro real para o pequeno produtor.</p>
                </div>
              </div>
              <div className="flex gap-6 group text-left items-start bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="bg-cyan-500/10 p-4 rounded-xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0"><Utensils size={36} /></div>
                <div className="text-left">
                  <h4 className="text-2xl font-black italic uppercase mb-2 text-white tracking-tight break-words">Projeto Mise</h4>
                  <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">Valorização dos insumos locais (tucumã, cupuaçu) através de dados e cálculo de custos reais para o empreendedor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#030605]/90 backdrop-blur-xl p-8 md:p-16 rounded-[4rem] border border-emerald-900/30 shadow-[0_0_100px_rgba(6,78,59,0.3)] text-left relative overflow-hidden">
              <BrainCircuit size={64} className="text-emerald-500 mb-10 relative z-10" />
              <h4 className="text-3xl md:text-5xl font-black mb-8 italic text-white uppercase text-left leading-none relative z-10">Ensino e IA</h4>
              <p className="text-neutral-300 text-lg md:text-2xl leading-relaxed font-medium mb-12 text-left italic relative z-10">
                Vou apresentar e explicar diversas ferramentas de Inteligência Artificial para que o cidadão saiba identificar problemas e criar soluções. Vamos libertar mentes através da alfabetização digital.
              </p>
              <div className="p-6 md:p-8 bg-emerald-900/20 rounded-3xl border border-emerald-500/20 flex items-center gap-6 hover:border-emerald-500 transition-all group relative z-10 backdrop-blur-md">
                <Terminal size={36} className="text-emerald-400 group-hover:rotate-12 transition-all" />
                <div className="text-left">
                  <span className="text-lg md:text-xl font-black uppercase text-white tracking-tight block leading-none mb-2 italic">Engenharia de Prompts</span>
                  <span className="text-[9px] text-emerald-500 uppercase font-bold tracking-widest leading-none">Um universo de possibilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A FORÇA DA AMAZÔNIA - FONTES CONTIDAS */}
      <section id="section-2" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-left relative overflow-hidden z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6 md:gap-8 text-center">
            {[
              { icon: <Droplets />, label: "Cachoeiras", color: "text-cyan-400" },
              { icon: <Sprout />, label: "Produção", color: "text-orange-500" },
              { icon: <Mountain />, label: "Ecoturismo", color: "text-emerald-500" },
              { icon: <HeartHandshake />, label: "Ação Social", color: "text-amber-500" }
            ].map((item, i) => (
              <div key={i} className={`bg-[#0a0f0d] p-8 md:p-12 rounded-[2.5rem] border border-emerald-900/30 flex flex-col items-center gap-6 shadow-2xl hover:border-emerald-500 transition-all group ${i % 2 !== 0 ? 'mt-8 md:mt-12' : ''}`}>
                <div className={`${item.color} group-hover:scale-110 transition-transform drop-shadow-md`}>{React.cloneElement(item.icon, { size: 40 })}</div>
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-neutral-400 leading-none">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 text-left italic">
            <span className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-8 block italic leading-none text-left">Presidente Figueiredo - AM</span>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black tracking-tighter mb-12 italic uppercase text-white leading-[0.8] text-left break-words drop-shadow-xl">Motor do Ecoturismo no<br />Amazonas.</h2>
            <p className="text-neutral-300 text-lg md:text-3xl font-medium leading-[1.3] border-l-4 border-emerald-500 pl-8 text-left italic">
              Figueiredo é o coração estratégico do estado. Unir nossas cachoeiras à modernização do acesso ao digital será minha missão social e técnica.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER - PADDING BOTTOM GIGANTE PARA O WHATSAPP NÃO ATRAPALHAR */}
      <footer className="py-32 px-6 md:px-12 border-t border-emerald-900/30 bg-[#030605] relative text-left z-10 pb-48">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20 text-left">
          <div className="md:col-span-7 text-left italic">
            <GaloLogo className="w-24 h-24 mb-12 drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
            <h4 className="text-[clamp(3.5rem,7vw,5rem)] font-black italic uppercase text-white mb-8 tracking-tighter text-left leading-none underline decoration-emerald-500/20 underline-offset-[16px]">RAFAEL PAIVA</h4>
            <p className="text-neutral-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl italic text-left">
              Minha formação no IFSP me permite ser abrangente e dinâmico; minha honra é facilitar a vida de quem vive aqui em Presidente Figueiredo.
            </p>
          </div>
          <div className="md:col-span-4 text-left flex flex-col justify-end italic">
            <h5 className="text-emerald-500 font-black text-[11px] uppercase tracking-widest mb-10 italic text-left leading-none">Formação Comercial e Treinamentos</h5>
            <div className="space-y-8 text-left">
              <div className="flex items-center gap-6 text-neutral-300 uppercase font-black text-[10px] tracking-widest italic text-left break-words">
                <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-500/20 shadow-inner shrink-0"><GraduationCap size={24} className="text-emerald-400" /></div> Analista e Desenvolvedor de Sistemas - IFSP
              </div>
              <div className="flex items-center gap-6 text-neutral-300 uppercase font-black text-[10px] tracking-widest italic text-left break-words">
                <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-500/20 shadow-inner shrink-0"><Database size={24} className="text-emerald-400" /></div> CSA - Cidadania, Segurança e Autonomia 
              </div>
              <div className="flex items-center gap-6 text-neutral-300 uppercase font-black text-[10px] tracking-widest italic text-left break-words">
                <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-500/20 shadow-inner shrink-0"><Map size={24} className="text-emerald-400" /></div> Figueiredo • Amazonas
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-emerald-900/30 flex flex-col md:flex-row justify-between items-center gap-8 text-emerald-700/60 font-black text-[9px] uppercase tracking-widest italic text-center">
          <span className="text-center md:text-left leading-none">Justiça Social Digital 2026 • Rafael Paiva</span>
          <span className="text-center md:text-right leading-none">Code is Freedom • Amazonas</span>
        </div>
      </footer>

      {/* WHATSAPP DIRETO - MENOR NO MOBILE, MARGEM SEGURA */}
      <a href="https://wa.me/5511919889233" target="_blank" className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] bg-emerald-500 p-4 md:p-6 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-110 transition-all active:scale-95 group ring-2 ring-emerald-300/50">
        <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-[#020202] group-hover:animate-bounce" />
      </a>

      {/* MODAL CORRIGIDO: GRID VERTICAL (LADO A LADO) NO DESKTOP, EMPILHADO NO MOBILE */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8 bg-black/98 backdrop-blur-3xl overflow-hidden">
            <motion.div layoutId={selected.id} className="bg-[#050a08] w-full max-w-6xl rounded-[3rem] md:rounded-[5rem] border border-emerald-900/30 shadow-[0_0_150px_rgba(6,78,59,0.5)] max-h-[95vh] overflow-y-auto custom-scrollbar text-left relative flex flex-col">

              <div className={`bg-gradient-to-r ${selected.color} p-10 md:p-24 text-white flex justify-between items-start text-left relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 opacity-60 bg-cover bg-center mix-blend-luminosity saturate-[0.8]" style={{ backgroundImage: `url(${selected.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a08] to-transparent"></div>

                <div className="flex flex-col gap-6 md:gap-10 relative z-10 text-left w-full pr-12">
                  <div className="bg-[#050a08]/40 w-fit p-6 md:p-8 rounded-[2rem] backdrop-blur-md shadow-inner text-left border border-white/10">
                    {selected.icon && React.cloneElement(selected.icon, { className: "w-12 h-12 md:w-20 md:h-20 text-white" })}
                  </div>
                  <h4 className="text-[clamp(2rem,6vw,5rem)] font-black italic text-left leading-none tracking-tighter uppercase break-words drop-shadow-2xl">{selected.title}</h4>
                </div>
                <button onClick={() => setSelected(null)} className="absolute top-8 right-8 md:top-16 md:right-16 p-4 md:p-6 bg-black/40 rounded-full hover:bg-black/80 transition-all active:scale-90 relative z-10 border border-white/10 backdrop-blur-md"><X className="w-6 h-6 md:w-10 md:h-10 text-white" /></button>
              </div>

              <div className="p-8 md:p-24 text-left relative z-10 bg-[#050a08] flex-1 flex flex-col">
                <p className="text-neutral-200 text-xl md:text-4xl font-black italic mb-16 md:mb-24 text-left leading-[1.3] tracking-tight drop-shadow-md">"{selected.long}"</p>

                {/* CORREÇÃO CRÍTICA DO MODAL: Empilha no mobile (grid-cols-1), lado a lado no desktop (md:grid-cols-2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left w-full mt-auto">
                  <div className="p-8 md:p-12 bg-white/5 rounded-[2.5rem] border border-white/5 shadow-xl text-left hover:border-emerald-500/30 transition-all group backdrop-blur-sm flex flex-col">
                    <Zap className="text-emerald-500 mb-6 md:mb-10 w-10 h-10 md:w-14 md:h-14 group-hover:scale-110 transition-transform filter drop-shadow" />
                    <h5 className="text-emerald-500 font-black text-[10px] md:text-[11px] uppercase tracking-widest mb-4 md:mb-6 italic text-left leading-none">Plano de Ação</h5>
                    <p className="text-neutral-300 text-lg md:text-2xl font-medium leading-relaxed text-left italic">Facilitar acesso da população focando em uma maior autonomia e segurança digital.</p>
                  </div>
                  <div className="p-8 md:p-12 bg-white/5 rounded-[2.5rem] border border-white/5 shadow-xl text-left hover:border-emerald-500/30 transition-all group backdrop-blur-sm flex flex-col">
                    <Sparkles className="text-emerald-500 mb-6 md:mb-10 w-10 h-10 md:w-14 md:h-14 group-hover:scale-110 transition-transform filter drop-shadow" />
                    <h5 className="text-emerald-500 font-black text-[10px] md:text-[11px] uppercase tracking-widest mb-4 md:mb-6 italic text-left leading-none">Inovação Social</h5>
                    <p className="text-neutral-300 text-lg md:text-2xl font-medium leading-relaxed text-left italic">Capacitação direta para eliminar a dependência de terceiros no acesso a direitos.</p>
                  </div>
                </div>

                <button onClick={() => setSelected(null)} className="mt-16 md:mt-24 w-full bg-emerald-600 text-[#020202] font-black py-8 md:py-12 rounded-[3rem] uppercase tracking-widest text-[10px] md:text-sm shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all transform hover:scale-[1.01] active:scale-95 leading-none italic border border-emerald-400/50">Consolidar Plano Digital</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}