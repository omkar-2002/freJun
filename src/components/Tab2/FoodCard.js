import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const FoodCard = ({price, foodtype, name, protein}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.mealTypeView}>
          <View
            style={[
              styles.mealCircle,
              {backgroundColor: foodtype == 'veg' ? 'green' : 'red'},
            ]}></View>
        </View>
      </View>
      <Text style={styles.text}>Price : {price}</Text>
      <Text style={styles.text}>Protein : {protein}</Text>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {color: Colors.primary, fontWeight: 'bold', fontSize: 20},
  mealTypeView: {
    height: 18,
    width: 18,
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
  },
  text: {color: Colors.black},
});
