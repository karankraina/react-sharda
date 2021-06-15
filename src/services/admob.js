import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob';

export const showInterAd = adId => {
    AdMobInterstitial.setAdUnitID(adId);
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().catch(error => console.warn(error));
}