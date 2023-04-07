import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
  'getUsersFirstTime',
  (payload, {dispatch}) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Calling the random user fetch api for the first time when user mount the screen
        const res = await axios.get('https://randomuser.me/api/', {
          params: {
            page: 0,
            results: 5,
          },
        });
        resolve(res.data);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
);

export const getExtraUsers = createAsyncThunk(
  'getExtraUsers',
  (payload, {dispatch, getState}) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Calling the random user fetch api for the first time when user mount the screen
        const {
          tab1: {currPage},
        } = getState();

        let nextPage = currPage + 1;

        const res = await axios.get('https://randomuser.me/api/', {
          params: {
            page: nextPage,
            results: 5,
          },
        });
        resolve(res.data);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
);
