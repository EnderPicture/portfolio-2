export type Project = {
	path: string;
	cover?: string;

	metadata: {
		title?: string;
		description?: string;
		tags?: string[];
	};
};

export type FigureImage = {
	figCaption?: string;
	alt?: string;
	srcset: string;
};
