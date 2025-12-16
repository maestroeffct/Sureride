import {
  View,
  Text,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import Screen from '../../../../components/Screen';
// import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import Icon from 'react-native-remix-icon';

import CarTypeCard from '../../../../components/Rental/CarTypeCard';
import FeaturedCarCard from '../../../../components/Rental/FeaturedCarCard';
import CategoryFilter from '../../../../components/Rental/CategoryFilter';

const CarRental = () => {
  const carTypes = [
    {
      id: '1',
      name: 'Sport',
      count: 35,
      image: require('../../../../../assets/images/rental/sport.jpg'),
    },
    {
      id: '2',
      name: 'Electric',
      count: 35,
      image: require('../../../../../assets/images/rental/electric_car.jpg'),
    },
    {
      id: '3',
      name: 'Classic',
      count: 35,
      image: require('../../../../../assets/images/rental/classic_car.jpg'),
    },
  ];

  const featuredCars = [
    {
      id: '1',
      name: 'Audi R8 Performance',
      price: 560,
      rating: 5.0,
      type: 'Hybrid',
      image: require('../../../../../assets/images/rental/featured1.jpg'),
    },
    {
      id: '2',
      name: 'Audi R8 Performance',
      price: 560,
      rating: 5.0,
      type: 'Hybrid',
      image: require('../../../../../assets/images/rental/featured1.jpg'),
    },
  ];

  const filters = ['All', 'Brand', 'Price', 'Body', 'More'];
  const topInset = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

  return (
    <Screen padded={false} statusBarStyle="dark-content">
      <ScrollView
        style={[styles.container, { paddingTop: topInset }]}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationLabel}>Your Location</Text>
            <Text style={styles.locationValue}>
              Shoprite, Oda Road <Icon name="user-location-fill" size={16} />
            </Text>
          </View>
          <Icon name="menu-fill" size={26} />
        </View>

        {/* FILTERS → FlatList */}
        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.filterRow}
          contentContainerStyle={{ paddingRight: 10 }}
          renderItem={({ item, index }) => (
            <CategoryFilter label={item} active={index === 0} />
          )}
        />

        {/* CAR TYPES → FlatList */}
        <FlatList
          data={carTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          style={styles.carTypeRow}
          contentContainerStyle={{ paddingRight: 10 }}
          renderItem={({ item }) => <CarTypeCard item={item} />}
        />

        {/* Featured Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured cars</Text>
          <Text style={styles.sectionCount}>21 available</Text>
        </View>

        {/* FEATURED CARS (map stays — vertical list is short) */}
        {featuredCars.map(car => (
          <FeaturedCarCard key={car.id} item={car} />
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </Screen>
  );
};

export default CarRental;
