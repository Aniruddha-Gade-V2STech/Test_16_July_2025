import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { PATH_LABEL } from '../constant/constant';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../redux/store';

const Stack = createNativeStackNavigator();

function MainStack() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={PATH_LABEL.HOME}>
          <Stack.Screen
            name={PATH_LABEL.HOME}
            component={Home}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MainStack;
