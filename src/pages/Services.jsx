import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Services.css";

function Services() {

    const { t } = useTranslation();

    const services = [
        {
            icon: "📅",
            title: t("services.cards.appointments.title"),
            description: t("services.cards.appointments.description")
        },
        {
            icon: "🏨",
            title: t("services.cards.accommodation.title"),
            description: t("services.cards.accommodation.description")
        },
        {
            icon: "🚗",
            title: t("services.cards.transport.title"),
            description: t("services.cards.transport.description")
        },
        {
            icon: "🌐",
            title: t("services.cards.interpreter.title"),
            description: t("services.cards.interpreter.description")
        },
        {
            icon: "🤝",
            title: t("services.cards.patientCare.title"),
            description: t("services.cards.patientCare.description")
        }
    ];

    return (
        <main className="services-page">

            <section className="services-hero">

                <div className="services-hero-shape services-shape-one"></div>
                <div className="services-hero-shape services-shape-two"></div>

                <div className="services-hero-content">

                    <div className="services-hero-badge">
                        {t("services.hero.badge")}
                    </div>

                    <p>
                        {t("services.hero.label")}
                    </p>

                    <h1>
                        {t("services.hero.title")}
                        <span>
                            {t("services.hero.highlight")}
                        </span>
                    </h1>

                    <div className="services-hero-line"></div>

                    <span>
                        {t("services.hero.description")}
                    </span>

                </div>

            </section>


            <section className="services-main">

                <div className="section-heading">

                    <p>
                        {t("services.main.label")}
                    </p>

                    <h2>
                        {t("services.main.title")}
                    </h2>

                    <span>
                        {t("services.main.description")}
                    </span>

                </div>


                <div className="services-grid">

                    {services.map((service, index) => (

                        <div
                            className="service-card"
                            key={index}
                        >

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <div className="service-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <h3>
                                {service.title}
                            </h3>

                            <p>
                                {service.description}
                            </p>

                            <Link to="/contact">
                                {t("common.sendEnquiry")}
                            </Link>

                        </div>

                    ))}

                </div>

            </section>


            <section className="services-support">

                <div className="services-support-content">

                    <p>
                        {t("services.support.label")}
                    </p>

                    <h2>
                        {t("services.support.title")}
                    </h2>

                    <span>
                        {t("services.support.description")}
                    </span>

                    <Link to="/contact">
                        {t("common.startEnquiry")}
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Services;