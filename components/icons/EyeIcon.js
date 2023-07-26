import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // You can choose different icon sets from Expo

const EyeIcon = ({ onPress, isVisible, style }) => {
  const iconName = isVisible ? 'eye' : 'eye-off';

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Feather name={iconName} size={24} />
    </TouchableOpacity>
  );
};

export default EyeIcon;
