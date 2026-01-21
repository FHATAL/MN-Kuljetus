import { motion } from 'framer-motion'
import suomi100 from '../assets/images/Suomi100.jpg'

const History = () => {
    const milestones = [
        {
            year: "2004",
            title: "MN KULJETUS OY:N SYNTY",
            desc: "Suku tekee yritysjärjestelyjä ja sukupolvenvaihdoksen. Mikko Niinivirta perustaa MN Kuljetus Oy:n jatkamaan kotimaan logistiikkaa. Yritys aloittaa toimintansa painottaen elintarvike- ja kappaletavarakuljetuksia."
        },
        {
            year: "2000-LUVUN LOPPU",
            title: "HAASTAVAT VUODET",
            desc: "Yritys kohtaa suhdanteista johtuvia kovia taloudellisia haasteita. Perhe päättää kuitenkin jatkaa ja tekee merkittäviä ponnisteluja yrityksen pelastamiseksi."
        },
        {
            year: "2010–2015",
            title: "UUSI NOUSU JA ERIKOISTUMINEN",
            desc: "Yritys vakiinnuttaa asemansa Länsi-Suomen logistiikkaketjussa. Painopiste siirtyy entistä vahvemmin lämpötilasäädeltyihin kuljetuksiin ja vaativiin konttikuljetuksiin."
        },
        {
            year: "2017",
            title: "VIRALLINEN TUNNUSTUS",
            desc: "Satakunnan Yrittäjät myöntävät Niinivirran perheelle Satakunnan Vuoden yrittäjäperhe -palkinnon. Palkinto on tunnustus perheen sinnikkyydestä ja onnistuneesta sukupolvenvaihdoksesta.",
            special: true
        },
        {
            year: "2020",
            title: "TOIMITILOJEN KEHITYS",
            desc: "Yrityksen kotipaikkana säilyy Harjavalta, mutta operatiivinen toiminta kattaa laajasti Satakunnan, Pirkanmaan ja Varsinais-Suomen alueet."
        },
        {
            year: "2023",
            title: "JATKUVUUS",
            desc: "Mikko ja Irma Niinivirta jatkavat yrityksen luotsaamista perheen voimin, varmistaen toiminnan vakauden ja jatkuvuuden."
        },
        {
            year: "2024–2025",
            title: "NYKYAIKAINEN LOGISTIIKKA",
            desc: "Yritys investoi kalustoon ja teknologiaan. Liikevaihto vakiintuu yli 3 miljoonan euron tasolle ja yritys työllistää noin 25–30 logistiikan ammattilaista."
        },
        {
            year: "2026",
            title: "NYKYHETKI",
            desc: "MN Kuljetus Oy toimii edelleen Mikko Niinivirran johdolla. Yritys tunnetaan Satakunnassa luotettavana ja perinteitä kunnioittavana, mutta nykyaikaisena perheyrityksenä."
        }
    ]

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 md:pt-48 md:pb-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 md:mb-32 text-center"
                >
                    <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">YRITYS</span>
                    <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-dark">
                        MEIDÄN <span className="text-secondary">TARINAMME</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-dark/60 max-w-3xl mx-auto font-medium leading-relaxed">
                        Yli kaksi vuosikymmentä luottamusta, ammattitaitoa ja vakaata kasvua logistiikan eturintamassa.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-32 relative aspect-video bg-slate-50 rounded-[60px] overflow-hidden border border-black/5 shadow-2xl shadow-black/5"
                >
                    <img src="/src/assets/images/history_main.jpg" alt="MN Kuljetus History" className="w-full h-full object-cover grayscale opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </motion.div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5 hidden md:block" />

                    <div className="space-y-8">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row items-center gap-12"
                            >
                                <div className="flex-1 text-center md:text-right">
                                    {i % 2 === 0 ? (
                                        <div className="glass-card p-10 rounded-[40px] border-black/5 inline-block max-w-md shadow-2xl shadow-black/5">
                                            <div className="text-secondary font-black text-5xl mb-4 tracking-tighter">{m.year}</div>
                                            <h3 className="text-xl font-bold mb-4 tracking-widest text-dark">{m.title}</h3>
                                            <p className="text-dark/60 font-medium">{m.desc}</p>
                                            {m.special && (
                                                <div className="mt-6 flex justify-center md:justify-end">
                                                    <img src={suomi100} alt="Suomi 100" className="w-48 rounded-xl shadow-lg border border-black/5" />
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-secondary shadow-[0_0_20px_rgba(0,162,255,0.3)] flex items-center justify-center">
                                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    {i % 2 !== 0 ? (
                                        <div className="glass-card p-10 rounded-[40px] border-black/5 inline-block max-w-md shadow-2xl shadow-black/5">
                                            <div className="text-secondary font-black text-5xl mb-4 tracking-tighter">{m.year}</div>
                                            <h3 className="text-xl font-bold mb-4 tracking-widest text-dark">{m.title}</h3>
                                            <p className="text-dark/60 font-medium">{m.desc}</p>
                                            {m.special && (
                                                <div className="mt-6 flex justify-center md:justify-end">
                                                    <img src={suomi100} alt="Suomi 100" className="w-48 rounded-xl shadow-lg border border-black/5" />
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
