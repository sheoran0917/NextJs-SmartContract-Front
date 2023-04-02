import Head from "next/head"
import styles from "@/styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lottery System</title>
                <meta name="description" content="Our decentralized lottery sytem" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> Hello */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
