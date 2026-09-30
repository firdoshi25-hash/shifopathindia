import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

function Hero() {

    const { t } = useTranslation();

    return (
        <section className="hero">

            <div className="hero-shape hero-shape-one"></div>
            <div className="hero-shape hero-shape-two"></div>

            <div className="hero-container">

                <div className="hero-content">

                    <div className="hero-badge">
                        {t("hero.badge")}
                    </div>

                    <p className="hero-label">
                        SHIFOPATH INDIA
                    </p>

                    <h1>
                        {t("hero.title")}
                        <span>
                            {t("hero.titleHighlight")}
                        </span>
                    </h1>

                    <div className="hero-line"></div>

                    <p className="hero-description">
                        {t("hero.description")}
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/contact"
                            className="hero-primary-button"
                        >
                            {t("hero.primaryButton")}
                        </Link>

                        <Link
                            to="/how-it-works"
                            className="hero-secondary-button"
                        >
                            {t("hero.secondaryButton")}
                        </Link>

                    </div>

                    <div className="hero-trust">

                        <div className="hero-trust-item">
                            <strong>01</strong>
                            <span>
                                {t("hero.trust.easyCoordination")}
                            </span>
                        </div>

                        <div className="hero-trust-item">
                            <strong>02</strong>
                            <span>
                                {t("hero.trust.patientSupport")}
                            </span>
                        </div>

                        <div className="hero-trust-item">
                            <strong>03</strong>
                            <span>
                                {t("hero.trust.communication")}
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;