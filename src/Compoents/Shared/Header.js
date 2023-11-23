import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../../CSS/Shared/HeaderBar.module.scss";
import workerLogo from "../../logo_white.jpg";
import { Button } from "react-bootstrap";
import { BsList } from "react-icons/bs";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const handleClose = () => {
		setIsOpen(false);
	};

	const handleOpen = () => {
		setIsOpen(true);
	};

	const GoPage = (page) => {
		navigate(page);
		setIsOpen(false);
	};

	return (
		<>
			<div className={Styles.header}>
				<Link to="/" className={Styles.headerText}>
					做工的人
				</Link>
				<Button variant="light" onClick={handleOpen}>
					<BsList></BsList>
				</Button>
			</div>
			<div className={`${Styles.sideBar} ${isOpen ? Styles.open : ""}`}>
				<Button onClick={handleClose} variant="outline-light">
					關閉
				</Button>
				<h1 className={Styles.headerText}>做工的人</h1>
				<Button variant="outline-light" onClick={() => GoPage("/")}>
					主頁
				</Button>
				<Button
					variant="outline-light"
					onClick={() => GoPage("/ProjectInformation")}
				>
					專案介紹
				</Button>
				<Button
					variant="outline-light"
					onClick={() => GoPage("/ConstructionSafety")}
				>
					工業安全
				</Button>
				<Button variant="outline-light" onClick={() => GoPage("/")}>
					安全衛生作業管理
				</Button>
			</div>
		</>
	);
}

export default Header;
