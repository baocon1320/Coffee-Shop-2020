//incomplete component
import React from 'react';

export default function SubMenuData(props) {
  // const menuData = { props.menuData }.map(function (image, i) {
  //   console.log({ props.menuData });
  //   return (
  //     <div class="card p-2 bd-highlight" style={{ width: '18rem' }}>
  //       <img
  //         src={image.src}
  //         class="card-img-top"
  //         alt="..."
  //         width={300}
  //         height={300}
  //       />
  //       <div class="card-body">
  //         <h5 class="card-title">{image.title}</h5>
  //         <p class="card-text">{image.content}</p>
  //         <p>{image.price}</p>
  //       </div>
  //     </div>
  //   );
  // });
  return <div>{props.menuData[0].alt}</div>;
}
