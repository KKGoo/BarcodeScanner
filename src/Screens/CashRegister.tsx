import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { inventoryItem } from '../Utils/Types';
import { getDBConnection, saveInventoryItems } from '../Services/db-service';

const ProductosScreen: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [id, setId] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState(0);
  const [unidadMedida, setUnidadMedida] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');


 const addInventory = async () => {
  try {
    const newInventoryItem: inventoryItem = {
      Id_Producto: id,
      Nombre: nombre,
      Descripcion: descripcion,
      Imagen: imagen,
      Precio: precio,
      Unidad_Medida: unidadMedida,
      Codigo_Barras: codigoBarras,
    };
    const newInventorys = [newInventoryItem];
    const db = await getDBConnection();
    await saveInventoryItems(db, newInventorys);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <View>
      <TextInput placeholder="id" value={id} onChangeText={setId} />
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Descripcion" value={descripcion} onChangeText={setDescripcion} />
      <TextInput placeholder="Imagen" value={imagen} onChangeText={setImagen} />
      <TextInput placeholder="Precio" value={precio.toString()} onChangeText={(text) => setPrecio(parseFloat(text))} keyboardType="numeric" />
      <TextInput placeholder="Unidad de medida" value={unidadMedida} onChangeText={setUnidadMedida} />
      <TextInput placeholder="Código de barras" value={codigoBarras} onChangeText={setCodigoBarras} />
      <Button title="Agregar producto" onPress={addInventory} />
    </View>
  );
};

export default ProductosScreen;
