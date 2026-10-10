import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type AvatarProps = {
  source: ImageSourcePropType;
  size?: number;
};

export default function Avatar({ source, size = 36 }: AvatarProps) {
  return (
    <Image
      source={source}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: { borderWidth: 1, borderColor: '#DBDBDB' },
});