import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/DoctorProfile.css";

function DoctorProfile() {

    const { id } = useParams();
    const { t } = useTranslation();

    const doctors = {
        "rajiv-narang": {
            name: "Dr. Rajiv Narang",
            specialization: "Cardiology",
            hospital: "AIIMS New Delhi",
            location: "New Delhi, Delhi"
        },

        "sandeep-seth": {
            name: "Dr. Sandeep Seth",
            specialization: "Cardiology",
            hospital: "AIIMS New Delhi",
            location: "New Delhi, Delhi"
        },

        "vanita-arora": {
            name: "Dr. Vanita Arora",
            specialization: "Cardiology",
            hospital: "Indraprastha Apollo Hospitals",
            location: "New Delhi, Delhi"
        },

        "vivek-kumar": {
            name: "Dr. Vivek Kumar",
            specialization: "Interventional Cardiology",
            hospital: "Indraprastha Apollo Hospitals",
            location: "New Delhi, Delhi"
        },

        "naresh-trehan": {
            name: "Dr. Naresh Trehan",
            specialization: "Cardiac Surgery",
            hospital: "Medanta - The Medicity",
            location: "Gurugram, Haryana"
        },

        "praveen-chandra": {
            name: "Dr. Praveen Chandra",
            specialization: "Interventional Cardiology",
            hospital: "Medanta - The Medicity",
            location: "Gurugram, Haryana"
        },

        "manjinder-sandhu": {
            name: "Dr. Manjinder Sandhu",
            specialization: "Interventional Cardiology",
            hospital: "Fortis Memorial Research Institute",
            location: "Gurugram, Haryana"
        },

        "nikhil-kumar": {
            name: "Dr. Nikhil Kumar",
            specialization: "Interventional Cardiology",
            hospital: "Fortis Memorial Research Institute",
            location: "Gurugram, Haryana"
        },

        "balbir-singh": {
            name: "Dr. Balbir Singh",
            specialization: "Cardiology & Electrophysiology",
            hospital: "Max Super Speciality Hospital, Saket",
            location: "New Delhi, Delhi"
        },

        "viveka-kumar": {
            name: "Dr. Viveka Kumar",
            specialization: "Cardiology & Electrophysiology",
            hospital: "Max Super Speciality Hospital, Saket",
            location: "New Delhi, Delhi"
        },

        "amit-kumar-chaurasia": {
            name: "Dr. Amit Kumar Chaurasia",
            specialization: "Interventional Cardiology",
            hospital: "Artemis Hospitals",
            location: "Gurugram, Haryana"
        },

        "dk-jhamb": {
            name: "Dr. D.K. Jhamb",
            specialization: "Cardiology",
            hospital: "Artemis Hospitals",
            location: "Gurugram, Haryana"
        }
    };

    const doctor = doctors[id];

    if (!doctor) {
        return (
            <main className="doctor-profile-page">

                <section className="doctor-not-found">

                    <h1>
                        {t("doctorProfile.notFound.title")}
                    </h1>

                    <p>
                        {t("doctorProfile.notFound.description")}
                    </p>

                    <Link to="/doctors">
                        {t("doctorProfile.notFound.button")}
                    </Link>

                </section>

            </main>
        );
    }

    return (
        <main className="doctor-profile-page">

            <section className="doctor-profile-hero">

                <div className="doctor-profile-shape profile-shape-one"></div>
                <div className="doctor-profile-shape profile-shape-two"></div>

                <div className="doctor-profile-hero-content">

                    <div className="doctor-profile-badge">
                        {t("doctorProfile.hero.badge")}
                    </div>

                    <p>
                        {t("doctorProfile.hero.label")}
                    </p>

                    <h1>
                        {doctor.name}
                    </h1>

                    <div className="doctor-profile-line"></div>

                    <span>
                        {doctor.specialization}
                    </span>

                </div>

            </section>


            <section className="doctor-profile-main">

                <div className="doctor-profile-card">

                    <div className="doctor-profile-icon">
                        ✚
                    </div>

                    <div className="doctor-profile-content">

                        <p className="doctor-profile-label">
                            {t("doctorProfile.details.label")}
                        </p>

                        <h2>
                            {doctor.name}
                        </h2>

                        <div className="doctor-profile-details">

                            <div className="doctor-profile-detail">

                                <span>
                                    {t("doctorProfile.details.specialization")}
                                </span>

                                <strong>
                                    {doctor.specialization}
                                </strong>

                            </div>


                            <div className="doctor-profile-detail">

                                <span>
                                    {t("doctorProfile.details.hospital")}
                                </span>

                                <strong>
                                    {doctor.hospital}
                                </strong>

                            </div>


                            <div className="doctor-profile-detail">

                                <span>
                                    {t("doctorProfile.details.location")}
                                </span>

                                <strong>
                                    {doctor.location}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="doctor-profile-info">

                    <p>
                        {t("doctorProfile.info.label")}
                    </p>

                    <h2>
                        {t("doctorProfile.info.title")}
                    </h2>

                    <span>
                        {t("doctorProfile.info.description")}
                    </span>

                    <Link to="/contact">
                        {t("doctorProfile.info.button")}
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default DoctorProfile;