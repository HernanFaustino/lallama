import styles from './Tech.module.css';
import StackIcon from 'tech-stack-icons';

interface TechProps {
  title: string;
  name: string;
  description: string;
  years: string;
}

export default function Tech({ title, years, name }: TechProps) {
  return (
    <div className={styles.stackContainer}>
      <div className={styles.icon}>
        <StackIcon name={name} style={{ width: 50, height: 50 }} />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{title}</p>
        <p className={styles.experience}>{years}+ years</p>
      </div>
    </div>
  );
}
