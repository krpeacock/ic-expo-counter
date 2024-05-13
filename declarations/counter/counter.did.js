export const idlFactory = ({ IDL }) => {
  const Counter = IDL.Service({
    'decrement' : IDL.Func([], [IDL.Nat], []),
    'getCount' : IDL.Func([], [IDL.Nat], ['query']),
    'increment' : IDL.Func([], [IDL.Nat], []),
    'reset' : IDL.Func([], [IDL.Nat], []),
  });
  return Counter;
};
export const init = ({ IDL }) => { return []; };
