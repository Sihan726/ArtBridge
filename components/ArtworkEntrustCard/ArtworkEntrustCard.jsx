import React from "react";
import "./ArtworkEntrustCard.css";

const ArtworkEntrustCard = () => {
    return (
      <div className="project-card">
        <div className="project-card-wrapper">
          <div className="project-item">
          <div className="project-card">
            <div className="content-wrapper">
              <div className="content-container">
                <div className="project-title">企劃名稱(最多15個字)</div>
                <div className="meta-info">
                  <div className="user-info">
                    <div className="username">使用者名稱</div>
                    <img src="images/user-verification-icon.png" className="user-icon" alt="User profile icon" />
                  </div>
                  <div className="applicants">
                    <img src="images/user-icon.png" className="applicant-icon" alt="Applicants icon" />
                    <div>已有5人應徵</div>
                  </div>
                </div>
                <div className="project-description">
                  需要一個可以幫我畫角色的繪師，類型像圖片中那樣，偏向可矮Q版的風格，是......
                </div>
                <div className="divider"></div>
                <div className="footer">
                  <div className="category">
                    <img src="images/category-icon.png" className="category-icon" alt="Category icon" />
                    <div>OC/原創角色</div>
                  </div>
                  <div className="deadline">
                    <img src="images/calendar.png" className="deadline-icon" alt="Deadline icon" />
                    <div><span className="letter-spacing-1">截止於</span>:2025年02月03日</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-wrapper">
              <div className="price-container">
                <div className="price-badge">
                  <img src="images/price-icon.png" className="price-icon" alt="Price icon" />
                  <div>2000~5000</div>
                </div>
                <img src="images/artwork-icon.png" className="status-icon" alt="Project status indicator" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card-wrapper">
       <div className="project-item">
        <div className="project-card">
         <div className="content-wrapper">
          <div className="content-container">
           <div className="project-title">企劃名稱(最多15個字)</div>
           <div className="meta-info">
            <div className="user-info">
             <div className="username">使用者名稱</div>
             <img src="images/user-verification-icon.png" className="user-icon" alt="User profile icon" />
           </div>
           <div className="applicants">
             <img src="images/user-icon.png" className="applicant-icon" alt="Applicants icon" />
             <div>已有5人應徵</div>
           </div>
         </div>
         <div className="project-description">
           需要一個可以幫我畫角色的繪師，類型像圖片中那樣，偏向可矮Q版的風格，是......
         </div>
         <div className="divider"></div>
         <div className="footer">
           <div className="category">
             <img src="images/category-icon.png" className="category-icon" alt="Category icon" />
             <div>OC/原創角色</div>
           </div>
           <div className="deadline">
             <img src="images/calendar.png" className="deadline-icon" alt="Deadline icon" />
             <div><span className="letter-spacing-1">截止於</span>:2025年02月03日</div>
           </div>
         </div>
       </div>
     </div>
     <div className="price-wrapper">
       <div className="price-container">
         <div className="price-badge">
           <img src="images/price-icon.png" className="price-icon" alt="Price icon" />
           <div>2000~5000</div>
         </div>
         <img src="images/artwork-icon.png" className="status-icon" alt="Project status indicator" />
        </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  
    )
}
  

export default ArtworkEntrustCard;
