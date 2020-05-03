import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Predictions from '../screens/prediction';
import View_Details from '../screens/viewDetails';
import About_Us from '../screens/aboutus';
import Feedback from '../screens/feedback';

const screens = {
    Home: {
        screen: Home
    },
    Predictions: {
        screen: Predictions
    },
    View_Details: {
        screen: View_Details
    },
    Feedback: {
        screen: Feedback
    },
    About_Us: {
        screen: About_Us
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);