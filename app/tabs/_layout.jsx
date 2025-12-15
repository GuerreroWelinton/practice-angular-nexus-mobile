import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { TAB_ACTIVE } from '../../src/constants/colors';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: TAB_ACTIVE,
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories/index"
        options={{
          title: 'Categorías',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="th-list" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about-us/index"
        options={{
          title: 'Sobre nosotros',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="info-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
