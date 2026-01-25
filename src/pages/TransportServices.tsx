import { motion } from 'framer-motion'
import { Truck, MapPin, BadgeCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TransportServices = () => {
    const serviceDetails = [
        {
            title: "LÄMPÖSÄÄDELLYKSET",
            desc: "FRC- ja FNA-kalusto varmistaa katkeamattoman kylmäketjun elintarvikkeille kaikissa olosuhteissa.",
            icon: <BadgeCheck />
        },
        {
            title: "REAALIAIKAINEN SEURANTA",
            desc: "Satelliittiseuranta takaa täydellisen läpinäkyvyyden ja tarkat saapumisajat jokaiselle kuormalle.",
            icon: <MapPin />
        }
    ]

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
                            KULJETUS<span className="text-secondary">PALVELUT</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-dark/60 max-w-3xl font-medium leading-relaxed">
                            Länsi- ja Etelä-Suomen kattavin kumppani lämpösäädellyissä ja vaativissa maantiekuljetuksissa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-32 md:py-56 container">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-40 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-20 h-20 bg-secondary/5 rounded-3xl flex items-center justify-center text-secondary mb-10 border border-secondary/10">
                            <Truck size={40} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-dark">MODERNIA LOGISTIIKKAA</h2>
                        <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-16 font-medium">
                            MN Kuljetus Oy on erikoistunut varsinkin elintarvikekuljetuksiin, mutta kuljetamme ammattitaidolla myös muut tuotteet.
                            Investoimme jatkuvasti uusimpaan teknologiaan vähentääksemme päästöjä ja parantaaksemme toimitusvarmuutta.
                        </p>

                        <div className="grid gap-6 md:gap-12">
                            {serviceDetails.map((detail, i) => (
                                <div key={i} className="glass-card p-8 md:p-12 rounded-[32px] border-black/5 hover:border-secondary/20 transition-all group">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                        <div className="p-4 bg-secondary/5 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0 h-fit w-fit">
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black mb-4 text-dark">{detail.title}</h4>
                                            <p className="text-dark/60 font-medium leading-relaxed group-hover:text-dark/60">
                                                {detail.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] bg-slate-100 rounded-[50px] overflow-hidden border border-black/5 shadow-2xl shadow-black/5">
                            <img src="/src/assets/images/transport_main.jpg" alt="Truck" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pt-16 pb-24 md:pt-24 md:pb-48">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-12">
                        {[
                            { title: "LUOTETTAVUUS", desc: "Täsmälliset saapumisajat ovat lupauksemme ydin." },
                            { title: "SERTIFIOINTI", desc: "Kuljettajillamme on korkein ammatillinen osaaminen." },
                            { title: "EKOLOGISUUS", desc: "Vähäpäästöinen kalusto säästää ympäristöä." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 md:p-10 rounded-[40px] border-black/5 hover:bg-slate-50 transition-all"
                            >
                                <div className="text-secondary font-black text-xs tracking-[0.3em] mb-6 uppercase">{item.title}</div>
                                <p className="text-lg md:text-xl text-dark/60 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mini CTA */}
            <section className="py-12 md:py-24">
                <div className="container">
                    <Link to="/ota-yhteytta">
                        <div className="bg-slate-50 hover:bg-slate-100 p-8 md:p-24 rounded-[40px] md:rounded-[60px] flex flex-wrap justify-between items-center gap-8 md:gap-12 group transition-all border border-black/5 shadow-xl shadow-black/5">
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-dark">TARVITSETKO <span className="text-secondary">KULJETUSTA?</span></h3>
                            <div className="w-20 h-20 rounded-full bg-dark text-white flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all shadow-xl">
                                <ArrowRight size={32} />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default TransportServices
