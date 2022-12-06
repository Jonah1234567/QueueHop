import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';
import Swiper from "react-native-custom-swiper";


const Profile = () => {
    return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
        }}>
            <Image
            source={assets.profile}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
            />
            <Text style={{
                marginTop: 10,
                fontFamily: FONTS.bold,
                color: COLORS.white,
                fontSize: SIZES.extraLarge
            }}>Griffin Clark</Text>
            </View>
        
    );
};

export default Profile