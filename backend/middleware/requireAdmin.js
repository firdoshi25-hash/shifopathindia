import jwt from "jsonwebtoken";

function requireAdmin(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.startsWith("Bearer ")
        ? authorization.slice(7)
        : null;

    if (!token) {
        return res.status(401).json({
            message: "Admin authentication required"
        });
    }

    try {
        req.admin = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({
            message: "Admin session is invalid or expired"
        });
    }
}

export default requireAdmin;