import React from "react";
import {
  ContainerFluid,
  Container,
  TextView,
  PrimaryButton
} from "./styles/commonStyle";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button
} from "react-native";
import { STATUS_BAR } from "../Themes/Dimensions";
import LottieView from "lottie-react-native";

import { Contacts, IntentLauncherAndroid, WebBrowser } from "expo";

class LaunchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.routeName}`
    };
  };
  state = {
    listNumber: []
  };
  async componentDidMount() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.PHONE_NUMBERS]
    });
    //console.log("data  ======> ",data);
    this.setState({ listNumber: data });
    //   if (data.length > 0) {
    //     console.log(contact.phoneNumbers.length);
    //     console.log("All Contacts =>",contact.phoneNumbers);
    //     this.setState({
    //         listNumber:contact.phoneNumbers
    //     },()=>console.log("ALL STATE ",this.state.listNumber))
    //   }
  }

  //   mainFun = () =>{
  //     console.log('BUTTON CLICKED');
  //     // this.animation.play()
  //      alert('HI There');

  //   }

  _handleOpenWithLinking = () => {
    Linking.openURL("https://expo.io");
  };

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync("com.instagram.android");
  };

  intentLaunch = () => {
    IntentLauncherAndroid.startActivityAsync(
      IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
    );
  };

  render() {
    //console.log(this.state.listNumber);
    const renderList = (this.state.listNumber == []
      ? []
      : this.state.listNumber
    ).map((ele, index) => {
      //console.log(ele.id);
      return <Text key={index}>{ele.id}</Text>;
    });
    return (
      <View>
        <ContainerFluid style={{ marginTop: STATUS_BAR }}>
          <TextView>Hi There</TextView>
          <Container>
            <TextView>Container View</TextView>
          </Container>

          <PrimaryButton
            onPress={() => alert(" CLICKED ON BUTTON ")}
            title={"Click"}
          >
            <Text>click here</Text>
          </PrimaryButton>

          {/* <ScrollView style={{ marginTop: 40 }}>{renderList}</ScrollView> */}
          <LottieView
            source={require("../Themes/animation/gift.json")}
            ref={animation => {
              this.animation = animation;
            }}
            loop={false}
          />
        </ContainerFluid>

        <TouchableOpacity onPress={() => this.intentLaunch()}>
          <Text>GET THIS DONE</Text>
        </TouchableOpacity>

        <Button
          title="Open URL with ReactNative.Linking"
          onPress={this._handleOpenWithLinking}
        />
        <Button
          title="Open URL with Expo.WebBrowser"
          onPress={this._handleOpenWithWebBrowser}
        />
      </View>
    );
  }
}
export default LaunchScreen;
