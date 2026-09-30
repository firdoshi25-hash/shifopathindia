import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <main>

            <Hero />


            <section className="services-preview">

                <div className="section-heading">

                    <p>{t("home.services.label")}</p>

                    <h2>
                        {t("home.services.title")}
                    </h2>

                    <span>
                        {t("home.services.description")}
                    </span>

                </div>


                <div className="services-grid">

                    <ServiceCard
                        icon="📅"
                        title={t("home.serviceCards.appointments.title")}
                        description={t("home.serviceCards.appointments.description")}
                    />

                    <ServiceCard
                        icon="🏨"
                        title={t("home.serviceCards.accommodation.title")}
                        description={t("home.serviceCards.accommodation.description")}
                    />

                    <ServiceCard
                        icon="🚗"
                        title={t("home.serviceCards.transport.title")}
                        description={t("home.serviceCards.transport.description")}
                    />

                    <ServiceCard
                        icon="🌐"
                        title={t("home.serviceCards.interpreter.title")}
                        description={t("home.serviceCards.interpreter.description")}
                    />

                    <ServiceCard
                        icon="🤝"
                        title={t("home.serviceCards.patientCare.title")}
                        description={t("home.serviceCards.patientCare.description")}
                    />

                </div>

            </section>


            <section className="why-section">

                <div className="section-heading">

                    <p>{t("home.why.label")}</p>

                    <h2>
                        {t("home.why.title")}
                    </h2>

                    <span>
                        {t("home.why.description")}
                    </span>

                </div>


                <div className="why-grid">

                    <div className="why-card">

                        <div className="why-number">
                            01
                        </div>

                        <h3>
                            {t("home.whyCards.personalized.title")}
                        </h3>

                        <p>
                            {t("home.whyCards.personalized.description")}
                        </p>

                    </div>


                    <div className="why-card">

                        <div className="why-number">
                            02
                        </div>

                        <h3>
                            {t("home.whyCards.coordination.title")}
                        </h3>

                        <p>
                            {t("home.whyCards.coordination.description")}
                        </p>

                    </div>


                    <div className="why-card">

                        <div className="why-number">
                            03
                        </div>

                        <h3>
                            {t("home.whyCards.communication.title")}
                        </h3>

                        <p>
                            {t("home.whyCards.communication.description")}
                        </p>

                    </div>


                    <div className="why-card">

                        <div className="why-number">
                            04
                        </div>

                        <h3>
                            {t("home.whyCards.journey.title")}
                        </h3>

                        <p>
                            {t("home.whyCards.journey.description")}
                        </p>

                    </div>

                </div>

            </section>


            <section className="journey-section">

                <div className="section-heading">

                    <p>
                        {t("home.journey.label")}
                    </p>

                    <h2>
                        {t("home.journey.title")}
                    </h2>

                    <span>
                        {t("home.journey.description")}
                    </span>

                </div>


                <div className="journey-grid">

                    <div className="journey-card">

                        <span>01</span>

                        <h3>
                            {t("home.journeySteps.step1.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step1.description")}
                        </p>

                    </div>


                    <div className="journey-card">

                        <span>02</span>

                        <h3>
                            {t("home.journeySteps.step2.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step2.description")}
                        </p>

                    </div>


                    <div className="journey-card">

                        <span>03</span>

                        <h3>
                            {t("home.journeySteps.step3.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step3.description")}
                        </p>

                    </div>


                    <div className="journey-card">

                        <span>04</span>

                        <h3>
                            {t("home.journeySteps.step4.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step4.description")}
                        </p>

                    </div>


                    <div className="journey-card">

                        <span>05</span>

                        <h3>
                            {t("home.journeySteps.step5.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step5.description")}
                        </p>

                    </div>


                    <div className="journey-card">

                        <span>06</span>

                        <h3>
                            {t("home.journeySteps.step6.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step6.description")}
                        </p>

                    </div>


                    <div className="journey-card">

                        <span>07</span>

                        <h3>
                            {t("home.journeySteps.step7.title")}
                        </h3>

                        <p>
                            {t("home.journeySteps.step7.description")}
                        </p>

                    </div>

                </div>

            </section>


            <section className="cta-section">

                <div className="cta-content">

                    <p>
                        {t("home.cta.label")}
                    </p>

                    <h2>
                        {t("home.cta.title")}
                    </h2>

                    <span>
                        {t("home.cta.description")}
                    </span>

                    <Link
                        to="/contact"
                        className="cta-button"
                    >
                        {t("common.bookConsultation")}
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Home;