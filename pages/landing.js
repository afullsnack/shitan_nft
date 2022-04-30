import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Card, Col, Grid, Image, Menu, Row, Space } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button";
// import styles from "../styles/Home.modules.css";

const { useBreakpoint } = Grid;

export default function Landing() {
  // decalare breakpoints
  const [isMobile, setIsMobile] = useState(false);
  const screen = useBreakpoint();
  useEffect(() => {
    console.log(screen, "changed screens");
    if (!screen.lg && !screen.xxl && !screen.xl && !screen.md) {
      setIsMobile(true);
    }

    return () => {
      setIsMobile(false);
    };
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
          minHeight: isMobile ? "100%" : "100vh",
          height: "auto",
          margin: 0,
          padding: 0,
          backgroundImage:
            "linear-gradient(90deg, black, black 400px, black 1px, rgba(12, 12, 12, .95) 100px)",
          backdropFilter: "blur(47.2917px)",
        }}
      >
        <Col
          xs={{ span: 2 }}
          lg={{ span: 2 }}
          style={{
            backgroundColor: "black",
            minHeight: "100vh",
            height: "inherit",
            borderRight: "0.945833px solid #505050",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                background: "rgba(232, 7, 24, 1)",
                width: "100%",
                height: "85.75px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuUnfoldOutlined style={{ color: "white" }} />
            </div>
            <br />
            <br />
            <Space direction="vertical" size={"large"} align="center">
              <a href="https://medium.com/@shitangames" testId="medium">
                <Image
                  src="/landing_icons/Vector-4.png"
                  preview={false}
                  width={24}
                  // height={"22.57px"}
                />
              </a>
              <a href="#" testId="telegram">
                <Image
                  src="/landing_icons/Vector-3.png"
                  width={24}
                  preview={false}
                  // height={"33.72px"}
                />
              </a>
              <a href="https://discord.com/invite/kEGVHumhbU" testId="discord">
                <Image
                  src="/landing_icons/Vector-2.png"
                  width={24}
                  preview={false}
                />
              </a>
              <a href="#" testId="instagram">
                <Image
                  src="/landing_icons/Vector.png"
                  width={24}
                  preview={false}
                />
              </a>
              <a href="https://twitter.com/Shitangames" testId="twitter">
                <Image
                  src="/landing_icons/Vector-1.png"
                  width={24}
                  preview={false}
                />
              </a>
            </Space>
          </div>
        </Col>
        <Col xs={{ span: 22 }} lg={{ span: 22 }} style={{}}>
          <Row
            gutter={[64, 0]}
            style={{ width: "100%", marginRight: 0, marginLeft: 0 }}
          >
            <Col
              span={24}
              style={{
                height: 84,
                paddingLeft: 20,
                paddingRight: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Header and nav menu */}
              <div className="logo">
                <h1
                  style={{
                    fontFamily: "Angas",
                    fontSize: isMobile ? "3rem" : "35px",
                    color: "rgba(255, 255, 255, 1)",
                    letterSpacing: "10%",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  SHITÁN
                </h1>
              </div>
              <Menu
                mode="horizontal"
                defaultActiveFirst
                defaultSelectedKeys={["home"]}
                style={{
                  float: "right",
                  height: 42,
                  background: "transparent",
                }}
              >
                <Menu.Item key="home" style={{ color: "white" }}>
                  Home
                </Menu.Item>
                <Menu.Item key="shitanpaper" style={{ color: "white" }}>
                  Shitánpaper
                </Menu.Item>
                <Menu.Item key="community" style={{ color: "white" }}>
                  Community
                </Menu.Item>
                <Menu.Item key="mint_nft" style={{ color: "white" }}>
                  Mint NFT {/* Add Icon here */}{" "}
                </Menu.Item>
              </Menu>
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              style={{
                height: isMobile ? "100%" : "calc(100vh - 84px)",
                textAlign: "center",
                display: "flex",
                flexFlow: "column",
                alignItems: "end",
                justifyContent: "center",
                paddingTop: 120,
                paddingBottom: 120,
              }}
            >
              <Image
                src="/sh-logo-1.png"
                width={320}
                preview={true}
                style={{ position: "relative" }}
                className={"hero-img"}
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              style={{
                height: isMobile ? "auto" : "calc(100vh - 84px)",
                textAlign: "center",
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "center",
                paddingTop: 90,
                paddingBottom: 90,
              }}
            >
              <h3
                style={{
                  fontFamily: "Angas",
                  fontSize: isMobile ? "1.7rem" : "21px",
                  color: "rgba(255, 255, 255, 1)",
                  letterSpacing: "10%",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                CLASH OF CULTURE
              </h3>
              <br />
              <span style={{ textAlign: "left", color: "white", fontSize: 17 }}>
                The age of expansionist Dictators and Emperors: the Middle earth
                Macedonian engage in a bloody clash of conquest, culture and
                dominance with proud and fearless East earthers, the Japanese
                clans.
              </span>
              <br />
              <br />
              <Button href={"#"} title={"JOIN THE DISCORD SERVER"} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          width: "100vw",
          margin: 0,
          // paddingLeft: isMobile ? "85.75px" : "105.72px",
          // paddingTop: "5%",
          // paddingBottom: "5%",
          background: "rgba(232, 7, 24, 1)",
        }}
      >
        <Col
          xs={{ span: 2 }}
          lg={{ span: 2 }}
          flex="auto"
          style={{
            // display: "flex",
            background: "transparent",
            height: "inherit",
            // borderRight: "0.945833px solid white",
          }}
        ></Col>
        <Col xs={{ span: 22 }} lg={{ span: 22 }}>
          <Row
            gutter={[0, 32]}
            style={{ paddingTop: "10%", paddingBottom: "10%" }}
          >
            <Col span={24}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Caudex",
                  fontWeight: "bold",
                  fontSize: "24.7px",
                  color: "white",
                }}
              >
                Multichain Metaverse Ecosystem
              </h4>
              <div className="dot-parent">
                <div
                  className="dot-circle"
                  style={{ background: "white", opacity: 1 }}
                />
                <div className="dot-circle" />
                <div className="dot-circle" />
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 3 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  color: "white",
                }}
              >
                Ticker
              </h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "rgba(188, 188, 188, 1)",
                }}
              >
                $STN
              </h4>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 5 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  color: "white",
                }}
              >
                Unique NFT
              </h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "rgba(188, 188, 188, 1)",
                }}
              >
                4 level of rarity with passive value
              </h4>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 5 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  color: "white",
                }}
              >
                ShitánVerse
              </h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "rgba(188, 188, 188, 1)",
                }}
              >
                Unique gaming multiverse with cultural depth
              </h4>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 5 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  color: "white",
                }}
              >
                Shitán Bridge
              </h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "rgba(188, 188, 188, 1)",
                }}
              >
                Enables transfer of digital avatars with other metaverse
                ecosystem
              </h4>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  color: "white",
                }}
              >
                Shitán Token
              </h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "rgba(188, 188, 188, 1)",
                }}
              >
                Utility that can be used in multiverse ecosystem and network
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          width: "100vw",
          margin: 0,
          backgroundImage:
            "linear-gradient(90deg, black, black 400px, black 1px, rgba(12, 12, 12, .95) 100px)",
          backdropFilter: "blur(47.2917px)",
        }}
      >
        <Col
          xs={{ span: 2 }}
          lg={{ span: 2 }}
          flex="auto"
          style={{
            // display: "flex",
            backgroundColor: "black",
            minHeight: "100%",
            height: "inherit",
            borderRight: "0.945833px solid #505050",
          }}
        >
          <h1></h1>
        </Col>
        <Col xs={{ span: 22 }} lg={{ span: 22 }}>
          <Row>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "center",
                paddingLeft: 10,
                paddingTop: "8%",
                paddingBottom: "8%",
              }}
            >
              <h3
                style={{
                  fontFamily: "Angas",
                  fontSize: isMobile ? "2rem" : "32px",
                  color: "rgba(232, 7, 24, 1)",
                  letterSpacing: "10%",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                SHITÁN
                <span style={{ color: "rgba(255, 255, 255, 1)" }}>
                  paper
                </span>{" "}
                //
              </h3>
              <br />
              <span style={{ textAlign: "left", color: "white", fontSize: 17 }}>
                We are building a simple yet profound multiverse and multichain
                with the largest gaming ecosystem for the metaverse that is
                built and owned by the community.
              </span>
              <br />
              <br />
              <Button
                style={{ marginLeft: 11 }}
                href={"#"}
                title="READ SHITÁNPAPER"
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "8%",
                paddingBottom: "8%",
              }}
            >
              <Image src="/WHITEPAPER_alt.png" width={350} preview />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          width: "100vw",
          margin: 0,
          // paddingLeft: isMobile ? "85.75px" : "105.72px",
          // paddingTop: "5%",
          // paddingBottom: "5%",
          background: "rgba(232, 7, 24, 1)",
        }}
      >
        <Col
          xs={{ span: 2 }}
          lg={{ span: 2 }}
          flex="auto"
          style={{
            // display: "flex",
            background: "transparent",
            height: "inherit",
            // borderRight: "0.945833px solid white",
          }}
        ></Col>
        <Col xs={{ span: 22 }} lg={{ span: 22 }}>
          <Row
            gutter={[16, 32]}
            style={{ paddingTop: "10%", paddingBottom: "10%" }}
          >
            <Col span={24} style={{ paddingRight: isMobile ? 20 : 0 }}>
              <h3
                style={{
                  fontFamily: "Angas",
                  fontSize: isMobile ? "2rem" : "32px",
                  color: "#0C0C0C",
                  letterSpacing: "10%",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                SHITÁN
                <span style={{ color: "rgba(255, 255, 255, 1)" }}>path</span> //
              </h3>
              <span style={{ color: "white", fontSize: 21 }}>
                Please note that development is a fluid process and timeline are
                subject to change. Any significant delays or setback would be
                communicated to the community as early as possible. Timeline
                assumes no major road
              </span>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 4 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Angas",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "white",
                }}
              >
                01
              </h4>
              <ul
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "white",
                  listStyle: "disc",
                  marginLeft: "-25px",
                }}
              >
                <li>Community growth</li>
                <li>NFT Whitelist</li>
                <li>NFT Launch</li>
              </ul>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 5 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Angas",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "white",
                }}
              >
                02
              </h4>
              <ul
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "white",
                  listStyle: "disc",
                  marginLeft: "-25px",
                }}
              >
                <li>Nft marketplace beta whitelisting</li>
                <li>Airdrop to holders</li>
                <li>Shitán token launch</li>
              </ul>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 5 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Angas",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "white",
                }}
              >
                03
              </h4>
              <ul
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "white",
                  listStyle: "disc",
                  marginLeft: "-25px",
                }}
              >
                <li>3D ingame character claim</li>
                <li>for NFT holders</li>
                <li>Nft marketplace beta launch</li>
                <li>Nft Marketplace mainnet launch</li>
                <li>Shitán game beta whitelisting</li>
              </ul>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 5 }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Angas",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "white",
                }}
              >
                04
              </h4>
              <ul
                style={{
                  margin: 0,
                  marginBottom: 10,
                  fontFamily: "Catamaran",
                  fontWeight: "bold",
                  fontSize: "17.02px",
                  lineHeight: "27.92px",
                  color: "white",
                  listStyle: "disc",
                  marginLeft: "-25px",
                }}
              >
                <li>ShitánBridge beta launch</li>
                <li>Shitán game beta launch</li>
                <li>Shitán game mainnet launch</li>
                <li>Shitánverse beta whitelisting</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          width: "100vw",
          margin: 0,
          backgroundImage:
            "linear-gradient(90deg, black, black 400px, black 1px, rgba(12, 12, 12, .90) 100px)",
          backdropFilter: "blur(47.2917px)",
          // backgroundPosition: "100px",
        }}
      >
        <Col
          xs={{ span: 2 }}
          lg={{ span: 2 }}
          flex="auto"
          style={{
            // display: "flex",
            backgroundColor: "black",
            height: "inherit",
            borderRight: "0.945833px solid #505050",
          }}
        ></Col>
        <Col xs={{ span: 22 }} lg={{ span: 22 }}>
          <Row style={{ paddingTop: "10%", paddingBottom: "10%" }}>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 5 }}
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "start",
                paddingLeft: 10,
                paddingTop: "8%",
                paddingBottom: "8%",
              }}
            >
              <h3
                style={{
                  fontFamily: "Angas",
                  fontSize: isMobile ? "2rem" : "32px",
                  color: "#E80718",
                  letterSpacing: "10%",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                SHI<span style={{ color: "rgba(255, 255, 255, 1)" }}>TÁN</span>
              </h3>
              <br />
              <span
                style={{
                  textAlign: "left",
                  color: "white",
                  fontSize: 15,
                  opacity: 0.5,
                }}
              >
                Copyright © 2022 Shitán
                <br /> All Rights Reserved
              </span>
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 15 }}
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "start",
                paddingTop: "8%",
                paddingBottom: "8%",
              }}
            >
              <Card
                bordered={false}
                style={{
                  background:
                    "linear-gradient(270deg, rgba(66, 66, 66, 0.4753) 76.04%, rgba(66, 66, 66, 0) 100%, rgba(66, 66, 66, 0.49) 0%)",
                  backdropFilter: "blur(47.2917px)",
                  width: "100%",
                }}
                bodyStyle={{
                  paddingLeft: isMobile ? 24 : 100,
                }}
              >
                <h3
                  style={{
                    fontFamily: "Angas",
                    fontSize: isMobile ? "2rem" : "32px",
                    color: "rgba(232, 7, 24, 1)",
                    letterSpacing: "10%",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  JOIN THE CLAN <span style={{ color: "white" }}>//</span>
                </h3>
                <br />
                <span
                  style={{ textAlign: "left", color: "white", fontSize: 17 }}
                >
                  Be part of our amazing community and stay tuned for any news.
                </span>
                <br />
                <br />
                <Space direction="horizontal" size="large" align="center">
                  <a
                    href="https://medium.com/@shitangames"
                    testId="medium-footer"
                  >
                    <Image
                      src="/landing_icons/Vector-4.png"
                      preview={false}
                      width={44}
                      // height={"22.57px"}
                    />
                  </a>
                  <a href="#" testId="telegram-footer">
                    <Image
                      src="/landing_icons/Vector-3.png"
                      width={44}
                      preview={false}
                      // height={"33.72px"}
                    />
                  </a>
                  <a
                    href="https://discord.com/invite/kEGVHumhbU"
                    testId="discord-footer"
                  >
                    <Image
                      src="/landing_icons/Vector-2.png"
                      width={44}
                      preview={false}
                    />
                  </a>
                  <a href="#" testId="instagram-footer">
                    <Image
                      src="/landing_icons/Vector.png"
                      width={24}
                      preview={false}
                    />
                  </a>
                  <a
                    href="https://twitter.com/Shitangames"
                    testId="twitter-footer"
                  >
                    <Image
                      src="/landing_icons/Vector-1.png"
                      width={44}
                      preview={false}
                    />
                  </a>
                </Space>
                <br />
                <br />
                <Button
                  href={"mailto:info@shitan.com"}
                  title="EMAIL FOR PARTNERSHIP"
                  style={{ marginLeft: 11 }}
                />
                <br />
                <br />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <style jsx global>{`
        @font-face {
          font-family: "Angas";
          src: url("/angas-font/Angas-Rp5ze.otf") format("opentype");
          // local(Angas);
        }

        @font-face {
          font-family: "AngasItalic";
          font-weight: bold;
          src: url("/angas-font/AngasItalic-1G6LM.otf") format("opentype");
          // local(AngasItalic);
        }

        @font-face {
          font-family: "Catamaran";
          font-weight: normal;
          src: url("/Catamaran/Catamaran-VariableFont_wght.ttf")
              format("truetype"),
            url("/Catamaran/static/Catamaran-Regular.ttf") format("truetype");
          // local(AngasItalic);
        }

        @font-face {
          font-family: "Orbitron";
          font-weight: normal;
          src: url("/Orbitron/Orbitron-VariableFont_wght.ttf")
              format("truetype"),
            url("/Orbitron/static/Orbitron-Regular.ttf") format("truetype");
          // local(AngasItalic);
        }

        .dot-parent {
          width: 90px;
          display: flex;
          align-items: start;
          justify-content: space-between;
        }

        .dot-parent > .dot-circle {
          display: flex;
          width: 18px;
          height: 18px;
          border-radius: 100%;
          background-color: rgba(169, 169, 169, 1);
          opacity: 0.37;
        }

        .ant-menu-horizontal {
          border-bottom: 0;
        }

        .hero-img {
          animation: bounce 2s;
          // animation-direction: alternate;
          animation-timing-function: ease; /* cubic-bezier(0.5, 0.05, 1, 0.5) */
          animation-iteration-count: infinite;
        }

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

        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active:after,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open:after,
        .ant-menu-horizontal:not(.ant-menu-dark)
          > .ant-menu-item-selected:after,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover:after,
        .ant-menu-horizontal:not(.ant-menu-dark)
          > .ant-menu-submenu-active:after,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open:after,
        .ant-menu-horizontal:not(.ant-menu-dark)
          > .ant-menu-submenu-selected:after,
        .ant-menu-horizontal:not(.ant-menu-dark)
          > .ant-menu-submenu:hover:after {
          border-bottom: 2px solid rgba(232, 7, 24, 1);
        }
        .ant-menu-submenu-popup > .ant-menu {
          background-color: transparent;
          border: 0.4px solid white;
        }
        .ant-menu-item-selected {
          color: black;
        }
      `}</style>
    </div>
  );
}
