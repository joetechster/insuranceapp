import * as React from "react";
import styles from './styles/App_styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Component import
import Back from './components/Back';
import Packages from './screens/Packages';
import Subscriptions from './screens/Subscriptions';
import Subscribe from './screens/Subscribe';

const Stack = createStackNavigator();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://test2024.peddlesoftdev.xyz/graphql/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
          }}>
          <Stack.Screen name="Packages" component={Packages} />
          <Stack.Screen
            name="Subscribe"
            component={Subscribe}
            options={(props: any) => ({
              headerTitleAlign: 'center',
              title: 'Health Insurance',
              headerLeft: () => <Back {...props} />,
            })}
          />
          <Stack.Screen
            name="Subscriptions"
            component={Subscriptions}
            options={(props: any) => ({
              headerTitleAlign: 'center',
              title: 'Health Insurance',
              headerLeft: () => <Back {...props} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
