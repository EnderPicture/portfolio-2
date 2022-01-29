export type Project = {
	path: string;
	cover?: {
		src: string;
		srcset: string;
	};
	metadata: {
		title?: string;
		description?: string;
	};
};

export type FigureImage = {
	figCaption?: string;
	alt?: string;
	srcset: string;
};