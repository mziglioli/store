module.exports = {
	swaggerDefinition: {
		info: {
			title: "Store app",
			description: "Store app using next js / react ....",
			version: "1.0.0",
		},
		host: "localhost:3000/",
		basePath: "/",
		produces: ["application/json", "text/html"],
		schemes: ["http", "https"],
		securityDefinitions: {
			JWT: {
				type: "apiKey",
				in: "header",
				name: "Authorization",
				description: "",
			},
		},
	},
	basedir: __dirname, // app absolute path
	files: ["../pages/**/*.js", "../type/**/*.ts"], // Path to the API handle folder
};
