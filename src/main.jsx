import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";


axios.defaults.baseURL = "http://localhost:5000/";


ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<ThemeProvider>
			<Toaster />
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	</AuthProvider>
);
