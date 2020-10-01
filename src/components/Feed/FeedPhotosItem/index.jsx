import React from "react";
import styles from "./feedphotositem.module.css";

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.viewers}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
