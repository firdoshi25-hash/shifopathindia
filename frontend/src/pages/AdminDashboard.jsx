import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { apiUrl } from "../api";
import "../styles/AdminDashboard.css";

async function requestEnquiries(token) {
    const response = await fetch(apiUrl("/api/enquiries"), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();

    if (!response.ok) {
        const error = new Error(data.message || "Could not load enquiries");
        error.status = response.status;
        throw error;
    }

    return data;
}

function AdminDashboard() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("shifopath-admin-token");

        if (!token) {
            navigate("/admin");
            return;
        }

        let isActive = true;

        requestEnquiries(token)
            .then((data) => {
                if (isActive) {
                    setEnquiries(data);
                }
            })
            .catch((error) => {
                if (!isActive) {
                    return;
                }

                console.error(error);

                if (error.status === 401) {
                    localStorage.removeItem("shifopath-admin-token");
                    navigate("/admin");
                    return;
                }

                setLoadError(t("contact.form.connectionError"));
            })
            .finally(() => {
                if (isActive) {
                    setLoading(false);
                }
            });

        return () => {
            isActive = false;
        };
    }, [navigate, t]);

    const handleLogout = () => {
        localStorage.removeItem("shifopath-admin-token");
        navigate("/admin");
    };

    const handleRefresh = () => {
        const token = localStorage.getItem("shifopath-admin-token");

        if (!token) {
            navigate("/admin");
            return;
        }

        setLoading(true);
        setLoadError("");

        requestEnquiries(token)
            .then(setEnquiries)
            .catch((error) => {
                console.error(error);

                if (error.status === 401) {
                    localStorage.removeItem("shifopath-admin-token");
                    navigate("/admin");
                    return;
                }

                setLoadError(t("contact.form.connectionError"));
            })
            .finally(() => setLoading(false));
    };

    const getStatusClass = (status) => {
        return `status-${status
            ?.toLowerCase()
            .replace(/\s+/g, "-")}`;
    };

    const statusLabels = {
        New: t("admin.dashboard.new"),
        Contacted: t("admin.dashboard.contacted"),
        "In Progress": t("admin.dashboard.inProgress"),
        Completed: t("admin.dashboard.completed")
    };

    return (
        <main className="admin-dashboard-page">

            <section className="admin-dashboard-header">

                <div>
                    <h1>
                        {t("admin.dashboard.title")}
                    </h1>

                    <span>
                        {t("admin.dashboard.subtitle")}
                    </span>
                </div>

                <button
                    className="admin-logout-button"
                    onClick={handleLogout}
                >
                    {t("admin.dashboard.logout")}
                </button>

            </section>


            <section className="admin-stats">

                <div className="admin-stat-card">

                    <span>
                        {t("admin.dashboard.totalEnquiries")}
                    </span>

                    <strong>
                        {enquiries.length}
                    </strong>

                </div>


                <div className="admin-stat-card">

                    <span>
                        {t("admin.dashboard.new")}
                    </span>

                    <strong>
                        {
                            enquiries.filter(
                                (item) =>
                                    item.status === "New"
                            ).length
                        }
                    </strong>

                </div>


                <div className="admin-stat-card">

                    <span>
                        {t("admin.dashboard.inProgress")}
                    </span>

                    <strong>
                        {
                            enquiries.filter(
                                (item) =>
                                    item.status === "In Progress"
                            ).length
                        }
                    </strong>

                </div>


                <div className="admin-stat-card">

                    <span>
                        {t("admin.dashboard.completed")}
                    </span>

                    <strong>
                        {
                            enquiries.filter(
                                (item) =>
                                    item.status === "Completed"
                            ).length
                        }
                    </strong>

                </div>

            </section>


            <section className="admin-enquiries">

                <div className="admin-section-heading">

                    <div>
                        <h2>
                            {t("admin.dashboard.totalEnquiries")}
                        </h2>
                    </div>

                    <button
                        className="admin-refresh-button"
                        onClick={handleRefresh}
                    >
                        {t("common.refresh")}
                    </button>

                </div>


                {loading ? (

                    <div className="admin-empty-state">
                        <p>
                            {t("common.loading")}
                        </p>
                    </div>

                ) : loadError ? (

                    <div className="admin-empty-state" role="alert">
                        <p>{loadError}</p>
                    </div>

                ) : enquiries.length === 0 ? (

                    <div className="admin-empty-state">

                        <div>
                            📭
                        </div>

                        <h3>
                            {t("admin.dashboard.noEnquiries")}
                        </h3>

                        <p>
                            {t("admin.dashboard.subtitle")}
                        </p>

                    </div>

                ) : (

                    <div className="admin-table-wrapper">

                        <table className="admin-table">

                            <thead>

                                <tr>

                                    <th>
                                        {t("admin.dashboard.name")}
                                    </th>

                                    <th>
                                        {t("admin.dashboard.country")}
                                    </th>

                                    <th>
                                        {t("admin.dashboard.phone")}
                                    </th>

                                    <th>
                                        {t("admin.dashboard.service")}
                                    </th>

                                    <th>
                                        {t("admin.dashboard.date")}
                                    </th>

                                    <th>
                                        {t("admin.dashboard.status")}
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {enquiries.map((enquiry) => (

                                    <tr key={enquiry._id}>

                                        <td>
                                            <strong>
                                                {enquiry.fullName}
                                            </strong>
                                        </td>

                                        <td>
                                            {enquiry.country}
                                        </td>

                                        <td>
                                            {enquiry.phone}
                                        </td>

                                        <td>
                                            {enquiry.service}
                                        </td>

                                        <td>
                                            {enquiry.createdAt
                                                ? new Date(
                                                    enquiry.createdAt
                                                ).toLocaleDateString()
                                                : "-"}
                                        </td>

                                        <td>

                                            <span
                                                className={`admin-status ${getStatusClass(
                                                    enquiry.status
                                                )}`}
                                            >
                                                {statusLabels[enquiry.status] || enquiry.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </section>

        </main>
    );
}

export default AdminDashboard;