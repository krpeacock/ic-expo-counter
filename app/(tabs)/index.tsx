import { Image, StyleSheet } from "react-native";
import { Button } from "@/components/Button";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCounter } from "@/hooks/useCounter";

export default function HomeScreen() {
  const { count, increment, decrement, busy } = useCounter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Canister Counter</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.counter}>{count}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.twoButtonContainer}>
        <ThemedView>
          <Button title="-" label="decrement" onPress={decrement} busy={busy} />
        </ThemedView>
        <ThemedView>
          <Button title="+" label="increment" onPress={increment} busy={busy} />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  counter: {
    fontSize: 48,
    lineHeight: 64,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  twoButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
});
