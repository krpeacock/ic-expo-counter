import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export function Button(props: {
  busy?: boolean;
  onPress: () => void;
  title: string;
  label: string;
}) {
  const { onPress, title = "Save", label, busy } = props;
  return (
    <Pressable
      accessible={true}
      accessibilityLabel={label}
      accessibilityRole="button"
      accessibilityState={{ busy: busy }}
      style={busy ? styles.buttonBusy : styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonBusy: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
