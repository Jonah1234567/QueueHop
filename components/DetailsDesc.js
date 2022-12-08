import { View, Text } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { ETHPrice, EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';
import { DataContext } from '../apiData/FetchData';

const CapacityAlert = () => {
    const { loading, list, currentIndex } = React.useContext(DataContext);
    const capacity = list[currentIndex][5]
    return (
    <View>
            {capacity == '100 min' &&
                <View style={{
                    width: '100%',
                    height: 26,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ff9780',
                    borderRadius: 5,
                }}>
                    <Text style={{
                        fontSize: 16,
                        // color: 'white',
                        fontFamily: FONTS.bold,
                    }}>Uh-oh! CHP is at Capacity. Turnaround @ 3PM.</Text>
                </View>
            }
    </View> 
    )
}

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);
    return (
      <React.Fragment>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <NFTTitle
                title={data.name}
                subTitle= {data.creator}
                titleSize={SIZES.extraLarge}
                subTitleSize={SIZES.medium}
                />
            <ETHPrice price={data.price}/>
            </View>
            <View style={{ marginTop: SIZES.medium }}>
                <CapacityAlert />
            </View>
            
        <View style={{ marginVertical: SIZES.medium }}>
            <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
            }}>
                Description
            </Text>
            <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.large,
            }}>
                    {text}
                    {!readMore && '...'}
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                    }}
                    onPress={() => {
                        if (!readMore) {
                            setText(data.description);
                            setReadMore(true);
                        }
                        else {
                            setText(data.description.slice(0, 100));
                            setReadMore(false);
                        }
                        }}
                    >
                        {readMore ? ' Show Less': ' Read More'}
                    </Text>
            </Text>
        </View> 
      </React.Fragment>
  )
}

export default DetailsDesc