import { getCompletedTodos } from "../src/selectors/selectors.js";

function testSelectors() {
  const fakeState = {
    todos: {
      value: [
        {
          text: "9999",
          isCompleted: false,
        },
        {
          text: "8888",
          isCompleted: true,
        },
      ],
    },
  };

  const result = getCompletedTodos(fakeState);

  if (result.length === 1 && result[0].text === "8888") {
    console.log("getCompletedTodos works!");
  } else {
    throw new Error("getCompletedTodos IS NOT WORKING!");
  }
}

testSelectors();
