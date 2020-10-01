import React from "react";
import useFecth from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../services/api";
import FeedPhotosItem from "../FeedPhotosItem";
import Error from "../../Error";
import Loading from "../../Loading";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFecth();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
