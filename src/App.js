import React from 'react';
import {
    Font,
    Permissions,
    Contacts
} from 'expo';
import AppNavigation from './Navigation/AppNavigation';
import NavigationService from './Navigation/NavigationService';

let prefix = Expo.Linking.makeUrl('/');

class Application extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            //"open-sans-bold":openSansBold
        });
        const status = await Permissions.askAsync(Permissions.CONTACTS);
        console.log(status);



    }

    render() {
        return ( < AppNavigation ref = {
                navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }
            }
            uriPrefix = {
                prefix
            }
            />
        );
    }
}

export default Application;