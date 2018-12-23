import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';
import ImageLink from '../components/ImageLink';

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
      <ImageLink
        size={{ width: 800, height: 600 }}
        sizeDivider={2}
        href="/static/penzion1.jpg"
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
