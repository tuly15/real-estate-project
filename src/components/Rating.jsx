import ReactStars from "react-rating-stars-component";

import { render } from "react-dom";
const Rating = () => {
   const ratingChanged = (newRating) => {
     console.log(newRating);
   };

   render(
     <ReactStars
       count={5}
       onChange={ratingChanged}
       size={24}
       isHalf={true}
       emptyIcon={<i className="far fa-star"></i>}
       halfIcon={<i className="fa fa-star-half-alt"></i>}
       fullIcon={<i className="fa fa-star"></i>}
       activeColor="#ffd700"
     />,

     document.getElementById("where-to-render")
   );
};

export default Rating;