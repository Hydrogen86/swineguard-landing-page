import fbIcon from "./../assets/icons/fb-icon.png"
import emailIcon from "./../assets/icons/email.png"
import phoneIcon from "./../assets/icons/phone.png"
import "./../styles/footer.css"


function Footer(){
  return(
    <footer>
      <div className="column1">
        <h5 className="heading">You can visit us:</h5>
        <p className="detail place">Provincial Veterinary Office</p>
        <p className="detail time">Open at 8:00 AM - 5:00 PM Monday to Friday</p>
        <p className="detail location">Location: Bangbangalon, Boac, Marinduque</p>
        <p className="detail phone-number">Phone: +1234-567-890</p>
        <p className="detail email">Email: provincialVet@gmail.com</p>
      </div>
      <div className="column2">
        <div className="socmed-list">
          <h5 className="heading">Message us on:</h5>
          <ul>
            <li>
                <a href="#fb-link">
                  <img className="socmed-icon fb" src={fbIcon} alt="" />
                </a>
            </li>
            <li>
                <a href="#email-link">
                  <img className="socmed-icon email" src={emailIcon} alt="" />
                </a>
            </li>
            <li>
                <a href="#phone-link">
                  <img className="socmed-icon phone" src={phoneIcon} alt="" />
                </a>
            </li>
          </ul>
        </div>
        <p className="alright-reserved-txt">
          &copy; {new Date().getFullYear()} SwineGuard. All rights <br />
          reserved.Privacy Policy</p>
      </div>
    </footer>
  )
}


export default Footer 