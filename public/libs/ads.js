var sdk = window.AicactusSDK || {};

var adUnits = [
  {
    inventoryId: "ce47ae94-a2b4-4215-9a72-06f3ccb38333",
    placementId: "display_ads",
  },
  // {
  //   inventoryId: "3cdb9926-bbeb-4e55-ac08-ed634efe0cf2",
  //   placementId: "display_ads_1",
  // },
  // {
  //   inventoryId: "8f120212-0fd2-4154-a461-608e20a5c331",
  //   placementId: "display_ads_2",
  // },
];

sdk.requestAds(adUnits);
