import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
const height = Dimensions.get('window').height;

const UserProfileCard = ({name, country, email, phone, profileImageUrl}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{uri: profileImageUrl}} style={styles.image} />
      </View>
      <View style={styles.nameView}>
        <View style={styles.nameSubView}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.text}>Country : {country}</Text>
          <Text style={styles.text}>Email : {email}</Text>
          <Text style={styles.text}>Phone : {phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  container: {
    height: height * 0.35,
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  imageView: {
    width: 110,
    height: 110,
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 55,
    alignSelf: 'center',
    top: '5%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  nameView: {
    flexBasis: '75%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  nameSubView: {
    backgroundColor: Colors.primary,
    flexBasis: '45%',
    justifyContent: 'flex-end',
  },
  name: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  text: {color: Colors.black, marginVertical: 5},
});
