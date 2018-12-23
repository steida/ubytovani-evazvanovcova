import React from 'react';
import { Text } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

const Cenik: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitlePrices);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
      <Text style={theme.heading2}>Základní ceny</Text>
      <Text style={theme.text}>Pokoj - 500 Kč osoba / den</Text>
      <Text style={[theme.text, theme.marginBottom]}>Apartmán - 2500 Kč</Text>
      <Text style={theme.heading2}>Další náklady</Text>
      <Text style={theme.text}>Pes - 100 Kč na den</Text>
      <Text style={[theme.text, theme.marginBottom]}>
        Přistýlka - 300 Kč na den
      </Text>
    </Page>
  );
};

export default Cenik;
