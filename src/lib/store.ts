import { writable } from 'svelte/store';

type project = {
	path: string;
	metadata: {
		title: string;
	};
};

export const projects = writable<project[]>([]);

export async function loadProjects() {
	let posts: project[] = [];
	const allProjects = import.meta.glob('/src/routes/projects/*.md');
	for (let path in allProjects) {
		const { metadata } = await allProjects[path]();
		posts.push({
			path: path.replace(/(\/src\/routes\/)|(\.md)/g, ''),
			metadata: metadata
		});
	}
	projects.set(posts);
}

export const test = writable<string>('hello');
