import React, { useRef, useEffect } from "react";
import detectVideo from "../../Image/detectVideo.mp4";
import Styles from "../../CSS/Pages/HomePage.module.scss";
import { Image } from "react-bootstrap";
import workerImg from "../../Image/workerIMG.jpg";
import cctvImg from "../../Image/CCTVIMG.jpg";
import helmet from "../../Image/helmetIMG.jpg";
import { Link } from "react-router-dom";

function HomePage() {
	const canvasRef = useRef(null);
	const markers = useRef([]);

	return (
		<div className={Styles.HomePageContainer}>
			<div className={Styles.HomePageBody}>
				<div className={Styles.firstImgContainer}>
					<video
						className={Styles.detectVideo}
						src={detectVideo}
						autoPlay
						loop
						muted
					></video>
					<div className={Styles.textOverlay}>防護器具偵測</div>
				</div>

				<div className={Styles.secondImgContainer}>
					<Image className={Styles.workerImg} src={workerImg}></Image>
					<Link
						to="/ProjectInformation"
						className={Styles.secondImgtextOverlay}
					>
						專案介紹
					</Link>
				</div>

				<div className={Styles.thirdImgContainer}>
					<Image className={Styles.cctvImg} src={helmet}></Image>
					<Link
						to="/ConstructionSafety"
						className={Styles.secondImgtextOverlay}
					>
						工業安全
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;

// 調整 canvas 尺寸以匹配其父元素
// const resizeCanvas = () => {
// 	const canvas = canvasRef.current;
// 	canvas.width = canvas.offsetWidth;
// 	canvas.height = window.innerHeight * 0.75;
// 	updateCanvas(); // 確保在調整尺寸後重新繪製
// };

// useEffect(() => {
// 	// 窗口大小改變時調整 canvas 尺寸
// 	window.addEventListener("resize", resizeCanvas);
// 	resizeCanvas(); // 初始調整大小
// 	const interval = setInterval(() => {
// 		updateCanvas();
// 	}, 1000);
// 	return () => {
// 		clearInterval(interval);
// 		window.removeEventListener("resize", resizeCanvas);
// 	};
// }, []);

// const updateCanvas = () => {
// 	const canvas = canvasRef.current;
// 	const ctx = canvas.getContext("2d");
// 	const imageWidth = canvas.width;
// 	const imageHeight = canvas.height;

// 	// 隨機添加或移除標記
// 	if (Math.random() < 0.5 && markers.current.length < 10) {
// 		markers.current.push({
// 			x: Math.random() * imageWidth,
// 			y: Math.random() * imageHeight,
// 		});
// 	} else if (markers.current.length > 0) {
// 		markers.current.splice(
// 			Math.floor(Math.random() * markers.current.length),
// 			1
// 		);
// 	}

// 	// 清除並重新繪製
// 	ctx.clearRect(0, 0, imageWidth, imageHeight);
// 	ctx.drawImage(
// 		document.getElementById("backgroundImage"),
// 		0,
// 		0,
// 		imageWidth,
// 		imageHeight
// 	);

// 	// 方框尺寸
// 	const boxSize = 20; // 方框的邊長

// 	markers.current.forEach((marker) => {
// 		ctx.strokeStyle = "red";
// 		ctx.lineWidth = 2;
// 		ctx.beginPath();
// 		ctx.strokeRect(marker.x, marker.y, boxSize, boxSize);
// 		ctx.fill();
// 	});
// };
