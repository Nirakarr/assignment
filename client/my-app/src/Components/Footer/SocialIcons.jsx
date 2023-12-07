import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-white-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[red] mx-1.5 text-xl hover:text-[red] hover:bg-white hover:text-[red]
        duration-300 "
        >
          <a href={icon.link} target="_blank" rel="noopener noreferrer">
            <ion-icon
              name={icon.name}
              style={{
                fontSize: "30px",
              }}
            ></ion-icon>
          </a>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
