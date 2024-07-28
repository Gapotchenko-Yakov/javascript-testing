import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

export const renderWithRouter = (initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
    </MemoryRouter>
  );
};
