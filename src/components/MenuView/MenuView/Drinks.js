import React from "react";
import DrinkImages from "../../../resouces/images/menuImages/drinkImages";

const Drinks = () => {
  const drinks = DrinkImages.map(function(image, i) {
    return (
      <React-Fragment>
        <div class="media">
          <img
            src={image.src}
            class="mr-3"
            alt="..."
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
          <div class="media-body text-secondary">
            <h5 class="mt-0">
              {image.title}{" "}
              <span class="text-muted">...............{image.price}</span>
            </h5>

            <p>{image.content}</p>
          </div>
        </div>
      </React-Fragment>
    );
  });

  return (
    <div>
      <h1>DRINKS</h1>
      <div>{drinks}</div>
    </div>
  );
};

export default Drinks;
