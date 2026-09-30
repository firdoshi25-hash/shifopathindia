import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/AdminLogin.css";

function AdminLogin() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setError("");

        if (!email || !password) {
            setError(t("admin.login.required"));
            return;
        }

        if (
            email === "admin@shifopathindia.com" &&
            password === "admin123"
        ) {
            localStorage.setItem("shifopath-admin", "true");
            navigate("/admin/dashboard");
        } else {
            setError(t("admin.login.invalid"));
        }
    };

    return (
        <main className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-login-header">

                    <div className="admin-login-icon">
                        🔐
                    </div>

                    <p>
                        {t("admin.login.label")}
                    </p>

                    <h1>
                        {t("admin.login.title")}
                    </h1>

                    <span>
                        {t("admin.login.description")}
                    </span>

                </div>


                <form
                    className="admin-login-form"
                    onSubmit={handleSubmit}
                >

                    <div className="admin-form-group">

                        <label>
                            {t("admin.login.email")}
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            placeholder={t(
                                "admin.login.emailPlaceholder"
                            )}
                        />

                    </div>


                    <div className="admin-form-group">

                        <label>
                            {t("admin.login.password")}
                        </label>

                        <input
                            type="password"
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
                        {t("admin.login.button")}
                    </button>

                </form>

            </div>

        </main>
    );
}

export default AdminLogin;