import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		{
			name: "mock-api",
			configureServer(server) {
				server.middlewares.use("/entry", (req, res) => {
					if (req.method !== "POST") {
						res.statusCode = 405;
						res.end("Method not supported");
						return;
					}
					setTimeout(
						() => {
							res.setHeader("Content-Type", "application/json");
							if (Math.random() > 0.3) {
								res.end(JSON.stringify({ success: true }));
							} else {
								res.statusCode = 500;
								res.end("The API is flaky");
							}
						},
						(Math.random() + 0.5) * 2000,
					);
				});
			},
		},
	],
});
