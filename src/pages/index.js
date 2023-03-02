import { Col, Row, Input } from 'antd';
import Head from 'next/head';
import * as React from 'react';

import LayoutOne from '../components/layouts/LayoutOne';
import Container from '../components/other/Container';

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
}

const INVENTORY_KEY = 'INVENTORY_KEY';
const CONTAINER_KEY = 'CONTAINER_KEY';
const SET_AB_USER_ID = 'SET_AB_USER_ID';

export default function Home() {
  const [containerId, setContainerId] = React.useState('');
  const [inventoryId, setInventoryId] = React.useState('');
  const [userId, setUserId] = React.useState('');
  console.log("🚀 ~ file: index.js:30 ~ Home ~ userId:", userId)
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const currentContainerId = localStorage.getItem(CONTAINER_KEY);
    if (currentContainerId) {
      setContainerId(currentContainerId);
    } else {
      setContainerId('478878ae-2683-4dfe-8977-31f9a51013e6');
    }
  }, []);

  React.useEffect(() => {
    const currentInventoryId = localStorage.getItem(INVENTORY_KEY);
    if (currentInventoryId) {
      setInventoryId(currentInventoryId);
    } else {
      setInventoryId('6');
    }
  }, []);

  React.useEffect(() => {
    const currentUserId = localStorage.getItem(SET_AB_USER_ID);
    if (currentUserId) {
      setUserId(currentUserId);
    } else {
      setUserId('');
    }
  }, []);

  const onHandleContainerId = async (evt) => {
    setIsLoading(true);
    setContainerId(evt.target.value);
    localStorage.setItem(CONTAINER_KEY, evt.target.value);
    await sleep(500);
    setIsLoading(false);
  };

  const onHandleInventoryId = async (evt) => {
    setIsLoading(true);
    setInventoryId(evt.target.value);
    localStorage.setItem(INVENTORY_KEY, evt.target.value);
    await sleep(500);
    setIsLoading(false);
  };

  const enabled = !!containerId.length && !!inventoryId.length;

  return (
    <LayoutOne title="Home">
      <div className="shop-layout">
        <Container type={'fluid'}>
          <Row gutter={8}>
            <Col span={5}>
              <Input placeholder="Container ID" onChange={onHandleContainerId} value={containerId} />
            </Col>
            <Col span={5}>
              <Input placeholder="Inventory ID" onChange={onHandleInventoryId} value={inventoryId} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={24}>
              {!isLoading && enabled ? (
                <AdComponent containerId={containerId} inventoryId={inventoryId} userId={userId} />
              ) : (
                'Loading...'
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}

const devURL = 'https://localhost:9081/aiactiv-sdk.development.min.js';
const prodURL = 'https://sdk-cdn.aiactiv.io/aiactiv-sdk.min.js';

function AdComponent({ containerId, inventoryId, userId }) {
  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.AiactivSDK||(window.AiactivSDK={}),AiactivSDK.load=function(t){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="${prodURL}?t="+Date.now(),e.addEventListener?e.addEventListener("load",function(e){"function"==typeof t&&t(e)},!1):e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&t(window.event)};let a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)},AiactivSDK.load(function(){AiactivSDK.initialize({containerId:"${containerId}@web", type: ["adnetwork"]}),AiactivSDK.callMethodsFromContainer();
            AiactivSDK.on('AD_NETWORK_READY', function() {
              const adUnits = [
                {
                  inventoryId: ${parseInt(inventoryId, 10)},
                  placementId: "display_ads",
                  options: {
                    video: {
                      player: true,
                    },
                  }
                },
              ];

              AiactivSDK.requestAds(adUnits)
            });
          });`,
          }}
        ></script>

        <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/node_modules/video.js/dist/video-js.min.css"
        />
        <link
          rel="stylesheet"
          href="https://googleads.github.io/videojs-ima/node_modules/videojs-contrib-ads/dist/videojs.ads.css"
        />
        <link rel="stylesheet" href="https://googleads.github.io/videojs-ima/dist/videojs.ima.css" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `localStorage.setItem("aiactiv_v1.0.3_ajs_anonymous_id","${userId}"); ${setCookie(
              'aiactiv_v1.0.3_ajs_anonymous_id',
              userId,
              300,
            )}`,
          }}
        ></script>
      </Head>

      <Row gutter={8}>
        <Col span={24}>
          <div id="display_ads"></div>
        </Col>
      </Row>
    </div>
  );
}
