import { motion } from 'framer-motion'
import { GraduationCap, Users, Wifi, Coffee, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import img6 from '../assets/images/training/IMG-20260120-WA0006.jpg'
import img7 from '../assets/images/training/IMG-20260120-WA0007.jpg'
import img8 from '../assets/images/training/IMG-20260120-WA0008.jpg'
import img9 from '../assets/images/training/IMG-20260120-WA0009.jpg'
import img10 from '../assets/images/training/IMG-20260120-WA0010.jpg'
import img11 from '../assets/images/training/IMG-20260120-WA0011.jpg'
import img12 from '../assets/images/training/IMG-20260120-WA0012.jpg'
import img13 from '../assets/images/training/IMG-20260120-WA0013.jpg'
import img14 from '../assets/images/training/IMG-20260120-WA0014.jpg'

const TrainingSpaces = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="container relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">KOULUTUS</span>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                            KOKOUS<span className="text-secondary">TILAT</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-dark/60 max-w-3xl font-medium leading-relaxed">
                            Täydelliset puitteet kokouksille, koulutuksille, yritystilaisuuksille ja juhlille modernissa ympäristössä Harjavallassa.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-32 container">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="w-20 h-20 bg-secondary/5 rounded-3xl flex items-center justify-center text-secondary mb-10 border border-secondary/10">
                            <GraduationCap size={40} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-dark">Kaikki Valmiina</h2>
                        <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-12 font-medium">
                            Tarjoamme hyvin varustellut tilat, jotka vastaavat nykyajan kokousvaatimuksia ja taipuvat myös ikimuistoisiin juhliin.
                            Meiltä saat myös tarvittaessa catering-palvelut tilaisuutesi yhteyteen.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { title: "CATERING", icon: <Coffee size={24} /> },
                                { title: "AV-LAITTEET", icon: <Users size={24} /> },
                                { title: "NOPEA WI-FI", icon: <Wifi size={24} /> },
                                { title: "JUHLAT & KOKOUKSET", icon: <Users size={24} /> }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="text-secondary">{item.icon}</div>
                                    <div className="font-black text-[10px] tracking-[0.2em] text-dark/60 uppercase">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative aspect-square glass-card rounded-[40px] md:rounded-[60px] p-6 bg-slate-50 border-black/5 shadow-2xl shadow-black/5">
                        <div className="w-full h-full bg-slate-100 rounded-[28px] md:rounded-[40px] overflow-hidden border border-black/5 group">
                            <img src={img6} alt="Koulutustila" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5" />
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">KUVAGALLERIA</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight !text-white">TILAT <span className="text-secondary">JUHLIIN JA KOKOUKSIIN</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[img6, img7, img8, img9, img10, img11, img12, img13, img14].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-3xl overflow-hidden border border-white/10 relative group aspect-square`}
                            >
                                <img
                                    src={src}
                                    alt={`Koulutustila ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 container">
                <Link to="/ota-yhteytta">
                    <div className="bg-slate-50 rounded-[40px] md:rounded-[60px] p-8 md:p-24 text-center hover:bg-slate-100 transition-all group shadow-2xl shadow-black/5 border border-black/5">
                        <h2 className="text-3xl md:text-7xl font-black mb-10 tracking-tighter text-dark">VARAA <span className="text-secondary">TILAISUUS</span></h2>
                        <div className="inline-flex items-center gap-4 bg-secondary text-white px-8 py-5 md:px-12 md:py-7 rounded-2xl font-black text-lg md:text-xl group-hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                            OTA YHTEYTTÄ <ArrowRight size={28} />
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default TrainingSpaces
