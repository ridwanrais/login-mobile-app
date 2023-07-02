import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const App = () => {
  // const message = 'Svelte Native App';
  // const selectedTab = 0;

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image
          source={{
            uri:
              'https://lh3.googleusercontent.com/pw/AJFCJaX_raBiHqS8wHYTacNdC4S4AsfD83j2hBeJuDBBFbqLn1qbQsvRx4VyKTAXRD6J0oENAKd97bakmets-35yJkahGC6Ovr_AxLeRQRealcCFfrsrGGgQV6inDQWpwnjuwPjumrC3adHkCAhovD8XkI_v=w360-h338-s-no?authuser=0',
          }}
          style={styles.responsiveImage}
          resizeMode="contain"
        />
        <Text style={styles.jargon}>Mudah dalam bertransaksi,</Text>
        <Text style={styles.jargon}>dengan Jumot</Text>
        <Text style={styles.description1}>
          Bisnis jual beli menjangkau ke seluruh wilayah di Indonesia
        </Text>
      </View>
      <View style={[styles.slider,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'row',
      }]}>
        <Text style={[styles.sliderText, {flex: 1, backgroundColor: 'red'}]}>Kembali</Text>
        <View style={[styles.parallelograms, {flex: 1, backgroundColor: 'darkorange'}]}>
          <View style={[styles.parallelogram, {backgroundColor: "#3498DB"}]}></View>
          <View style={[styles.parallelogram]}></View>
          <View style={[styles.parallelogram]}></View>
        </View>
        <Text style={[styles.sliderText, {flex: 1, backgroundColor: 'green'}]}>Selanjutnya</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#e5e5e5',
  },
  flexContainer: {
    flex: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  responsiveImage: {
    width: '90%',
    height: '50%',
    marginTop: 100,
  },
  jargon: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description1: {
    marginTop: 8,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  parallelograms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parallelogram: {
    transform: [{ skewX: '-20deg' }],
    backgroundColor: '#e5e5e5',
    textAlign: 'center',
    color: 'white',
    height: 15,
    width: 25,
    paddingHorizontal: 9,
    marginHorizontal: 4,
    borderRadius: 5,
    marginVertical: 2
  },
  slider: {
    flex: 1,
    height: '10%',
    // backgroundColor: "black",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderText: {
    textAlign: 'center',
    width: '100%',
    color: '#3498DB',
  },
});

export default App;