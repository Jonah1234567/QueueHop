import Carousel from 'react-native-snap-carousel';
import Swiper from "react-native-custom-swiper";
import { TouchableOpacity, Image, View, Text } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

const SliderBox = () => {
    return (
        <Swiper swipeData={['Text1', 'Text2']} currentSelectIndex={2} >
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>First Page</Text>
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Second Page</Text>
        </View>
    </Swiper>)
}

export const CarouselCard = () => {
    return (
        <React.Fragment>
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <SliderBox />
            
        </View>
            <Text> End Slider</Text>
        </React.Fragment>
    );
}

export const TestText = () => {
    return (
        <Text>Testing</Text>
    );
}

// export default CarouselCard;
// export default TestText;





