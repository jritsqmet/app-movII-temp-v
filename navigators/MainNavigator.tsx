import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
///////////////////////////////////////////////////////////
import ClimaScreen from "../screens/ClimaScreen";
import ListaScreen from "../screens/ListaScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import LoginScreen from "../screens/LoginScreen";


// BOTTOM TAB
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator >
            <Tab.Screen name="Clima" component={ClimaScreen}  options={{ headerShown:false}}/>
            <Tab.Screen name="Lista" component={ListaScreen}/>
            <Tab.Screen name="Welcome" component={WelcomeScreen}/>
            <Tab.Screen name="Personajes" component={PersonajesScreen}/>
        </Tab.Navigator>
    )
}
//////////////////////////////////////////////////
// STACK
const Stack = createStackNavigator()

function MyStack(){
    return( 
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="BottomTab" component={MyTabs} />
        </Stack.Navigator>
    )
}

/////////////////////////////////////
export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}