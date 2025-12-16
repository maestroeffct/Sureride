import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-remix-icon';
import Screen from '../../../../components/Screen';
import { styles } from './style';
import { PrimaryButton } from '../../../../components/PrimaryButton';

export default function CarDetailsScreen({ route, navigation }: any) {
  const { car } = route.params;
  const [index, setIndex] = useState(0);

  const images = [car.image, car.image, car.image, car.image, car.image];
  const topInset = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

  return (
    <Screen padded={false} statusBarStyle="light-content">
      {/* IMAGE SLIDER */}
      <View style={[styles.imageWrapper, { paddingTop: topInset }]}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e =>
            setIndex(
              Math.round(
                e.nativeEvent.contentOffset.x /
                  e.nativeEvent.layoutMeasurement.width,
              ),
            )
          }
          renderItem={({ item }) => (
            <Image source={item} style={styles.carImage} />
          )}
        />

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left-s-line" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.pagination}>
          {index + 1}/{images.length}
        </Text>

        <View style={styles.dots}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === index && styles.dotActive]}
            />
          ))}
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.rating}>Car rating: 92/100</Text>

        {/* AGENCY */}
        <View style={styles.agencyCard}>
          <View style={styles.agencyLeft}>
            <View style={styles.logoCircle}>
              <Icon name="car-line" size={18} color="#FFF" />
            </View>

            <View>
              <Text style={styles.agencyName}>Obacars agency</Text>
              <View style={styles.agencyMeta}>
                <Icon name="star-fill" size={14} color="#FFB400" />
                <Text style={styles.agencyRating}>5.0</Text>
                <Text style={styles.agencyReviews}>20 Reviews</Text>
              </View>
            </View>
          </View>

          <Icon name="arrow-right-s-line" size={22} />
        </View>

        {/* SPECS */}
        <Text style={styles.sectionTitle}>Specifications</Text>

        <View style={styles.specRow}>
          <View style={styles.specCard}>
            <Text style={styles.specLabel}>Engine</Text>
            <Text style={styles.specValue}>610hp, 5.2</Text>
          </View>

          <View style={styles.specCard}>
            <Text style={styles.specLabel}>0–100km/h</Text>
            <Text style={styles.specValue}>3.2 s</Text>
          </View>

          <View style={styles.specCard}>
            <Text style={styles.specLabel}>Mileage</Text>
            <Text style={styles.specValue}>610hp, 5.2</Text>
          </View>
        </View>
      </View>

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.fromText}>From</Text>
          <Text style={styles.price}>
            ${car.price}
            <Text style={styles.day}>/Day</Text>
          </Text>
        </View>

        <PrimaryButton
          style={styles.bookBtn}
          onPress={() => {}}
          label="Book Now"
        />

        {/* <TouchableOpacity>
          <Text style={styles.bookTxt}>Book Now</Text>
        </TouchableOpacity> */}
      </View>
    </Screen>
  );
}
