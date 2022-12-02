import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';
import Swiper from "react-native-custom-swiper";


const Profile = () => {
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    // const getData = async () => {
    //     let url = "https://sheets.googleapis.com/v4/spreadsheets/1HzqNFvyYcxjMUSeFoVCZCVtPZYAyC8DVDLzpvtdnIo0/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=" + process.env.API_PRIVATE;
    //     let req = new Request(url);
    //     fetch(req).then(response => response.json()).then(this.showData).catch(this.showReqError);
    // }

    // const showData = (data) => {
    //     console.log(data);
    // }

    // const showReqError = (err) => {
    //     this.useState({ error: err.message });

    // }
    return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            </View>
        
    );
};

export default Profile