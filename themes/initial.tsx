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

type Colors = typeof colors;

const dimensions = {
  space: 24, // Like default lineHeight
  spaceSmall: 12,
  spaceSmaller: 2,
};

type Dimensions = typeof dimensions;

export const createTheme = (colors: Colors, dimensions: Dimensions) => {
  const text: TextStyle = {
    color: colors.foreground,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 16,
    lineHeight: 24,
  };

  const marginBottom: ViewStyle = {
    marginBottom: 24,
  };

  const paragraph: TextStyle = {
    ...text,
    ...marginBottom,
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
  };

  const container: ViewStyle = {
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

  const header: ViewStyle = {
    flexDirection: 'row',
    paddingVertical: dimensions.space,
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
    paddingVertical: dimensions.spaceSmaller,
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

  const button: TextStyle = {
    ...text,
  };

  const row: ViewStyle = {
    flexDirection: 'row',
  };

  return {
    body,
    button,
    container,
    footer,
    footerText,
    header,
    heading1,
    link,
    linkActive,
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
