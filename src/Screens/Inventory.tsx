import {inventoryItem} from '../Utils/Types/index';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {ToDoItemComponent} from '../Components/Product';
import {
  getDBConnection,
  getInventoryItems,
} from '../Services/db-service';

const ProductList = () => {
  const [Inventorys, setInventorys] = useState<inventoryItem[]>([]);
  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      const storedInventoryItems = await getInventoryItems(db);
      if (storedInventoryItems.length) {
        setInventorys(storedInventoryItems);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
    <ScrollView
      style={[styles.screen]}
      contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.appTitleView]}>
        <Text style={styles.appTitleText}> Products </Text>
      </View>

      <View>
        {Inventorys.map(product => (
          <ToDoItemComponent key={product.Id_Producto} product={product} />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  appTitleView: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appTitleText: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  textInputContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-end',
  },
  screen: {},
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    margin: 10,
  },
});
export default ProductList;
