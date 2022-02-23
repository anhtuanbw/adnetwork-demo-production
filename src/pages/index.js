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
                player: true,
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

        setResJson(res);
      }
    });
  }, []);

  return (
    <LayoutOne title="Home">
      <Head>
        {/* <script type="text/javascript" src="/libs/ads.js" defer></script> */}
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
              <div id="display_ads_5"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}
