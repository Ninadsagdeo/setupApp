import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen.js';


const AppNavigation = createStackNavigator({
    Home: {
        screen: LaunchScreen,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            //backgroundColor:"" 
        },
        headerTintColor: "black",
        headerTitleStyle: {
            fontWeight: "bold",
            color: "black"
        }
    }
});

export default createAppContainer(AppNavigation);