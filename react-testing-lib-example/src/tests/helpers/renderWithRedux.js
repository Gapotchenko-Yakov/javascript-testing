import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { render } from "@testing-library/react";

export const renderWithRedux = (
  component,
  initialValue = { counter: { value: 0 } }
) => {
  return render(
    <Provider store={createReduxStore(initialValue)}>{component}</Provider>
  );
};
