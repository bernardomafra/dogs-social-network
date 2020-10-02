import React from "react";
import styles from "./feedphotositem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.viewers}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
