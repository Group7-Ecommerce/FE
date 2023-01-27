import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";

import { SkeletonLoading } from "../components/Loading";
import { HomepageType } from "../utils/types/Homepage";

import Swal from "../utils/Swal";
import Layout from "../components/Layout";
import DetailProduct from "./DetailProduct";
import CardPost from "../components/CardPost";
import Button from "../components/Button";
import Card from "../components/Card";
import { setCart } from "../utils/redux/reducers/reducer";

const Homepage = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const [datas, setDatas] = useState<HomepageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData;
  }, []);

  function fetchData() {
    axios.get(`products/${id}`)
    .then((res) => {
      const { data } = res.data.data;
      setDatas(data);
    })
    .catch((err) => {
      alert(err.toString());
    })
    .finally(() => setLoading(false));
  }

  function handleCart(data: HomepageType) {
    const checkExist = localStorage.getItem("Cart");
    if (checkExist) {
      let parseCart: HomepageType[] = JSON.parse(checkExist);
      parseCart.push(data);
      localStorage.setItem("Cart", JSON.stringify(parseCart));
      dispatch(setCart(parseCart));
    } else {
      localStorage.setItem("Cart", JSON.stringify([data]));
      alert("Items add to Cart");
    }
  }

  return (
    <Layout>
      <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
        {loading
          ? [...Array(5).keys()].map((data) => <SkeletonLoading key={data} />)
          : datas.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                image={data.image}
                id={data.id}
                labelButton="ADD TO CART"
                onClickCart={() => handleCart(data)}
              />
            ))}
      </div>
    </Layout>
  )
};

export default Homepage;
