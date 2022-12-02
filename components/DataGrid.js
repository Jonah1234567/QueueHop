import { TouchableOpacity, Image, Span, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';
import { FlatGrid } from 'react-native-super-grid';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { DataContext } from '../apiData/FetchData';
//#ffffe0
const Grid = () => {
    const { loading, list } = React.useContext(DataContext);

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            // console.log(index)
                setIndex(idx => idx < list.length - 1 ? idx+1 : idx);   
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        console.log(index);
    }, [index]);
        
    const items = [
        { name: 'Current Queue Count', code: '#ffffe0', iconText: '🚶‍♂️🚶‍♀️🚶🏿‍♂️🚶🏻🚶🏻‍♀️🧑‍🦽🚶🏿🚶🏼‍♂️🚶🏾‍♀️', styleType: 'top', data: list[index][0] },
        { name: 'Est. Wait Time', code: '#ff9780', iconText: '🚶‍♂️🧑‍🦯🚶🏿‍♂️🚶🏽🚶🏻🚶🏻‍♀️🤸🚶🏿🚶🏼', styleType: 'top' },
        { name: 'Avg. Wait Time Today', code: '#809bff', iconText: '🚶🚶‍♀️🚶🏻‍♀️🧑‍🦽🚶🏿🚶‍♀️      🏃🏻', styleType: 'bottom' },
        { name: 'People Inside', code: '#ffe066', iconText: '🚶‍♀️🚶‍♂️🚶🏿🚶🏿‍♂️🚶🏻🧑‍🦽🚶🏻‍♀️🚶🏿‍♂️🚶🏼‍♀️', styleType: 'bottom' },
    ];

    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({item}) => (
                <React.Fragment>
                {item.styleType == 'top' &&
                    <View style={[styles.itemContainer2, { backgroundColor: item.code }]}>
                        {item.styleType == 'top' &&
                            <Text style={styles.topIcon}>{item.iconText}</Text>
                            }
                            <Text>{ item.data}</Text>
                        <Text style={styles.itemName}>{item.name}</Text>
                        {item.styleType == 'bottom' &&
                            <Text style={styles.botIcon}>{item.iconText}</Text>
                        }
                    </View>
                    }
                    {item.styleType == 'bottom' &&
                    <View style={[styles.itemContainer1, { backgroundColor: item.code }]}>
                        {item.styleType == 'top' &&
                            <Text style={styles.topIcon}>{item.iconText}</Text>
                        }
                        <Text style={styles.itemName}>{item.name}</Text>
                        {item.styleType == 'bottom' &&
                            <Text style={styles.botIcon}>{item.iconText}</Text>
                        }
                    </View>
                }
                
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
    itemContainer1: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemContainer2: {
        // justifyContent: 'flex-end',
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
