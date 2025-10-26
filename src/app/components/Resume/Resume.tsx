import styles from './Resume.module.css';
import Tech from '../Tech/Tech';

const stackTechs = [
  {
    title: 'JavaScript',
    description: 'Versatile and widely used programming language.',
    years: '5',
    name: 'js',
  },
  {
    title: 'React',
    description: 'Library for building user interfaces.',
    years: '4',
    name: 'react',
  },
  {
    title: 'React Native',
    description: 'Framework for building native applications using React.',
    years: '3',
    name: 'react',
  },
  {
    title: 'TypeScript',
    description: 'JavaScript superset with static typing.',
    years: '3',
    name: 'typescript',
  },
  {
    title: 'Node.js',
    description: 'JavaScript runtime environment for server-side development.',
    years: '4',
    name: 'nodejs',
  },
  {
    title: 'Next.js',
    description: 'React framework with server-side rendering capabilities.',
    years: '3',
    name: 'nextjs',
  },
  {
    title: 'Tailwind CSS',
    description: 'CSS framework for fast and responsive design.',
    years: '2',
    name: 'tailwindcss',
  },
  {
    title: 'GraphQL',
    description: 'Query language for APIs.',
    years: '2',
    name: 'graphql',
  },
  {
    title: 'Docker',
    description: 'Platform for creating, deploying and running containerized applications.',
    years: '2',
    name: 'docker',
  },
  {
    title: 'PostgreSQL',
    description: 'Relational database management system.',
    years: '3',
    name: 'postgresql',
  },
  {
    title: 'MongoDB',
    description: 'Document-oriented NoSQL database.',
    years: '2',
    name: 'mongodb',
  },
  {
    title: 'GCP',
    description: 'Google Cloud Platform for cloud computing services.',
    years: '2',
    name: 'gcloud',
  },
  {
    title: 'AWS',
    description: 'Amazon Web Services for cloud computing.',
    years: '1',
    name: 'aws',
  },
];

export default function Resume() {
  return (
    <section className={styles.resume}>
      <div className={styles.divider}></div>
      <div className={styles.techList}>
        {stackTechs.map((tech) => (
          <div className={styles.techItem} key={tech.title}>
            <Tech
              key={tech.title}
              title={tech.title}
              description={tech.description}
              years={tech.years}
              name={tech.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
