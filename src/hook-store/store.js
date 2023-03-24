import { useState, useEffect } from "react";

// 훅 밖에 정의된 변수를 사용한다.
// 훅 밖에 정의된 변수를 사용하면 훅이 호출될 때마다 이전에 호출될 때의 값을 유지할 수 있다.
// 데이터를 공유할 수 있다.
let globalState = {};
let listeners = [];
let actions = {};

// use로 시작하고, React Hook을 사용하고 있다면 Custom Hook이 된다.
// 공통적으로 사용되는 코드를 묶어두는 것이다.
export const useStore = () => {
  console.log(actions);
  //전역 변수 globalState를 초깃값으로 사용하는 useState 객체를 생성하고 set함수만 할당 받아둔다.
  const setState = useState(globalState)[1];

  // 어떤 action이 일어났을 때 전역 변수 actions에 있는 특정 메서드를 실행하여 state를 업데이트한다.
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((listener) => listener !== setState);
    };
    // useState에 의해 생성된 setState는 불변성을 보장받는다.
    // 따라서 이렇게 해둬도 최초 한 번만 실행될 것이다.
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};

// const useStore = () => {
//     const setState = useState(globalState)[1];

//     const dispatch = (actionIdentifier) => {
//         const newState = actions[actionIdentifier](globalState);
//         globalState = { ...globalState, ...newState };

//         for (const listener of listeners) {
//         listener(globalState);
//         }
//     };

//     return [globalState, dispatch];
//     }
