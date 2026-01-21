import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building2, User } from 'lucide-react'
import aerial1 from '../assets/images/aerial/IMG-20260120-WA0016.jpg'
import aerial2 from '../assets/images/aerial/IMG-20260120-WA0017.jpg'

const Contact = () => {
    const staff = [
        { name: "MIKKO NIINIVIRTA", title: "TOIMITUSJOHTAJA / MYYNTI", email: "mikko.niinivirta@mnkuljetus.fi", phone: "040 558 2667" },
        { name: "VIRVA NIINIVIRTA", title: "KOULUTUS JA KOKOUSTILAT", email: "virva.niinivirta@mnkuljetus.fi" },
        { name: "IRMA NIINIVIRTA", title: "TALOUSJOHTAJA", email: "irma.niinivirta@mnkuljetus.fi", phone: "020 150 120" },
        { name: "MIKA VAINIO-KETOLA", title: "AJOJÄRJESTELY", email: "ajojarjestely@mnkuljetus.fi", phone: "0400 825 027" }
    ]

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 md:pt-48 md:pb-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 md:mb-24"
                >
                    <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">YHTEYS</span>
                    <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                        OTA <span className="text-secondary">YHTEYTTÄ</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-dark/60 max-w-2xl font-medium">
                        Olemme täällä palvellaksemme. Ota yhteyttä asiantuntijoihimme.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-24 font-body">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="glass-card p-8 md:p-12 rounded-[50px] border-black/5 shadow-2xl shadow-black/5 h-full">
                            <h2 className="text-3xl font-black mb-12 tracking-tight text-dark">MN KULJETUS OY</h2>
                            <div className="space-y-10">
                                <div className="flex gap-8 group">
                                    <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-500"><MapPin size={28} /></div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.2em] text-dark/50 uppercase mb-2">TOIMIPISTE</h4>
                                        <p className="text-xl font-bold text-dark">Juustokivenkatu 1, 29200 Harjavalta</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-500"><Phone size={28} /></div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.2em] text-dark/50 uppercase mb-2">PUHELIN</h4>
                                        <p className="text-xl font-bold text-dark">020 150 120</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-500"><Building2 size={28} /></div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.2em] text-dark/50 uppercase mb-2">Y-TUNNUS</h4>
                                        <p className="text-xl font-bold text-dark">1852019-4</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-10 bg-slate-50 rounded-3xl border border-black/5">
                                <h4 className="text-[10px] font-black tracking-[0.2em] text-secondary mb-4 uppercase">LASKUTUSTIEDOT</h4>
                                <p className="text-dark/60 font-bold leading-relaxed text-sm">
                                    Finvoice välittäjä: OKOYFIHH<br />
                                    Finvoice osoite: FI45 50370520043122
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        <h3 className="text-2xl font-black mb-8 tracking-tight text-dark">HENKILÖKUNTA</h3>
                        {staff.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-3xl border-black/5 group hover:bg-slate-50 transition-all shadow-xl shadow-black/5"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-dark/20 group-hover:text-secondary group-hover:bg-secondary/10 transition-all">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black tracking-tight mb-1 text-dark">{p.name}</h4>
                                        <p className="text-secondary text-[10px] font-black tracking-[0.2em] mb-4 uppercase">{p.title}</p>
                                        <div className="flex flex-col gap-2 font-bold text-dark/60 text-sm">
                                            <a href={`mailto:${p.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                                                <Mail size={16} /> {p.email}
                                            </a>
                                            {p.phone && (
                                                <a href={`tel:${p.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                                                    <Phone size={16} /> {p.phone}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 md:mt-32"
                >
                    <h2 className="text-3xl font-black mb-12 tracking-tight text-dark text-center">TOIMITILAT <span className="text-secondary">ILMASTA</span></h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[aerial1, aerial2].map((src, i) => (
                            <div key={i} className="aspect-video rounded-[32px] overflow-hidden border border-black/5 shadow-2xl shadow-black/5 group relative">
                                <img src={src} alt="Toimitilat ilmasta" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
