import {FlatList, Text, View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardComponent from '../../components/cardComponent/index';

const index = () => {
  const [isData, setData] = useState([
    {
      id: 1,
      letter: 'A',
    },
    {
      id: 2,
      letter: 'B',
    },
    {
      id: 3,
      letter: 'C',
    },
    {
      id: 4,
      letter: 'D',
    },
    {
      id: 5,
      letter: 'E',
    },
    {
      id: 6,
      letter: 'F',
    },
    {
      id: 7,
      letter: 'G',
    },
    {
      id: 8,
      letter: 'H',
    },
    {
      id: 9,
      letter: 'A',
    },
    {
      id: 10,
      letter: 'B',
    },
    {
      id: 11,
      letter: 'C',
    },
    {
      id: 12,
      letter: 'D',
    },
    {
      id: 13,
      letter: 'E',
    },
    {
      id: 14,
      letter: 'F',
    },
    {
      id: 15,
      letter: 'G',
    },
    {
      id: 16,
      letter: 'H',
    },
  ]);
  const [count, setCount] = useState(0);
  const [macth, setMatch] = useState(0);

  useEffect(() => {
    const isShuffleData = isData.sort(() => Math.random() - 0.5);
    setData([...isShuffleData]);
  }, []);

  const renderItem = ({item, index}) => (
    <View style={{width: '25%'}} key={index}>
      <CardComponent
        isSelected={item.isSelected || item.frize}
        letterName={item.letter}
        onPressCard={() => onCallSelection(item, index)}
      />
    </View>
  );

  const onCallSelection = (item, index) => {
    isData[index].isSelected = true;
    setData([...isData]);
    let value = isData.filter((i, j) => i.isSelected && !i.frize);
    if (value.length == 2) {
      setCount(count + 1);
      if (value[0].letter == value[1].letter) {
        setMatch(macth + 1);
        isData.map((i, j) => {
          if (i.id == value[0].id || i.id == value[1].id) {
            i.frize = true;
          }
        });
        setData([...isData]);
      } else {
        const timer = setTimeout(() => {
          isData.map((i, j) => {
            i.isSelected = false;
          });
          setData([...isData]);
        }, 700);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text>Number of Attempts --> {count}</Text>
      <Text>Number of Matches --> {macth}</Text>
      {isData && isData.length > 0 && (
        <FlatList
          horizontal={false}
          numColumns={4}
          data={isData}
          renderItem={renderItem}
          render
          keyExtractor={(i, j) => j}
          ListFooterComponent={
            <>
              {macth == 8 && (
                <View>
                  <Text style={styles.textStyle}>Game Over</Text>
                </View>
              )}
            </>
          }
        />
      )}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
