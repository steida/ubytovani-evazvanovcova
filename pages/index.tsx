import React from 'react';
// import { defineMessages } from 'react-intl';
import { Text } from 'react-native';
// import Link from '../components/Link';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

// export const indexMessages = defineMessages({
//   pageTitleIndex: {
//     defaultMessage: 'O pensionu',
//     id: 'pageTitleIndex',
//   },
//   webTitle: {
//     defaultMessage: 'Ubytování v Třeboni',
//     id: 'pageTitleIndex',
//   },
//   // pageTitleSignIn: {
//   //   defaultMessage: 'Sign in',
//   //   id: 'pageTitleSignIn',
//   // },
// });

const Index: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitleAbout);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
      {/* <Text style={theme.paragraph}>
        <Link href={{ pathname: '/signin', query: { redirectUrl: '/' } }}>
          Create web
        </Link>
      </Text> */}
    </Page>
  );
};

export default Index;
