/*import React from "react";
import { Camera } from "expo-camera";
//import { Ionicons } from "@expo/vector-icons";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { CameraScreenSheet } from "./styles";

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default ({
  capturing = false,
  cameraType = CameraTypes.back,
  flashMode = CameraFlashModes.off,
  setFlashMode,
  setCameraType,
  onCaptureIn,
  onCaptureOut,
  onLongCapture,
  onShortCapture,
}) => (
  <Grid style={CameraScreenSheet.bottomToolbar}>
    <Row>
      <Col style={CameraScreenSheet.alignCenter}>
        <TouchableOpacity
          onPress={() =>
            setFlashMode(
              flashMode === CameraFlashModes.on
                ? CameraFlashModes.off
                : CameraFlashModes.on
            )
          }
        >
          <Ionicons
            name={
              flashMode == CameraFlashModes.on ? "md-flash" : "md-flash-off"
            }
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </Col>
      <Col size={2} style={CameraScreenSheet.alignCenter}>
        <TouchableWithoutFeedback
          onPressIn={onCaptureIn}
          onPressOut={onCaptureOut}
          onLongPress={onLongCapture}
          onPress={onShortCapture}
        >
          <View
            style={[
              CameraScreenSheet.captureBtn,
              capturing && CameraScreenSheet.captureBtnActive,
            ]}
          >
            {capturing && <View style={CameraScreenSheet.captureBtnInternal} />}
          </View>
        </TouchableWithoutFeedback>
      </Col>
      <Col style={CameraScreenSheet.alignCenter}>
        <TouchableOpacity
          onPress={() =>
            setCameraType(
              cameraType === CameraTypes.back
                ? CameraTypes.front
                : CameraTypes.back
            )
          }
        >
          <Ionicons name="md-reverse-camera" color="white" size={30} />
        </TouchableOpacity>
      </Col>
    </Row>
  </Grid>
);
*/
