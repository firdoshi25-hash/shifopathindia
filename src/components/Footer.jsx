import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <h2>
                        SHIFOPATH INDIA
                    </h2>

                    <p>
                        {t("footer.description")}
                    </p>

                    <div className="footer-socials">

                        <a
                            href="https://instagram.com/shifopath_india"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://t.me/ShifoPathIndia"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Telegram
                        </a>

                    </div>

                </div>

                <div className="footer-column">

                    <h3>
                        {t("footer.quickLinks")}
                    </h3>

                    <Link to="/">
                        {t("navbar.home")}
                    </Link>

                    <Link to="/about">
                        {t("navbar.about")}
                    </Link>

                    <Link to="/services">
                        {t("navbar.services")}
                    </Link>

                    <Link to="/hospitals">
                        {t("navbar.hospitals")}
                    </Link>

                    <Link to="/doctors">
                        {t("navbar.doctors")}
                    </Link>

                </div>

                <div className="footer-column">

                    <h3>
                        {t("footer.services")}
                    </h3>

                    <Link to="/services">
                        {t("footer.serviceLinks.appointments")}
                    </Link>

                    <Link to="/services">
                        {t("footer.serviceLinks.accommodation")}
                    </Link>

                    <Link to="/services">
                        {t("footer.serviceLinks.transport")}
                    </Link>

                    <Link to="/services">
                        {t("footer.serviceLinks.interpreter")}
                    </Link>

                    <Link to="/services">
                        {t("footer.serviceLinks.patientCare")}
                    </Link>

                </div>

                <div className="footer-column">

                    <h3>
                        {t("footer.contact")}
                    </h3>

                    <p>
                        +91 9006037332
                    </p>

                    <a
                        href="https://instagram.com/shifopath_india"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @shifopath_india
                    </a>

                    <a
                        href="https://t.me/ShifoPathIndia"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @ShifoPathIndia
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} ShifoPath India.{" "}
                    {t("footer.rights")}
                </p>

                <div className="footer-legal">

                    <Link to="/privacy">
                        {t("footer.privacy")}
                    </Link>

                    <Link to="/terms">
                        {t("footer.terms")}
                    </Link>

                    <Link to="/medical-disclaimer">
                        {t("footer.disclaimer")}
                    </Link>

                </div>

            </div>

        </footer>
    );
}

export default Footer;