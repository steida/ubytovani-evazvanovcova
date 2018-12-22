import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Image, Platform, Text } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

const Index: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitleAbout);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
      <Text style={theme.paragraph}>
        <FormattedMessage
          id="indexP1"
          defaultMessage="Nabízíme Vám levné celoroční ubytování 5 minut od centra a Bertinných lázní a přibližně 10 minut od Lázní Aurora. V blízkosti je zámecký park a rybník Svět. V okolí je velký výběr kvalitních restaurací."
        />
      </Text>
      <Text style={theme.paragraph}>
        <FormattedMessage
          id="indexP2"
          defaultMessage="Možnost venkovního posezení na terase nebo dvorku. U zadního vchodu domu je možnost parkování. Poskytujeme dále úschovnu kol."
        />
      </Text>
      <Image
        source={{ uri: '/static/penzion1.jpg' }}
        style={[
          {
            alignSelf: 'center',
            height: 600 / 2,
            width: 800 / 2,
          },
          theme.image,
        ]}
        {...Platform.select({
          web: {
            accessibilityRole: 'link',
            href: '/static/penzion1.jpg',
          },
        })}
      />
      <Text style={theme.paragraph}>
        <FormattedMessage
          id="indexP3"
          defaultMessage="Penzion má 3 dvoulúžkové pokoje a jeden čtyřlůžkový apartmán. vše s možností přistýlek. Všechny pokoje mají vlastní sociální zařízení a další vybavení (varné konvice, lednici,...) Pokoj číslo 1 a apartmán mají částečně vybavenou kuchyňskou linku."
        />
      </Text>
      <Text style={theme.paragraph}>
        <FormattedMessage
          id="indexP4"
          defaultMessage="Celý objekt je nekuřácký."
        />
      </Text>
    </Page>
  );
};

export default Index;
