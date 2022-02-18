import { Col, Row } from "antd";
import Head from "next/head";

import LayoutOne from "../components/layouts/LayoutOne";
import Container from "../components/other/Container";
import Banners from "../components/shop/Banners";

export default function Home() {
  return (
    <LayoutOne title="Video">
      <Head>
        <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/examples/style.css"
        />
        <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/node_modules/video.js/dist/video-js.min.css"
        />
        <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/node_modules/videojs-contrib-ads/dist/videojs.ads.css"
        />
        <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/dist/videojs.ima.css"
        />

        <script type="text/javascript" src="/libs/test-video.js"></script>
      </Head>

      <Banners />

      <div className="shop-layout">
        <Container type={"fluid"}>
          <Row gutter={30}>
            <Col className="gutter-row"></Col>
            <Col className="gutter-row">
              <video
                id="content_video"
                className="video-js vjs-default-skin"
                poster="https://github.com/googleads/videojs-ima/blob/main/examples/posters/bbb_poster.jpg"
                controls
                preload="auto"
                width="640"
                height="360"
                playsInline
              >
                <source
                  src="//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}
