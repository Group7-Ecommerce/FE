import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import { SkeletonLoading } from "../components/Loading";
import { HomepageType } from "../utils/types/Homepage";

import Swal from "../utils/Swal";
import Layout from "../components/Layout";
import DetailProduct from "./DetailProduct";
import Card from "../components/Card";
import Button from "../components/Button";

const Homepage = () => {
  const [cookie, setCookie] = useCookies(["token"])
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const [datas, setDatas] = useState<HomepageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData;
  }, []);

  function fetchData() {
    axios.get(`http://34.69.18.136/`)
    .then((res) => {
      const { data } = res.data;
      setCookie("token", data.token);
      setDatas(data); 
    })
    .catch((error) => {
      alert(error.toString());
    })
    .finally(() => setLoading(false));
  }

  function addToCart (_data: HomepageType) {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .post(`http://34.69.18.136/`, {}, config)
      .then((res) => {
        console.log("add to cart", res);
        const { message } = res.data;
        MySwal.fire({
          title: "Success Add to Cart",
          text: message,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return (
    <Layout>
      <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 mt-32">
      {loading
          ? [...Array(5).keys()].map((datas) => <SkeletonLoading key={datas} />)
          : datas.map((datas) => (
              <Card
                key={datas.id}
                title={datas.title}
                image={datas.image}
                price={datas.price}
                id={datas.id}
                labelButton="ADD CART"
                onClickCart={() => addToCart(datas)}
              />
            ))}
            </div>
    </Layout>
  );
};

export default Homepage;
