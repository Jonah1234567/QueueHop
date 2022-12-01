import { TouchableOpacity, Image, Span, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';
import { FlatGrid } from 'react-native-super-grid';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Data from '../apiData/Data'
//#ffffe0
const Grid = () => {
    const [items, setItems] = React.useState([
        { name: 'Current Queue Count', code: '#ffffe0', iconText: '🚶‍♂️🚶‍♀️🚶🏿‍♂️🚶🏻🚶🏻‍♀️🧑‍🦽🚶🏿🚶🏼‍♂️🚶🏾‍♀️', styleType:'top' },
        { name: 'Est. Wait Time', code: '#ff9780', iconText: '🚶‍♂️🧑‍🦯🚶🏿‍♂️🚶🏽🚶🏻🚶🏻‍♀️🤸🚶🏿🚶🏼' , styleType:'top' },
        { name: 'Avg. Wait Time Today', code: '#809bff', iconText: '🚶🚶‍♀️🚶🏻‍♀️🧑‍🦽🚶🏿🚶‍♀️      🏃🏻', styleType:'bottom'  },
        { name: 'Historical Queue Count', code: '#ffe066', iconText: '🚶‍♀️🚶‍♂️🚶🏿🚶🏿‍♂️🚶🏻🧑‍🦽🚶🏻‍♀️🚶🏿‍♂️🚶🏼‍♀️' , styleType:'bottom' },
    ]);
    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
                <React.Fragment>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    {item.styleType == 'top' &&
                        <Text style={styles.topIcon}>{item.iconText}</Text>
                    }
                    <Text style={styles.itemName}>{item.name}</Text>
                    {item.styleType == 'bottom' &&
                        <Text style={styles.botIcon}>{item.iconText}</Text>
                    }
                
                </View>
                </React.Fragment>
            )}
        />
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 15,
        // color: '#fff',
        fontWeight: '600',
    },
    topIcon: {
        fontWeight: '600',
        fontSize: 13,
        // transform: [{rotateY: '180deg'}],
        // color: '#fff',
    },
    botIcon: {
        fontWeight: '600',
        fontSize: 13,
        transform: [{rotateY: '180deg'}],
        // color: '#fff',
    },
  });

export default Grid;
