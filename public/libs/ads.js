var sdk = window.AicactusSDK || {};
console.log("🚀 ~ file: ads.js ~ line 2 ~ sdk", sdk);

var adUnits = [
  {
    inventoryId: 619,
    placementId: "display_ads",
  },
];

sdk.requestAds(adUnits);
sdk.requestAds([
  {
    inventoryId: 620,
    placementId: "display_ads_1",
  },
]);
