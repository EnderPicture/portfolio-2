import type { Project } from '$lib/types';

export async function get() {
	let projects: Project[] = [];
	const allProjects = import.meta.glob('/src/routes/projects/*.md');
	for (let path in allProjects) {
		const { metadata, cover } = await allProjects[path]();

		projects.push({
			cover: cover,
			path: path.replace(/(\/src\/routes\/)|(\.md)/g, '')+'/',
			metadata: metadata
		});
	}
	return {
		body: projects
	};
}
