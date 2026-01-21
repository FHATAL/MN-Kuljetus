import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-dark/60 hover:text-secondary mb-8 font-bold transition-colors">
                        <ArrowLeft size={20} />
                        ETUSIVULLE
                    </Link>
                    <span className="text-secondary font-black tracking-[0.5em] text-xs uppercase mb-4 block">TIETOSUOJA</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-dark">
                        TIETOSUOJA<span className="text-secondary">SELOSTE</span>
                    </h1>
                    <p className="text-xl text-dark/70 font-medium">
                        mnkuljetus.fi
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-12 text-dark font-medium leading-relaxed"
                >
                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">1</span>
                            Rekisterinpitäjä
                        </h2>
                        <div className="glass-card p-8 rounded-3xl border-black/5 bg-slate-50">
                            <p className="font-bold text-lg mb-2">MN Kuljetus Oy</p>
                            <p>Y-tunnus: 1852019-4</p>
                            <p>Toimiala: Kuljetusliike</p>
                            <br />
                            <p className="font-bold">Käynti- ja postiosoite:</p>
                            <p>Juustokivenkatu 1</p>
                            <p>29200 Harjavalta</p>
                            <p>Suomi</p>
                            <br />
                            <p>Puhelin: 020 150 120</p>
                            <p>Sähköposti: <a href="mailto:mikko.niinivirta@mnkuljetus.fi" className="text-secondary hover:underline">mikko.niinivirta@mnkuljetus.fi</a></p>
                            <br />
                            <p>Verkkosivusto: <a href="https://www.mnkuljetus.fi" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.mnkuljetus.fi</a></p>
                            <br />
                            <p className="text-sm text-dark/60 italic">Tietosuojaa koskevat yhteydenotot pyydetään tekemään ensisijaisesti sähköpostitse.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">2</span>
                            Mitä tietoja kerätään
                        </h2>
                        <p className="mb-4">Sivusto kerää henkilötietoja vain silloin, kun käyttäjä itse ne vapaaehtoisesti antaa. Kerättäviä tietoja voivat olla:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 marker:text-secondary">
                            <li>Nimi</li>
                            <li>Sähköpostiosoite</li>
                            <li>Puhelinnumero</li>
                            <li>Yrityksen nimi</li>
                            <li>Viestin sisältö</li>
                            <li>Tekniset tiedot (esim. IP-osoite, selaintyyppi, laitetyyppi)</li>
                        </ul>
                        <p className="mt-4 text-dark/60">Tietoja kerätään esimerkiksi yhteydenottolomakkeen, sähköpostin tai puhelinyhteydenoton kautta.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">3</span>
                            Henkilötietojen käyttötarkoitus
                        </h2>
                        <p className="mb-4">Henkilötietoja käytetään ainoastaan seuraaviin tarkoituksiin:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 marker:text-secondary">
                            <li>Yhteydenottoihin vastaaminen</li>
                            <li>Asiakassuhteen hoitaminen</li>
                            <li>Tarjousten ja palveluiden toimittaminen</li>
                            <li>Sopimus- ja laskutusvelvoitteiden täyttäminen</li>
                            <li>Sivuston toiminnan, turvallisuuden ja käytettävyyden kehittäminen</li>
                        </ul>
                        <p className="mt-4 font-bold text-dark/80">Tietoja ei käytetä automaattiseen päätöksentekoon eikä profilointiin.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">4</span>
                            Tietojen käsittelyn oikeusperuste
                        </h2>
                        <p className="mb-4">Henkilötietojen käsittely perustuu yhteen tai useampaan seuraavista:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 marker:text-secondary">
                            <li>Rekisteröidyn antama suostumus</li>
                            <li>Sopimuksen täytäntöönpano</li>
                            <li>Rekisterinpitäjän oikeutettu etu (asiakassuhde, viestintä)</li>
                            <li>Lakisääteiset velvoitteet</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">5</span>
                            Tietojen säilytysaika
                        </h2>
                        <p>Henkilötietoja säilytetään vain niin kauan kuin se on tarpeellista käyttötarkoituksen tai lainsäädännön edellyttämän ajan. Tarpeettomat tiedot poistetaan säännöllisesti.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">6</span>
                            Tietojen luovutus ja siirto
                        </h2>
                        <p className="mb-4">Henkilötietoja ei myydä, vuokrata tai luovuteta kolmansille osapuolille ilman laillista perustetta.</p>
                        <p className="mb-4">Tietoja voidaan luovuttaa viranomaisille, jos laki sitä edellyttää.</p>
                        <p className="font-bold text-dark/80">Tietoja ei lähtökohtaisesti siirretä EU:n tai ETA:n ulkopuolelle.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">7</span>
                            Evästeet
                        </h2>
                        <p className="mb-4">Sivusto käyttää evästeitä käyttökokemuksen parantamiseen ja kävijäliikenteen analysointiin.</p>
                        <p>Käyttäjä voi estää evästeiden käytön selaimen asetuksista, mutta tämä saattaa vaikuttaa sivuston toimivuuteen.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">8</span>
                            Rekisteröidyn oikeudet
                        </h2>
                        <p className="mb-4">Rekisteröidyllä on oikeus:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 marker:text-secondary">
                            <li>Tarkastaa itseään koskevat tiedot</li>
                            <li>Pyytää tietojen oikaisua tai poistamista</li>
                            <li>Vastustaa tietojen käsittelyä</li>
                            <li>Peruuttaa antamansa suostumus</li>
                        </ul>
                        <p className="mt-4">Pyynnöt käsitellään kohtuullisessa ajassa voimassa olevan lainsäädännön mukaisesti.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">9</span>
                            Tietoturva
                        </h2>
                        <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-black/5">
                            <Shield className="text-secondary mt-1 shrink-0" />
                            <p>Henkilötietoja käsitellään luottamuksellisesti ja suojataan asianmukaisin teknisin ja organisatorisin toimenpitein. Tietoihin on pääsy vain niillä henkilöillä, joilla on siihen työtehtäviensä puolesta tarve.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">10</span>
                            Muutokset tietosuojaselosteeseen
                        </h2>
                        <p>Tietosuojaselostetta voidaan päivittää tarvittaessa. Ajantasainen versio on aina saatavilla tällä sivulla.</p>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
