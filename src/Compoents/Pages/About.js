import React from "react";
import Styles from "../../CSS/Pages/AboutPage.module.scss";
function About() {
  return (
    <div className={Styles.PageContainer}>
      <div className={Styles.PageBody}>
        <h1 className={Styles.title}>關於我們</h1>
        <p className={Styles.text}>
          我們是一支充滿熱情且專業的團隊，
          <br />
          致力於利用最新科技改善工地安全。
          <br />
          我們的成員來自多元背景，
          <br />
          彼此在各自的學術領域和技術專長上互補互助，
          <br />
          我們的專長涵蓋了從網頁前端開發到人工智能與影像處理等多個領域，
          <br />
          並且我們有才華橫溢的成員能夠巧妙地將前端網頁技術與YOLOv8演算法完美融合。
          <br />
          <br />
          我們相信，透過創新的技術和對細節的專注，
          <br />
          能夠為建築行業帶來革命性的改變。
          <br />
          這個專案不僅是我們技術實力的展現，
          <br />
          更是我們對於提升職業安全和促進工作效率不懈追求的見證。
        </p>
      </div>
    </div>
  );
}

export default About;
