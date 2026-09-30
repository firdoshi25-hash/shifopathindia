import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAdmin = localStorage.getItem("shifopath-admin");

        if (isAdmin !== "true") {
            navigate("/admin");
            return;
        }

        fetchEnquiries();
    }, [navigate]);

    const fetchEnquiries = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/enquiries"
            );

            const data = await response.json();

            if (response.ok) {
                setEnquiries(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("shifopath-admin");
        navigate("/admin");
    };

    const getStatusClass = (status) => {
        return `status-${status
            ?.toLowerCase()
            .replace(/\s+/g, "-")}`;
    };

    return (
        <main className="admin-dashboard-page">

            <section className="admin-dashboard-header">

                <div>
                    <p>
                        {t("admin.dashboard.label")}
                    </p>

                    <h1>
                        {t("admin.dashboard.title")}
                    </h1>

                    <span>
                        {t("admin.dashboard.description")}
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
                        {t("admin.dashboard.newEnquiries")}
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
                        <p>
                            {t("admin.dashboard.enquiriesLabel")}
                        </p>

                        <h2>
                            {t("admin.dashboard.enquiriesTitle")}
                        </h2>
                    </div>

                    <button
                        className="admin-refresh-button"
                        onClick={fetchEnquiries}
                    >
                        {t("admin.dashboard.refresh")}
                    </button>

                </div>


                {loading ? (

                    <div className="admin-empty-state">
                        <p>
                            {t("admin.dashboard.loading")}
                        </p>
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
                            {t("admin.dashboard.noEnquiriesDescription")}
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
                                                {enquiry.status}
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