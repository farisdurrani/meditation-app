import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
} from "react-native";
import axios from "axios";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import * as Location from "expo-location";

const kToF = (kel) => {
    return ((kel - 273.15) * 9) / 5 + 32;
};

const GetLocationScreen = () => {
    const navigation = useNavigation();
    const [currentLocation, setCurrentLocation] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [latLong, setLatLong] = React.useState("");
    const [latitude, setLatitude] = React.useState("-1");
    const [longitude, setLongitude] = React.useState("-1");
    const [todayTemp, setTodayTemp] = React.useState("-1");
    const [errorMsg, setErrorMsg] = React.useState("");

    const updateWeather = () => {
        const lat = latitude;
        const long = longitude;

        const baseURL =
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            long +
            "&exclude=minutely,hourly,daily&appid=03b2a5635fc7642b18c7ba3d03f771de";

        axios
            .get(baseURL)
            .then((response) => {
                setTodayTemp(kToF(response.data.current.temp));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const renderLocationToLatLong = (loc) => {
        const params = {
            access_key: "ab263e5759ed8304f39bcd716fca2e99",
            query: loc,
        };

        axios
            .get("http://api.positionstack.com/v1/forward", { params })
            .then((response) => {
                setLatLong(response.data);
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    };

    const renderLatLongToLocation = (lat, long) => {
        const params = {
            access_key: "ab263e5759ed8304f39bcd716fca2e99",
            query: lat + "," + long,
            output: "json",
            limit: 1,
        };

        axios
            .get("http://api.positionstack.com/v1/reverse", { params })
            .then((response) => {
                setLatLong(response.data);
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    };

    // ref: https://docs.expo.dev/versions/latest/sdk/location/
    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setCurrentLocation(currentLocation);
        })();
    }, []);

    const handleSignout = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.locationInput}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
            />
            <Text style={styles.text}>
                Coordinates: {latitude}, {longitude}
            </Text>
            <Text style={styles.text}>Current temperature: {todayTemp} F</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    renderLocationToLatLong(location);
                    if (latLong.data != undefined) {
                        setLatitude(latLong.data[0].latitude);
                        setLongitude(latLong.data[0].longitude);
                        updateWeather();
                        setErrorMsg("");
                    } else {
                        setErrorMsg("Loading... Click again.");
                    }
                }}
            >
                <Text style={styles.hyperlink}>Change Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (currentLocation.coords !== undefined) {
                        setLatitude(currentLocation.coords.latitude.toString());
                        setLongitude(
                            currentLocation.coords.longitude.toString()
                        );
                        setLocation("");
                        updateWeather();
                        setErrorMsg("");
                    } else {
                        setErrorMsg("Loading... Click again.");
                    }
                }}
            >
                <Text style={styles.hyperlink}>Current location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignout}>
                <Text style={styles.hyperlink}>Sign out</Text>
            </TouchableOpacity>

            <Text style={styles.error}>{errorMsg}</Text>

            <Text style={styles.text}>{auth.currentUser?.email}</Text>
        </View>
    );
};

export default GetLocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        paddingVertical: 15,
    },
    text: {
        paddingVertical: 15,
    },
    error: {
        color: 'red',
    },
    hyperlink: {
        color: "blue",
    },
    locationInput: {
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
    },
});
