import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Text } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

const Kontakt: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitleContact);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
      <Text style={theme.heading2}>Adresa</Text>
      <Text style={theme.paragraph}>Sokolská 36, 379 01 Třeboň</Text>
      <Text style={theme.paragraph}>
        Vjezd pro auta a parkoviště z ulice Vrchlického 935
      </Text>
      <Text style={theme.heading2}>Email</Text>
      <Text style={theme.paragraph}>eva.zvanovcova@email.cz</Text>
      <Text style={theme.heading2}>Telefon</Text>
      <Text style={theme.paragraph}>+420 725 169 791</Text>
    </Page>
  );
};

export default Kontakt;
