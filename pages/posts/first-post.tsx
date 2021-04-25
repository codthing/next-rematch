import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2 className={styles.title}>
                <Link href="/">Back to home</Link>
            </h2>
            {/* 跳转到新标签页 */}
            <h2 className={styles.title}>
                <Link href="/">
                    <a className="foo" target="_blank" rel="noopener noreferrer">Hello World</a>
                </Link>
            </h2>
        </Layout>
    )
}