var sdk = window.AicactusSDK || {};
console.log("🚀 ~ file: ads.js ~ line 2 ~ sdk", sdk);

var adUnits = [
  {
    inventoryId: 619,
    placementIds: ["display_ads"],
  },
  {
    inventoryId: 620,
    placementIds: ["display_ads_1"],
  },
  // {
  //   inventoryId: "8f120212-0fd2-4154-a461-608e20a5c331",
  //   placementIds: ["display_ads_2"],
  // },
  // {
  //   inventoryId: "8f120212-0fd2-4154-a461-608e20a5c331",
  //   placementId: "display_ads_2",
  // },
];

sdk.requestAds(adUnits);
