import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import UserProfileCard from '../components/Tab1/UserProfileCard';
import {getExtraUsers, getUsers} from '../store/Tab1/thunk';
import {useDispatch, useSelector} from 'react-redux';
import {
  userExtraLoadingSelector,
  userLoadingSelector,
  userSelector,
} from '../store/Tab1/selector';
import Button from '../components/common/Button';
import Colors from '../constants/Colors';

const Tab1 = () => {
  const dispatch = useDispatch();
  const Users = useSelector(userSelector);
  const UsersLoading = useSelector(userLoadingSelector);
  const ExtraUserLoading = useSelector(userExtraLoadingSelector);

  const renderUserProfile = ({item}) => {
    return (
      <UserProfileCard
        name={item?.name?.title + ' ' + item?.name?.first + item?.name?.last}
        country={item?.location?.country}
        email={item?.email}
        phone={item?.phone}
        profileImageUrl={item?.picture?.large}
      />
    );
  };

  // To fetch Extra users
  const fetchExtraUser = () => {
    dispatch(getExtraUsers());
  };

  // fetching users first time
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{alignItems: 'center'}}
        data={Users}
        renderItem={renderUserProfile}
        keyExtractor={item => item.email}
        ListEmptyComponent={() => (
          <ActivityIndicator size={26} color={Colors.primary} />
        )}
        ListFooterComponent={() => {
          return ExtraUserLoading ? (
            <ActivityIndicator size={26} color={Colors.primary} />
          ) : (
            <Button onPress={fetchExtraUser} text="Load More" />
          );
        }}
      />
    </View>
  );
};

export default Tab1;

export const Tab1Options = ({navigation}) => {
  return {
    headerTitle: 'Random Users',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: Colors.primary,
    },
  };
};

const styles = StyleSheet.create({});
