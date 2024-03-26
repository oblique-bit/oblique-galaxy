# oblique-galaxy

The goal of this project is to share angular components from the comunity. There are strict rules to maintain the repository so please read carefuly the contribution rules.

# Contribution rules

* Every component added needs at least one code owner.
* Every component added needs to have a coverage for unit tests of 100%
* (TBD) Every component needs to have a documentation (story book)
* In case you can't be an owner anymore, please try to find another one. If no owner are found, then the component will be removed from the library
* Update the external dependencies list. (please prefer no dependencies. If needed please use pure JavaScrip dependencies which are easier to migrate. In last resort add a dependency that use angular (TBD maybe we should forbid these angular dependencies)) 
* For each PR an admin(TBD list of admin) should be part of the reviwers
* If you upgrade an external dependency and break another component, it's your responsability to contact the owner or upgrade the other component
* Admins will handle the angular upgrade. See [Angular Upgrade](#angular-upgrade)

# Version management (TBD)

Every PR accepted will bump the minor version.

# Angular Upgrade (for admin only)

(deprecate in this context is to remove the component from the project root, but keep the code in it. The code will be deleted after few months or confirmation from owner that the component will not be updated)

[] Upgrade to next Angular version
[] Upgrade to next Angular Material version
[] Upgrade to next Oblique version
[] Run `npm run lint && npm run test` for each component which has it's tests not working, deprecate it
[] Remove the dependencies related with all these components
[] Send an email to all owners with the list of components that have been deprecated. If they want them back, it's their duty to create a PR that put them back

This process can be automated with a script. 
