import { ReactNode } from 'react';
import styles from '@/styles/layout/Container.module.scss';

export default function Container({ children }: { children: ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}
