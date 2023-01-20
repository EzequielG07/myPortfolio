import Swal from "sweetalert2";

export const message = (mensaje) => {
  Swal.fire({
    imageUrl:
      "https://res.cloudinary.com/duniuldn7/image/upload/v1674228422/portfolio/emblemdefault_103452_v6m0nz.png",
    imageHeight: 250,
    imageAlt: "A tall image",
    text: mensaje,
    background: "#17202a",
    color: "#FFFFFF",
    position: "top",
    width: "24em",
    heightAuto: false,
  });
};
