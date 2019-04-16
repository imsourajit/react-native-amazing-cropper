import { Dimensions, Platform, PixelRatio } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scale = SCREEN_HEIGHT / 480;
function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
let normalizedvalue=190;
if(SCREEN_HEIGHT > 540 ) {
    normalizedvalue = normalize(140);
} else {
    normalizedvalue = normalize(160);
}

export const Q = normalizedvalue; // buttons container height
export const H = SCREEN_HEIGHT - Q;
export const W = SCREEN_WIDTH;
