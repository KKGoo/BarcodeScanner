import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';

const BarcodeScanner = () => {
  const [scanned, setScanned] = useState(false);
  
  // Handle barcode scanned event
  const onBarcodeScanned = (event: BarCodeReadEvent) => {
    if (!scanned && event.data) {
      setScanned(true);
      Alert.alert(`Barcode Type: ${event.type}\nData: ${event.data}`);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={onBarcodeScanned}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Position barcode inside the frame to scan</Text>
      </View>
      <TouchableOpacity
        onPress={() => setScanned(false)}
        style={styles.scanAgainButton}
      >
        <Text style={styles.scanAgainButtonText}>Scan Again</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  scanAgainButton: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignSelf: 'center',
  },
  scanAgainButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default BarcodeScanner;
