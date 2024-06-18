"use strict";
globalThis.ngJest = {
	skipNgcc: true,
};
module.exports = {
	preset: "jest-preset-angular",
	setupFilesAfterEnv: ["<rootDir>/tests/setupJest.ts"],
	collectCoverage: true,

	// Ignorer les fichiers de test qui se terminent par .stories.ts
	testMatch: [
		"**/*.spec.ts",
		"!**/*.stories.ts", // Ignorer les fichiers de test se terminant par .stories.ts
	],

	// Exclure les fichiers de test .stories.ts de la couverture
	collectCoverageFrom: [
		"**/*.ts",
		"!**/*.stories.ts", // Exclure les fichiers .stories.ts de la couverture
	],
};
