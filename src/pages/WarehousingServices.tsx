import { motion } from 'framer-motion'
import { Warehouse, Box, Shield, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import warehouseMain from '../assets/images/warehouse_main.jpg'
import whExt1 from '../assets/images/warehouse_exterior_1.jpg'
import whInt1 from '../assets/images/warehouse_interior_1.jpg'
import whExt2 from '../assets/images/warehouse_exterior_2.jpg'
import whExt3 from '../assets/images/warehouse_exterior_3.jpg'

const WarehousingServices = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">PALVELUT</span>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                            VARASTOINTI<span className="text-secondary">PALVELUT</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-dark/60 max-w-3xl font-medium leading-relaxed">
                            Nykyaikaista ja turvallista varastotilaa sekä logistiikan kokonaisratkaisuja Porin parhaalla paikalla.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 md:py-32 container">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="relative aspect-video bg-slate-100 rounded-[50px] overflow-hidden border border-black/5">
                            <img src={warehouseMain} alt="Warehouse" className="w-full h-full object-cover grayscale opacity-90" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="w-20 h-20 bg-secondary/5 rounded-3xl flex items-center justify-center text-secondary mb-10 border border-secondary/10">
                            <Warehouse size={40} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-dark">Tilaa Joka Tarpeeseen</h2>
                        <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-12 font-medium">
                            Tarjoamme monipuoliset varastopalvelut lyhyestä pitkäaikaiseen tarpeeseen.
                            Logistisesti optimaalinen sijainti mahdollistaa nopeat siirrot suoraan kuljetukseen.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "ELINTARVIKKEET", icon: <Box className="text-secondary" /> },
                                { title: "SUOJATTU TILA", icon: <Shield className="text-secondary" /> },
                                { title: "JOUSTAVA VUOKRA", icon: <Zap className="text-secondary" /> },
                                { title: "LÄMMIN VARASTO", icon: <Warehouse className="text-secondary" /> }
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-6 rounded-2xl border-black/5 flex items-center gap-4 group hover:bg-slate-50 transition-all">
                                    <div className="p-3 bg-secondary/5 rounded-xl group-hover:bg-secondary group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <span className="font-black text-xs tracking-widest text-dark/60 group-hover:text-dark">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5" />
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">TILAT</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight !text-white">MONIPUOLISET <span className="text-secondary">VARASTOTILAT</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            whExt1,
                            whInt1,
                            whExt2,
                            whExt3
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-3xl overflow-hidden border border-white/10 relative group aspect-video ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
                            >
                                <img
                                    src={src}
                                    alt="Warehouse"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 container">
                <Link to="/ota-yhteytta">
                    <div className="relative bg-slate-50 rounded-[40px] md:rounded-[60px] p-8 md:p-20 overflow-hidden text-center group shadow-2xl shadow-black/5 border border-black/5">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter text-dark">TARVITSETKO <span className="text-secondary">VARASTOTILAA?</span></h2>
                            <p className="text-lg text-dark/60 mb-10 font-medium max-w-2xl mx-auto">
                                Ota yhteyttä, niin suunnitellaan juuri teidän tarpeisiinne sopiva varastointiratkaisu.
                            </p>
                            <div className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-6 rounded-2xl font-black text-xl group-hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                                PYYDÄ TARJOUS <ArrowRight size={24} />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default WarehousingServices
