import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3169843Navigator from '../features/BlankScreen3169843/navigator';
import SignIn21169841Navigator from '../features/SignIn21169841/navigator';
import BlankScreen1169840Navigator from '../features/BlankScreen1169840/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3169843: { screen: BlankScreen3169843Navigator },
SignIn21169841: { screen: SignIn21169841Navigator },
BlankScreen1169840: { screen: BlankScreen1169840Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
