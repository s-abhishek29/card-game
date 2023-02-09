import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';

const CardComponent = props => {
  const {letterName, isSelected, onPressCard} = props;

  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  const onPressIn = () => {
    if (!isSelected) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  const onPressOut = () => {
    if (!isSelected) {
      setTimeout(() => {
        Animated.spring(animation, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }, 200);
    }
  };

  return (
    <Animated.View style={[styles.m10, {transform: [{scale}]}]}>
      <TouchableOpacity
        activeOpacity={isSelected ? 1 : 0}
        onPress={onPressCard}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.cardPressStyle}>
        {isSelected ? (
          <View style={styles.cardTextViewStyle}>
            <Text style={styles.cardTextStyle}>{letterName}</Text>
          </View>
        ) : (
          <Image
            resizeMode="stretch"
            style={styles.cardImgStyle}
            source={require('../../assets/card1.jpg')}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  m10: {
    margin: 10,
  },
  cardPressStyle: {
    height: 120,
    borderWidth: 0.5,
    borderColor: '#ccc',
    elevation: 5,
  },
  cardImgStyle: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  cardTextViewStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cardTextStyle: {
    alignSelf: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
