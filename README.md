# ShifoPath India

## Run locally

Install dependencies and start the API and website in separate terminals:

```sh
cd backend
npm install
npm run dev
```

```sh
npm install
npm run dev
```

The backend reads `MONGODB_URI` and `JWT_SECRET` from `backend/.env`. The Vite app uses `http://localhost:9000` during local development.

## Deploy

The website and API are separate services and both must be deployed.

### Backend on Render

Create a **Web Service** from this repository with:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`

Add these environment variables in Render without committing them:

- `MONGODB_URI`: the MongoDB Atlas connection string
- `JWT_SECRET`: a long, random secret used to sign admin sessions
- `ADMIN_SETUP_KEY`: only needed when creating an admin through `/api/admin/create`; remove it after setup

Render must be allowed to connect to the Atlas cluster. Check Atlas Network Access and the database user's permissions if the Render logs show a MongoDB connection failure. The API does not start listening until MongoDB connects.

After deployment, open `https://YOUR-RENDER-SERVICE.onrender.com/health`. It should return `{"status":"ok"}`.

### Website on Netlify or Vercel

Deploy either the repository root or the `frontend` directory as the Vite project. Use `npm run build` as the build command and `dist` as the publish/output directory. For Netlify, set Node.js to version 22 and add this environment variable in Site configuration > Environment variables:

```text
VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com
```

Use the real Render service hostname, with no `/api` suffix and no trailing slash. Redeploy the frontend after changing this variable because Vite embeds it during the build. Do not use `localhost` in a deployed frontend; it refers to the website visitor's own device. The `public/_redirects` file rewrites direct routes such as `/contact` and `/admin` to the React app.

### Admin account and data

Create an admin in the same MongoDB database configured on Render by calling `POST https://YOUR-RENDER-SERVICE.onrender.com/api/admin/create` with JSON containing `email`, `password`, and the configured `setupKey`. Once the admin is created, remove `ADMIN_SETUP_KEY` from Render and redeploy the backend. Enquiries submitted to the deployed API are stored in that Render-configured MongoDB database; local and deployed databases may be different.

## Responsive layout

The React app has layouts for phone, tablet, and desktop widths. Test the deployed Vercel URL at narrow phone, tablet, and desktop sizes after each deployment.
