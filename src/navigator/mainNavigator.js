import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen29527Navigator from '../features/CopyOfBlankScreen29527/navigator';
import BlankScreen29525Navigator from '../features/BlankScreen29525/navigator';
import BlankScreen19524Navigator from '../features/BlankScreen19524/navigator';
import BlankScreen39523Navigator from '../features/BlankScreen39523/navigator';
import UserProfile19519Navigator from '../features/UserProfile19519/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen29527: { screen: CopyOfBlankScreen29527Navigator },
BlankScreen29525: { screen: BlankScreen29525Navigator },
BlankScreen19524: { screen: BlankScreen19524Navigator },
BlankScreen39523: { screen: BlankScreen39523Navigator },
UserProfile19519: { screen: UserProfile19519Navigator },

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
