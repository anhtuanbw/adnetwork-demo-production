var sdk = window.AicactusSDK || {};
console.log("🚀 ~ file: ads.js ~ line 2 ~ sdk", sdk);

var adUnits = [
  {
    inventoryId: 493,
    placementIds: ["display_ads"],
  },
  // {
  //   inventoryId: "3cdb9926-bbeb-4e55-ac08-ed634efe0cf2",
  //   placementIds: ["display_ads_1"],
  // },
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
