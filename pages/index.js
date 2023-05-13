import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
import Banner from "@component/component/banner";
import Card from "@component/component/card";
import coffeeStores from "../data/coffee-stores";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  console.log("Props:", props);
  const handleOnBannerbtn = () => {
    console.log("Hi Banner buttoin");
  };
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta keywords="hunting codes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
      </nav>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Coffee Connoisseur</h1> */}
        <Banner
          buttontext="View stores nearby"
          handleOnClick={handleOnBannerbtn}
        />
        <div className={styles.heroImage}>
          <Image
            src={"/static/hero-image.png"}
            width={700}
            height={400}
            alt="Picture of the author"
          ></Image>
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore) => {
            return (
              <Card
                key={coffeeStore.id}
                name={coffeeStore.name}
                // imgUrl="/static/hero-image.png"
                // href="/coffee-store/darkhose-coffee"
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
