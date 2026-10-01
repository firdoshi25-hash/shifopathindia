import { useTranslation } from "react-i18next";
import "../styles/Legal.css";

function MedicalDisclaimer() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">

            <section className="legal-hero">

                <div className="legal-hero-content">

                    <h1>
                        {t("medicalDisclaimer.title")}
                    </h1>

                    <div className="legal-line"></div>

                    <span>
                        {t("medicalDisclaimer.intro")}
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
                            {t("medicalDisclaimer.sections.information.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.notMedicalAdvice.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.notMedicalAdvice.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.professionals.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.professionals.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.emergency.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.emergency.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("medicalDisclaimer.sections.information.title")}
                        </h2>

                        <p>
                            {t("medicalDisclaimer.sections.information.text")}
                        </p>

                    </section>


                </div>

            </section>

        </main>
    );
}

export default MedicalDisclaimer;