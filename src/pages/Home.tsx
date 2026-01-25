import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { Truck, Shield, Clock, ArrowRight, BarChart3, Users2, Globe2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    const features = [
        {
            icon: <Truck size={32} />,
            title: "LUOTETTAVA KALUSTO",
            description: "FRC ja FNA -luokitukset, reaaliaikainen seuranta ja modernit vähäpäästöiset ajoneuvot."
        },
        {
            icon: <Shield size={32} />,
            title: "TURVALLINEN TOIMITUS",
            description: "Koulutettu henkilökunta huolehtii kuormastasi kuin omastaan. Varmistamme laadun joka askeleella."
        },
        {
            icon: <Clock size={32} />,
            title: "TÄSMÄLLISET AIKATAULUT",
            description: "Lupaamme vain sen minkä voimme toimittaa – ja toimitamme. Toimitusvarmuus on kunnia-asiamme."
        }
    ]

    const stats = [
        { label: "Vuotta Alalla", value: "20+", icon: <BarChart3 /> },
        { label: "Ammattilaista", value: "100%", icon: <Users2 /> },
        { label: "Palvelu", value: "24/7", icon: <Clock /> },
        { label: "Lastausta", value: "15k+", icon: <Globe2 /> }
    ]

    return (
        <div className="bg-white overflow-hidden">
            <Hero />

            {/* Premium Features Section */}
            <section className="py-20 md:py-32 relative bg-slate-50/50">
                <div className="container">
                    <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-8 h-[2px] bg-secondary" />
                            <span className="text-secondary font-black tracking-[0.4em] text-xs uppercase">ERINOMAISUUS</span>
                            <div className="w-8 h-[2px] bg-secondary" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-7xl font-black max-w-4xl tracking-tighter leading-none text-dark"
                        >
                            MIKSI VALITA <span className="text-secondary">MN KULJETUS?</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 md:p-12 rounded-[40px] group hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all" />
                                <div className="mb-10 text-secondary w-16 h-16 flex items-center justify-center bg-secondary/5 rounded-2xl border border-secondary/10 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-6 tracking-tight text-dark">{f.title}</h3>
                                <p className="text-dark/70 leading-relaxed font-medium group-hover:text-dark/70 transition-colors">
                                    {f.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-20 md:py-40 relative bg-dark">
                <div className="container relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-white/10 mb-6 flex justify-center scale-150">{s.icon}</div>
                                <div className="text-5xl md:text-8xl font-black text-white mb-2 tracking-tighter">{s.value}</div>
                                <div className="text-secondary font-black text-xs uppercase tracking-widest">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial CTA Section */}
            <section className="py-12 md:py-24">
                <div className="container">
                    <div className="relative bg-slate-50 rounded-[40px] md:rounded-[60px] p-8 md:p-24 overflow-hidden border border-black/5">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 z-0 scale-150 grayscale blur-sm">
                            <img src="/src/assets/images/transport_main.jpg" alt="Bg" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-20 max-w-3xl">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-dark">
                                VALMIINA <br />
                                <span className="text-secondary">LIIKKEESEEN?</span>
                            </h2>
                            <p className="text-lg md:text-2xl text-dark/60 mb-12 font-medium leading-relaxed">
                                Ota yhteyttä ja anna meidän suunnitella teille optimaaliset logistiikkaratkaisut jo tänään.
                            </p>
                            <Link to="/ota-yhteytta">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-secondary text-white px-8 py-5 md:px-12 md:py-7 rounded-2xl font-black text-lg md:text-xl flex items-center gap-4 transition-all shadow-2xl shadow-secondary/30"
                                >
                                    PYYDÄ TARJOUS <ArrowRight size={24} className="md:w-7 md:h-7" />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom area */}
            <div className="py-20 border-t border-black/5">
                <div className="container flex flex-wrap justify-between items-center gap-8 text-dark/20 uppercase font-black tracking-widest text-[10px]">
                    <div className="text-2xl font-black tracking-tighter text-dark/10">MN KULJETUS OY</div>
                    <div className="flex gap-12 font-black">
                        {['LinkedIn', 'Facebook', 'Instagram'].map(s => (
                            <a key={s} href="#" className="hover:text-dark transition-colors">{s}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
