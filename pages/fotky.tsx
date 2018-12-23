import React from 'react';
import { Text, View } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';
import ImageLink from '../components/ImageLink';
import Spacer from '../components/Spacer';

const Fotky: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitlePhotos);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
      <View style={theme.photos}>
        <Spacer>
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion1.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion2.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion3.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion4.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion5.jpg"
          />
          <ImageLink
            size={{ width: 600, height: 800 }}
            sizeDivider={4}
            href="/static/penzion6.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion7.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion8.jpg"
          />
          <ImageLink
            size={{ width: 600, height: 800 }}
            sizeDivider={4}
            href="/static/penzion9.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion10.jpg"
          />
          <ImageLink
            size={{ width: 800, height: 600 }}
            sizeDivider={4}
            href="/static/penzion11.jpg"
          />
          <ImageLink
            size={{ width: 600, height: 800 }}
            sizeDivider={4}
            href="/static/penzion12.jpg"
          />
        </Spacer>
      </View>
    </Page>
  );
};

export default Fotky;
