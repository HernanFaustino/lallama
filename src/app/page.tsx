import Image from 'next/image';
import styles from './page.module.css';
import Resume from './components/Resume/Resume';

export default function HomePage() {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h3>Hernán Chuctaya</h3>
          <h4>Fullstack Developer</h4>
          <p>
            Specialized in JavaScript, TypeScript, React and Node.js. Passionate about modern
            architecture and web experience design.
          </p>
          <div className={styles.ctaButtons}>
            <a className="button" href="#resume">
              Resume
            </a>

            <a className="button button-primary" href="/portfolio">
              Portfolio
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/iphone.png"
            alt="iPhone"
            width={300}
            height={600}
            className={styles.phoneImage}
          />
          <Image
            src="/iphone.png"
            alt="iPhone Shadow"
            width={300}
            height={600}
            className={styles.phoneImageSecondary}
          />
        </div>
      </section>
      <section className={styles.resumeSection} id="resume">
        <Resume />
      </section>
    </div>
  );
}
