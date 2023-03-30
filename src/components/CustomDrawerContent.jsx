import React,{useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';


function CustomDrawerContent(props) {
    const {logout} = useContext(AuthContext) 

    const onItemPress = (key) => {
        const filteredMainDrawerRoutes = props.drawerItems.find((e) => {
          return e.key === key;
        });
    
        const selectedRoute = filteredMainDrawerRoutes.route;
        props.navigation.toggleDrawer();
        props.navigation.navigate(selectedRoute.nav, {
          screen: selectedRoute.routeName,
        });
      };
    
      function renderMainDrawer() {
        return (
          <View>
            {props.drawerItems.map((parent) => (
              <View key={parent.key}>
                <TouchableOpacity
                  key={parent.key}
                  testID={parent.key}
                  onPress={() => {
                    onItemPress(parent.key);
                  }}>
                  <View style={styles.parentItem}>
                    <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
            {renderLogoutBtn()}
          </View>
        );
      }

      function renderLogoutBtn() {
        return (
          <View>
            <TouchableOpacity onPress={logout} testID="customDrawer-logout">
              <View style={styles.parentItem}>
                <Text style={styles.title}>{'Log out'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }

      return (
        <ScrollView style={styles.drawerContainer}>
          <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.centered}>
              <Image
                style={styles.sideMenuProfileIcon} source={require('../../assets/platform.png')} 
              />
            </View>
            {renderMainDrawer()}
          </SafeAreaView>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
          sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
      headerContainer: {
        height: 100,
        flexDirection: 'row',
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 100,
        height: 75,
      },
      drawerContainer: {
        backgroundColor: '#222222',
      },
      container: {
        flex: 1,
        zIndex: 1000,
      },
      centered: {
        alignItems: 'center',
      },
      parentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingTop: 4,
        paddingBottom: 4,
      },
      title: {
        margin: 16,
        fontWeight: 'bold',
        color: '#F0F0F0',
        textAlign: 'center',
      },
    });
    
    export default CustomDrawerContent;