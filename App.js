import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
	//States:
	const [text, setText] = useState("");

	//Functions:
	const speak = () => {
		Speech.speak(text);
	};

	//Rendering:
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInputContainer}
				placeholder="Type text"
				value={text}
				onChangeText={(text) => setText(text)}
			/>
			<View style={{ margintTop: 5 }}></View>
			<Button title="Press to hear text" onPress={speak} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	textInputContainer: {
		width: 200,
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
	},
});
