export type Project = {
	path: string;
	cover?: {
		src: string;
		srcset: string;
	};
	metadata: {
		title: string;
		cover: string;
	};
};
