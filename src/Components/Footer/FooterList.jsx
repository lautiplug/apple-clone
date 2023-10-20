import { useEffect, useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";

const FooterTitle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  let isPageWide = useMediaQuery('(min-width: 1074px)')

  // if width > 1074 set it to true
  useEffect(() => {
    if (isPageWide) {
      setIsOpen(true);
    }
  }, [isPageWide]);

  // if width < 1074 set it to false
  useEffect(() => {
    if (!isPageWide) {
      setIsOpen(false);
    }
  }, [isPageWide]);

  // handle click to change isOpen between true and false
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={handleToggle} className="title-drop">
        <h1 className="list-title">{title}</h1>
        <span className={!isOpen ? "plus-icon" : "plus-icon--active"}>+</span>
      </div>
      {isOpen && children}
    </>
  );
};

export const FooterList = ({ title, selectedTitle, setSelectedTitle }) => {
  const isOpen = selectedTitle === title;

  const handleToggle = () => {
    setSelectedTitle(isOpen ? null : title);
  };

  // Take a look at some better options to render this.
  return (
    <div>
      <div onClick={handleToggle}></div>
      <section>
        {isOpen && (
          <>
            <div className="first-list">
              <FooterTitle title="Shop and Learn">
                <ul
                  className="ul-container"
                >
                  <li className="item-list">
                    <a href="apple.com">Store</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Mac</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">iPad</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">iPhone</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Watch</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Vision</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">AirPods</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">TV & Home</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">AirTag</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Accessories</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Gift Cards</a>
                  </li>
                </ul>
                <FooterTitle title="Apple Wallet">
                  <ul className="ul-container">
                    <li className={!isOpen ? "item-list" : "item-list.active"}>
                      <a href="apple.com">Wallet</a>
                    </li>
                    <li className={!isOpen ? "item-list" : "item-list.active"}>
                      <a href="apple.com">Apple Card</a>
                    </li>
                    <li className={!isOpen ? "item-list" : "item-list.active"}>
                      <a href="apple.com">Apple Pay</a>
                    </li>
                    <li className={!isOpen ? "item-list" : "item-list.active"}>
                      <a href="apple.com">Apple Cash</a>
                    </li>
                  </ul>
                </FooterTitle>
              </FooterTitle>
            </div>
            <div className="scnd-list">
              <FooterTitle title="Account">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Manage Your Apple ID</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Store Account</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">iCloud.com</a>
                  </li>
                </ul>
              </FooterTitle>
              <FooterTitle title="Entertainment">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple One</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple TV+</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Music</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Arcade</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Fitness+</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple News+</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Podcasts</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Books</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">App Store</a>
                  </li>
                </ul>
              </FooterTitle>
            </div>

            <div className="third-list">
              <FooterTitle title="Apple Store">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Find a Store</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Genius Bar</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Today at Apple</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Camp</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Store App</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Certified Refurbished</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Trade In</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Financing</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Carrier Deals at Apple</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Order Status</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Shopping Help</a>
                  </li>
                </ul>
              </FooterTitle>
            </div>

            <div className="fourth-list">
              <FooterTitle title="For Business">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple and Business</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Shop for Business</a>
                  </li>
                </ul>
              </FooterTitle>
              <FooterTitle title="For Business">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple and Education</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Shop for K-12</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Shop for College</a>
                  </li>
                </ul>
              </FooterTitle>
              <FooterTitle title="For Healthcare">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple in Healthcare</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Health on Apple Watch</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Health Records on iPhone</a>
                  </li>
                </ul>
              </FooterTitle>
              <FooterTitle title="For Government">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Shop for Government</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Shop for Veterans and Military</a>
                  </li>
                </ul>
              </FooterTitle>
            </div>

            <div className="fifth-list">
              <FooterTitle title="Apple Values">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Accessibility</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Education</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Environment</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Inclusion and Diversity</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Privacy</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Racial Equity and Justice</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Supplier Responsibility</a>
                  </li>
                </ul>
              </FooterTitle>
              <FooterTitle title="About Apple">
                <ul className="ul-container">
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Newsroom</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Apple Leadership</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Career Opportunities</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Investors</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Ethics & Compliance</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Events</a>
                  </li>
                  <li className={!isOpen ? "item-list" : "item-list.active"}>
                    <a href="apple.com">Contact Apple</a>
                  </li>
                </ul>
              </FooterTitle>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
