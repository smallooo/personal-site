// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Android',
    competency: 5,
    category: ['Mobile Development'],
  },
  {
    title: 'iOS',
    competency: 4,
    category: ['Mobile Development'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Mobile Development'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Typesense',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Docker Swarm',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Deep Learning', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Deep Learning', 'Python'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Kotlin',
    competency: 5,
    category: ['Languages', 'Kotlin'],
  },
  {
    title: 'Swift',
    competency: 3,
    category: ['Languages', 'Swift'],
  },
  {
    title: 'Golang',
    competency: 3,
    category: ['Languages', 'Golang'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C/C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Objective-C',
    competency: 2,
    category: ['Languages', 'Objective-C'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Deep Learning', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
