/**
 * Single source of truth for every string on the site.
 * Edit this file to change content; components only render it.
 */

export type Link = { label: string; href: string };

export type Work = {
	index: string;
	title: string;
	subtitle: string;
	description: string;
	stack: string[];
	status: 'Shipped' | 'In progress';
	link?: Link;
};

export type CapabilityGroup = {
	label: string;
	items: string[];
};

export type PathEntry = {
	org: string;
	role: string;
	description: string;
};

export const profile = {
	name: 'Alexander F. J. Lapod',
	shortName: 'Alexander Lapod',
	role: 'Full-stack developer',
	location: 'Surabaya, Indonesia',
	timezone: 'Asia/Jakarta',
	availability: 'Open to interesting work',
	statement:
		'I build systems that keep working after the demo: web applications, internal tools, and the models behind them.',
	bio: [
		'I am an informatics student and full-stack developer. Most of my work lives where software meets operations: dashboards people open every morning, workflows that used to run on spreadsheets, and interfaces that have to stay readable under pressure.',
		'My range runs from Laravel and PostgreSQL on the server to SvelteKit, Angular, and Ionic on the client, with Python and deep learning whenever a problem needs inference rather than a form. I care about the unglamorous parts: schema design, error paths, and whether the thing still makes sense six months later.'
	],
	facts: [
		{ label: 'Based in', value: 'Surabaya, Indonesia' },
		{ label: 'Studying', value: 'Informatics, Universitas Surabaya' },
		{ label: 'Thesis', value: 'Melanoma detection with deep learning' },
		{ label: 'Building now', value: 'Omnitrack, a private project OS' }
	]
};

/** Set these to real values before deploying; empty strings hide the entry. */
export const contact = {
	email: '',
	github: 'https://github.com/joynard',
	linkedin: ''
};

export const nav = [
	{ id: 'work', label: 'Work' },
	{ id: 'about', label: 'About' },
	{ id: 'capabilities', label: 'Capabilities' },
	{ id: 'path', label: 'Path' },
	{ id: 'contact', label: 'Contact' }
];

export const marquee = [
	'SvelteKit',
	'Laravel',
	'PostgreSQL',
	'Rust',
	'Python',
	'TypeScript',
	'Docker',
	'Deep learning',
	'LLM integration'
];

export const work: Work[] = [
	{
		index: '01',
		title: 'Omnitrack',
		subtitle: 'A private operating system for projects and events',
		description:
			'Boards, modules, and standalone tasks in one place, plus an AI command palette and an HTTP harness that lets agents read and write the same data a human sees. Google Sheets sync and a Telegram bridge keep it usable away from the desk.',
		stack: ['Laravel 13', 'PostgreSQL', 'DeepSeek API', 'Docker'],
		status: 'In progress',
		link: { label: 'github.com/joynard/omnitrack', href: 'https://github.com/joynard/omnitrack' }
	},
	{
		index: '02',
		title: 'Melanoma detection',
		subtitle: 'Thesis: model and companion app',
		description:
			'A convolutional model that classifies dermoscopic images, built alongside the mobile client that would use it. The work splits across the data pipeline, the model, and the interface that makes a prediction legible to a clinician.',
		stack: ['Python', 'Deep learning', 'Ionic', 'Angular'],
		status: 'In progress'
	},
	{
		index: '03',
		title: 'Ploplo',
		subtitle: 'Convolutional model, end to end',
		description:
			'Trained and evaluated a CNN from raw data preparation to inference, then packaged the result so it could be run without the notebook it was born in.',
		stack: ['Python', 'CNN', 'NumPy'],
		status: 'Shipped',
		link: { label: 'github.com/joynard/cnn-plo', href: 'https://github.com/joynard/cnn-plo' }
	},
	{
		index: '04',
		title: 'Signature Work',
		subtitle: 'This site',
		description:
			'A static SvelteKit portfolio with a draggable signature, one source file for content, and no server at runtime. Prerendered and served straight from the edge.',
		stack: ['SvelteKit', 'Tailwind v4', 'TypeScript'],
		status: 'Shipped'
	}
];

export const capabilities: CapabilityGroup[] = [
	{
		label: 'Interface',
		items: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Angular', 'Ionic']
	},
	{
		label: 'Server',
		items: ['Laravel / PHP', 'Rust', 'Node.js', 'PostgreSQL', 'MySQL']
	},
	{
		label: 'Data & AI',
		items: ['Python', 'CNN / deep learning', 'LLM integration', 'Data mining']
	},
	{
		label: 'Craft',
		items: ['API design', 'Schema & migrations', 'Docker', 'Testing', 'Documentation']
	}
];

export const path: PathEntry[] = [
	{
		org: 'PT SPIL',
		role: 'Developer, digital systems',
		description:
			'Internal web systems for container logistics: HR tooling, claims workflows, gate automation, operational dashboards, and an internal AI assistant. Mostly the whole path from schema to interface.'
	},
	{
		org: 'Universitas Surabaya',
		role: 'Informatics',
		description:
			'Coursework across software engineering, data mining, and computer vision. Current thesis: melanoma detection, where the model and its application ship together.'
	},
	{
		org: 'Independent',
		role: 'Personal systems',
		description:
			'Omnitrack, Ploplo, and a handful of automations built to remove repetitive work from my own week. Released publicly where it is useful to someone else.'
	}
];

export const site = {
	title: 'Alexander F. J. Lapod - Full-stack developer',
	description:
		'Full-stack developer in Surabaya. Web applications, internal tools, and the models behind them.',
	url: '',
	established: 'January 18, 2026'
};
