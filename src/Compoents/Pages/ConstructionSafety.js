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
                <Image className={Styles.pageImg} src={img2}></Image>
                <Image className={Styles.pageImg} src={img3}></Image>
                <Image className={Styles.pageImg} src={img4}></Image>
				<Image className={Styles.pageImg} src={img5}></Image>
				<a target="_blank" href="https://publicworks-pub02.tainan.gov.tw/sub_proj/ConstructionQC/warehouse/G00000/%E7%87%9F%E9%80%A0%E6%96%BD%E5%B7%A5%E5%AE%89%E5%85%A8%E6%A8%99%E6%BA%96%E4%BD%9C%E6%A5%AD%E7%A8%8B%E5%BA%8F(3).pdf">其他</a>
			</div>
		</div>
	);
}

export default ConstructionSafety;
