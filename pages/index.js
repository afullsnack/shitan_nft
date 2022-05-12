import { Col, Grid, Image, Row } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.scss";

const { useBreakpoint } = Grid;

export default function Home() {
  // decalare breakpoints
  const [isMobile, setIsMobile] = useState(false);
  const screen = useBreakpoint();

  useEffect(() => {
    console.log(screen, "changed screens", isMobile);
    if (!screen.lg && !screen.xxl && !screen.xl && !screen.md) {
      setIsMobile(true);
    }

    return () => {
      setIsMobile(false);
    };
  }, [screen]);

  return (
    <>
      <Head>
        <title>SHITAN</title>
        <meta
          name="description"
          content="Shitan, culture, clash, clash of culture"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0"
        />
        <link rel="icon" href="./sh-logo-1.png" type="image/x-icon" />
      </Head>
      <div className={styles.page_bg}></div>
      <div className={styles.animation_wrapper}>
        <div className={`${styles.particle} ${styles.particle_1}`}></div>
        <div className={`${styles.particle} ${styles.particle_2}`}></div>
        <div className={`${styles.particle} ${styles.particle_3}`}></div>
        <div className={`${styles.particle} ${styles.particle_4}`}></div>
      </div>

      <Row
        style={{
          width: "100vw",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          // background: "rgba(12, 12, 12, 1)",
          background: "transparent",
          backdropFilter: "blur(4px)",
        }}
      >
        <Col
          span={24}
          style={{
            textAlign: "center",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontFamily: "Angas",
              fontSize: `${isMobile ? "4rem" : "10rem"}`,
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
              lineHeight: "200px",
              letterSpacing: "10%",
              textAlign: "center",
              position: "absolute",
              marginTop: "5%",
            }}
          >
            SHITÁN
          </h1>
          <div
            style={{
              position: "absolute",
              top: "25%",
              zIndex: 100,
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="./sh-logo-1.png"
              width={220}
              preview={false}
              style={{ position: "relative" }}
              className={"hero-img"}
            />
            <br />
            <br />
            <Button
              href={"./landing.html"}
              title={"ENTER THE CLASH OF CULTURE"}
            />
          </div>
        </Col>
      </Row>
      <style jsx global>{`
        @font-face {
          font-family: "Angas";
          src: url("./angas-font/Angas-Rp5ze.otf") format("opentype")
            local(Angas);
        }

        @font-face {
          font-family: "AngasItalic";
          font-weight: bold;
          src: url("./angas-font/AngasItalic-1G6LM.otf") format("opentype")
            local(AngasItalic);
        }

        .hero-img {
          animation: bounce 2s;
          // animation-direction: alternate;
          animation-timing-function: ease; /* cubic-bezier(0.5, 0.05, 1, 0.5) */
          animation-iteration-count: infinite;
        }

        .hero-btn {
          color: #fff;
          background: rgba(232, 7, 24, 1);
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          border: 0;
          outline: 0;
          border-radius: 4px;
          font-size: 1.1rem;
          padding: 12px 35px;
          display: inline-block;
          transform: skew(-21deg);
        }
        .hero-btn:visited {
          color: #fff;
        }
        .hero-btn:hover {
          background: #0069a8;
          color: #fff;
        }
        .hero-btn > span {
          display: inline-block;
          transform: skew(21deg);
        } /* Un-skew the text */

        // Hero img bounce animation
        @keyframes bounce {
          o% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -30px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </>
  );
}
