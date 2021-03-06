import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.accountData}>
        <View style={styles.accountImgWrapper}>
          <Image source={require('../assets/logo-red.png')} style={styles.image}></Image>
        </View>
        <View style={styles.accountMainData}>
          <Text style={styles.accountName}>Mosh Hamedani</Text>
          <Text style={styles.accountMail}>programmingwithmosh@gmail.com</Text>
        </View>
      </View>
      <View style={styles.menuItems}>
        <View style={styles.menuItem}>
          <View style={{...styles.iconWrapper, backgroundColor: "#DA706F"}}>
            <Icon name="list" size={30} color="#fff" />
          </View>
          <Text style={styles.menuName}>My listings</Text>
        </View>
        <View style={styles.menuItem}>
          <View style={{...styles.iconWrapper, backgroundColor: "#88C8C3"}}>
            <Icon name="mail" size={28} color="#fff" />
          </View>
          <Text style={styles.menuName}>My messages</Text>
        </View>
        <View style={styles.menuItem}>
          <View style={{...styles.iconWrapper, backgroundColor: "#ffe66d"}}>
            <Icon name="logout" size={28} color="#fff" />
          </View>
          <Text style={styles.menuName}>Log out</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#f8f4f4",
    flex: 1,
    justifyContent: "flex-start",
  },
  accountData: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 100,
    marginTop: 50
  },
  accountImgWrapper: {
    width: 80,
    height: 80,
    margin: 10
  },
  accountMainData: {
    flexDirection: "column",
    height: 80,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    padding: 5
  },
  accountName: {
    fontWeight: "bold",
    color: "black"
  },
  accountMail: {
    color: "grey"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  menuItems: {
    marginTop: 70,
    backgroundColor: "#fff"
  },
  menuItem: {
    width: "100%",
    height: 80,
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  menuName: {
    color: "black",
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 10
  }
})

export default AccountScreen;