import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<Toaster />
				<RouterProvider router={router}></RouterProvider>
			</QueryClientProvider>
		</ThemeProvider>
	</AuthProvider>
);
