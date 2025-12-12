import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


import Home from '../screens/Home'
import Customers from '../screens/customers'; 
import Categories from '../screens/categories';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (

        <Tab.Navigator  initialRouteName="Relatórios" screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#4BA148'}, tabBarActiveTintColor: '#000a08ff', tabBarInactiveTintColor:'#ffffffff' }}>

            <Tab.Screen
                name="Clientes"
                component={Customers}
                options={{
                    tabBarIcon: ( { color, size}) => <Feather name="user" color={color} size={size} />
                }}
            />

            <Tab.Screen
                name="Categorias/Serviços"
                component={Categories}
                options={{
                    tabBarIcon: ( { color, size}) => <Feather name="file-text" color={color} size={size} />,
                    tabBarLabel:'Categorias/Serviços'
                }}
            />

            <Tab.Screen
                name="Buscar"
                component={Categories}
                options={{
                    tabBarIcon: ( { color, size}) => <Feather name="search" color={color} size={size} />,
                    tabBarLabel: 'Buscar'
                }}
            />

            <Tab.Screen
                name="Relatórios"
                component={Home}
                options={{
                    tabBarIcon: ( { color, size}) => <Feather name="bar-chart-2" color={color} size={size} />,
                    tabBarLabel: 'Relatórios'
                }}
            />

        </Tab.Navigator>
    )
}