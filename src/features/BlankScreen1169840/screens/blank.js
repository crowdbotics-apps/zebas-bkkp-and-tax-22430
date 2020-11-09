import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_3: "" }

  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Welcome to Zeba&#39;s Bookkeeping &amp; Tax Service! "
        editable={false}
        multiline={true}
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {
    alignSelf: "center",
    fontSize: 26,
    backgroundColor: "#82c9ce",
    fontFamily: "Merriweather-Regular",
    flexDirection: "row"
  },
  TextInput_3: {
    width: "100%",
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 26,
    paddingBottom: 26,
    alignSelf: "center",
    fontSize: 28,
    backgroundColor: "#ffff",
    fontFamily: "Merriweather-Bold",
    borderStyle: "dotted",
    borderWidth: 3,
    textAlign: "center",
    lineHeight: 30
  }
})
