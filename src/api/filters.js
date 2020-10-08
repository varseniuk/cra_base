const filters = [
	{
		id: 1,
		type: 'checkbox',
		name: 'Education',
		criteria: [
			{
				name: 'Primary school',
				checked: false,
			},
			{
				name: 'High school',
				checked: false,
			},
			{
				name: 'Promotion',
				checked: false,
			},
			{
				name: 'Middle school graduation',
				checked: false,
			},
			{
				name: 'University degree',
				checked: false,
			},
			{
				name: 'Bachelor',
				checked: false,
			},
			{
				name: 'Master',
				checked: false,
			},
		],
	},
	{
		id: 2,
		type: 'checkbox',
		name: 'Experience',
		criteria: [
			{
				name: 'Training area',
				checked: false,
			},
			{
				name: 'Technical area',
				checked: false,
			},
			{
				name: 'Commercial area',
				checked: false,
			},
			{
				name: 'Medical area',
				checked: false,
			},
			{
				name: 'Social area',
				checked: false,
			},
			{
				name: 'Craft sector',
				checked: false,
			},
			{
				name: 'Administrative area',
				checked: false,
			},
			{
				name: 'Gastronomy area',
				checked: false,
			},
			{
				name: 'Other area',
				checked: false,
			},
		],
	},
	{
		id: 3,
		type: 'checkbox',
		name: 'Languages',
		criteria: [
			{
				name: 'English',
				checked: false,
			},
			{
				name: 'German',
				checked: false,
			},
			{
				name: 'Serbo-Croatian',
				checked: false,
			},
		],
	},
	{
		id: 4,
		type: 'checkbox',
		name: 'Skills',
		criteria: [
			{
				name: 'Communication',
				checked: false,
			},
			{
				name: 'Team skills',
				checked: false,
			},
			{
				name: 'Troubleshooting',
				checked: false,
			},
			{
				name: 'Creativity',
				checked: false,
			},
			{
				name: 'Work ethic',
				checked: false,
			},
			{
				name: 'Interpersonal relationships',
				checked: false,
			},
			{
				name: 'Time management',
				checked: false,
			},
			{
				name: 'Leadership',
				checked: false,
			},
			{
				name: 'precision and attention to detail',
				checked: false,
			},
		],
	},
	{
		id: 5,
		type: 'checkbox',
		name: 'Job details',
		criteria: [
			{
				name: 'Maintenance',
				checked: false,
			},
			{
				name: 'Cleaning',
				checked: false,
			},
			{
				name: 'Construction',
				checked: false,
			},
			{
				name: 'Gastronomy',
				checked: false,
			},
			{
				name: 'Administration/office',
				checked: false,
			},
			{
				name: 'Industry',
				checked: false,
			},
			{
				name: 'Education/Social area',
				checked: false,
			},
			{
				name: 'Any',
				checked: false,
			},
		],
	},
	{
		id: 7,
		type: 'checkbox',
		name: 'Country',
		criteria: [
			{
				name: 'EU Citizen',
				checked: false,
			},
			{
				name: 'Non EU Citizen',
				checked: false,
			},
			{
				name: 'Ukraine',
				checked: false,
			},
			{
				name: 'Kosovo',
				checked: false,
			},
			{
				name: 'Bosnia and herzegovina',
				checked: false,
			},
		],
	},
	{
		id: 8,
		type: 'checkbox',
		name: 'Status',
		criteria: [
			{
				name: 'Available',
				checked: false,
			},
			{
				name: 'Invited',
				checked: false,
			},
			{
				name: 'Confirmed',
				checked: false,
			},
			{
				name: 'Refused',
				checked: false,
			},
			{
				name: `Didn't show up`,
				checked: false,
			},
		],
	},
];

export default filters;
