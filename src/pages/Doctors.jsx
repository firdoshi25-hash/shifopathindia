import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Doctors.css";

function Doctors() {

    const { t } = useTranslation();

    const doctors = [
        {
            id: "rajiv-narang",
            name: "Dr. Rajiv Narang",
            specialization: "Cardiology",
            hospital: "AIIMS New Delhi",
            location: "New Delhi, Delhi"
        },
        {
            id: "sandeep-seth",
            name: "Dr. Sandeep Seth",
            specialization: "Cardiology",
            hospital: "AIIMS New Delhi",
            location: "New Delhi, Delhi"
        },
        {
            id: "vanita-arora",
            name: "Dr. Vanita Arora",
            specialization: "Cardiology",
            hospital: "Indraprastha Apollo Hospitals",
            location: "New Delhi, Delhi"
        },
        {
            id: "vivek-kumar",
            name: "Dr. Vivek Kumar",
            specialization: "Interventional Cardiology",
            hospital: "Indraprastha Apollo Hospitals",
            location: "New Delhi, Delhi"
        },
        {
            id: "naresh-trehan",
            name: "Dr. Naresh Trehan",
            specialization: "Cardiac Surgery",
            hospital: "Medanta - The Medicity",
            location: "Gurugram, Haryana"
        },
        {
            id: "praveen-chandra",
            name: "Dr. Praveen Chandra",
            specialization: "Interventional Cardiology",
            hospital: "Medanta - The Medicity",
            location: "Gurugram, Haryana"
        },
        {
            id: "manjinder-sandhu",
            name: "Dr. Manjinder Sandhu",
            specialization: "Interventional Cardiology",
            hospital: "Fortis Memorial Research Institute",
            location: "Gurugram, Haryana"
        },
        {
            id: "nikhil-kumar",
            name: "Dr. Nikhil Kumar",
            specialization: "Interventional Cardiology",
            hospital: "Fortis Memorial Research Institute",
            location: "Gurugram, Haryana"
        },
        {
            id: "balbir-singh",
            name: "Dr. Balbir Singh",
            specialization: "Cardiology & Electrophysiology",
            hospital: "Max Super Speciality Hospital, Saket",
            location: "New Delhi, Delhi"
        },
        {
            id: "viveka-kumar",
            name: "Dr. Viveka Kumar",
            specialization: "Cardiology & Electrophysiology",
            hospital: "Max Super Speciality Hospital, Saket",
            location: "New Delhi, Delhi"
        },
        {
            id: "amit-kumar-chaurasia",
            name: "Dr. Amit Kumar Chaurasia",
            specialization: "Interventional Cardiology",
            hospital: "Artemis Hospitals",
            location: "Gurugram, Haryana"
        },
        {
            id: "dk-jhamb",
            name: "Dr. D.K. Jhamb",
            specialization: "Cardiology",
            hospital: "Artemis Hospitals",
            location: "Gurugram, Haryana"
        }
    ];

    return (
        <main className="doctors-page">

            <section className="doctors-hero">

                <div className="doctors-hero-shape doctors-shape-one"></div>
                <div className="doctors-hero-shape doctors-shape-two"></div>

                <div className="doctors-hero-content">

                    <div className="doctors-hero-badge">
                        {t("doctors.hero.badge")}
                    </div>

                    <p>
                        {t("doctors.hero.label")}
                    </p>

                    <h1>
                        {t("doctors.hero.title")}
                        <span>
                            {t("doctors.hero.highlight")}
                        </span>
                    </h1>

                    <div className="doctors-hero-line"></div>

                    <span>
                        {t("doctors.hero.description")}
                    </span>

                </div>

            </section>


            <section className="doctors-main">

                <div className="section-heading">

                    <p>
                        {t("doctors.main.label")}
                    </p>

                    <h2>
                        {t("doctors.main.title")}
                    </h2>

                    <span>
                        {t("doctors.main.description")}
                    </span>

                </div>


                <div className="doctors-grid">

                    {doctors.map((doctor, index) => (

                        <div
                            className="doctor-card"
                            key={doctor.id}
                        >

                            <div className="doctor-card-top">

                                <div className="doctor-icon">
                                    <span>✚</span>
                                </div>

                                <span className="doctor-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                            </div>


                            <div className="doctor-card-content">

                                <h3>
                                    {doctor.name}
                                </h3>

                                <p className="doctor-specialization">
                                    {doctor.specialization}
                                </p>


                                <div className="doctor-detail">

                                    <span>
                                        {t("doctors.hospital")}
                                    </span>

                                    <strong>
                                        {doctor.hospital}
                                    </strong>

                                </div>


                                <div className="doctor-detail">

                                    <span>
                                        {t("doctors.location")}
                                    </span>

                                    <strong>
                                        {doctor.location}
                                    </strong>

                                </div>


                                <Link
                                    to={`/doctors/${doctor.id}`}
                                    className="doctor-profile-button"
                                >
                                    {t("common.viewProfile")}
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            <section className="doctors-cta">

                <div className="doctors-cta-content">

                    <p>
                        {t("doctors.cta.label")}
                    </p>

                    <h2>
                        {t("doctors.cta.title")}
                    </h2>

                    <span>
                        {t("doctors.cta.description")}
                    </span>

                    <Link to="/contact">
                        {t("doctors.cta.button")}
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Doctors;