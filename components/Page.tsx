import Head from 'next/head';
import React from 'react';
import { defineMessages } from 'react-intl';
import { Text, View } from 'react-native';
import Link, { Href } from '../components/Link';
import Spacer from '../components/Spacer';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

export const pageMessages = defineMessages({
  pageTitleAbout: {
    defaultMessage: 'O penzionu',
    id: 'pageTitleAbout',
  },
  pageTitleContacts: {
    defaultMessage: 'Kontakty',
    id: 'pageTitleContacts',
  },
  pageTitleGallery: {
    defaultMessage: 'Fotogalerie',
    id: 'pageTitleGallery',
  },
  pageTitlePrices: {
    defaultMessage: 'Ceník',
    id: 'pageTitlePrices',
  },
  pageTitleServices: {
    defaultMessage: 'Služby',
    id: 'pageTitleServices',
  },
  webTitle: {
    defaultMessage: 'Ubytování v Třeboni',
    id: 'webTitle',
  },
});

const Logo: React.FunctionComponent = () => {
  const theme = useTheme();
  return <View style={theme.logo} />;
};

const Header: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const HeaderLink = ({ href, message }: { href: Href; message: any }) => {
    return (
      <Link style={theme.headerLink} href={href}>
        {intl.formatMessage(message)}
      </Link>
    );
  };

  return (
    <View style={theme.header}>
      <Spacer>
        <HeaderLink href="/" message={pageMessages.pageTitleAbout} />
        <HeaderLink href="/cenik" message={pageMessages.pageTitlePrices} />
        <HeaderLink href="/fotky" message={pageMessages.pageTitleGallery} />
        <HeaderLink href="/kontakt" message={pageMessages.pageTitleContacts} />
        <HeaderLink href="/sluzby" message={pageMessages.pageTitleServices} />
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
          <Logo />
          <Header />
          <View style={theme.body}>{props.children}</View>
          <Footer />
        </View>
      </View>
    </>
  );
};

export default Page;
