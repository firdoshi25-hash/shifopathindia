import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/HowItWorks.css";

function HowItWorks() {

    const { t } = useTranslation();

    const steps = [
        {
            number: "01",
            title: t("howItWorks.steps.step1.title"),
            description: t("howItWorks.steps.step1.description"),
            icon: "📝"
        },
        {
            number: "02",
            title: t("howItWorks.steps.step2.title"),
            description: t("howItWorks.steps.step2.description"),
            icon: "📄"
        },
        {
            number: "03",
            title: t("howItWorks.steps.step3.title"),
            description: t("howItWorks.steps.step3.description"),
            icon: "🏥"
        },
        {
            number: "04",
            title: t("howItWorks.steps.step4.title"),
            description: t("howItWorks.steps.step4.description"),
            icon: "👨‍⚕️"
        },
        {
            number: "05",
            title: t("howItWorks.steps.step5.title"),
            description: t("howItWorks.steps.step5.description"),
            icon: "💰"
        },
        {
            number: "06",
            title: t("howItWorks.steps.step6.title"),
            description: t("howItWorks.steps.step6.description"),
            icon: "✈️"
        },
        {
            number: "07",
            title: t("howItWorks.steps.step7.title"),
            description: t("howItWorks.steps.step7.description"),
            icon: "🤝"
        }
    ];

    return (
        <main className="how-it-works-page">

            <section className="how-hero">

                <div className="how-hero-shape how-shape-one"></div>
                <div className="how-hero-shape how-shape-two"></div>

                <div className="how-hero-content">

                    <div className="how-hero-badge">
                        {t("howItWorks.hero.badge")}
                    </div>

                    <p>
                        {t("howItWorks.hero.label")}
                    </p>

                    <h1>
                        {t("howItWorks.hero.title")}
                        <span>
                            {t("howItWorks.hero.highlight")}
                        </span>
                    </h1>

                    <div className="how-hero-line"></div>

                    <span>
                        {t("howItWorks.hero.description")}
                    </span>

                </div>

            </section>


            <section className="how-main">

                <div className="section-heading">

                    <p>
                        {t("howItWorks.main.label")}
                    </p>

                    <h2>
                        {t("howItWorks.main.title")}
                    </h2>

                    <span>
                        {t("howItWorks.main.description")}
                    </span>

                </div>


                <div className="how-steps-grid">

                    {steps.map((step) => (

                        <div
                            className="how-step-card"
                            key={step.number}
                        >

                            <div className="how-step-top">

                                <span className="how-step-number">
                                    {step.number}
                                </span>

                                <div className="how-step-icon">
                                    {step.icon}
                                </div>

                            </div>

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            <section className="how-cta">

                <div className="how-cta-content">

                    <p>
                        {t("howItWorks.cta.label")}
                    </p>

                    <h2>
                        {t("howItWorks.cta.title")}
                    </h2>

                    <span>
                        {t("howItWorks.cta.description")}
                    </span>

                    <Link to="/contact">
                        {t("howItWorks.cta.button")}
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default HowItWorks;