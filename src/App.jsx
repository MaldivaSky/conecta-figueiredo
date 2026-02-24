import {
   Landmark, Briefcase, Sparkles,
  MessageCircle, ArrowRight, Zap, ShieldAlert,
  X, Fingerprint, Info
} from 'lucide-react';
<h1 className="text-6xl md:text-8xl font-black">
  {import.meta.env.VITE_CONECTA_FIGUEIREDO}
</h1>

// Componente do Logo: Galo da Serra em SVG para garantir nitidez total
const LogoGaloDaSerra = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-md">
    <circle cx="50" cy="50" r="48" fill="#00843D" />
    <path d="M70 40C70 25 55 15 40 15C25 15 20 30 20 45C20 60 35 75 50 85C65 75 80 60 80 45C80 42 75 40 70 40Z" fill="#DA291C" />
    <path d="M45 25C40 25 35 30 35 35C35 40 40 45 45 45C50 45 55 40 55 35C55 30 50 25 45 25Z" fill="white" opacity="0.8" />
    <path d="M42 35L48 35" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const App = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);

  const pillars = [
    {
      id: 1,
      t: "Cidadania Digital Plena",
      d: "Acesse o Gov.br e bancos com total autonomia.",
      longD: "Minha proposta é erradicar a dependência de terceiros. O cidadão aprenderá a gerenciar sua conta Gov.br, consultar o INSS, realizar Prova de Vida digital e utilizar aplicativos bancários com segurança absoluta, eliminando filas e burocracia desnecessária.",
      icon: <Landmark className="text-white" size={32} />,
      cor: "bg-emerald-600",
      urgencia: "Alta demanda local"
    },
    {
      id: 2,
      t: "Escudo Anti-Golpes",
      d: "Proteção total contra fraudes no Pix e WhatsApp.",
      longD: "Workshop focado em segurança preventiva. Vamos blindar o WhatsApp do cidadão contra clonagens e ensinar a identificar links falsos de promoções ou recadastramentos que circulam na região. Segurança para o patrimônio da família de Figueiredo.",
      icon: <ShieldAlert className="text-white" size={32} />,
      cor: "bg-red-600",
      urgencia: "Essencial para idosos"
    },
    {
      id: 3,
      t: "Rumo ao Emprego",
      d: "Currículos de padrão multinacional e portais de vagas.",
      longD: "Como analista com 15 anos de mercado, trarei o padrão das grandes empresas para os jovens de Figueiredo. Vamos montar currículos competitivos e dominar ferramentas como Infojobs e LinkedIn para buscar oportunidades locais e remotas.",
      icon: <Briefcase className="text-white" size={32} />,
      cor: "bg-slate-800",
      urgencia: "Foco no Jovem Aprendiz"
    },
    {
      id: 4,
      t: "Sua Identidade Online",
      d: "E-mails profissionais e organização de contas.",
      longD: "A porta de entrada para o mundo moderno é um e-mail bem configurado. Ensinaremos a criar, recuperar e proteger contas, organizando a vida digital para que nenhuma oportunidade ou documento seja perdido por falta de acesso.",
      icon: <Fingerprint className="text-white" size={32} />,
      cor: "bg-emerald-700",
      urgencia: "Básico necessário"
    },
    {
      id: 5,
      t: "Inovação com IA",
      d: "Inteligência Artificial aplicada ao dia a dia.",
      longD: "O futuro não espera. Introdução prática ao uso de IAs (como o Gemini) para auxiliar estudantes em pesquisas e pequenos empreendedores locais na criação de textos e artes para seus negócios nas redes sociais.",
      icon: <Zap className="text-white" size={32} />,
      cor: "bg-orange-600",
      urgencia: "Diferencial Tecnológico"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-emerald-100">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <LogoGaloDaSerra />
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter leading-none text-emerald-900">CONECTA<span className="text-red-600">FIGUEIREDO</span></span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] leading-none mt-1">Secretaria de Saúde • SEMS</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Projeto Estratégico 2026</span>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - GATILHOS DE MARKETING */}
      <header className="pt-48 pb-24 px-6 relative bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-950">
            Tecnologia para <br />
            <span className="text-emerald-600 italic relative">
              Libertar
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M1 9C50 3 150 3 299 9" stroke="#DA291C" strokeWidth="6" strokeLinecap="round" /></svg>
            </span>, não isolar.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Sou Rafael Paiva, graduado pelo **IFSP**. Aplico 15 anos de experiência técnica para transformar a realidade digital de Presidente Figueiredo.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button
              onClick={() => document.getElementById('plano').scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 px-12 rounded-2xl shadow-2xl shadow-emerald-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Ver Plano de Inclusão <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* BENTO GRID DE ALTO IMPACTO */}
      <section id="plano" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card Principal - Cidadania */}
          <div onClick={() => setSelectedPillar(pillars[0])} className="md:col-span-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl hover:border-emerald-300 transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity">01</div>
            <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
              {pillars[0].icon}
            </div>
            <h3 className="text-4xl font-black mb-6 tracking-tighter">{pillars[0].t}</h3>
            <p className="text-slate-500 font-semibold text-xl leading-relaxed max-w-xl">{pillars[0].d}</p>
            <div className="mt-10 flex items-center gap-3 text-emerald-600 font-black uppercase text-sm tracking-widest">
              Expandir Proposta <Info size={18} />
            </div>
          </div>

          {/* Card Alerta - Segurança */}
          <div onClick={() => setSelectedPillar(pillars[1])} className="md:col-span-4 bg-red-600 p-12 rounded-[3rem] text-white shadow-2xl shadow-red-100 cursor-pointer group hover:scale-[1.02] transition-all flex flex-col justify-between">
            <ShieldAlert size={48} className="mb-10 group-hover:rotate-12 transition-transform" />
            <div>
              <h3 className="text-3xl font-black mb-4 tracking-tighter">{pillars[1].t}</h3>
              <p className="font-bold opacity-80 leading-tight">Garantindo a segurança financeira dos nossos moradores.</p>
            </div>
          </div>

          {/* Card Carreira */}
          <div onClick={() => setSelectedPillar(pillars[2])} className="md:col-span-5 bg-slate-900 p-12 rounded-[3rem] text-white shadow-xl cursor-pointer group hover:border-emerald-500 border border-transparent transition-all">
            <Briefcase className="text-emerald-400 mb-10" size={40} />
            <h3 className="text-3xl font-black mb-4 tracking-tighter">{pillars[2].t}</h3>
            <p className="text-slate-400 font-bold">Capacitação profissional com padrão de mercado.</p>
          </div>

          {/* Card IA - Futuro */}
          <div onClick={() => setSelectedPillar(pillars[4])} className="md:col-span-7 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl cursor-pointer group hover:bg-emerald-50 transition-all flex flex-col md:flex-row items-center gap-10">
            <div className="bg-orange-100 p-8 rounded-full text-orange-600 group-hover:animate-spin-slow">
              <Zap size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2 tracking-tighter">{pillars[4].t}</h3>
              <p className="text-slate-500 font-bold">O Amazonas no centro da revolução tecnológica.</p>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL DETALHADO - MARKETING DE CONTEÚDO */}
      {selectedPillar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-300">
            <div className={`${selectedPillar.cor} p-10 flex justify-between items-center`}>
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  {selectedPillar.icon}
                </div>
                <div>
                  <h4 className="text-white text-3xl font-black tracking-tighter italic">{selectedPillar.t}</h4>
                  <span className="text-white/70 text-xs font-black uppercase tracking-[0.2em]">{selectedPillar.urgencia}</span>
                </div>
              </div>
              <button onClick={() => setSelectedPillar(null)} className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <X size={40} />
              </button>
            </div>
            <div className="p-12">
              <p className="text-slate-600 text-2xl leading-relaxed font-bold mb-10">
                {selectedPillar.longD}
              </p>
              <div className="flex gap-4">
                <button onClick={() => setSelectedPillar(null)} className="flex-1 bg-slate-900 text-white text-lg font-black py-5 rounded-2xl hover:bg-black transition-all">
                  Fechar Detalhes
                </button>
                <a href="#contato" onClick={() => setSelectedPillar(null)} className="bg-emerald-100 text-emerald-700 p-5 rounded-2xl hover:bg-emerald-200 transition-all">
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER / CALL TO ACTION FINAL */}
      <footer id="contato" className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-block">
            <div className="relative">
              <div className="w-32 h-32 bg-slate-100 rounded-[2.5rem] flex items-center justify-center mb-6 border-4 border-white shadow-xl relative z-10 overflow-hidden">
                <LogoGaloDaSerra />
              </div>
              <div className="absolute -top-4 -right-4 bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-full z-20 shadow-lg uppercase tracking-tighter">
                Candidato 02 • SEMS
              </div>
            </div>
            <h4 className="text-4xl font-black mb-2 tracking-tighter">Rafael Paiva</h4>
            <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-sm">Analista de Sistemas • IFSP</p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] mb-12 border border-slate-100">
            <p className="text-slate-500 text-xl font-bold italic leading-relaxed">
              "Meu compromisso não é com a tecnologia pela tecnologia, mas com a tecnologia como ponte para a dignidade humana. Estou pronto para transformar a SEMS de Presidente Figueiredo."
            </p>
          </div>
          <p className="text-slate-300 text-xs font-black uppercase tracking-widest">© 2026 • Presidente Figueiredo • Amazonas</p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE IMPACTO (WHATSAPP) */}
      <a
        href="https://wa.me/55929XXXXXXXX"
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-6 rounded-[2rem] shadow-[0_20px_60px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all z-[100] group"
      >
        <div className="flex items-center gap-3">
          <MessageCircle size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black text-sm uppercase whitespace-nowrap">
            Fale com o Facilitador
          </span>
        </div>
      </a>

    </div>
  );
};

export default App;