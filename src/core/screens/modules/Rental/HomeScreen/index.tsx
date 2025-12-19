import {
  View,
  Text,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import Icon from 'react-native-remix-icon';
import ScreenWrapper from '@/core/components/ScreenWrapper';
import CategoryFilter from '@/core/components/Rental/CategoryFilter';
import CarTypeCard from '@/core/components/Rental/CarTypeCard';
import FeaturedCarCard from '@/core/components/Rental/FeaturedCarCard';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const CarRental = () => {
  const topInset = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;
  const navigation = useNavigation();

  const filters = ['All', 'Sport', 'Electric', 'Classic', 'SUV', 'Luxury'];
  const carTypes = [
    {
      id: '1',
      name: 'Sport',
      count: 35,
      image: require('@/assets/images/rental/sport.jpg'),
    },
    {
      id: '2',
      name: 'Electric',
      count: 35,
      image: require('@/assets/images/rental/electric_car.jpg'),
    },
    {
      id: '3',
      name: 'Classic',
      count: 35,
      image: require('@/assets/images/rental/classic_car.jpg'),
    },
  ];

  const featuredCars = [
    {
      id: '1',
      name: 'Audi R8 Performance',
      price: 560,
      rating: 5.0,
      type: 'Hybrid',
      image: require('@/assets/images/rental/featured1.jpg'),
    },
    {
      id: '2',
      name: 'Audi R8 Performance',
      price: 560,
      rating: 5.0,
      type: 'Hybrid',
      image: require('@/assets/images/rental/featured1.jpg'),
    },
  ];

  return (
    <ScreenWrapper
      padded={false}
      statusBarStyle="dark-content"
      disableBottomSafeArea
    >
      <View style={styles.screen}>
        {/* HEADER */}
        <View
          style={[
            styles.horizontalPadding,
            styles.header,
            { paddingTop: topInset + 10 },
          ]}
        >
          <View>
            <Text style={styles.locationLabel}>Your Location</Text>
            <Text style={styles.locationValue}>
              Shoprite, Oda Road <Icon name="user-location-fill" size={16} />
            </Text>
          </View>
          <Icon
            name="menu-fill"
            size={26}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>

        {/* FILTERS */}
        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.filterRow}
          contentContainerStyle={[
            styles.horizontalPadding,
            { paddingRight: 10 },
          ]}
          renderItem={({ item, index }) => (
            <CategoryFilter label={item} active={index === 0} />
          )}
        />

        {/* SCROLLABLE CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.horizontalPadding,
            styles.scrollContent,
          ]}
        >
          {/* CAR TYPES */}
          <FlatList
            data={carTypes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingRight: 10 }}
            style={styles.carTypeRow}
            renderItem={({ item }) => <CarTypeCard item={item} />}
          />

          {/* FEATURED */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured cars</Text>
            <Text style={styles.sectionCount}>21 available</Text>
          </View>

          <FlatList
            data={featuredCars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <FeaturedCarCard item={item} />}
            scrollEnabled={false} // 🔑 important since parent ScrollView scrolls
            showsVerticalScrollIndicator={false}
          />

          <View style={{ height: 10 }} />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default CarRental;
