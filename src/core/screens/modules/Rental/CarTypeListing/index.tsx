import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Platform,
  StatusBar,
} from 'react-native';
import RemixIcon from 'react-native-remix-icon';

import { styles } from './styles';
import ScreenWrapper from '@/core/components/ScreenWrapper';
import { FilterModal } from '@/core/components/Rental/FilterModal/FilterModal';

export default function CarTypeListingScreen({ route, navigation }: any) {
  const { type } = route.params;
  const topInset = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;
  const brands = ['Audi', 'Ford', 'Hyundai', 'Tesla'];

  const cars = Array(12)
    .fill(0)
    .map((_, i) => ({
      id: i.toString(),
      name: 'SUV',
      price: 560,
      seats: 4,
      doors: 4,
      transmission: 'Auto',
      fuel: 'Diesel',
      image: require('@/assets/images/rental/classic_car.jpg'),
    }));

  const [showFilter, setShowFilter] = useState(false);

  return (
    <ScreenWrapper padded={false}>
      {showFilter && <FilterModal onClose={() => setShowFilter(false)} />}

      <View style={[styles.container, { paddingTop: topInset }]}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <RemixIcon name="arrow-left-s-line" size={24} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{type} cars</Text>
        </View>

        {/* SEARCH + FILTER */}
        <View style={styles.searchRow}>
          <View style={styles.searchInput}>
            <RemixIcon name="search-line" size={20} color="#999" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#999"
              style={styles.searchText}
            />
          </View>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => setShowFilter(true)}
          >
            <RemixIcon name="filter-3-line" size={18} />
            <Text style={styles.filterLabel}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* TOP BRANDS */}
        <View style={styles.brandHeader}>
          <Text style={styles.brandTitle}>Top Brands</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={brands}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.brandRow}
          renderItem={({ item }) => (
            <View style={styles.brandTag}>
              <Text style={styles.brandTxt}>{item}</Text>
            </View>
          )}
        />

        {/* AVAILABLE + SORT */}
        <View style={styles.availableRow}>
          <Text style={styles.availableText}>21 Available</Text>

          <View style={styles.sortRow}>
            <RemixIcon name="arrow-down-s-line" size={16} />
            <Text style={styles.sortText}>Popular</Text>
          </View>
        </View>

        {/* CAR GRID */}
        <FlatList
          data={cars}
          numColumns={2}
          columnWrapperStyle={styles.gridRow}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CarDetails', {
                  car: item,
                })
              }
              style={styles.carCard}
              activeOpacity={0.8}
            >
              {/* <View> */}
              <Image source={item.image} style={styles.carImage} />

              {/* NAME + PRICE */}
              <View style={styles.namePriceRow}>
                <Text style={styles.carName}>{item.name}</Text>
                <Text style={styles.carPrice}>
                  ${item.price}
                  <Text style={styles.day}>/Day</Text>
                </Text>
              </View>

              <Text style={styles.desc}>
                Eco-friendly electric models cut emissions without sacrificing
              </Text>

              {/* ICON ROW 1 */}
              <View style={styles.iconRow}>
                <RemixIcon name="user-3-line" size={16} />
                <Text style={styles.iconText}>{item.seats}</Text>

                <RemixIcon
                  name="door-line"
                  size={16}
                  style={{ marginLeft: 8 }}
                />
                <Text style={styles.iconText}>{item.doors}</Text>

                <RemixIcon
                  name="settings-3-line"
                  size={16}
                  style={{ marginLeft: 8 }}
                />
                <Text style={styles.iconText}>{item.transmission}</Text>
              </View>

              {/* ICON ROW 2 */}
              <View style={styles.iconRow}>
                <RemixIcon name="gas-station-line" size={16} />
                <Text style={styles.iconText}>{item.fuel}</Text>
              </View>

              {/* CTA */}
              <TouchableOpacity style={styles.bookBtn}>
                <Text style={styles.bookTxt}>Book Now</Text>
              </TouchableOpacity>
              {/* </View> */}
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}
