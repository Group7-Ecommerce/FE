import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState<HomepageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cookie, setCookie] = useCookies();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [totalQty, SetTotalQty] = useState<number>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData;
  }, []);

  function fetchData() {
    axios
      .get("http://34.69.18.136/products", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        const { data } = res.data;

        setCart(data);
        const totalQty = data.reduce((a: any, b: any) => {
          return a + b.qty;
        }, 0);
        const totalPrc = data.reduce((a: any, b: any) => {
          return a + b.total_price;
        }, 0);
        SetTotalQty(totalQty);
        setTotalPrice(totalPrc);
      })

      .catch((err) => {});
  }

  

  return (
    <Layout>
      <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 bg-black">
        {loading
          ? [...Array(5).keys()].map((data) => <SkeletonLoading key={data} />)
          : datas.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                image={data.image}
                id={data.id}
                labelButton="ADD TO CART"
                // onClickCart={() => handleCart(data)}
              />
            ))}
      </div>
    </Layout>
  );
};

export default Homepage;
