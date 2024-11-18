import { Image, StyleSheet, View } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Lokalt bilde*/}
      <Image
        source={require('../../assets/images/Teletubbies.jpg')}  // Replace with your local image path
        style={styles.image}
      />
      {/* Bilde på nett */}
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhxd4iQ-Xq6Ey59VF4zgTDIE5mLYzPdiGTrBGVmjQezPn8er-zpLo1D-DZfqs_lupwh4&usqp=CAU' }}  // Replace with the online image URL
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  image: {
    width: '100%',
    height: '45%',
    marginBottom: 20,
  },
});
