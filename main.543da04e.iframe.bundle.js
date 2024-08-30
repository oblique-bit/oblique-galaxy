(self.webpackChunkoblique_galaxy=self.webpackChunkoblique_galaxy||[]).push([[792],{"./projects/oblique-galaxy/.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var angular=__webpack_require__("./node_modules/@storybook/addon-docs/angular/index.js");const documentation_namespaceObject=JSON.parse('{"pipes":[],"interfaces":[],"injectables":[],"guards":[],"interceptors":[],"classes":[],"directives":[],"components":[],"modules":[],"miscellaneous":{"variables":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"template.bind({})"},{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"template.bind({})"},{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n\\targs: {\\n\\t\\tprimary: \'This is the primary button\',\\n\\t\\tsecondary: \'This is the secondary button\',\\n\\t\\ttertiary: \'This is the tertiary button\'\\n\\t}\\n}"},{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n\\targTypes: {\\n\\t\\tpackageStatus: {\\n\\t\\t\\tdescription: \'Array of package status\',\\n\\t\\t\\ttable: {\\n\\t\\t\\t\\ttype: {\\n\\t\\t\\t\\t\\tsummary: \'Packages[]\',\\n\\t\\t\\t\\t\\tdetail: `Array of Packages objects. Each object has the following properties:\\n          - name: string\\n          - current: string\\n          - wanted: string\\n          - latest: string\\n          - versionDiff: string`\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t},\\n\\targs: {\\n\\t\\tdefaultPath: \'assets/outdated-report.json\',\\n\\t\\tpackageStatus: mockPackages\\n\\t}\\n}"},{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n\\targTypes: {}\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<ObgObliqueGalaxyComponent>","defaultValue":"{\\n\\ttitle: \'Example/Galaxy\',\\n\\tcomponent: ObgObliqueGalaxyComponent,\\n\\ttags: [\'autodocs\'],\\n\\tdecorators: [\\n\\t\\tmoduleMetadata({\\n\\t\\t\\timports: [HttpClientModule, BrowserAnimationsModule, MatButtonModule, ObliqueModule]\\n\\t\\t})\\n\\t]\\n} as Meta"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<ObgPackagesOutdatedComponent>","defaultValue":"{\\n\\ttitle: \'Example/PackagesOutdated\',\\n\\tcomponent: ObgPackagesOutdatedComponent,\\n\\ttags: [\'autodocs\'],\\n\\tparameters: {\\n\\t\\tdocs: {\\n\\t\\t\\tdescription: {\\n\\t\\t\\t\\tcomponent: `\\nThis component has been created by [@punix81](https://github.com/punix81).\\n\\nThis component uses the \\"npm outdated\\" command to display the current status of your project\'s dependencies in table form. It informs you of available versions that may include bug fixes, performance enhancements or new features.\\n\\n## Configuration\\nAdd a script to run the \\"npm outdate\\" command in your  \\\\`package.json\\\\` file\\n\\n\\n\\n\\\\`\\\\`\\\\`json\\n\\"scripts\\": {\\n  \\"check-updates\\": \\"npm outdated --json > [YOUR_PATH]/outdated-report.json || true\\"\\n}\\n\\\\`\\\\`\\\\`\\n`\\n\\t\\t\\t}\\n\\t\\t}\\n\\t},\\n\\tdecorators: [\\n\\t\\tmoduleMetadata({\\n\\t\\t\\timports: [HttpClientModule, ObgPackagesOutdatedComponent, BrowserAnimationsModule, MatButtonModule, ObliqueModule],\\n\\t\\t\\tproviders: [\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tprovide: PackagesOutdatedService,\\n\\t\\t\\t\\t\\tuseValue: {\\n\\t\\t\\t\\t\\t\\tgetOutdatedPackages: () => of(mockPackages),\\n\\t\\t\\t\\t\\t\\tgetLocalPackages: () => of(mockPackages) // Mock getLocalPackages method\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t]\\n\\t\\t})\\n\\t]\\n} as Meta"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<TextareaInputComponent>","defaultValue":"{\\n\\ttitle: \'Components/TextareaInput\',\\n\\tcomponent: TextareaInputComponent,\\n\\ttags: [\'autodocs\'],\\n\\tparameters: {\\n\\t\\tdocs: {\\n\\t\\t\\tdescription: {\\n\\t\\t\\t\\tcomponent: `\\nThis component has been created by [@punix81](https://github.com/punix81).\\n\\nThe TextAreaCounter component is a handy tool for developers, displaying the number of characters remaining in a text area (textarea) in real time. Ideal for forms and text entries requiring character limits, it offers an enhanced user experience by providing immediate visual feedback.\\n\\n`\\n\\t\\t\\t}\\n\\t\\t}\\n\\t},\\n\\tdecorators: [\\n\\t\\tmoduleMetadata({\\n\\t\\t\\timports: [\\n\\t\\t\\t\\tBrowserAnimationsModule,\\n\\t\\t\\t\\tFormsModule,\\n\\t\\t\\t\\tTextareaInputComponent,\\n\\t\\t\\t\\tReactiveFormsModule,\\n\\t\\t\\t\\tMatFormFieldModule,\\n\\t\\t\\t\\tMatInputModule,\\n\\t\\t\\t\\tTranslateModule.forRoot(multiTranslateLoader())\\n\\t\\t\\t]\\n\\t\\t})\\n\\t],\\n\\targs: {\\n\\t\\tlabel: \'Default Label\',\\n\\t\\tplaceholder: \'Enter text here...\',\\n\\t\\tdisabled: false,\\n\\t\\tmaxLength: 1000,\\n\\t\\tstyle: \'outline\',\\n\\t\\tid: \'textarea-input-default\'\\n\\t}\\n} as Meta"},{"name":"mockPackages","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Packages[]","defaultValue":"[\\n\\t{\\n\\t\\tname: \'mock-@angular-devkit/build-angular\',\\n\\t\\tcurrent: \'17.0.3\',\\n\\t\\twanted: \'17.0.3\',\\n\\t\\tlatest: \'18.0.0-beta.2\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-eslint\',\\n\\t\\tcurrent: \'8.57.0\',\\n\\t\\twanted: \'8.57.0\',\\n\\t\\tlatest: \'9.4.0\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-ng-packagr\',\\n\\t\\tcurrent: \'17.3.0\',\\n\\t\\twanted: \'17.3.0\',\\n\\t\\tlatest: \'18.0.0\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-prettier\',\\n\\t\\tcurrent: \'4.3.2\',\\n\\t\\twanted: \'4.3.2\',\\n\\t\\tlatest: \'4.3.2\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-tslib\',\\n\\t\\tcurrent: \'2.6.2\',\\n\\t\\twanted: \'2.6.3\',\\n\\t\\tlatest: \'2.6.3\',\\n\\t\\tversionDiff: \'0\'\\n\\t}\\n]"},{"name":"preview","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/.storybook/preview.ts","deprecated":false,"deprecationMessage":"","type":"Preview","defaultValue":"{\\n\\tparameters: {\\n\\t\\tcontrols: {\\n\\t\\t\\tmatchers: {\\n\\t\\t\\t\\tcolor: /(background|color)$/i,\\n\\t\\t\\t\\tdate: /Date$/i\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}"},{"name":"template","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts","deprecated":false,"deprecationMessage":"","type":"StoryFn<ConvertExcelToJsonComponent>","defaultValue":"(args: Partial<ConvertExcelToJsonService>) => ({\\n\\tprops: {\\n\\t\\t...args\\n\\t}\\n})"},{"name":"template","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts","deprecated":false,"deprecationMessage":"","type":"StoryFn<ConvertJsonToExcelComponent>","defaultValue":"(args: Partial<ConvertJsonToExcelComponent>) => ({\\n\\tprops: {\\n\\t\\t...args,\\n\\t\\tonClickExportAsExcelFIle: () => {\\n\\t\\t\\tconst mockService = new ConvertJsonToExcelService();\\n\\t\\t\\tmockService.convertJsonToExcel([\'en\', \'de\'], \'mockPath/\', \'mockFileName.xlsx\');\\n\\t\\t}\\n\\t}\\n})"}],"functions":[],"typealiases":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<ObgObliqueGalaxyComponent>","file":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":183},{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<ObgPackagesOutdatedComponent>","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":183},{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<TextareaInputComponent>","file":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":183}],"enumerations":[],"groupedVariables":{"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"template.bind({})"},{"name":"template","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts","deprecated":false,"deprecationMessage":"","type":"StoryFn<ConvertExcelToJsonComponent>","defaultValue":"(args: Partial<ConvertExcelToJsonService>) => ({\\n\\tprops: {\\n\\t\\t...args\\n\\t}\\n})"}],"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"template.bind({})"},{"name":"template","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts","deprecated":false,"deprecationMessage":"","type":"StoryFn<ConvertJsonToExcelComponent>","defaultValue":"(args: Partial<ConvertJsonToExcelComponent>) => ({\\n\\tprops: {\\n\\t\\t...args,\\n\\t\\tonClickExportAsExcelFIle: () => {\\n\\t\\t\\tconst mockService = new ConvertJsonToExcelService();\\n\\t\\t\\tmockService.convertJsonToExcel([\'en\', \'de\'], \'mockPath/\', \'mockFileName.xlsx\');\\n\\t\\t}\\n\\t}\\n})"}],"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n\\targs: {\\n\\t\\tprimary: \'This is the primary button\',\\n\\t\\tsecondary: \'This is the secondary button\',\\n\\t\\ttertiary: \'This is the tertiary button\'\\n\\t}\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<ObgObliqueGalaxyComponent>","defaultValue":"{\\n\\ttitle: \'Example/Galaxy\',\\n\\tcomponent: ObgObliqueGalaxyComponent,\\n\\ttags: [\'autodocs\'],\\n\\tdecorators: [\\n\\t\\tmoduleMetadata({\\n\\t\\t\\timports: [HttpClientModule, BrowserAnimationsModule, MatButtonModule, ObliqueModule]\\n\\t\\t})\\n\\t]\\n} as Meta"}],"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n\\targTypes: {\\n\\t\\tpackageStatus: {\\n\\t\\t\\tdescription: \'Array of package status\',\\n\\t\\t\\ttable: {\\n\\t\\t\\t\\ttype: {\\n\\t\\t\\t\\t\\tsummary: \'Packages[]\',\\n\\t\\t\\t\\t\\tdetail: `Array of Packages objects. Each object has the following properties:\\n          - name: string\\n          - current: string\\n          - wanted: string\\n          - latest: string\\n          - versionDiff: string`\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t},\\n\\targs: {\\n\\t\\tdefaultPath: \'assets/outdated-report.json\',\\n\\t\\tpackageStatus: mockPackages\\n\\t}\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<ObgPackagesOutdatedComponent>","defaultValue":"{\\n\\ttitle: \'Example/PackagesOutdated\',\\n\\tcomponent: ObgPackagesOutdatedComponent,\\n\\ttags: [\'autodocs\'],\\n\\tparameters: {\\n\\t\\tdocs: {\\n\\t\\t\\tdescription: {\\n\\t\\t\\t\\tcomponent: `\\nThis component has been created by [@punix81](https://github.com/punix81).\\n\\nThis component uses the \\"npm outdated\\" command to display the current status of your project\'s dependencies in table form. It informs you of available versions that may include bug fixes, performance enhancements or new features.\\n\\n## Configuration\\nAdd a script to run the \\"npm outdate\\" command in your  \\\\`package.json\\\\` file\\n\\n\\n\\n\\\\`\\\\`\\\\`json\\n\\"scripts\\": {\\n  \\"check-updates\\": \\"npm outdated --json > [YOUR_PATH]/outdated-report.json || true\\"\\n}\\n\\\\`\\\\`\\\\`\\n`\\n\\t\\t\\t}\\n\\t\\t}\\n\\t},\\n\\tdecorators: [\\n\\t\\tmoduleMetadata({\\n\\t\\t\\timports: [HttpClientModule, ObgPackagesOutdatedComponent, BrowserAnimationsModule, MatButtonModule, ObliqueModule],\\n\\t\\t\\tproviders: [\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tprovide: PackagesOutdatedService,\\n\\t\\t\\t\\t\\tuseValue: {\\n\\t\\t\\t\\t\\t\\tgetOutdatedPackages: () => of(mockPackages),\\n\\t\\t\\t\\t\\t\\tgetLocalPackages: () => of(mockPackages) // Mock getLocalPackages method\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t]\\n\\t\\t})\\n\\t]\\n} as Meta"},{"name":"mockPackages","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Packages[]","defaultValue":"[\\n\\t{\\n\\t\\tname: \'mock-@angular-devkit/build-angular\',\\n\\t\\tcurrent: \'17.0.3\',\\n\\t\\twanted: \'17.0.3\',\\n\\t\\tlatest: \'18.0.0-beta.2\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-eslint\',\\n\\t\\tcurrent: \'8.57.0\',\\n\\t\\twanted: \'8.57.0\',\\n\\t\\tlatest: \'9.4.0\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-ng-packagr\',\\n\\t\\tcurrent: \'17.3.0\',\\n\\t\\twanted: \'17.3.0\',\\n\\t\\tlatest: \'18.0.0\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-prettier\',\\n\\t\\tcurrent: \'4.3.2\',\\n\\t\\twanted: \'4.3.2\',\\n\\t\\tlatest: \'4.3.2\',\\n\\t\\tversionDiff: \'0\'\\n\\t},\\n\\t{\\n\\t\\tname: \'mock-tslib\',\\n\\t\\tcurrent: \'2.6.2\',\\n\\t\\twanted: \'2.6.3\',\\n\\t\\tlatest: \'2.6.3\',\\n\\t\\tversionDiff: \'0\'\\n\\t}\\n]"}],"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n\\targTypes: {}\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<TextareaInputComponent>","defaultValue":"{\\n\\ttitle: \'Components/TextareaInput\',\\n\\tcomponent: TextareaInputComponent,\\n\\ttags: [\'autodocs\'],\\n\\tparameters: {\\n\\t\\tdocs: {\\n\\t\\t\\tdescription: {\\n\\t\\t\\t\\tcomponent: `\\nThis component has been created by [@punix81](https://github.com/punix81).\\n\\nThe TextAreaCounter component is a handy tool for developers, displaying the number of characters remaining in a text area (textarea) in real time. Ideal for forms and text entries requiring character limits, it offers an enhanced user experience by providing immediate visual feedback.\\n\\n`\\n\\t\\t\\t}\\n\\t\\t}\\n\\t},\\n\\tdecorators: [\\n\\t\\tmoduleMetadata({\\n\\t\\t\\timports: [\\n\\t\\t\\t\\tBrowserAnimationsModule,\\n\\t\\t\\t\\tFormsModule,\\n\\t\\t\\t\\tTextareaInputComponent,\\n\\t\\t\\t\\tReactiveFormsModule,\\n\\t\\t\\t\\tMatFormFieldModule,\\n\\t\\t\\t\\tMatInputModule,\\n\\t\\t\\t\\tTranslateModule.forRoot(multiTranslateLoader())\\n\\t\\t\\t]\\n\\t\\t})\\n\\t],\\n\\targs: {\\n\\t\\tlabel: \'Default Label\',\\n\\t\\tplaceholder: \'Enter text here...\',\\n\\t\\tdisabled: false,\\n\\t\\tmaxLength: 1000,\\n\\t\\tstyle: \'outline\',\\n\\t\\tid: \'textarea-input-default\'\\n\\t}\\n} as Meta"}],"projects/oblique-galaxy/.storybook/preview.ts":[{"name":"preview","ctype":"miscellaneous","subtype":"variable","file":"projects/oblique-galaxy/.storybook/preview.ts","deprecated":false,"deprecationMessage":"","type":"Preview","defaultValue":"{\\n\\tparameters: {\\n\\t\\tcontrols: {\\n\\t\\t\\tmatchers: {\\n\\t\\t\\t\\tcolor: /(background|color)$/i,\\n\\t\\t\\t\\tdate: /Date$/i\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}"}]},"groupedFunctions":{},"groupedEnumerations":{},"groupedTypeAliases":{"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<ObgObliqueGalaxyComponent>","file":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":183}],"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<ObgPackagesOutdatedComponent>","file":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":183}],"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<TextareaInputComponent>","file":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":183}]}},"routes":[],"coverage":{"count":0,"status":"low","files":[{"filePath":"projects/oblique-galaxy/.storybook/preview.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"preview","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"template","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"template","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"meta","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"meta","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"mockPackages","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"meta","coveragePercent":0,"coverageCount":"0/1","status":"low"}]}}');(0,angular.$)(documentation_namespaceObject);const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const pipeline=x=>x(),importers=[function(){var _ref=(0,asyncToGenerator.A)((function*(path){if(!/^\.[\\/](?:projects\/oblique-galaxy\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(30);return __webpack_require__("./projects/oblique-galaxy/src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/projects\\/oblique-galaxy\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)}));return function(_x){return _ref.apply(this,arguments)}}(),function(){var _ref2=(0,asyncToGenerator.A)((function*(path){if(!/^\.[\\/](?:projects\/oblique-galaxy\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(30);return __webpack_require__("./projects/oblique-galaxy/src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/projects\\/oblique-galaxy\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}));return function(_x2){return _ref2.apply(this,arguments)}}()];function _importFn(){return(_importFn=(0,asyncToGenerator.A)((function*(path){for(let i=0;i<importers.length;i++){const moduleExports=yield pipeline((()=>importers[i](path)));if(moduleExports)return moduleExports}}))).apply(this,arguments)}const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((function importFn(_x3){return _importFn.apply(this,arguments)}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/angular/dist/client/preview-prod.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/docs/config.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/config.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./projects/oblique-galaxy/.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./projects/oblique-galaxy/src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/projects\\/oblique-galaxy\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./projects/oblique-galaxy/src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/projects\\/oblique-galaxy\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./projects/oblique-galaxy/src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/projects\\/oblique-galaxy\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./lib/components/convert-excel-to-json/convert-excel-to-json.stories":["./projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts",241,880,253],"./lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts":["./projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts",241,880,253],"./lib/components/convert-json-to-excel/convert-json-to-excel.stories":["./projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts",241,880,13],"./lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts":["./projects/oblique-galaxy/src/lib/components/convert-json-to-excel/convert-json-to-excel.stories.ts",241,880,13],"./lib/components/oblique-galaxy/oblique-galaxy.component.stories":["./projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts",241,625],"./lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts":["./projects/oblique-galaxy/src/lib/components/oblique-galaxy/oblique-galaxy.component.stories.ts",241,625],"./lib/components/packages-outdated/obg-packages-outdated.component.stories":["./projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts",241,374],"./lib/components/packages-outdated/obg-packages-outdated.component.stories.ts":["./projects/oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component.stories.ts",241,374],"./lib/components/textarea-input/textarea-input.component.stories":["./projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts",241,955],"./lib/components/textarea-input/textarea-input.component.stories.ts":["./projects/oblique-galaxy/src/lib/components/textarea-input/textarea-input.component.stories.ts",241,955]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./projects/oblique-galaxy/src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/projects\\/oblique-galaxy\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[11],(()=>(__webpack_exec__("./storybook-config-entry.js"),__webpack_exec__("./node_modules/@angular/compiler/fesm2022/compiler.mjs"),__webpack_exec__("./node_modules/@oblique/oblique/styles/css/oblique-core.css?ngGlobalStyle"),__webpack_exec__("./node_modules/@oblique/oblique/styles/css/frutiger.css?ngGlobalStyle"))));__webpack_require__.O()}]);