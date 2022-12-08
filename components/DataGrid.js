import { TouchableOpacity, Image, Span, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';
import { FlatGrid } from 'react-native-super-grid';
import { DataContext } from '../apiData/FetchData';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//#ffffe0
const Grid = () => {
    const { loading, list, currentIndex } = React.useContext(DataContext);

    React.useEffect(() => {
        console.log(currentIndex);
    }, [currentIndex]);
        
    const items = [
        { idx: 1, name: 'Current Queue Count', code: '#ffffe0', iconText: '🚶‍♂️🚶‍♀️🚶🏿‍♂️🚶🏻🚶🏻‍♀️🧑‍🦽🚶🏿🚶🏼‍♂️🚶🏾‍♀️', styleType: 'top', data: list[currentIndex][2] },
        { idx: 2, name: 'Est. Wait Time', code: '#ff9780', iconText: '🚶‍♂️🧑‍🦯🚶🏿‍♂️🚶🏽🚶🏻🚶🏻‍♀️🤸🚶🏿🚶🏼', styleType: 'top', data: list[currentIndex][5] },
        { idx: 3, name: 'Avg. Wait Time Today', code: '#809bff', iconText: '🚶🚶‍♀️🚶🏻‍♀️🧑‍🦽🚶🏿🚶‍♀️      🏃🏻', styleType: 'bottom', data: list[currentIndex][6] },
        { idx: 4, name: 'People Inside', code: '#ffe066', iconText: '🚶‍♀️🚶‍♂️🚶🏿🚶🏿‍♂️🚶🏻🧑‍🦽🚶🏻‍♀️🚶🏿‍♂️🚶🏼‍♀️', styleType: 'bottom', data: list[currentIndex][3] },
    ];
    const gl = "yikes!"
    // console.log("Length: ", list[currentIndex][4].length)
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
                            
                            <Text style={styles.itemName}>{item.name}</Text>
                            {item.styleType == 'bottom' &&
                                <Text style={styles.botIcon}>{item.iconText}</Text>
                            }
                            {/* {console.log("Length: ", item.data.length)} */}
                            {item.data.length == 1 &&
                                < View style={{
                                    position: 'absolute', left: '45%', top: '45%',
                                }}>
                                    <Text style={{
                                        fontSize: 48,
                                        fontFamily: FONTS.bold,
                                    }}>{item.data}</Text>
                                </View>
                            }
                            {item.data.length == 2 &&
                                < View style={{
                                    position: 'absolute', left: '40%', top: '45%',
                                }}>
                                    <Text style={{
                                        fontSize: 48,
                                        fontFamily: FONTS.bold,
                                    }}>{item.data}</Text>
                                </View>
                            }
                            {item.data.length == 3 &&
                                < View style={{
                                    position: 'center', top: '10%', left: '10%',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: 48,
                                        fontFamily: FONTS.bold,
                                    }}>{item.data}</Text>
                                </View>
                            }
                            {item.data.length >= 4 &&
                                < View style={{
                                    position: 'center', left: '15%', top: '10%',
                                }}>
                                    {item.data == '100 min' && 
                                        <Text style={{
                                            fontSize: 48,
                                            fontFamily: FONTS.bold,
                                            }}>{gl}</Text>
                                    }
                                    {item.data != '100 min' && 
                                        <Text style={{
                                            fontSize: 44,
                                            fontFamily: FONTS.bold,
                                            }}>{item.data}</Text>
                                    }
                                </View>
                            }
                    </View>
                }
                    {item.styleType == 'bottom' &&
                        <View style={[styles.itemContainer1, { backgroundColor: item.code }]}>
                            {item.data.length == 1 &&
                                < View style={{
                                    position: 'absolute', left: '45%', bottom: '45%',
                                }}>
                                    <Text style={{
                                        fontSize: 48,
                                        fontFamily: FONTS.bold,
                                    }}>{item.data}</Text>
                                </View>
                            }
                            {item.data.length == 2 &&
                                < View style={{
                                    position: 'absolute', left: '40%', bottom: '45%',
                                }}>
                                    <Text style={{
                                        fontSize: 48,
                                        fontFamily: FONTS.bold,
                                    }}>{item.data}</Text>
                                </View>
                            }
                            {item.data.length == 3 &&
                                < View style={{
                                    position: 'absolute', left: '30%', bottom: '45%',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: 48,
                                        fontFamily: FONTS.bold,
                                    }}>{item.data}</Text>
                                </View>
                            }
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
    oneVal: {
        position: 'absolute', left: '40%', top: '40%',
    }
  });

export default Grid;
