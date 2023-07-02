import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64, alignItems: "center" }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#C0C0C0", "#3498DB", "#C0C0C0"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.square, { width: 20, backgroundColor }]}
            key={i.toString()}
          ></Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    height: 10,
    borderRadius: 0,
    backgroundColor: "#3498DB",
    marginHorizontal: 4,
    transform: [{ skewX: "20deg" }], // only works on iOS
  },
});
