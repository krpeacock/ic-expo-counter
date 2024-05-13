import { createActor } from "@/declarations/counter";
import { Actor } from "@dfinity/agent";
import { useEffect, useState } from "react";

export function useCounter() {
  // TODO - do properly with environment variables
  //   const counterActor = createActor("5ocin-fmaaa-aaaaa-qacaq-cai", {
  //     agentOptions: {
  //       host: "http://localhost:4943",
  //     },
  //   });
  const counterActor = createActor("sveyc-uyaaa-aaaab-qaimq-cai", {
    agentOptions: {
      host: "https://icp-api.io",
    },
  });
  Actor.agentOf(counterActor)?.fetchRootKey();

  const [count, setCount] = useState<number | null>(null);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    counterActor.getCount().then((count) => {
      setCount(Number(count));
      setBusy(false);
    });
  }, []);

  const increment = () => {
    setBusy(true);
    counterActor.increment().then(() => {
      counterActor.getCount().then((count) => {
        setBusy(false);
        setCount(Number(count));
      });
    });
  };

  const decrement = () => {
    setBusy(true);
    counterActor.decrement().then(() => {
      counterActor.getCount().then((count) => {
        setBusy(false);
        setCount(Number(count));
      });
    });
  };

  const reset = () => {
    setBusy(true);
    counterActor.reset().then(() => {
      counterActor.getCount().then((count) => {
        setBusy(false);
        setCount(Number(count));
      });
    });
  };

  return { count, setCount, increment, decrement, reset, busy };
}
