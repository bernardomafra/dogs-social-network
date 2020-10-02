import React from "react";
import styles from "./feedmodal.module.css";
import useFetch from "../../../hooks/useFetch";
import Error from "../../Error";
import Loading from "../../Loading";
import PhotoContent from "../../PhotoContent";
import { PHOTO_GET } from "../../../services/api";
const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
