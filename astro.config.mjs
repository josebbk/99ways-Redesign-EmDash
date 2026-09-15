import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	fonts: [
		{
			provider: fontProviders.google(),
			name: "IBM Plex Mono",
			cssVariable: "--font-mono",
			weights: ["500", "600"],
			styles: ["normal"],
			fallbacks: ["monospace"],
		},
		{
			provider: fontProviders.google(),
			name: "IBM Plex Sans",
			cssVariable: "--font-sans",
			weights: ["400", "500"],
			styles: ["normal"],
			fallbacks: ["sans-serif"],
		},
	],
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
		}),
	],
	devToolbar: { enabled: false },
});
