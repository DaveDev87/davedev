import Head from "next/head";
import st from "../styles/Home.module.scss";

export default function Home() {
  const {
    container,
    menu,
    menuHeader,
    icon,
    menuTitle,
    menuLinks,
    title,
    davedev,
    softdev,
  } = st;
  return (
    <div>
      <Head>
        <title>DaveDev87</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={container}>
        <section className={menu}>
          <div className={menuHeader}>
            <div className={icon}>
              <img src="/static/svg/menuicon.svg" alt="Menu icon" />
            </div>
            <div className={menuTitle}>
              <span>Menu</span>
            </div>
          </div>
          <div className={menuLinks}>
            <a href="">Projects</a>
            <a href="">Technologies</a>
            <a href="">About Me</a>
            <a href="">Contact</a>
          </div>
        </section>
        <section>
          <div className={title}>
            <h1>
              <span className={davedev}> DaveDev.</span> <br />
              <span className={softdev}> Software Development. </span>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
