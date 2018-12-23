import React from 'react';
import { Text } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

const Sluzby: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitleServices);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
      <Text style={theme.paragraph}>
        Penzion nabízí možnost zajištění koupelí, masáží, kosmetiky, pedikúry a
        pobytu v solné jeskyni.
      </Text>
    </Page>
  );
};

export default Sluzby;
