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
    [
      {
        id: 1,
        title: "Asus 1",
        price: "Rp12.000.00",
        qty: "1",
        image:
          "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?webp",
        description: "ini laptop asus",
      },
      {
        id: 2,
        title: "Asus 2",
        price: "Rp12.000.00",
        qty: "1",
        image:
          "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?webp",
        description: "ini laptop asus",
      },
      {
        id: 3,
        title: "Asus 3",
        price: "Rp12.000.00",
        qty: "1",
        image:
          "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?webp",
        description: "ini laptop asus",
      },
      {
        id: 4,
        title: "Asus 4",
        price: "Rp12.000.00",
        qty: "1",
        image:
          "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?webp",
        description: "ini laptop asus",
      },
      {
        id: 5,
        title: "Asus 5",
        price: "Rp12.000.00",
        qty: "1",
        image:
          "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?webp",
        description: "ini laptop asus",
      },
    ];
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
