import Head from 'next/head';
import React from 'react';
import { defineMessages } from 'react-intl';
import { Text, View } from 'react-native';
import Link from '../components/Link';
import Spacer from '../components/Spacer';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

export const pageMessages = defineMessages({
  pageTitleIndex: {
    defaultMessage: 'O penzionu',
    id: 'pageTitleIndex',
  },
  webTitle: {
    defaultMessage: 'Ubytování v Třeboni',
    id: 'pageTitleIndex',
  },
  // pageTitleSignIn: {
  //   defaultMessage: 'Sign in',
  //   id: 'pageTitleSignIn',
  // },
});

const Header: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  return (
    <View style={theme.header}>
      <Spacer>
        <Text style={theme.text}>
          <Link href="/">
            {intl.formatMessage(pageMessages.pageTitleIndex)}
          </Link>
        </Text>
        {/* <Text style={theme.text}>
          <Link href={{ pathname: '/signin' }}>
            {intl.formatMessage(pageMessages.pageTitleSignIn)}
          </Link>
        </Text> */}
      </Spacer>
    </View>
  );
};

const Footer: React.FunctionComponent = () => {
  const theme = useTheme();
  return (
    <View style={theme.footer}>
      <Text style={theme.footerText}>eva.zvanovcova@email.cz</Text>
    </View>
  );
};

const Page: React.FunctionComponent<{
  title: string;
}> = props => {
  const theme = useTheme();
  const intl = useIntl();
  const webTitle = intl.formatMessage(pageMessages.webTitle);
  return (
    <>
      <Head>
        <title>{`${props.title} - ${webTitle}`}</title>
      </Head>
      <View style={theme.page}>
        <View style={theme.container}>
          <Header />
          <View style={theme.body}>{props.children}</View>
          <Footer />
        </View>
      </View>
    </>
  );
};

export default Page;
