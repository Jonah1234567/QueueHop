import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'
import { useEffect } from 'react/cjs/react.production.min'
import { DataContext } from '../apiData/FetchData'

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
          <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: titleSize, 
              color: COLORS.primary
          }}>{title}</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
            }}>
            <Image
                source={assets.location}
                resizeMode="contain"
                style={{width:25, height:25, marginRight:2}}
                />
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.primary
              }}>{ subTitle }</Text>
            </View>
    </View>
  )
}

export const ETHPrice = ({ price }) => {
    const { currentIndex, list } = React.useContext(DataContext);

    const fixedPrice = price === 47 && list ? (
        list[currentIndex][2]
    ) : price;
    
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
      }}>
            <Image
                source={assets.man}
                resizeMode="contain"
                style={{width:25, height:25, marginRight:2}}
            />
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                color: COLORS.primary
            }}>{fixedPrice}</Text>
        {/*  */}
      </View>
    )
}
  
export const ImageCMP = ({imgUrl, index}) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font,
            }}
        />
    )
}

// People Profiles Hard Coded
export const People = () => {
    return (
      <View style={{ flexDirection: 'row'}}>
            {[assets.bryn, assets.jonah, assets.alex, assets.julia].map((imgUrl, index) => (
                <ImageCMP imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        ))}
      </View>
    )
}

//  End Date Hard Coded
export const EndDate = ({ time }) => { 
    const { currentIndex, list } = React.useContext(DataContext);

    const fixedTime = time === '1h 15m' && list ? (
        list[currentIndex][5]
    ) : time;
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: -SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'
      }}>
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary
                }}
            >Wait Time</Text>
            {fixedTime == '100 min' &&
                <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary
                }}
                >Capacity</Text>
            }
            {fixedTime != '100 min' &&
                <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary
                }}
                >{fixedTime}</Text>
            }
      </View>
    )
}
  
export const SubInfo = ({time}) => {
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: 'space-between'
      }}>
            <People />
            <EndDate time={time} />
      </View>
    )
  }