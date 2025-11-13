import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { APP_ROUTES } from "./script/data";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden">Architect</h1>
      <Header />
      <main className="content">
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
