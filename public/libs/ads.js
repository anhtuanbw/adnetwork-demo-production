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
    {
      inventoryId: 8,
      placementId: "display_ads_2",
      options: {
        video: {
          ima: false,
        },
        debug: true,
      },
    },
    {
      inventoryId: 9,
      placementId: "display_ads_3",
      options: {
        video: {
          ima: false,
        },
        debug: true,
      },
    },
    {
      inventoryId: 10,
      placementId: "display_ads_4",
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
