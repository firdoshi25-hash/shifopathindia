import { useTranslation } from "react-i18next";
import "../styles/Legal.css";

function Terms() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">

            <section className="legal-hero">

                <div className="legal-hero-content">

                    <div className="legal-badge">
                        {t("terms.hero.badge")}
                    </div>

                    <p>
                        {t("terms.hero.label")}
                    </p>

                    <h1>
                        {t("terms.hero.title")}
                    </h1>

                    <div className="legal-line"></div>

                    <span>
                        {t("terms.hero.description")}
                    </span>

                </div>

            </section>


            <section className="legal-main">

                <div className="legal-content">

                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.acceptance.title")}
                        </h2>

                        <p>
                            {t("terms.sections.acceptance.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.services.title")}
                        </h2>

                        <p>
                            {t("terms.sections.services.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.userResponsibilities.title")}
                        </h2>

                        <p>
                            {t("terms.sections.userResponsibilities.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.medical.title")}
                        </h2>

                        <p>
                            {t("terms.sections.medical.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.thirdParties.title")}
                        </h2>

                        <p>
                            {t("terms.sections.thirdParties.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.payments.title")}
                        </h2>

                        <p>
                            {t("terms.sections.payments.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.liability.title")}
                        </h2>

                        <p>
                            {t("terms.sections.liability.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.changes.title")}
                        </h2>

                        <p>
                            {t("terms.sections.changes.content")}
                        </p>
                    </section>


                    <section className="legal-section">
                        <h2>
                            {t("terms.sections.contact.title")}
                        </h2>

                        <p>
                            {t("terms.sections.contact.content")}
                        </p>
                    </section>

                </div>

            </section>

        </main>
    );
}

export default Terms;