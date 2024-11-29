import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arow_icon from "../../assets/arrow_icon.svg"
const MyWork = () => {
  return (
    <div className="mywork" id="work"> 
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((item, index) => {
          return (
            <img key={index} src={item.w_img} alt="" />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
