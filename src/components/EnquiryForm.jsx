import { useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl } from "../api";
import "../styles/Contact.css";

function EnquiryForm() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        fullName: "",
        country: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiUrl("/api/enquiries"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

            if (response.ok) {
                setSubmitted(true);

                setFormData({
                    fullName: "",
                    country: "",
                    phone: "",
                    email: "",
                    service: "",
                    message: ""
                });
            } else {
                alert(t("contact.form.error"));
            }

        } catch (error) {
            console.error(error);

            alert(error.message === "Failed to fetch"
                ? t("contact.form.connectionError")
                : error.message);
        }
    };

    if (submitted) {
        return (
            <div className="form-success">

                <div className="form-success-icon">
                    ✓
                </div>

                <h3>
                    {t("contact.form.successTitle")}
                </h3>

                <p>
                    {t("contact.form.successMessage")}
                </p>

                <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                >
                    {t("contact.form.sendAnother")}
                </button>

            </div>
        );
    }

    return (
        <form
            className="enquiry-form"
            onSubmit={handleSubmit}
        >

            <div className="form-row">

                <div className="form-group">

                    <label>
                        {t("contact.form.fullName")}
                    </label>

                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t("contact.form.fullNamePlaceholder")}
                        required
                    />

                </div>


                <div className="form-group">

                    <label>
                        {t("contact.form.country")}
                    </label>

                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder={t("contact.form.countryPlaceholder")}
                        required
                    />

                </div>

            </div>


            <div className="form-row">

                <div className="form-group">

                    <label>
                        {t("contact.form.phone")}
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("contact.form.phonePlaceholder")}
                        required
                    />

                </div>


                <div className="form-group">

                    <label>
                        {t("contact.form.email")}
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.form.emailPlaceholder")}
                        required
                    />

                </div>

            </div>


            <div className="form-group">

                <label>
                    {t("contact.form.service")}
                </label>

                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >

                    <option value="">
                        {t("contact.form.servicePlaceholder")}
                    </option>

                    <option value="Hospital Appointment">
                        {t("contact.services.appointments")}
                    </option>

                    <option value="Accommodation">
                        {t("contact.services.accommodation")}
                    </option>

                    <option value="Local Transport">
                        {t("contact.services.transport")}
                    </option>

                    <option value="Interpreter">
                        {t("contact.services.interpreter")}
                    </option>

                    <option value="Patient Care Coordination">
                        {t("contact.services.patientCare")}
                    </option>

                    <option value="Other">
                        {t("contact.services.other")}
                    </option>

                </select>

            </div>


            <div className="form-group">

                <label>
                    {t("contact.form.message")}
                </label>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows="6"
                    required
                ></textarea>

            </div>


            <div className="form-consent">

                <input
                    type="checkbox"
                    id="formConsent"
                    required
                />

                <label htmlFor="formConsent">
                    {t("contact.form.consent")}
                </label>

            </div>


            <button
                type="submit"
                className="enquiry-submit"
            >
                {t("contact.form.submit")}
            </button>

        </form>
    );
}

export default EnquiryForm;