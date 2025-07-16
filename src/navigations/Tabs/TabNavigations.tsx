import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PatientScreen from '../../screens/patient';
import { PATH_LABEL, TAB_BAR_LABEL } from '../../constant/constant';
import DoctorScreen from '../../screens/doctor';
import { Color } from '../../assets/Color';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  tabBarActiveTintColor: Color.white,
  tabBarInactiveTintColor: Color.grey,
  tabBarIndicatorStyle: {
    backgroundColor: Color.primary,
    height: 4,
  },
  tabBarLabelStyle: {
    fontWeight: 'bold',
  },
  tabBarStyle: {
    backgroundColor: Color.primary,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    // borderBottomColor: 'violet',
  },
  // tabBarShowLabel: true,
  tabBarPressColor: Color.primary,
  tabBarIndicatorContainerStyle: {
    backgroundColor: Color.black,
  },
};

function TabNavigations() {
  return (
    <Tab.Navigator
      initialRouteName={PATH_LABEL.PATIENT}
      screenOptions={tabBarOptions}
    >
      <Tab.Screen
        name={PATH_LABEL.PATIENT}
        options={{
          tabBarLabel: TAB_BAR_LABEL.PATIENT,
        }}
        component={PatientScreen}
      />
      <Tab.Screen
        name={PATH_LABEL.DOCTOR}
        component={DoctorScreen}
        options={{
          tabBarLabel: TAB_BAR_LABEL.DOCTOR,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigations;
