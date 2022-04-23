import { Col, Grid, Image, Row, Space } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.modules.css";

const { useBreakpoint } = Grid;

export default function Landing() {
  // decalare breakpoints
  const [isMobile, setIsMobile] = useState(false);
  const screen = useBreakpoint();
  useEffect(() => {
    console.log(screen, "changed screens");
    if (screen.lg && !screen.xxl && !screen.xl && !screen.md) {
      setIsMobile(true);
    }

    return () => {};
  }, [screen]);

  return (
    <div>
      <Head>
        <title>SHITAN - Landing</title>
        <meta
          name="description"
          content="Shitan, culture, clash, clash of culture, landing, landing page"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0"
        />
        <link rel="icon" href="/sh-logo-1.png" type="image/x-icon" />
      </Head>

      <Row
        style={{
          width: "100vw",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          backgroundImage:
            "radial-gradient(circle at top left, rgba(240, 3, 26, .75) 5%, rgba(240, 3, 26, .65) 15%, rgba(12, 12, 12, 1) 25%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Col
          xs={{ span: 2 }}
          lg={{ span: 4 }}
          style={{ backgroundColor: "rgba(12, 12, 12, 1)", height: "100%" }}
        >
          <div>
            <dov />
            <Space direction="vertical">
              <img src="/lading_icons/Vector-4.png" width={24} height={24} />
              <img src="/lading_icons/Vector-3.png" width={24} height={24} />
              <img src="/lading_icons/Vector-2.png" width={24} height={24} />
              <img src="/lading_icons/Vector.png" width={24} height={24} />
              <img src="/lading_icons/Vector-1.png" width={24} height={24} />
            </Space>
          </div>
        </Col>
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
              fontSize: isMobile ? "10rem" : "70px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
              lineHeight: "200px",
              letterSpacing: "10%",
              textAlign: "center",
              position: "absolute",
              marginTop: "10%",
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
              src="/sh-logo-1.png"
              width={220}
              preview={true}
              style={{ position: "relative" }}
              className={"hero-img"}
            />
            <br />
            <br />
            <a href="#" className="hero-btn">
              <span>ENTER THE CLASH OF CULTURE</span>
            </a>
          </div>
        </Col>
      </Row>
      <style jsx global>{`
        @font-face {
          font-family: "Angas";
          src: url("/angas-font/Angas-Rp5ze.otf") format("opentype")
            local(Angas);
        }

        @font-face {
          font-family: "AngasItalic";
          font-weight: bold;
          src: url("/angas-font/AngasItalic-1G6LM.otf") format("opentype")
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
    </div>
  );
}
