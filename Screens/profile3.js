import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Globalstyles } from "../Styles/global";
import { TextInput } from "react-native";
import { BackHandler } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTogglePasswordVisibility } from "../components/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const randomNum1 = Math.floor(Math.random() * 999);
// console.log('Random number:', randomNum);
const randomNum=randomNum1-Math.floor(Math.random() * 9);

export default function Profile3({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => backHandler.remove();
  });

  const nickroute = useRoute();
  const nickname = nickroute.params?.nickNameInput;

  const route = useRoute();
  const formdata = route.params?.signupData;
  const newf = JSON.stringify(formdata);
  console.log(newf);
  let jsonObject = JSON.parse(newf);

  let key = "name";
  let s1name = jsonObject[key];

  let key1 = "age";
  let s1age = jsonObject[key1];

  let key2 = "gender";
  let gen = jsonObject[key2];

  let key3 = "religion";
  let rel = jsonObject[key3];

  let key4 = "community";
  let comm = jsonObject[key4];

  let key5 = "country";
  let cntry = jsonObject[key5];

  let key6 = "email";
  let em = jsonObject[key6];

  let key7 = "phoneno";
  let num = jsonObject[key7];

  let key8 = "city";
  let cit = jsonObject[key8];

  let key9 = "height";
  let hite = jsonObject[key9];

  let key10 = "work";
  let wrk = jsonObject[key10];

  let key11 = "marital-status";
  let marit = jsonObject[key11];

  let key12 = "insterested-in";
  let intrst = jsonObject[key12];

  let key13 = "education";
  let edu = jsonObject[key13];

  let key14 = "nick name";
  let nick = jsonObject[key14];

  let key15 = "description";
  let descr = jsonObject[key15];

  let key16 = "prefage";
  let prage = jsonObject[key16];

  let key17 = "hobbies";
  let hob = jsonObject[key17];

  var err = 0;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  const validateForm = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
      err = err + 1;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      err = err + 1;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      err = err + 1;
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
      err = err + 1;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      err = err + 1;
    }

    setFormData({ ...formData, errors });
  };
  const [hasErrors, setHasErrors] = useState(false);

  const handleSubmit = () => {
    validateForm();

    if (err == 0) {
      const signupData = {
        name: s1name,
        age: s1age,
        gender: gen,
        religion: rel,
        community: comm,
        country: cntry,
        email: em,
        phoneno: num,
        city: cit,
        height: hite,
        work: wrk,
        "marital-status": marit,
        "insterested-in": intrst,
        education: edu,
        "nick name": nick,
        description: descr,
        prefage: prage,
        hobbies: hob,
        username: formData.username,
        password: formData.confirmPassword,
      };
      setHasErrors(false);
      navigation.navigate("Profile4", { signupData });
      // console.log(formData.confirmPassword);
      // console.log(err);
      // console.log(formData.username);
    } else {
      setHasErrors(true);
    }
  };

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Globalstyles.container}>
          <View style={Globalstyles.header}>
            <Image
              source={require("../assets/rings.png")}
              style={Globalstyles.headerimage}
            ></Image>

            <Text style={Globalstyles.headerText}>YOU & ME</Text>
          </View>

          <View>
            <View style={Globalstyles.imgcontainer}>
              <Image
                source={require("../assets/username.png")}
                style={Globalstyles.image}
              ></Image>
            </View>

            <Text style={Globalstyles.titleText}>Username</Text>
            <TextInput
              style={Globalstyles.input11}
              // editable={false}
              placeholder="Enter Username"
              value={formData.username}
              onChangeText={(text) =>
                setFormData({ ...formData, username: nickname + randomNum })
              }
            ></TextInput>
            <Text style={styles.sec1Text}>
              {" "}
              Remember Your USERNAME for login
            </Text>
            {formData.errors.username && (
              <Text style={Globalstyles.errortext}>
                {formData.errors.username}
              </Text>
            )}

            <Text style={Globalstyles.titleText}>Password</Text>

            <View style={styles.datecontainer}>
              <TextInput
                style={Globalstyles.input1}
                placeholder="Enter password"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
              ></TextInput>
              <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                />
              </Pressable>
            </View>
            {formData.errors.password && (
              <Text style={Globalstyles.errortext}>
                {formData.errors.password}
              </Text>
            )}
            <Text style={Globalstyles.titleText}>Re-Enter Password</Text>
            <View style={styles.datecontainer}>
              <TextInput
                style={Globalstyles.input1}
                placeholder="Re-Enter password"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData({ ...formData, confirmPassword: text })
                }
              ></TextInput>
              <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                />
              </Pressable>
            </View>
            {formData.errors.confirmPassword && (
              <Text style={Globalstyles.errortext}>
                {formData.errors.confirmPassword}
              </Text>
            )}
            {/* {hasErrors && <Text>Please fix the errors above</Text>} */}

            <Text style={styles.accText}>
              By creating the account, you agree
            </Text>
            <Text style={styles.secText}> to our privacy policy and T&C.</Text>
          </View>

          <View style={Globalstyles.imgcontainer}>
            <Pressable style={styles.profButton} onPress={handleSubmit}>
              <Text style={Globalstyles.buttontext}>Continue</Text>
            </Pressable>
          </View>
        </View>
        {/* </View> */}
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input1: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    width: 150,
  },
  secText: {
    textAlign: "center",
    fontSize: 18,
  },
  sec1Text: {
    // textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "crimson",
  },
  accText: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 18,
  },
  datecontainer: {
    // backgroundColor: 'white',
    width: 350,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 18,
  },
  profButton: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width: 250,
    elevation: 3,
    backgroundColor: "#EF3D4E",
    marginBottom: 30,
  },
});
