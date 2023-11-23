import React from "react";
import Styles from "../../CSS/Pages/ConstructionSafety.module.scss";

import { Image } from "react-bootstrap";
import img1 from "../../Image/ConstructionSafety/img1.jpg";
import img2 from "../../Image/ConstructionSafety/img2.jpg";
import img3 from "../../Image/ConstructionSafety/img3.jpg";
import img4 from "../../Image/ConstructionSafety/img4.jpg";
import img5 from "../../Image/ConstructionSafety/img5.jpg";
function ConstructionSafety() {
	return (
		<div className={Styles.PageContainer}>
			<div className={Styles.PageBody}>
				<span className={Styles.title}>工業安全</span>
				<Image className={Styles.pageImg} src={img1}></Image>
                <Image className={Styles.pageImg} src={img1}></Image>
                <Image className={Styles.pageImg} src={img1}></Image>
                <Image className={Styles.pageImg} src={img1}></Image>
			</div>
		</div>
	);
}

export default ConstructionSafety;
