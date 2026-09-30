import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/About.css";

function About() {

    const { t } = useTranslation();

    return (
        <main className="about-page">

            <section className="about-hero">

                <div className="about-hero-shape about-shape-one"></div>
                <div className="about-hero-shape about-shape-two"></div>

                <div className="about-hero-content">

                    <div className="about-hero-badge">
                        {t("about.hero.badge")}
                    </div>

                    <p>
                        {t("about.hero.label")}
                    </p>

                    <h1>
                        {t("about.hero.title")}
                        <span>
                            {t("about.hero.highlight")}
                        </span>
                        {t("about.hero.end")}
                    </h1>

                    <div className="about-hero-line"></div>

                    <span className="about-hero-description">
                        {t("about.hero.description")}
                    </span>

                </div>

            </section>


            <section className="about-intro">

                <div className="about-intro-text">

                    <p className="about-label">
                        {t("about.intro.label")}
                    </p>

                    <h2>
                        {t("about.intro.title")}
                    </h2>

                    <p>
                        {t("about.intro.paragraph1")}
                    </p>

                    <p>
                        {t("about.intro.paragraph2")}
                    </p>

                    <p>
                        {t("about.intro.paragraph3")}
                    </p>

                </div>


                <div className="about-highlight">

                    <div className="about-highlight-card">

                        <div className="about-medical-visual">
                            <div className="medical-circle">
                                <span>✚</span>
                            </div>
                        </div>

                        <div className="about-highlight-content">

                            <span>01</span>

                            <h3>
                                {t("about.highlights.understand.title")}
                            </h3>

                            <p>
                                {t("about.highlights.understand.description")}
                            </p>

                        </div>

                    </div>


                    <div className="about-highlight-card">

                        <div className="about-medical-visual">
                            <div className="medical-circle pulse-icon">
                                <span>⌁</span>
                            </div>
                        </div>

                        <div className="about-highlight-content">

                            <span>02</span>

                            <h3>
                                {t("about.highlights.coordinate.title")}
                            </h3>

                            <p>
                                {t("about.highlights.coordinate.description")}
                            </p>

                        </div>

                    </div>


                    <div className="about-highlight-card">

                        <div className="about-medical-visual">
                            <div className="medical-circle">
                                <span>♥</span>
                            </div>
                        </div>

                        <div className="about-highlight-content">

                            <span>03</span>

                            <h3>
                                {t("about.highlights.support.title")}
                            </h3>

                            <p>
                                {t("about.highlights.support.description")}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            <section className="about-values">

                <div className="section-heading">

                    <p>
                        {t("about.values.label")}
                    </p>

                    <h2>
                        {t("about.values.title")}
                    </h2>

                    <span>
                        {t("about.values.description")}
                    </span>

                </div>


                <div className="values-grid">

                    <div className="value-card">

                        <div>01</div>

                        <h3>
                            {t("about.values.cards.communication.title")}
                        </h3>

                        <p>
                            {t("about.values.cards.communication.description")}
                        </p>

                    </div>


                    <div className="value-card">

                        <div>02</div>

                        <h3>
                            {t("about.values.cards.support.title")}
                        </h3>

                        <p>
                            {t("about.values.cards.support.description")}
                        </p>

                    </div>


                    <div className="value-card">

                        <div>03</div>

                        <h3>
                            {t("about.values.cards.organized.title")}
                        </h3>

                        <p>
                            {t("about.values.cards.organized.description")}
                        </p>

                    </div>

                </div>

            </section>


            <section className="about-cta">

                <div className="about-cta-content">

                    <p>
                        {t("about.cta.label")}
                    </p>

                    <h2>
                        {t("about.cta.title")}
                    </h2>

                    <span>
                        {t("about.cta.description")}
                    </span>

                    <Link to="/contact">
                        {t("common.bookConsultation")}
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default About;