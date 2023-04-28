import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ToDoItemComponent: React.FC<{
  product: any;
}> = ({
  product
}) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoTextContainer}>
        <Text style={styles.sectionTitle}>{product?.name}</Text>
        <Text style={styles.sectionTitle}>{product?.description}</Text>
        <Text style={styles.sectionTitle}>{product?.price}</Text>
        <Text style={styles.sectionTitle}>{product?.measurement}</Text>
        <Text style={styles.sectionTitle}>{product?.image}</Text>
        <Text style={styles.sectionTitle}>{product?.id}</Text>
        <Text style={styles.sectionTitle}>{product?.barcode}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    backgroundColor: 'deepskyblue',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  todoTextContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
});
