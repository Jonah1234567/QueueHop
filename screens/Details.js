import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets, NFTData } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc } from '../components';
import Grid from '../components/DataGrid';
import React from 'react';
import LineButton from '../components/LineButton';
import { DataContext } from '../apiData/FetchData';

const ImageMemo = React.memo(Image);

const DetailsHeader = ({ data, navigation }) => {
    const { image } = data;
   
    return (
        <View style={{ width: "100%", height: 373 }}>
        <ImageMemo
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
    />
        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
        <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>)
}

// const DetailsCapacity = () => {
//     const { loading, list, currentIndex } = React.useContext(DataContext);
//     const capacity = list[currentIndex][5]
//     return (
//     <View>
//         {/* {capacity == '100min' && */}
//             <View style={{
//                 width: '100%',
//                 height: 26,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#ff9780',
//                 borderRadius: 5,
//             }}>
//                 <Text style={{
//                     fontSize: 16,
//                     // color: 'white',
//                     fontFamily: FONTS.bold,
//                 }}>Uh-oh! CHP is at Capacity. Turnaround @ 3PM</Text>
//             </View>
//         {/* } */}
//     </View> 
//     )
// }

const Details = ({ route, navigation}) => {
    const { data } = route.params;
    // const { loadinrg, list } = React.useContext(DataContext);r
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.5)',
                zIndex: 1,
            }}>
                <LineButton />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    //react.fragment
                    <React.Fragment> 
                        <DetailsHeader
                            data={data}
                            navigation={navigation}
                        />
                        <SubInfo time={data.time}/>
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />
                            
                                <Text style={{
                                    fontSize: SIZES.font,
                                    fontFamily: FONTS.semiBold, 
                                    color: COLORS.primary
                                }}>
                                    Analysis
                                </Text>
                        </View> 
                        <Grid />
                    </React.Fragment>
                )}
            />
            
        </SafeAreaView>
    )
}

export default Details