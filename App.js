import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Tab1, {Tab1Options} from './src/screens/Tab1';
import Tab2,{Tab2Options} from './src/screens/Tab2';
import Tab3 from './src/screens/Tab3';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Tab1" component={Tab1} options={Tab1Options} />
          <Tab.Screen name="Tab2" component={Tab2} options={Tab2Options}/>
          <Tab.Screen name="Tab3" component={Tab3} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
