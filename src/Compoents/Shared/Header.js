import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../../CSS/Shared/HeaderBar.module.scss";
import workerLogo from "../../logo_white.jpg";
import { Button } from "react-bootstrap";
import { BsList, BsXLg } from "react-icons/bs";

import { useLocation } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  /**檢查是否為主頁，是就改成透明的Style */
  const isRootPath = location.pathname === "/";
  const headerClass = isRootPath ? Styles.header : Styles.headerWithBG;
  const headerLogoClass = isRootPath
    ? Styles.headerText
    : Styles.headerTextWithBG;
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const GoPage = (page) => {
    if (page != "URL") {
      navigate(page);
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else {
      window.open("http://140.120.90.202:8501/", "_blank", "noreferrer");
    }
  };

  return (
    <>
      <div className={headerClass}>
        <Link to="/" className={headerLogoClass}>
          做工的人
        </Link>
        <Button
          variant="light"
          onClick={handleOpen}
          className={Styles.headerBtn}
        >
          <BsList></BsList>
        </Button>
      </div>
      <div className={`${Styles.sideBar} ${isOpen ? Styles.open : ""}`}>
        <div>
          <span onClick={handleClose}>
            <BsXLg></BsXLg>
          </span>
        </div>
        <h1 className={Styles.headerText}>做工的人</h1>
        <div>
          <span onClick={() => GoPage("/")}>主頁</span>
        </div>
        <div>
          <span onClick={() => GoPage("/ProjectInformation")}>專案介紹</span>
        </div>
        <div>
          <span onClick={() => GoPage("URL")}>電腦視覺介面YOLOV8</span>
        </div>
        <div>
          <span onClick={() => GoPage("/ConstructionSafety")}>
            安全衛生作業管理
          </span>
        </div>
        <div>
          <span onClick={() => GoPage("/About")}>關於我們</span>
        </div>
      </div>
    </>
  );
}

export default Header;
