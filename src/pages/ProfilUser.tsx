import Layout from "../components/Layout";
import { BsPencil } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";

import { useCookies } from "react-cookie";
import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";
import { ProfileUserType } from "../utils/types/profile";

import { ProductType } from "../utils/types/product";
import Cardakun from "../components/Cardakun";
const MySwal = withReactContent(Swal);

import axios from "axios";

import Swal from "../utils/Swal";

interface ProfilUserProps {
  name: string;
  email: string;
  price: number;
  qty: number;
  hp: number;
  address: string;
  password: string;
}

const ProfilUser = () => {
  // profile
  const [myProduct, setMyProduct] = useState<ProductType[]>([]);
  const [cookie, setCookie, removeCookie] = useCookies();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [address, setAddress] = useState<string>("");
  const [hp, sethp] = useState<string>("");

  // Edit profile
  const [newPreviewImage, setNewPreviewImage] = useState<any>();
  const [editName, setEditName] = useState<string>("");
  const [editEmail, setEditEmail] = useState<string>("");
  const [editAddress, setEditAddress] = useState<string>("");
  const [editPassword, setEditPassword] = useState<string>("");
  const [editImage, setEditImage] = useState<string>("");
  const [newImage, setNewImage] = useState<any>();

  // add product
  const [addName, setNameProduct] = useState<string>("");
  const [addQty, setQty] = useState<string>("");
  const [addDescription, setDescription] = useState<string>("");
  const [addImage, setAddImage] = useState<any>();
  const [addPrice, setAddPrice] = useState<string>("");

  // const edit product
  const [editProduct, setEditProduct] = useState<string>("");
  const [editQty, setEditQty] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<any>();
  const [editDescription, setEditDescription] = useState<string>("");

  const handleFile = (file: any) => {
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEditImage = (file: any) => {
    setNewImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setNewPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // get user profile
  function getProfil() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`http://34.69.18.136/users`, config)
      .then((ress) => {
        const { email, hp, name, addres, image } = ress.data.data;
        setEmail(email);
        setName(name);
        sethp(hp);
        setAddImage(image);
        setAddress(address);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getProfil();
  }, []);

  //update profil => put
  function editProfil(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", editName);
    formData.append("address", editAddress);
    formData.append("email", editEmail);
    formData.append("password", editPassword);
    formData.append("image", editImage);

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .put(`https://34.69.18.136/users`, formData, config)
      .then((ress) => {
        Swal.fire({
          title: "Completed",
          text: "Berhasil ubah data",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  //delete akun
  function hapusAkun() {
    console.log("clicked");
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .delete(`http://34.69.18.136/users`, config)
      .then((ress) => {
        console.log(ress);
        // navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  // add product

  async function addPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", addName);
    formData.append("price", addPrice);
    formData.append("qty", addQty);
    formData.append("description", addDescription);
    formData.append("image", addImage);

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    await axios
      .post("http://34.69.18.136/posts", formData, config)
      .then((ress) => {
        const { message } = ress.data;
        console.log("data baru", message);
        // getPost();
        setImage({});
        alert("berhasil update product");
      })
      .catch((err) => {
        alert(err);
      });
  }

  // delete product

  function deleteProduct(id: number) {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .delete(`https://34.69.18.136/products/${id}`, config)
      .then((ress) => {
        MySwal.fire({
          title: "Success",
          text: "Berhasil Hapus product",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  // edit product

  function editPostingan(id: number) {
    const formData = new FormData();
    if (editPostingan) {
      formData.append("content", editPostingan);
    }
    if (newImage) {
      formData.append("photo", newImage);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .put(`http://13.229.98.76/posts/${id}`, formData, config)
      .then((ress) => {
        MySwal.fire({
          title: "Success",
          text: "Berhasil mengubah postingan",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center bg-base-200">
        <div className="flex h-full w-full flex-wrap items-center justify-between p-8 -mt-40">
          <div className="card w-2/5 gap-4 p-3 lg:h-2/5 justify-center -mt-44">
            <div className="card w-96 bg-white">
              <div className="overflow-x-auto w-full">
                <div className="flex">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 mt-5">
                      <img
                        src="https://cdn.discordapp.com/attachments/1066984251679059988/1067145147655139328/ellipse2x.png"
                        alt="Mardalena"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Mardalena</div>
                    <span className="gap-2 right-0 flex flex-row">
                      <button>
                        {" "}
                        <BsPencil className="" />{" "}
                      </button>
                      <button className="">Edit Profile</button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body items-start text-left justify-start">
                <button className="">Upload Product</button>
                <button className="">Pesanan saya</button>
              </div>
            </div>
          </div>

          <div className="card-body w-3/5 lg:h-2/5  -mt-60 rounded-lg">
            <div className="flex flex-col">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card w-96 bg-base-100">
                  <span className="flex-row px-3 pt-3">
                    <button>
                      {" "}
                      <BsCamera className="" /> Upload Your Product{" "}
                    </button>
                    {/* <button className="">Upload Your Product</button> */}
                  </span>

                  <figure>
                    <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?web" />
                  </figure>
                </div>
                <div className="card-body">
                  <p>Toshiba 14 inch +</p>
                  <p>Harga: Rp12.500.000</p>
                  <p>Stock: 5 pcs</p>
                  <p>
                    Detail Product: Ini adalah laptop Toshiba keluaran 2021
                    dengan speak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilUser;