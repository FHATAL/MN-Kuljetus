import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Thermometer, MapPin } from 'lucide-react'

import fleet1 from '../assets/images/fleet_1.jpg'
import fleet2 from '../assets/images/fleet_2.jpg'
import fleet3 from '../assets/images/fleet_3.jpg'
import fleet4 from '../assets/images/fleet_4.jpg'
import fleet5 from '../assets/images/fleet_5.jpg'
import fleet6 from '../assets/images/fleet_6.jpg'
import fleet7 from '../assets/images/fleet_7.jpg'
import fleet8 from '../assets/images/fleet_8.jpg'

const Equipment = () => {
    const fleet = [
        { title: "FRC-LUOKITUS", icon: <Thermometer /> },
        { title: "FNA-LUOKITUS", icon: <ShieldCheck /> },
        { title: "SEURANTA 24/7", icon: <MapPin /> },
        { title: "EURO 6", icon: <Truck /> }
    ]

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 md:pt-48 md:pb-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 md:mb-32"
                >
                    <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">YRITYS</span>
                    <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                        MODERNI <span className="text-secondary">KALUSTO</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-dark/60 max-w-3xl font-medium leading-relaxed">
                        Investoimme jatkuvasti puhtaampaan ja älykkäämpään teknologiaan. Kalustomme vastaa tiukimpia elintarviketeollisuuden laatuvaatimuksia.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-32">
                    {fleet.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 md:p-10 rounded-3xl border-black/5 text-center group hover:bg-slate-50 transition-all shadow-xl shadow-black/5"
                        >
                            <div className="text-secondary mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                            <div className="font-black text-[10px] tracking-[0.3em] text-dark/70 uppercase">{item.title}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        fleet1,
                        fleet2,
                        fleet3,
                        fleet4,
                        fleet5,
                        fleet6,
                        fleet7,
                        fleet8
                    ].map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-black/5 shadow-lg bg-slate-100"
                        >
                            <img
                                src={src}
                                alt={`Fleet ${i + 1}`}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Equipment
