import { motion } from 'framer-motion'
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CommercialSpaces = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-accent font-black tracking-[0.5em] text-xs uppercase mb-4 block">KIINTEISTÖT</span>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                            LIIKE<span className="text-accent">TILAT</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-dark/60 max-w-3xl font-medium leading-relaxed">
                            Nykyaikaisilla mukavuuksilla varustettua liiketilaa yrityksesi kasvun tueksi Harjavallassa.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 md:py-56">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 bg-accent/5 rounded-3xl flex items-center justify-center text-accent mb-10 border border-accent/10">
                                <Building2 size={40} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-dark">Tilaa Kasvulle</h2>
                            <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-12 font-medium">
                                MN Kuljetus Oy tarjoaa joustavat ja muunneltavat tilat erilaisten yritysten tarpeisiin.
                                Sijaintimme on ihanteellinen sekä logistiikan että asiakasvirtojen kannalta.
                            </p>
                            <ul className="grid gap-6">
                                {[
                                    "Joustavat vuokrasopimukset",
                                    "Siistit ja valoisat tilat",
                                    "Hyvä saavutettavuus ja pysäköinti",
                                    "Mahdollisuus räätälöidä tilaa"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 font-black text-xs uppercase tracking-[0.2em] text-dark/60">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative aspect-video bg-slate-100 rounded-[50px] overflow-hidden border border-black/5 shadow-2xl shadow-black/5">
                                <img src="/src/assets/images/commercial_main.jpg" alt="Liiketila" className="w-full h-full object-cover grayscale opacity-80 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container">
                    <Link to="/ota-yhteytta">
                        <div className="bg-slate-50 p-8 md:p-24 rounded-[40px] md:rounded-[60px] text-center group border border-accent/10 hover:bg-accent/5 transition-all shadow-2xl shadow-accent/5">
                            <h2 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter text-dark">ERINOMAISET <span className="text-accent">TILAT</span></h2>
                            <div className="inline-flex items-center gap-4 bg-accent text-white px-8 py-5 md:px-12 md:py-7 rounded-2xl font-black text-lg md:text-xl group-hover:scale-105 transition-all shadow-2xl shadow-accent/20">
                                KYSY VAPAITA TILOJA <ArrowRight size={28} />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default CommercialSpaces
