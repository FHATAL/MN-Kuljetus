import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

interface ContactFormProps {
    formId?: string; // For Formspree
    defaultSubject?: string;
    showSubjectSelect?: boolean;
    excludeSubjects?: string[];
    title?: string;
    description?: string;
}

const ContactForm = ({
    formId = "FORM_ID_HERE",
    defaultSubject = "Tarjouspyyntö",
    showSubjectSelect = true,
    excludeSubjects = [],
    title,
    description
}: ContactFormProps) => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would integrate Formspree with the formId
        // form.action = `https://formspree.io/f/${formId}`
        setSubmitted(true)
    }

    const allSubjects = [
        "Tarjouspyyntö",
        "Kuljetuspalvelut",
        "Varastointi",
        "Liiketilat",
        "Koulutustilat",
        "Muu asia"
    ]

    const subjects = allSubjects.filter(sub => !excludeSubjects.includes(sub))

    return (
        <div className="w-full">
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
                <form onSubmit={handleSubmit} className="space-y-10" action={`https://formspree.io/f/${formId}`} method="POST">
                    {/* Add title/desc if provided, otherwise parent handles it */}
                    {(title || description) && (
                        <div className="text-center mb-10">
                            {title && <h2 className="text-3xl font-black mb-4">{title}</h2>}
                            {description && <p className="text-dark/60">{description}</p>}
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Nimi tai Yritys *</label>
                            <input required name="name" type="text" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark placeholder:text-dark/10" placeholder="MN Kuljetus Oy" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Sähköposti *</label>
                            <input required name="email" type="email" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark placeholder:text-dark/10" placeholder="nimi@yritys.fi" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Puhelin</label>
                            <input name="phone" type="tel" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark placeholder:text-dark/10" placeholder="040 123 4567" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Aihe</label>
                            <div className="relative">
                                {showSubjectSelect ? (
                                    <>
                                        <select name="subject" defaultValue={defaultSubject} className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark appearance-none cursor-pointer">
                                            {subjects.map(sub => (
                                                <option key={sub} value={sub} className="bg-white text-dark">{sub}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-dark/20 text-xs">▼</div>
                                    </>
                                ) : (
                                    <input
                                        type="text"
                                        name="subject"
                                        value={defaultSubject}
                                        readOnly
                                        className="w-full bg-slate-50 border border-black/5 rounded-2xl px-8 py-5 outline-none font-bold text-dark/50 cursor-not-allowed"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-dark/50 uppercase tracking-[0.2em] ml-2">Viesti *</label>
                        <textarea required name="message" rows={6} className="w-full bg-slate-50 border border-black/5 rounded-3xl px-8 py-6 outline-none focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-black/5 transition-all font-bold text-dark resize-none placeholder:text-dark/10" placeholder="Kerro tarpeestasi lyhyesti..."></textarea>
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
        </div>
    )
}

export default ContactForm
