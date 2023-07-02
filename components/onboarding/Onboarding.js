import { useState, useEffect, useRef } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";

import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import Button from "./PaginationButton";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

import slides from "./slides";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevButtonVisible, setPrevButtonVisible] = useState(false);
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  const [showSignupButtons, setShowSignupButtons] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  useEffect(() => {
    switch (currentIndex) {
      case 0:
        setPrevButtonVisible(false);
        setNextButtonVisible(true);
        break;
      case slides.length - 1:
        setPrevButtonVisible(true);
        setNextButtonVisible(false);
        setShowSignupButtons(true);
        break;
      default:
        setPrevButtonVisible(true);
        setNextButtonVisible(true);
        setShowSignupButtons(false);
        break;
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 7 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slidesRef}
        />
      </View>

      <View style={[styles.buttons, { flex: 2 }]}>
        {showSignupButtons &&  (<PrimaryButton text="Masuk" />)}
        {showSignupButtons &&  (<SecondaryButton text="Mendaftar" />)}
      </View>

      <View style={[styles.paginatorContainer, { flex: 1 }]}>
        <Button
          text="Kembali"
          scrollPrev={scrollPrev}
          isButtonVisible={prevButtonVisible}
        />
        <Paginator data={slides} scrollX={scrollX} />
        <Button
          text="Selanjutnya"
          scrollNext={scrollNext}
          isButtonVisible={nextButtonVisible}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paginatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
