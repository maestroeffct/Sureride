import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function CarTypeCard({ item }: any) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('CarTypeListing', {
          type: item.name,
          id: item.id,
        })
      }
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>
        {item.name} {item.count}
      </Text>
    </TouchableOpacity>
  );
}
