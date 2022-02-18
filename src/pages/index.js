import { Col, Row } from "antd";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { useSelector } from "react-redux";
import slugify from "slugify";

import { FEATURE_IDS } from "../common/defines";
import useProductData from "../common/useProductData";
import LayoutOne from "../components/layouts/LayoutOne";
import Container from "../components/other/Container";
import Banners from "../components/shop/Banners";
import ShopLayout from "../components/shop/ShopLayout";
import productData from "../data/product.json";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    // const sdk = window.AicactusSDK || {};
    // var adUnits = [
    //   {
    //     inventoryId: 619,
    //     placementId: "display_ads",
    //   },
    //   {
    //     inventoryId: 620,
    //     placementId: "display_ads_1",
    //   },
    // ];
    // sdk?.requestAds(adUnits);

    if (window.AicactusSDK) {
      console.log("win: ", window.AicactusSDK);
    }
  }, []);

  return (
    <LayoutOne title="Home">
      <Head>
        <script type="text/javascript" src="/libs/ads.js" defer></script>
      </Head>
      <div className="shop-layout">
        <Container type={"fluid"}>
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
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}
