import { useTranslation } from "react-i18next";
import "../styles/Legal.css";

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">

            <section className="legal-hero">

                <div className="legal-hero-content">

                    <h1>
                        {t("privacy.title")}
                    </h1>

                    <div className="legal-line"></div>

                    <span>
                        {t("privacy.intro")}
                    </span>

                </div>

            </section>


            <section className="legal-main">

                <div className="legal-content">

                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.information.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.information.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.use.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.use.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.medical.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.medical.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.security.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.security.text")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.contact.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.contact.text")}
                        </p>

                    </section>


                </div>

            </section>

        </main>
    );
}

export default PrivacyPolicy;