import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Modal,
    TextInput,
    Alert,
} from "react-native";
import { THEME } from "../theme";

export const EditModel = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                "Error",
                `Minimal length name 3 symbols. At this time ${
                    title.trim().length
                } symbols.`
            );
        } else {
            onSave(title);
        }
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Write your task"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button
                        color={THEME.PINK_COLOR}
                        title="Cancel"
                        onPress={onCancel}
                    />
                    <Button
                        color={THEME.PINK_COLOR}
                        title="Save"
                        onPress={saveHandler}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.BLACK_COLOR,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.PINK_COLOR,
        borderBottomWidth: 2,
        width: "80%",
        color: "white",
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
