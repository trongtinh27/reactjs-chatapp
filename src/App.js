// import { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { io } from "socket.io-client";
import Chat from "./pages/Chat/Chat";
import { AppProvider } from "./Context/AppContext";
import ParamsHandler from "./components/common/ParamsHandler";
import Login from "./pages/Login/Login";
import { UserProvider, useUser } from "./Context/UserContext";
import { Socket } from "socket.io-client";
import { SocketProvider } from "./Context/SocketContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }
  return user !== null ? children : <Navigate to="/login" />;
}

function RedirectIfAuthenticatied({ children }) {
  const { user, loading } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  return user === null ? children : <Navigate to="/" />;
}

function App() {
  // useEffect(() => {
  //   const socket = io("http://localhost:8007");

  //   socket.on("connect", () => {
  //     console.log("Connected to server");

  //     // Thực hiện join conversation sau khi kết nối
  //     socket.emit("join-conversation", "67ef7f75126526accef0a51c");

  //     // Lắng nghe sự kiện "receive-message"
  //     socket.on("receive-message", (message) => {
  //       console.log("Message received: ", message);
  //     });
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("Disconnected from server");
  //   });

  //   // Clean up socket connection khi component unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <AppProvider>
      <UserProvider>
        <SocketProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route
                  path="/:id"
                  element={
                    <ProtectedRoute>
                      <ParamsHandler>
                        <Chat />
                      </ParamsHandler>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <ParamsHandler>
                        <Chat />
                      </ParamsHandler>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RedirectIfAuthenticatied>
                      <ParamsHandler>
                        <Login />
                      </ParamsHandler>
                    </RedirectIfAuthenticatied>
                  }
                />
              </Routes>
            </div>
          </Router>
        </SocketProvider>
      </UserProvider>
    </AppProvider>
  );
}

export default App;
