import { Link } from "react-router-dom";
import "./Soon.css";

export const Soon = () => {
  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span>sorry</span>
          <span>this view is in progress</span>
        </div>
      </div>
      <div className="text-bottom">
        <div> <Link to={"/"}>get back</Link></div>
      </div>
    </div>
  );
};
