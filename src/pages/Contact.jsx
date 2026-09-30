import { useTranslation } from "react-i18next";
import EnquiryForm from "../components/EnquiryForm";
import "../styles/Contact.css";

function Contact() {
    const { t } = useTranslation();

    return (
        <main className="contact-page">

            <section className="contact-hero">

                <div className="contact-hero-shape contact-shape-one"></div>
                <div className="contact-hero-shape contact-shape-two"></div>

                <div className="contact-hero-content">

                    <div className="contact-hero-badge">
                        {t("contact.hero.badge")}
                    </div>

                    <p>
                        {t("contact.hero.label")}
                    </p>

                    <h1>
                        {t("contact.hero.title")}
                        <span>
                            {t("contact.hero.highlight")}
                        </span>
                    </h1>

                    <div className="contact-hero-line"></div>

                    <span>
                        {t("contact.hero.description")}
                    </span>

                </div>

            </section>


            <section className="contact-main">

                <div className="contact-info">

                    <div className="contact-section-heading">

                        <p>
                            {t("contact.info.label")}
                        </p>

                        <h2>
                            {t("contact.info.title")}
                        </h2>

                        <span>
                            {t("contact.info.description")}
                        </span>

                    </div>


                    <div className="contact-info-list">

                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                📞
                            </div>

                            <div>
                                <h3>
                                    {t("contact.info.phoneTitle")}
                                </h3>

                                <p>
                                    +91 9006037332
                                </p>
                            </div>

                        </div>


                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                📸
                            </div>

                            <div>
                                <h3>
                                    {t("contact.info.instagramTitle")}
                                </h3>

                                <p>
                                    @shifopath_india
                                </p>
                            </div>

                        </div>


                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                ✈️
                            </div>

                            <div>
                                <h3>
                                    {t("contact.info.supportTitle")}
                                </h3>

                                <p>
                                    {t("contact.info.supportDescription")}
                                </p>
                            </div>

                        </div>

                    </div>


                    <div className="contact-after">

                        <p>
                            {t("contact.after.label")}
                        </p>

                        <h3>
                            {t("contact.after.title")}
                        </h3>

                        <span>
                            {t("contact.after.description")}
                        </span>

                    </div>

                </div>


                <div className="contact-form-wrapper">

                    <div className="contact-form-heading">

                        <p>
                            {t("contact.form.label")}
                        </p>

                        <h2>
                            {t("contact.form.title")}
                        </h2>

                        <span>
                            {t("contact.form.description")}
                        </span>

                    </div>

                    <EnquiryForm />

                </div>

            </section>

        </main>
    );
}

export default Contact;