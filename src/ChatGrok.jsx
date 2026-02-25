import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';




const ChatGrok = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Olá! Sou o assistente digital do Rafael. Como posso ajudar com tecnologia em Figueiredo hoje?' }
    ]);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    // Scroll automático para a última mensagem
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);


    const handleSend = async () => {
        if (!input.trim() || loading) return;

        // LOG DE DEBUG - REMOVA APÓS FUNCIONAR
        console.log("CHAVE CARREGADA:", import.meta.env.VITE_GROK_API_KEY ? "SIM ✅" : "NÃO ❌")

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            // Usando a URL da Groq Cloud e o modelo Llama3
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_GROK_API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant", // Modelo ultra-rápido da Groq
                    messages: [
                        {
                            role: "system",
                            content: `Você é o assistente técnico do Rafael Paiva em Presidente Figueiredo. 
                            REGRAS DE CONDUTA:
                            1. Seja extremamente direto e conciso.Responda em no máximo 2 ou 3 frases.
                            2. Não ofereça listas de tópicos a menos que seja solicitado.
                            3. Não tente adivinhar o que o usuário quer; espere ele perguntar.
                            4. Use um tom profissional, mas amigável(estilo consultor local).
                            5. Se for a primeira mensagem, diga apenas: "Olá! Sou a IA do Rafael. 
                            Como posso ajudar seu negócio ou tirar suas dúvidas técnicas hoje?`
                        },
                        ...messages.filter(m => m.role !== 'error'), // Filtra mensagens de erro do histórico
                        userMsg
                    ]
                })
            });

            const data = await response.json();

            // PROTEÇÃO: Verifica se a resposta da API é válida antes de acessar o [0]
            if (data && data.choices && data.choices[0]) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: data.choices[0].message.content
                }]);
            } else {
                throw new Error(data.error?.message || "Erro na resposta da IA");
            }

        } catch (error) {
            console.error("Erro Chat IA:", error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Ops! Tive um problema técnico. Verifique sua conexão ou a chave da API.",
                isError: true
            }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[200]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-[#030706] border border-emerald-500/30 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-5 bg-emerald-500 text-black flex justify-between items-center font-black italic">
                            <div className="flex items-center gap-2">
                                <Bot size={18} />
                                <span className="text-[10px] uppercase tracking-widest">Grok IA Figueiredo</span>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                        </div>

                        {/* Chat Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed ${m.role === 'user'
                                            ? 'bg-emerald-500 text-black font-bold rounded-tr-none'
                                            : 'bg-white/5 text-neutral-300 border border-white/10 rounded-tl-none'
                                        }`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-3 rounded-2xl animate-pulse text-[9px] text-emerald-500 font-bold uppercase">
                                        Processando...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Pergunte sobre IA..."
                                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-[11px] text-white outline-none focus:border-emerald-500 transition-all"
                            />
                            <button
                                onClick={handleSend}
                                className="p-3 bg-emerald-500 text-black rounded-xl hover:bg-white transition-colors"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 text-black rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                {!isOpen && (
                    <span className="absolute -top-1 -left-1 bg-white text-black text-[7px] font-black px-1.5 py-0.5 rounded-full animate-bounce">
                        IA ON
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatGrok;