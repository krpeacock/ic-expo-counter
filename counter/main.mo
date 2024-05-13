actor class Counter() = self {
  stable var state = 0;
  
  public func increment () : async Nat {
    state := state + 1;
    state;
  };

  public func decrement () : async Nat {
    if(state == 0) {
      return state;
    };
    state := state - 1;
    state;
  };

  public func reset () : async Nat {
    state := 0;
    state;
  };

  public query func getCount () : async Nat {
    state;
  };

};
