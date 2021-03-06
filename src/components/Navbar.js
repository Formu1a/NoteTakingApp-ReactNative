import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: THEME.BLACK_COLOR,
        paddingBottom: 10,
    },
    text: {
        fontSize: 30,
        color: THEME.PINK_COLOR,
    },
});
