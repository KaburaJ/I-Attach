import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const placeholder = {
    label: 'Select a Company...',
    value: null,
  };
  const Companys = [
    { label: 'Company 1', value: 'Company1' },
    { label: 'Company 2', value: 'Company2' },
  ];

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#8E8E8E',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, 
    },
    inputAndroid: {
      fontSize: 30,
      paddingHorizontal: 20,
      paddingVertical: 8,
      marginLeft:"2%",
      borderWidth: 0.5,
      borderColor: '#8E8E8E',
      borderRadius: 8,
      marginBottom:"5%",
      color: '#8E8E8E',
      paddingRight: 30, 
    },
  });

  return (
    <View>
      <RNPickerSelect
        placeholder={placeholder}
        items={Companys}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedText: {
    marginTop: 10,
    fontSize: 18,
    color: 'blue',
  },
});

export default Dropdown;
