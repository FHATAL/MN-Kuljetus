import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const RequestQuote = () => {

    return (
        <div className="bg-[#fcfdfe] min-h-screen pt-32 pb-20 lg:pt-48 md:pt-32 md:pb-24">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-24">
                        <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">YHTEYDENOTTO</span>
                        <h1 className="text-4xl lg:text-8xl lg:text-6xl md:text-4xl font-black mb-8 tracking-tighter leading-none text-dark">
                            PYYDÄ <span className="text-secondary">TARJOUS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-dark/50 font-medium max-w-2xl mx-auto">
                            Vastaamme kaikkiin tiedusteluihin 24 tunnin sisällä.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card p-6 md:p-16 rounded-[40px] md:rounded-[60px] border-black/5 relative overflow-hidden shadow-2xl shadow-black/5 bg-white"
                    >
                        <ContactForm
                            formId="GENERAL_FORM_ID"
                            excludeSubjects={['Koulutustilat']}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default RequestQuote
