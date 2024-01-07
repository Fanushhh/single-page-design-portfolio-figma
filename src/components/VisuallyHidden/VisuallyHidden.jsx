import styles from './VisuallyHidden.module.css';
import React from 'react';

export default function VisuallyHidden({ description, type,  ...delegated}) {
    const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <span className={styles.showWrapper}>{description}</span>;
  }

    return (
        <span className={styles.visuallyHidden}>
            {description}
        </span>
    )
    


}