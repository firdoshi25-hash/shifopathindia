import { useTranslation } from "react-i18next";
import "../styles/Legal.css";

function MedicalDisclaimer() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">

            <section className="legal-hero">

                <div className="legal-hero-content">

                    <div className="legal-badge">
                        {t("medicalDisclaimer.hero.badge")}
                    </div>

                    <p>
                        {t("medicalDisclaimer.hero.label")}
                    </p>

                    <h1>
                        {t("medicalDisclaimer.hero.title")}
                    </h1>

                    <div className="legal-line"></div>

                    <span>
                        {t("medicalDisclaimer.hero.description")}
                    </span>

                </div>

            </section>


            <section className="legal-main">

                <div className="legal-content">

                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.information.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.information.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.notMedicalAdvice.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.notMedicalAdvice.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.doctors.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.doctors.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.emergency.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.emergency.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.results.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.results.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.responsibility.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.responsibility.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.contact.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.contact.content")}
                        </p>

                    </section>

                </div>

            </section>

        </main>
    );
}

export default MedicalDisclaimer;