import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import niinivirta60 from '../assets/images/niinivirta60.png'

const Footer = () => {
    return (
        <footer className="bg-white text-dark pt-24 pb-12 lg:pt-48 md:pt-32 md:pb-24 border-t border-black/5 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mb-20 md:mb-40">
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl md:text-4xl font-black mb-10 tracking-tighter text-dark">MN KULJETUS OY</h3>
                        <img src={niinivirta60} alt="Niinivirta 60" className="h-16 object-contain mb-8 opacity-80" />
                        <p className="text-dark mb-10 max-w-md font-medium leading-relaxed">
                            Ammattimaista logistiikkaa ja perheyrityksen luotettavuutta vuodesta 2004.
                            Toimimme ympäri vuorokauden Länsi- ja Etelä-Suomen alueella.
                        </p>
                        <div className="flex gap-6">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1, color: '#0088ff' }}
                                    href="#"
                                    className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-black/5 hover:border-secondary hover:shadow-xl transition-all"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-[10px] tracking-[0.3em] uppercase text-dark mb-10">YHTEYSTIEDOT</h4>
                        <ul className="flex flex-col gap-6 text-dark font-bold">
                            <li className="flex items-start gap-4">
                                <Phone size={20} className="text-secondary shrink-0" />
                                <span>020 150 120</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-secondary shrink-0" />
                                <span>Juustokivenkatu 1, 29200 Harjavalta</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-[10px] tracking-[0.3em] uppercase text-dark mb-10">PALVELUT</h4>
                        <ul className="flex flex-col gap-6 font-bold">
                            <li><Link to="/kuljetuspalvelut" className="text-dark hover:text-secondary transition-colors">KULJETUSPALVELUT</Link></li>
                            <li><Link to="/varastointipalvelut" className="text-dark hover:text-secondary transition-colors">VARASTOINTI</Link></li>
                            <li><Link to="/liiketila" className="text-dark hover:text-secondary transition-colors">LIIKETILAT</Link></li>
                            <li><Link to="/koulutus" className="text-dark hover:text-secondary transition-colors">KOULUTUSTILAT</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 md:pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-dark/40 font-black text-[10px] tracking-[0.3em] uppercase">
                    <p>
                        © {new Date().getFullYear()} MN KULJETUS OY
                        <span className="mx-4 opacity-20">|</span>
                        <a href="https://fhatal.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">DESIGNED BY FHATAL</a>
                    </p>
                    <div className="flex gap-10">
                        <Link to="/yhteystiedot" className="hover:text-dark">HENKILÖKUNTA</Link>
                        <Link to="/tietosuojaseloste" className="hover:text-dark">TIETOSUOJA</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
