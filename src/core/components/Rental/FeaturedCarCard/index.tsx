import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-remix-icon';

export default function FeaturedCarCard({ item }: any) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.row}>
          <Icon name="car-washing-fill" size={16} />
          <Text style={styles.type}>{item.type}</Text>

          <Icon
            name="star-fill"
            size={16}
            color="#f5a623"
            style={styles.star}
          />
          <Text>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.price}>
        ${item.price}
        <Text style={styles.priceSub}>/Day</Text>
      </Text>
    </TouchableOpacity>
  );
}
