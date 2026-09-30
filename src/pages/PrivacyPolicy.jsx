import { useTranslation } from "react-i18next";
import "../styles/Legal.css";

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">

            <section className="legal-hero">

                <div className="legal-hero-content">

                    <div className="legal-badge">
                        {t("privacy.hero.badge")}
                    </div>

                    <p>
                        {t("privacy.hero.label")}
                    </p>

                    <h1>
                        {t("privacy.hero.title")}
                    </h1>

                    <div className="legal-line"></div>

                    <span>
                        {t("privacy.hero.description")}
                    </span>

                </div>

            </section>


            <section className="legal-main">

                <div className="legal-content">

                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.introduction.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.introduction.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.information.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.information.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.usage.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.usage.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.sharing.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.sharing.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.security.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.security.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.retention.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.retention.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.rights.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.rights.content")}
                        </p>

                    </section>


                    <section className="legal-section">

                        <h2>
                            {t("privacy.sections.contact.title")}
                        </h2>

                        <p>
                            {t("privacy.sections.contact.content")}
                        </p>

                    </section>

                </div>

            </section>

        </main>
    );
}

export default PrivacyPolicy;