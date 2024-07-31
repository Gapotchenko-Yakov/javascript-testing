import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

export const renderTestApp = (
  component,
  options = { initialValue: { counter: { value: 0 } }, initialRoute: "/" }
) => {
  return render(
    <Provider store={createReduxStore(options?.initialValue)}>
      <MemoryRouter initialEntries={[options?.initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
