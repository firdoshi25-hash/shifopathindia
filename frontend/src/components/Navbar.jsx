import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import logo from "../assets/shifopath_logo_transparent2.png";

function Navbar() {
    const { t, i18n } = useTranslation();

    const languages = [
        { code: "en", name: "English" },
        { code: "hi", name: "Hindi" },
        { code: "zh", name: "Mandarin Chinese" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "ar", name: "Arabic" },
        { code: "tg", name: "Tajik" },
        { code: "ru", name: "Russian" },
        { code: "de", name: "German" },
        { code: "ja", name: "Japanese" },
        { code: "tr", name: "Turkish" },
        { code: "uz", name: "Uzbek" },
        { code: "fa", name: "Persian (Farsi)" },
        { code: "ko", name: "Korean" },
        { code: "it", name: "Italian" }
    ];

    const changeLanguage = (event) => {
        const language = event.target.value;

        i18n.changeLanguage(language);

        localStorage.setItem(
            "shifopath-language",
            language
        );
    };

    return (
        <header className="navbar">

            <div className="navbar-container">

                <Link to="/" className="navbar-logo">
                    <img
                        src={logo}
                        alt="ShifoPath India"
                    />
                </Link>

                <nav className="navbar-links">

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

                    <Link to="/how-it-works">
                        {t("navbar.howItWorks")}
                    </Link>

                    <Link to="/contact">
                        {t("navbar.contact")}
                    </Link>

                </nav>

                <div className="language-selector">

                    <span className="language-icon">
                        🌐
                    </span>

                    <select
                        value={i18n.language}
                        onChange={changeLanguage}
                    >
                        {languages.map((language) => (
                            <option
                                key={language.code}
                                value={language.code}
                            >
                                {language.name}
                            </option>
                        ))}
                    </select>

                </div>

            </div>

        </header>
    );
}

export default Navbar;