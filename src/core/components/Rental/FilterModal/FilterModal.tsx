import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import RemixIcon from 'react-native-remix-icon';
import { filterStyles } from './styles';

const { height } = Dimensions.get('window');

type Props = {
  onClose: () => void;
};

export function FilterModal({ onClose }: Props) {
  const slideAnim = useRef(new Animated.Value(height)).current;

  /* ---------------- STATE ---------------- */
  const [price, setPrice] = useState(350);
  const [carTypes, setCarTypes] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [transmission, setTransmission] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  /* ---------------- ANIMATION ---------------- */
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, []);

  /* ---------------- HELPERS ---------------- */
  const toggleMulti = (
    value: string,
    list: string[],
    setList: (v: string[]) => void,
  ) => {
    setList(
      list.includes(value) ? list.filter(i => i !== value) : [...list, value],
    );
  };

  const resetAll = () => {
    setPrice(350);
    setCarTypes([]);
    setAvailability([]);
    setTransmission(null);
    setDuration(null);
    setDistance(null);
    setRating(null);
  };

  const applyFilter = () => {
    const payload = {
      price,
      carTypes,
      availability,
      transmission,
      duration,
      distance,
      rating,
    };

    console.log('APPLIED FILTERS:', payload);
    onClose();
  };

  /* ---------------- UI ---------------- */
  return (
    <Modal transparent animationType="fade">
      <View style={filterStyles.overlay}>
        <TouchableOpacity style={filterStyles.backdrop} onPress={onClose} />

        <Animated.View
          style={[
            filterStyles.sheet,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          {/* HEADER */}
          <View style={filterStyles.sheetHeader}>
            <Text style={filterStyles.sheetTitle}>Filter</Text>

            <TouchableOpacity style={filterStyles.closeBtn} onPress={onClose}>
              <RemixIcon name="close-line" size={22} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* PRICE */}
            <Text style={filterStyles.sectionTitle}>Price</Text>
            <Slider
              minimumValue={50}
              maximumValue={500}
              step={50}
              value={price}
              onValueChange={setPrice}
              minimumTrackTintColor="#00A27F"
              maximumTrackTintColor="#E5E5E5"
              thumbTintColor="#00A27F"
            />
            <Text style={filterStyles.priceValue}>${price}</Text>

            {/* CAR TYPE */}
            <Text style={filterStyles.sectionTitle}>Car Type</Text>
            <View style={filterStyles.tagWrap}>
              {['SUV', 'Toyota', 'Tesla', 'Mercedes', 'Honda'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    filterStyles.tag,
                    carTypes.includes(item) && filterStyles.tagActive,
                  ]}
                  onPress={() => toggleMulti(item, carTypes, setCarTypes)}
                >
                  <Text
                    style={[
                      filterStyles.tagText,
                      carTypes.includes(item) && filterStyles.tagTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* AVAILABILITY */}
            <Text style={filterStyles.sectionTitle}>Availability</Text>
            <View style={filterStyles.tagWrap}>
              {['Available now', 'Instant booking'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    filterStyles.tag,
                    availability.includes(item) && filterStyles.tagActive,
                  ]}
                  onPress={() =>
                    toggleMulti(item, availability, setAvailability)
                  }
                >
                  <Text
                    style={[
                      filterStyles.tagText,
                      availability.includes(item) && filterStyles.tagTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* TRANSMISSION */}
            <Text style={filterStyles.sectionTitle}>Transmission</Text>
            <View style={filterStyles.tagWrap}>
              {['Automatic', 'Manual'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    filterStyles.tag,
                    transmission === item && filterStyles.tagActive,
                  ]}
                  onPress={() => setTransmission(item)}
                >
                  <Text
                    style={[
                      filterStyles.tagText,
                      transmission === item && filterStyles.tagTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* DURATION */}
            <Text style={filterStyles.sectionTitle}>Duration</Text>
            <View style={filterStyles.tagWrap}>
              {['Hourly', 'Daily', 'Weekly', 'Monthly'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    filterStyles.tag,
                    duration === item && filterStyles.tagActive,
                  ]}
                  onPress={() => setDuration(item)}
                >
                  <Text
                    style={[
                      filterStyles.tagText,
                      duration === item && filterStyles.tagTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* DISTANCE */}
            <Text style={filterStyles.sectionTitle}>Distance</Text>
            <View style={filterStyles.tagWrap}>
              {['Near me', 'Within 5km', 'City wide'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    filterStyles.tag,
                    distance === item && filterStyles.tagActive,
                  ]}
                  onPress={() => setDistance(item)}
                >
                  <Text
                    style={[
                      filterStyles.tagText,
                      distance === item && filterStyles.tagTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* RATINGS */}
            <Text style={filterStyles.sectionTitle}>Ratings</Text>
            <View style={filterStyles.tagWrap}>
              {[5, 4, 3, 2, 1].map(r => (
                <TouchableOpacity
                  key={r}
                  style={[
                    filterStyles.tag,
                    rating === r && filterStyles.tagActive,
                  ]}
                  onPress={() => setRating(r)}
                >
                  <RemixIcon
                    name="star-fill"
                    size={14}
                    color={rating === r ? '#FFF' : '#F4B400'}
                  />
                  <Text
                    style={[
                      filterStyles.tagText,
                      rating === r && filterStyles.tagTextActive,
                    ]}
                  >
                    {' '}
                    {r}.0
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* ACTIONS */}
            <View style={filterStyles.actionRow}>
              <TouchableOpacity
                style={filterStyles.resetBtn}
                onPress={resetAll}
              >
                <Text style={filterStyles.resetTxt}>Reset</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={filterStyles.applyBtn}
                onPress={applyFilter}
              >
                <Text style={filterStyles.applyTxt}>Apply Filter</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}
