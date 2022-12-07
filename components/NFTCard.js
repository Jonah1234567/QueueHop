import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { NFTTitle, SubInfo, ETHPrice } from "./SubInfo"

const NFTCard = ({ data }) => {
  const [state, setState] = React.useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    setState(!state);
  }
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width: "100%", height: 250}}> 
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={state ? assets.heart : assets.empty} handlePress={handlePress} right={10} top={10}/>
      </View>
      <SubInfo time={data.time}/>

      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center'
          
        }}> 
          <ETHPrice price={data.price}/>
          <RectButton
            text="Get Info"
            bgColor={COLORS.primary}
            minWidth={120}
            fontSize={SIZES.font}
            txtColor={COLORS.white}
            handlePress={() => navigation.navigate("Details", { data })} /> 
            
        </View>
      </View>
    </View>
  )
}

export default NFTCard