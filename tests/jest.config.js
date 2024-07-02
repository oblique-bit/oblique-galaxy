"use strict";
globalThis.ngJest = {
	skipNgcc: true,
};
module.exports = {
	preset: "jest-preset-angular",
	setupFilesAfterEnv: ["<rootDir>/tests/setupJest.ts"],
	testTimeout: 1000,
	verbose: true,
	detectOpenHandles: true,
	collectCoverage: true,
	testMatch: ["**/*.spec.ts", "!**/*.stories.ts"],
	collectCoverageFrom: ["**/*.ts", "!**/*.stories.ts"],
};
