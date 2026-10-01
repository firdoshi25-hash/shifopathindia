import { useTranslation } from "react-i18next";
import "../styles/Legal.css";

function Terms() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">

            <section className="legal-hero">

                <div className="legal-hero-content">

                    <h1>
                        {t("terms.title")}
                    </h1>

                    <div className="legal-line"></div>

                    <span>
                        {t("terms.intro")}
                    </span>

                </div>

            </section>


            <section className="legal-main">

                <div className="legal-content">

                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.information.title")}
                        </h2>

                        <p>
                            {t("terms.sections.information.text")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.services.title")}
                        </h2>

                        <p>
                            {t("terms.sections.services.text")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.healthcare.title")}
                        </h2>

                        <p>
                            {t("terms.sections.healthcare.text")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.accuracy.title")}
                        </h2>

                        <p>
                            {t("terms.sections.accuracy.text")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.contact.title")}
                        </h2>

                        <p>
                            {t("terms.sections.contact.text")}
                        </p>
                    </section>

                </div>

            </section>

        </main>
    );
}

export default Terms;