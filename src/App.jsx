import AppRoutesAdmin from "./routes/AdminRoutes";
import AppRoutesUser from "./routes/UserRoutes";

function App() {
  return (
    <>
      {/* Định tuyến cho phần quản trị 
      <AppRoutesAdmin />*/}
      {/* Định tuyến cho phần người dùng */}
      <AppRoutesUser />
    </>
  );
}

export default App;