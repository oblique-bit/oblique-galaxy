# oblique-galaxy

The goal of this project is to share angular [symbols](https://angular.io/guide/styleguide#symbols-and-file-names) from the comunity. There are strict rules to maintain the repository so please read carefuly the contribution rules.

## Storybook

Check out our [Storybook](https://oblique-bit.github.io/oblique-galaxy) for live examples and documentation.

# Contribution rules

- Fork the project and then create a PR from the forked project.
- To add a component you have to do the following commands according to the symbol
  - For components `ng g c --project oblique-galaxy components/my-component`
  - ⚠️ For all following symbols please notice that you have to create a folder for each and write twice their name ⚠️
  - For service `ng g s --project oblique-galaxy services/my-service/my-service`
  - For pipe `ng g p --project oblique-galaxy pipes/my-pipe/my-pipe`
  - For guard `ng g g --project oblique-galaxy guards/my-guard/my-guard`
  - For resovler `ng g r --project oblique-galaxy resolvers/my-resolver/my-resolver`
  - For interceptor `ng g interceptor --project oblique-galaxy interceptors/my-interceptor/my-interceptor`
  - If you want to create another type of symbol, please add it in a folder named after the symbol type and mention it in your PR.
- Every component added needs at least one code owner. Add the `CODEOWNERS` file at the root of your symbol folder.
- Every component added needs to have a coverage for unit tests of 100%. (As for now, we don't accept exceptions)
- Every component needs to have a documentation, README file (TBD story book would be better for displaying components)
- TBD Follow the commit convention (add commitlint and setup the rules)
- In case you can't be an owner anymore, please try to find another one. If no owner are found, then the component will be removed from the library
- If you need a dependency, create a `DEPENDENCIES` file located in your symbole folder and add one line per added dependency like it's written in the `package.json` file (e.g. `@oblique/oblique` ignore the version and quotes).
  - ⚠️ please prefer no dependencies. If needed please use pure JavaScrip dependencies which are easier to migrate. In last resort add a dependency that use angular (TBD maybe we should forbid these angular dependencies) ⚠️
- For each PR an admin(TBD list of admin) should be part of the reviwers
- If you upgrade an external dependency and break another component, it's your responsability to contact the owner or upgrade the other component
- Admins will handle the angular upgrade. See [Angular Upgrade](#angular-upgrade-for-admin-only)

# Version management

- Every PR accepted will bump the minor version.
- Every Angular migration will bump major version. e.g. if we upgrade to Angular 17 then oblique-galaxy will be version 17.0.0.
- Patch versions are currently not used.

# Angular Upgrade (for admin only)

(deprecate in this context is to remove the component from the project root, but keep the code in it. The code will be deleted after few months or confirmation from owner that the component will not be updated)

This is a checklist to follow each time an admin has to upgrade the project

- [ ] Upgrade to next Angular version
- [ ] Upgrade to next Angular Material version
- [ ] Upgrade to next Oblique version
- [ ] Run `npm run lint && npm run test` for each component which has it's tests not working, deprecate it
- [ ] Remove the dependencies related with all these components
- [ ] Send an email to all owners with the list of components that have been deprecated. If they want them back, it's their duty to create a PR that put them back

This process can be automated with a script.
