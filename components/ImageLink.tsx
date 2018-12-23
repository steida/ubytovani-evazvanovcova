import React from 'react';
import { Image, Platform } from 'react-native';
import useTheme from '../hooks/useTheme';

interface ImageLinkProps {
  href: string;
  size: {
    width: number;
    height: number;
  };
  sizeDivider: number;
}

const ImageLink = ({ href, size, sizeDivider }: ImageLinkProps) => {
  const theme = useTheme();
  return (
    <Image
      source={{ uri: href }}
      style={[
        {
          alignSelf: 'center',
          height: size.height / sizeDivider,
          width: size.width / sizeDivider,
        },
        theme.image,
      ]}
      {...Platform.select({
        web: {
          accessibilityRole: 'link',
          href,
        },
      })}
    />
  );
};

export default ImageLink;
