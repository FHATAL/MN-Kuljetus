import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const RequestQuote = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="bg-[#fcfdfe] min-h-screen pt-32 pb-20 md:pt-48 md:pb-24">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-24">
                        <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">YHTEYDENOTTO</span>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                            PYYDÄ <span className="text-secondary">TARJOUS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-dark/50 font-medium max-w-2xl mx-auto">
                            Vastaamme kaikkiin tiedusteluihin 24 tunnin sisällä.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card p-6 md:p-16 rounded-[40px] md:rounded-[60px] border-black/5 relative overflow-hidden shadow-2xl shadow-black/5 bg-white"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-10 border border-secondary/20 shadow-[0_10px_40px_rgba(0,136,255,0.2)]">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-4xl font-black mb-6 tracking-tight text-dark">VIESTI LÄHETETTY!</h2>
                                <p className="text-dark/60 text-xl font-medium mb-12">
                                    Kiitos yhteydenotostasi. Tiimimme palaa asiaan pian.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-secondary font-black tracking-[0.2em] uppercase hover:underline text-xs"
                                >
                                    LÄHETÄ UUSI VIESTI
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Nimi tai Yritys *</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark placeholder:text-dark/10" placeholder="MN Kuljetus Oy" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Sähköposti *</label>
                                        <input required type="email" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark placeholder:text-dark/10" placeholder="nimi@yritys.fi" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Puhelin</label>
                                        <input type="tel" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark placeholder:text-dark/10" placeholder="040 123 4567" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Aihe</label>
                                        <div className="relative">
                                            <select className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark appearance-none cursor-pointer">
                                                <option className="bg-white text-dark">Tarjouspyyntö</option>
                                                <option className="bg-white text-dark">Kuljetuspalvelut</option>
                                                <option className="bg-white text-dark">Varastointi</option>
                                                <option className="bg-white text-dark">Liiketilat</option>
                                                <option className="bg-white text-dark">Koulutustilat</option>
                                                <option className="bg-white text-dark">Muu asia</option>
                                            </select>
                                            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-dark/20 text-xs">▼</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Viesti *</label>
                                    <textarea required rows={6} className="w-full bg-slate-50 border border-black/5 rounded-3xl px-8 py-6 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark resize-none placeholder:text-dark/10" placeholder="Kerro tarpeestasi lyhyesti..."></textarea>
                                </div>

                                <div className="pt-6">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-dark text-white rounded-3xl py-7 font-black text-2xl shadow-2xl shadow-black/20 hover:bg-black transition-all flex items-center justify-center gap-4 group"
                                    >
                                        <Send size={28} className="group-hover:translate-x-2 transition-transform" />
                                        LÄHETÄ VIESTI
                                    </motion.button>
                                </div>

                                <p className="text-center text-dark/20 text-[10px] font-black tracking-[0.3em] uppercase">
                                    Tähdellä (*) merkityt kentät ovat pakollisia.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default RequestQuote
