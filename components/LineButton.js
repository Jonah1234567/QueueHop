import React from "react";
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc } from '../components';

const LineButton = () => {
    const [isInLine, setIsInLine] = React.useState(false);
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        let interval = null;
        if(isInLine) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setTime(0);
        }

        return () => clearInterval(interval);
    }, [isInLine])

    if (!isInLine) return <RectButton handlePress={() => setIsInLine(true)} bgColor={COLORS.primary} txtColor={COLORS.white} minWidth={170} text="I'm in Line!" fontSize={SIZES.large}  {...SHADOWS.dark}/>;
    return (
    <React.Fragment>
        <Text style={{...FONTS.h2, color: COLORS.black, textAlign: "center", marginBottom: 10}}>You've been in line for {time} seconds </Text>
        <View style={{
            display: "flex",
                flexDirection: "row",
            justifyContent: 'space-between'
        }}>
            <RectButton minWidth={170} text="I left the line!" fontSize={SIZES.large} bgColor={"#ff9780"} txtColor={COLORS.black} {...SHADOWS.dark} handlePress={() => setIsInLine(false)}/>
            <RectButton minWidth={170} text="I got in!" fontSize={SIZES.large} txtColor={COLORS.black} bgColor={"#809bff"} {...SHADOWS.dark} handlePress={() => setIsInLine(false)}/>
        </View>
    </React.Fragment>
    )
}

export default LineButton;