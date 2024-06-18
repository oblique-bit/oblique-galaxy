"use strict";

module.exports = require("../../tests/jest.config");
module.exports.roots = ["<rootDir>/projects/oblique-galaxy"];
module.exports.displayName = {
	name: "oblique-galaxy",
	color: "cyan",
};
module.exports.coverageDirectory = "<rootDir>/coverage/oblique-galaxy";
module.exports.collectCoverageFrom = [
	"<rootDir>/projects/oblique-galaxy/src/lib/**/*.ts",
	"!**/_mocks/**",
	"!**/*.module.ts",
	"!**/**.harness.ts",
	"!**/index.ts",
	// the following files have no spec files and therefore have a 0 coverage. Tests will be written later
	"!**/http-api-interceptor.ts",
	"!**/off-canvas-container.directive.ts",
	"!**/schema-required.directive.ts",
	"!**/*.stories.ts",
];
module.exports.coverageThreshold = {
	global: {
		statements: 100,
		branches: 100,
		functions: 100,
		lines: 100,
	},
};
