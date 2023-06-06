import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<RouterProvider router={router}></RouterProvider>
	</ThemeProvider>
);
