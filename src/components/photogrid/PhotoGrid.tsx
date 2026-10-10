import { FlatList, Image, Pressable, useWindowDimensions } from 'react-native';
import { ReactElement } from 'react';
import { Post } from '../../types';

type PhotoGridProps = {
  posts: Post[];
  onPressPost: (id: string) => void;
  header?: ReactElement;
};

const COLUMNS = 3;
const GAP = 2;

export default function PhotoGrid({ posts, onPressPost, header }: PhotoGridProps) {
  const { width } = useWindowDimensions();
  const size = (width - GAP * (COLUMNS - 1)) / COLUMNS;

  return (
    <FlatList
      data={posts}
      numColumns={COLUMNS}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={header}
      columnWrapperStyle={{ gap: GAP }}
      contentContainerStyle={{ gap: GAP }}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPressPost(item.id)}>
          <Image source={item.image} style={{ width: size, height: size }} />
        </Pressable>
      )}
    />
  );
}