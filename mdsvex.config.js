const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		projects: './src/lib/md-layouts/project.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
