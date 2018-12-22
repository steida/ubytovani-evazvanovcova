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
  spaceSmaller: 6,
  spaceSmallest: 3,
};

type Colors = typeof colors;
type Dimensions = typeof dimensions;

export const createTheme = (colors: Colors, dimensions: Dimensions) => {
  const text: TextStyle = {
    color: colors.foreground,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 16,
    lineHeight: 24,
  };

  const marginBottom = {
    marginBottom: 24,
  };

  const paragraph: TextStyle = {
    ...text,
    ...marginBottom,
    paddingHorizontal: dimensions.space,
  };

  const heading1: TextStyle = {
    ...text,
    ...marginBottom,
    fontFamily: 'serif',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 42,
    textAlign: 'center',
  };

  const page: ViewStyle = {
    backgroundColor: colors.background,
    // @ts-ignore Web only.
    backgroundImage: `url('static/back.png')`,
    flex: 1,
    paddingHorizontal: 16,
  };

  const container = {
    backgroundColor: 'rgb(255, 180, 49)',
    borderColor: colors.black,
    borderWidth: 2,
    flex: 1,
    marginHorizontal: 'auto',
    marginVertical: 8,
    maxWidth: 804,
    // https://css-tricks.com/tale-width-max-width/
    width: '100%',
  };

  const logo: ViewStyle = {
    // @ts-ignore Web only.
    backgroundImage: `url('static/head.png')`,
    // potrebuju obrazek, aby se roztahoval podle pozadi, hmm
    // takze asi image component, ok
    height: 178,
  };

  const header: ViewStyle = {
    backgroundColor: colors.black,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: dimensions.spaceSmall,
    paddingVertical: dimensions.spaceSmaller,
    ...marginBottom,
  };

  const headerLink: TextStyle = {
    ...text,
    color: colors.foregroundInverse,
    fontSize: 13,
    fontWeight: '700',
  };

  const body: ViewStyle = {
    flex: 1,
  };

  const footer: ViewStyle = {
    backgroundColor: colors.black,
  };

  const footerText: TextStyle = {
    ...text,
    color: colors.foregroundInverse,
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: dimensions.spaceSmallest,
    textAlign: 'center',
  };

  const link: TextStyle = {
    // Link does not extend text, because link can be in any text and inherits
    // it's styles like fontFamily and fontSize. Therefore, Link must be always
    // wrapped by Text.
    color: colors.primary,
  };

  const linkActive: TextStyle = {
    textDecorationLine: 'underline',
  };

  const spacer: ViewStyle = {
    width: dimensions.spaceSmall,
  };

  const row: ViewStyle = {
    flexDirection: 'row',
  };

  return {
    body,
    container,
    footer,
    footerText,
    header,
    headerLink,
    heading1,
    link,
    linkActive,
    logo,
    marginBottom,
    page,
    paragraph,
    row,
    spacer,
    text,
  };
};

const theme = createTheme(colors, dimensions);

export type Theme = typeof theme;

export default theme;
