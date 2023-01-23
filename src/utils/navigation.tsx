import { useNavigate, useParams } from "react-router-dom";
import { FC } from "react";

export const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};
