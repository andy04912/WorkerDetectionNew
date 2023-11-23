import React from "react";
import { createHashRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "../App";
import HomePage from "../Compoents/Pages/HomePage";
import ProjectInfo from "../Compoents/Pages/ProjectInfo";
import About from "../Compoents/Pages/About";
import ConstructionSafety from "../Compoents/Pages/ConstructionSafety";

const Router = createHashRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/ProjectInformation",
				element: <ProjectInfo />,
			},
			{
				path: "/About",
				element: <About />,
			},

			{
				path: "/ConstructionSafety",
				element: <ConstructionSafety />,
			},
		],
	},
]);

export default Router;
