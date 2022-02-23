import { Col, Row } from "antd";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { useSelector } from "react-redux";
import slugify from "slugify";

import { FEATURE_IDS } from "../common/defines";
import useProductData from "../common/useProductData";
import JsonViewer from "../components/JsonViewer";
import LayoutOne from "../components/layouts/LayoutOne";
import Container from "../components/other/Container";
import Banners from "../components/shop/Banners";
import ShopLayout from "../components/shop/ShopLayout";
import productData from "../data/product.json";

export default function Home() {
  const router = useRouter();

  const [resJson, setResJson] = React.useState({});

  React.useEffect(() => {
    window.addEventListener("load", async () => {
      if (window.AicactusSDK) {
        const sdk = window.AicactusSDK || {};
        const adUnits = [
          {
            inventoryId: 1,
            placementId: "display_ads",
          },
          {
            inventoryId: 2,
            placementId: "display_ads_1",
            options: {
              video: {
                player: true,
              },
              debug: true,
            },
          },
          {
            inventoryId: 8,
            placementId: "display_ads_2",
          },
          {
            inventoryId: 9,
            placementId: "display_ads_3",
          },
          {
            inventoryId: 10,
            placementId: "display_ads_4",
          },
          {
            inventoryId: 20,
            placementId: "display_ads_5",
            options: {
              video: {
                player: false,
                size: {
                  width: 1600,
                  height: 900,
                  // width: 1920,
                  // height: 1080,
                },
              },
              debug: true,
            },
          },
        ];

        // const adUnits = [
        //   {
        //     inventoryId: 24,
        //     placementId: "display_ads_1",
        //     options: {
        //       video: {
        //         usePlayer: false,
        //       },
        //       debug: true,
        //     },
        //   },
        //   {
        //     inventoryId: 23,
        //     placementId: "display_ads_2",
        //     options: {
        //       video: {
        //         usePlayer: false,
        //       },
        //       debug: true,
        //     },
        //   },
        //   {
        //     inventoryId: 22,
        //     placementId: "display_ads_3",
        //     options: {
        //       video: {
        //         usePlayer: false,
        //       },
        //       debug: true,
        //     },
        //   },
        //   {
        //     inventoryId: 21,
        //     placementId: "display_ads_4",
        //     options: {
        //       video: {
        //         usePlayer: false,
        //       },
        //       debug: true,
        //     },
        //   },
        // ];
        const res = await sdk.requestAds(adUnits);
        console.log(
          "🚀 ~ file: index.js ~ line 119 ~ window.addEventListener ~ res",
          res
        );

        setResJson(res);

        var autoplayAllowed = false;
        var autoplayRequiresMute = false;
        var player;
        var wrapperDiv;

        function checkUnmutedAutoplaySupport() {
          canAutoplay
            .video({ timeout: 100, muted: false })
            .then(function (response) {
              if (response.result === false) {
                // Unmuted autoplay is not allowed.
                checkMutedAutoplaySupport();
              } else {
                // Unmuted autoplay is allowed.
                autoplayAllowed = true;
                autoplayRequiresMute = false;
                initPlayer();
              }
            });
        }

        function checkMutedAutoplaySupport() {
          canAutoplay
            .video({ timeout: 100, muted: true })
            .then(function (response) {
              if (response.result === false) {
                // Muted autoplay is not allowed.
                autoplayAllowed = false;
                autoplayRequiresMute = false;
              } else {
                // Muted autoplay is allowed.
                autoplayAllowed = true;
                autoplayRequiresMute = true;
              }
              initPlayer();
            });
        }

        function initPlayer() {
          var vjsOptions = {
            autoplay: autoplayAllowed,
            muted: autoplayRequiresMute,
            debug: true,
          };
          player = videojs("content_video", vjsOptions);

          var imaOptions = {
            id: "content_video",
            adTagUrl: res.videos[0].vastTagURL,
          };
          player.ima(imaOptions);

          if (!autoplayAllowed) {
            if (
              navigator.userAgent.match(/iPhone/i) ||
              navigator.userAgent.match(/iPad/i) ||
              navigator.userAgent.match(/Android/i)
            ) {
              startEvent = "touchend";
            }

            wrapperDiv = document.getElementById("content_video");
            wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
          }
        }

        function initAdDisplayContainer() {
          player.ima.initializeAdDisplayContainer();
          wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
        }

        var startEvent = "click";
        checkUnmutedAutoplaySupport();
      }
    });
  }, []);

  return (
    <LayoutOne title="Home">
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/examples/style.css"
        /> */}
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
      </Head>
      <div className="shop-layout">
        <Container type={"fluid"}>
          <Row
            gutter={30}
            style={{
              marginBottom: 40,
            }}
          >
            <Col className="gutter-row" xs={24}>
              <JsonViewer src={resJson} />
            </Col>
          </Row>
          <Row gutter={30}>
            <Col className="gutter-row">
              <div id="display_ads"></div>
            </Col>
            <Col className="gutter-row">
              <div id="display_ads_1"></div>
            </Col>
            <Col className="gutter-row">
              <div id="display_ads_2"></div>
            </Col>
            <Col className="gutter-row">
              <div id="display_ads_3"></div>
            </Col>
            <Col className="gutter-row">
              <div id="display_ads_4"></div>
            </Col>
            <Col className="gutter-row">
              <div
                id="display_ads_5"
                style={{
                  position: "relative",
                }}
              >
                <video
                  id="content_video"
                  className="video-js vjs-default-skin"
                  poster="https://googleads.github.io/videojs-ima/examples/posters/bbb_poster.jpg"
                  controls
                  preload="auto"
                  width="1366"
                  height="768"
                  playsInline
                >
                  <source
                    src="//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}
