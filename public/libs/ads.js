if (window.AicactusSDK) {
  var sdk = window.AicactusSDK || {};
  var adUnits = [
    {
      inventoryId: 1,
      placementId: "display_ads",
      options: {
        video: {
          ima: false,
        },
        debug: true,
      },
    },
    {
      inventoryId: 2,
      placementId: "display_ads_1",
      options: {
        video: {
          ima: false,
        },
        debug: true,
      },
    },
  ];
  sdk.requestAds(adUnits);
}
