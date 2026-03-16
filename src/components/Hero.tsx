import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroMain from '../assets/images/hero_main.jpg'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f8fafc] pt-28 md:pt-36 lg:pt-40 pb-16">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white z-10" />
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="w-full h-full"
                >
                    <img
                        src={heroMain}
                        alt="MN Kuljetus Truck"
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>

                {/* Animated Light Blobs */}
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-20 py-10 md:py-16 mt-auto mb-auto">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-2 px-4 sm:px-5 bg-white border border-black/5 shadow-sm rounded-full text-secondary font-black text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 text-center max-w-full">
                            LUOTETTAVAA LOGISTIIKKAA VUODESTA 2004
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter text-dark">
                            TÄSMÄLLISTÄ <br />
                            <span className="text-secondary">KULJETUSTA</span> <br />
                            JOKA PÄIVÄ.
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-dark/70 max-w-2xl mb-8 md:mb-10 font-medium leading-relaxed">
                            Ammattitaitoista logistiikkaa ja lämpösäädeltyjä kuljetuksia koko Etelä-Suomen alueella. Perheyrityksen luotettavuus kohtaa modernin teknologian.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/kuljetuspalvelut">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-dark text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 shadow-2xl shadow-dark/20"
                                >
                                    Tutustu Palveluihin <ArrowRight size={20} />
                                </motion.button>
                            </Link>
                            <Link to="/ota-yhteytta">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-white border border-black/10 border-b-4 hover:border-black/20 rounded-2xl font-black text-base transition-all"
                                >
                                    Pyydä Tarjous
                                </motion.button>
                            </Link>
                        </div>

                        {/* Bottom decor - inline below buttons now */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-8 md:mt-10 text-[10px] font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase text-dark/40">
                            <span>FRC / FNA SERTIFIOITU</span>
                            <span className="hidden sm:inline">•</span>
                            <span>SATELLIITTISEURANTA</span>
                            <span className="hidden sm:inline">•</span>
                            <span>24/7 PALVELU</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
