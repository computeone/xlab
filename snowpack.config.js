/** @type {import("snowpack").SnowpackUserConfig } */
/* eslint-disable */
module.exports = {
	mount: {
		public: '/',
		src: '/_dist_',
	},
	plugins: [

		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
		'@snowpack/plugin-sass',
		[
			'@snowpack/plugin-webpack',
			{
			  extendConfig: (config) => {
				// FIXES https://github.com/snowpackjs/snowpack/discussions/2810
				config.module.rules.find(
				  (rule) =>
					rule &&
					rule.use &&
					rule.use.find((use) => {
					  if (
						!use ||
						!use.loader ||
						!use.loader.includes('babel-loader')
					  ) {
						return null;
					  }

					  use.options.plugins = (use.options.plugins || []).concat([
						'@babel/plugin-proposal-optional-chaining',
					  ]);

					  return use;
					}),
				);
				return config;
			  },
			},
		  ],
	],

	packageOptions: {
		/* ... */
		sourcemap :true,
		polyfillNode:true,
		namedExports:[
			'draft-js',
			'moo',
			'antlr4ts'
		],
		rollup: {
			plugins: [
				require('rollup-plugin-node-polyfills')()
			]
		}
	},
	devOptions: {
		/* ... */
		port:3000
	},
	buildOptions: {
		/* ... */
		sourcemap:true
	},
	alias: {
		/* ... */
	},
};
