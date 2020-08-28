import React from 'react';
import DrinkImages from '../../../../resouces/images/menuImages/drinkImages';
import './SubMenu.scss';
const SubMenuDrinks = () => {
  const menuDrinks = DrinkImages.map(function (image, i) {
    return (
      <div class="card" style={{ width: '18rem' }}>
        <img
          src={image.src}
          class="card-img-top"
          alt="..."
          width={300}
          height={300}
        />
        <div class="card-body">
          <h5 class="card-title">{image.title}</h5>
          <p class="card-text">{image.content}</p>
          <p>{image.price}</p>
        </div>
      </div>
    );
  });
  return (
    <div
      className="SubMenuItems"

      //   class="d-flex flex-row flex-wrap bd-highlight mb-3 justify-content-center "
    >
      {menuDrinks}
    </div>
  );
};

export default SubMenuDrinks;
