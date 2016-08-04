## [Unreleased]

## 2016-08-04, Version [0.0.5]
- Added {config,knexfile}.js to .gitignore
- Added {config,knexfile}.sample.js files
- Added README.md

## 2016-06-17, Version [0.0.4]
- Replaced webpack with [tarima](https://github.com/gextech/tarima-cli), default configuration:
	- [rollup](https://github.com/rollup/rollup), module bundler
	- [buble](https://gitlab.com/Rich-Harris/buble), ES2015 compiler
	- [postcss](https://github.com/postcss/postcss), transforming styles with JS plugins
		- [postcss-cssnext](https://github.com/MoOx/postcss-cssnext), use tomorrow's CSS syntax, today
		- [postcss-import](https://github.com/postcss/postcss-import), inline **@import** rules content
- Updated source files structure:
    - moved `./public/{css,js}` to `./src/{stylesheets,javascripts}`
- Removed `jQuery`, `elastic`, `Widget` from `public/js/vendors`
- Added new npm scripts:
	- `build` bundle entry point files found at `src/*/_entries`, places them at `public/build/*/`
	- `lint` run eslint on *.js files
	- `repl` starts neonode's interactive repl for debugging
	- `watch` starts browser sync proxy on `localhost:3001` and the build pipeline with watching support
- Added new skeleton files
	- LICENSE (MIT)
	- .gitignore
	- .eslintrc
	- .editorconfig

## 2016-05-31, Version [0.0.3]
- Removed RouteMapper
- Added RouteMappings
- Add locals.routeMappings helper
- Add server listening info

## 2016-05-05, Version [0.0.2]
- Add knex to boot.js
- Bind knex to Krypton.Model in boot.js
- Don't reverse controller's beforeActions
- Update Error.js Middleware
- Update knexfile.js
- Added README.md

## 2016-01-06, Version 0.0.1
- First Release

[Unreleased]: https://github.com/Empathia/neonode/compare/0.0.5...HEAD
[0.0.5]: https://github.com/Empathia/neonode/compare/0.0.4...0.0.5
[0.0.4]: https://github.com/Empathia/neonode/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/Empathia/neonode/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/Empathia/neonode/compare/0.0.1...0.0.2
