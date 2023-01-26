import { useState } from "react";
import Layout from "../components/Layout";
import { HomepageType } from "../utils/types/Homepage";
import { SkeletonLoading } from "../components/Loading";
import DetailProduct from "./DetailProduct";
import CardPost from "../components/CardPost";

const Beranda = () => {
  const [datas, setDatas] = useState<HomepageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  function fetchData() {
  }

  return (
    <Layout>
      <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
        {loading
          ? [...Array(5).keys()].map((data) => <SkeletonLoading key={data} />)
          : datas.map((data) => (
              <DetailProduct
                key={data.id}
                title={data.title}
                image={data.image}
                price={data.price}
                labelButton="Keranjang"
              />
            ))}
      </div>
    </Layout>
  );
};

export default Beranda;
