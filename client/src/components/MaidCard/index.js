import React from 'react';
import { Link } from 'react-router-dom';
import "./MardCard.css";


//import images

import Maid1 from "../../assets/card/maid1.jpg"
// import Maid2 from "../assets/card/maid2.jpg"
// import Maid3 from "../assets/card/maid3.jpg"


const MaidCard = ({ maids }) => {

  console.log(maids)
  return (
    // card1
    <div className='card-holder'>
      {maids &&
        maids.slice(0, 3).map(maid => (
          <div key={maid._id} className="card mb-3">
            <div className='card-image'>
              <div className='image is-4by3'>
                <img src={Maid1} alt="maid" />;
              </div>
            </div>
            <div className="card-content">
              <div>
              <Link
                to={`/profile/${maid.name}`}
                style={{ fontWeight: 700 }}
              >
                {maid.maid_username}
              </Link>{' '}{maid.name}
              </div>
              <div> Clean Spaces, Clean Mind.
              </div>
            </div>
            <a href="MaidInfo" className='button is-danger is-rounded learn-more'>
              Learn More</a>
          </div>
        ))}
    </div>
  );
};


// {
//   return (

//     {maids &&
//       maids.map(maid => (
//         <div key={maid._id} className=" mb-3">

//             <Link
//               to={`/profile/${maid.name}`}
//               style={{ fontWeight: 700 }}
//               className="text-light"
//             >
//               {maid.maid_username}
//             </Link>{' '}
//             thought on {maid.createdAt}
//         </div>
//       ))}

//     <div className='card'>
//       {/* card image */}
//       <div className='card-image'>
//         <figure className='image is-4by3'>
//           <img src={Maid1} alt="maid" />;
//         </figure>
//       </div>
//       {/* card icon  */}
//       <div className='card-content'>
//         <div className="media">
//           <div className="media-left">
//             <figure className="image is-48x48">
//               <img src={Maid1} alt="maid" />
//             </figure>
//           </div>
//           {/* card content */}
//           <div className="media-content">
//             <p className="title is-4"></p>
//             <p className="subtitle is-6">@johnsmith</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// };

export default MaidCard;