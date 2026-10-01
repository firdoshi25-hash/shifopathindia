import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { apiUrl } from "../api";
import "../styles/AdminLogin.css";

function AdminLogin() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");

        try {
            const response = await fetch(apiUrl("/api/admin/login"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (!response.ok) {
                setError(t("admin.login.error"));
                return;
            }

            localStorage.setItem("shifopath-admin-token", data.token);
            navigate("/admin/dashboard");
        } catch (requestError) {
            console.error(requestError);
            setError(t("contact.form.connectionError"));
        }
    };

    return (
        <main className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-login-header">

                    <div className="admin-login-icon">
                        🔐
                    </div>

                    <h1>
                        {t("admin.login.title")}
                    </h1>

                    <span>
                        {t("admin.login.subtitle")}
                    </span>

                </div>


                <form
                    className="admin-login-form"
                    onSubmit={handleSubmit}
                >

                    <div className="admin-form-group">

                        <label>
                            {t("admin.dashboard.email")}
                        </label>

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            placeholder={t(
                                "admin.dashboard.email"
                            )}
                        />

                    </div>


                    <div className="admin-form-group">

                        <label>
                            {t("admin.login.password")}
                        </label>

                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder={t(
                                "admin.login.passwordPlaceholder"
                            )}
                        />

                    </div>


                    {error && (
                        <div className="admin-login-error">
                            {error}
                        </div>
                    )}


                    <button
                        type="submit"
                        className="admin-login-button"
                    >
                        {t("admin.login.loginButton")}
                    </button>

                </form>

            </div>

        </main>
    );
}

export default AdminLogin;