import { loadingSliceDef } from "../src/loadingSlice.js";

function testLoadingSlice() {
  const fakeState = { value: { completed: true } };
  loadingSliceDef.reducers.loadingStarted(fakeState);

  if (fakeState.value.completed) {
    throw new Error("FAILED!");
  } else {
    console.log("The loadingStarted reducer works!");
  }
}

testLoadingSlice();
