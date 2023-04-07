import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import foodItems from '../constants/FoodItems';
import {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FoodCard from '../components/Tab2/FoodCard';
import Button from '../components/common/Button';
import Colors from '../constants/Colors';

const Tab2 = () => {
  const inputref = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(foodItems);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Update the list of items based on the search query
    const filteredItems = foodItems.filter(
      item => item.name.toLowerCase().includes(searchQuery.toLowerCase()), // Case-insensitive search
    );
    //Setting message if not found
    if (filteredItems.length == 0) {
      setError('No data found');
    }
    setFilteredData(filteredItems);
  };
  
  // handeling text input
  const handleTextInput = text => {
    setSearchQuery(text);
    if (text == '') {
      setFilteredData(foodItems);
    }
  };

  // Function to sort data in ascending order based on price
  const handleSortAsc = () => {
    const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
    setFilteredData(sortedData);
  };

  // Function to sort data in descending order based on price
  const handleSortDesc = () => {
    const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
    setFilteredData(sortedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <View style={styles.inputBox}>
          <TouchableOpacity>
            <Feather name="search" size={26} color={Colors.grey} />
          </TouchableOpacity>
          <TextInput
            ref={inputref}
            value={searchQuery}
            style={{flexBasis: '55%', color: Colors.black}}
            placeholderTextColor={Colors.grey}
            onChangeText={handleTextInput}
            placeholder="Search Food Item"
          />
        </View>
        <Button text="Search" onPress={handleSearch} />
      </View>
      <View style={styles.SortView}>
        <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 16}}>
          Sort By Price
        </Text>
        <Button text="Asc" onPress={handleSortAsc} />
        <Button text="Desc" onPress={handleSortDesc} />
      </View>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{padding: 20, paddingTop: 0}}
        data={filteredData}
        renderItem={({item}) => {
          return (
            <FoodCard
              name={item?.name}
              foodtype={item?.foodType}
              protein={item?.protein}
              price={item?.price}
            />
          );
        }}
        ListEmptyComponent={() => (
          <Text
            style={{
              color: Colors.grey,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {error}
          </Text>
        )}
      />
    </View>
  );
};

export default Tab2;

export const Tab2Options = ({navigation}) => {
  return {
    headerTitle: 'Food Items',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: Colors.primary,
    },
  };
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  inputBox: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    height: 45,
    color: Colors.black,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  SortView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
