import Swal from "sweetalert2";

export default Swal.mixin({
  reverseButtons: true,
  confirmButtonColor: "#1e3a8a",
  showCancelButton: true,
  showClass: {
    popup: "animate__animated animate__fadeIn animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOut animate__faster",
  },
});
