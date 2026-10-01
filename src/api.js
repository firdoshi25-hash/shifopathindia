export function apiUrl(path) {
    const configuredUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "");
    const baseUrl = configuredUrl || (import.meta.env.DEV ? "http://localhost:9000" : "");

    if (!baseUrl) {
        throw new Error("Backend URL is missing. Set VITE_API_URL in your hosting settings to the live Render backend URL, then redeploy.");
    }

    return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
