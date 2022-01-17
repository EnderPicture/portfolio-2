import { writable } from 'svelte/store';

type Project = {
	path: string;
	metadata: {
		title: string;
	};
};

export const projects = writable<Project[]>([]);

export async function loadProjects() {
	let temp: Project[] = [];
	const allProjects = import.meta.glob('/src/routes/projects/*.md');
	for (let path in allProjects) {
		const { metadata } = await allProjects[path]();
		temp.push({
			path: path.replace(/(\/src\/routes\/)|(\.md)/g, ''),
			metadata: metadata
		});
	}
	projects.set(temp);
}