import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { Main } from "./Main";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
            padding: "12px 16px",
          },
        }}
      />
    </>
  );
};

export default App;
