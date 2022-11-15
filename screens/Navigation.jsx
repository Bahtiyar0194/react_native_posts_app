import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { FullPostScreen } from './FullPostScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#2F3136',
                },
                headerTintColor: '#fff'
            }}>
                <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Новости" }} />
                <Stack.Screen name='FullPost' component={FullPostScreen} options={{ title: "Новость" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};