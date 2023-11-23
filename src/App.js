import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./Compoents/Shared/Header";
import Footer from "./Compoents/Shared/Footer";

function App() {
	return (
		<div className={Styles.App}>
			<Header></Header>

			<div>
				<Outlet></Outlet>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
}

export default App;
