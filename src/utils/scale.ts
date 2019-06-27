import { SCREEN_WIDTH, SCREEN_HEIGHT } from './metrics';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

interface ScaleType {
    width?: number;
    size: number;
}

const scale = ({ size, width = SCREEN_WIDTH }: ScaleType) => (width / guidelineBaseWidth) * size;

interface VerticalScaleType {
    height?: number;
    size: number;
}

const verticalScale = ({ size, height = SCREEN_HEIGHT }: VerticalScaleType) => (height / guidelineBaseHeight) * size;

interface ModerateScaleType {
    size: number;
    width?: number;
    factor?: number;
    }

const moderateScale = ({
    size,
    width = SCREEN_WIDTH,
    factor = 0.5,
}: ModerateScaleType) => size + (scale({ width, size }) - size) * factor;

interface ModerateVerticalScaleType {
    size: number;
    height?: number;
    factor?: number;
}

const moderateVerticalScale = ({
    size,
    height = SCREEN_HEIGHT,
    factor = 0.5,
}: ModerateVerticalScaleType) =>
    size + (verticalScale({ height, size }) - size) * factor;

export {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
};