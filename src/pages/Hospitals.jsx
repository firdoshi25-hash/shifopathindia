import { useTranslation } from "react-i18next";
import "../styles/Hospitals.css";

function Hospitals() {

    const { t } = useTranslation();

    const hospitals = [
        {
            name: "AIIMS New Delhi",
            location: "New Delhi, Delhi",
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
            description:
                "All India Institute of Medical Sciences (AIIMS) New Delhi is a major public medical institute providing advanced healthcare, medical education and research.",
            specialties:
                "Cardiology, Neurology, Oncology, Orthopaedics, Gastroenterology and more."
        },
        {
            name: "Indraprastha Apollo Hospitals",
            location: "New Delhi, Delhi",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
            description:
                "Indraprastha Apollo Hospitals is a multi-specialty tertiary care hospital in New Delhi with a wide range of medical specialties.",
            specialties:
                "Cardiology, Cancer Care, Neurosciences, Gastroenterology, Orthopaedics and Transplants."
        },
        {
            name: "Medanta - The Medicity",
            location: "Gurugram, Haryana",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
            description:
                "Medanta - The Medicity in Gurugram is a multi-super-specialty hospital offering care across a broad range of medical specialties.",
            specialties:
                "Cardiac Care, Cancer Care, Neurosciences, Gastrosciences, Orthopaedics and Transplant Care."
        },
        {
            name: "Fortis Memorial Research Institute",
            location: "Gurugram, Haryana",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
            description:
                "Fortis Memorial Research Institute is a multi-specialty hospital in Gurugram offering a range of specialist healthcare services.",
            specialties:
                "Cardiac Sciences, Oncology, Neurology, Neurosurgery, Orthopaedics and Gastroenterology."
        },
        {
            name: "Max Super Speciality Hospital, Saket",
            location: "New Delhi, Delhi",
            image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80",
            description:
                "Max Super Speciality Hospital, Saket provides multi-specialty and super-specialty healthcare services in New Delhi.",
            specialties:
                "Cancer Care, Cardiac Sciences, Neurosciences, Orthopaedics, Gastroenterology and Transplants."
        },
        {
            name: "Artemis Hospitals, Gurugram",
            location: "Gurugram, Haryana",
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
            description:
                "Artemis Hospitals in Gurugram provides multi-specialty and advanced healthcare services across a range of medical departments.",
            specialties:
                "Cardiology, Oncology, Neurosciences, Orthopaedics, Gastroenterology and Critical Care."
        }
    ];

    return (
        <main className="hospitals-page">

            <section className="hospitals-hero">

                <div className="hospitals-hero-shape hospitals-shape-one"></div>
                <div className="hospitals-hero-shape hospitals-shape-two"></div>

                <div className="hospitals-hero-content">

                    <div className="hospitals-hero-badge">
                        {t("hospitals.hero.badge")}
                    </div>

                    <p>
                        {t("hospitals.hero.label")}
                    </p>

                    <h1>
                        {t("hospitals.hero.title")}
                        <span>
                            {t("hospitals.hero.highlight")}
                        </span>
                    </h1>

                    <div className="hospitals-hero-line"></div>

                    <span>
                        {t("hospitals.hero.description")}
                    </span>

                </div>

            </section>


            <section className="hospitals-main">

                <div className="section-heading">

                    <p>
                        {t("hospitals.main.label")}
                    </p>

                    <h2>
                        {t("hospitals.main.title")}
                    </h2>

                    <span>
                        {t("hospitals.main.description")}
                    </span>

                </div>


                <div className="hospital-grid">

                    {hospitals.map((hospital, index) => (

                        <div
                            className="hospital-card"
                            key={index}
                        >

                            <div className="hospital-image">

                                <img
                                    src={hospital.image}
                                    alt={hospital.name}
                                />

                            </div>


                            <div className="hospital-content">

                                <span className="hospital-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>
                                    {hospital.name}
                                </h3>

                                <div className="hospital-location">
                                    📍 {hospital.location}
                                </div>

                                <p>
                                    {hospital.description}
                                </p>

                                <div className="hospital-specialties">

                                    <strong>
                                        {t("hospitals.specialties")}
                                    </strong>

                                    <span>
                                        {hospital.specialties}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            <section className="hospitals-cta">

                <div className="hospitals-cta-content">

                    <p>
                        {t("hospitals.cta.label")}
                    </p>

                    <h2>
                        {t("hospitals.cta.title")}
                    </h2>

                    <span>
                        {t("hospitals.cta.description")}
                    </span>

                    <a href="/contact">
                        {t("common.sendEnquiry")}
                    </a>

                </div>

            </section>

        </main>
    );
}

export default Hospitals;