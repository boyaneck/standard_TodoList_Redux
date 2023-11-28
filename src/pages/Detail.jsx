import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>{location.state.title}</div>
      <div>{location.state.content}</div>
    </div>
  );
};

export default Detail;
