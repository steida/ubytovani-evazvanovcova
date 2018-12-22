import { TextStyle, ViewStyle } from 'react-native';

// https://yeun.github.io/open-color/
const colors = {
  background: 'rgb(230, 200, 160)',
  black: '#000',
  foreground: '#000',
  foregroundInverse: '#fff',
  gray: 'rgb(153, 163, 173)',
  grayLight: 'rgb(225, 225, 225)',
  primary: '#228be6',
};

const dimensions = {
  space: 24, // Like default lineHeight
  spaceSmall: 12,
  spaceSmaller: 4,
  spaceSmallest: 2,
};

const theme: { [name: string]: ViewStyle | TextStyle } = {};

theme.text = {
  color: colors.foreground,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: 16,
  lineHeight: 24,
};

theme.marginBottom = {
  marginBottom: 24,
};

theme.paragraph = {
  ...theme.text,
  ...theme.marginBottom,
};

theme.heading1 = {
  ...theme.text,
  ...theme.marginBottom,
  fontFamily: 'serif',
  fontSize: 28,
  fontStyle: 'italic',
  fontWeight: 'bold',
  lineHeight: 42,
  textAlign: 'center',
};

theme.page = {
  backgroundColor: colors.background,
  // @ts-ignore Web only.
  backgroundImage: `url('static/back.png')`,
  flex: 1,
  paddingHorizontal: 16,
};

theme.container = {
  backgroundColor: 'rgb(255, 180, 49)',
  borderColor: colors.black,
  borderWidth: 2,
  // flex: 1,
  marginHorizontal: 'auto',
  marginTop: 8,
  maxWidth: 804,
  // https://css-tricks.com/tale-width-max-width/
  width: '100%',
};

theme.header = {
  backgroundColor: colors.black,
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingHorizontal: dimensions.spaceSmall,
  paddingVertical: dimensions.spaceSmaller,
};

theme.headerLink = {
  ...theme.text,
  color: colors.foregroundInverse,
  fontSize: 13,
  fontWeight: '700',
};

theme.body = {
  flex: 1,
};

theme.footer = {
  backgroundColor: colors.black,
};

theme.footerText = {
  ...theme.text,
  color: colors.foregroundInverse,
  fontSize: 12,
  fontWeight: 'bold',
  paddingVertical: dimensions.spaceSmaller,
  textAlign: 'center',
};

theme.link = {
  // Link does not extend text, because link can be in any text and inherits
  // it's styles like fontFamily and fontSize. Therefore, Link must be always
  // wrapped by Text.
  color: colors.primary,
};

theme.linkActive = {
  textDecorationLine: 'underline',
};

theme.spacer = {
  width: dimensions.spaceSmall,
};

theme.row = {
  flexDirection: 'row',
};

export default theme;
