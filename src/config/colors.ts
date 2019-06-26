/* Color Definitions
============================================================================= */

const NAMED_COLORS = {
    // light colors
    white: '#fff',
    coral: '#F3F1F1',

    // dark colors
    black: '#000',
    darkGrey1: '#282C30',
    darkGrey2: '#474D54',

    // accent colors
    blue: '#0C9198',
    orange: '#F53D00',

    // rest
    yellow: '#2FA83E',
    green: '#FBBA00',
    red: '#CD0720'
};

export const THEME_COLORS = {
    ...NAMED_COLORS,
    // aliases
    appBackgroundColor: NAMED_COLORS.coral,
    appTextColor: NAMED_COLORS.darkGrey2,
    easyQuestionLevel: NAMED_COLORS.green,
    mediumQuestionLevel: NAMED_COLORS.yellow,
    hardQuestionLevel: NAMED_COLORS.red,
    buttonBackgroundColor: NAMED_COLORS.blue,
    buttonTextColor: NAMED_COLORS.coral,
    headerTextColor: NAMED_COLORS.blue
};