import React from "react";
import styles from "./Modal.module.css";

type statusType = "success" | "error";

export default function ModalComponent(props: {
  status: statusType;
  message: string;
  parentStateSetter: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      message: string;
    }>
  >;
}) {
  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target: HTMLElement = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    parent.classList.add(styles.modalHide);
    setTimeout(() => {
      props.parentStateSetter({
        status: false,
        message: "",
      });
    }, 500);
  }

  return (
    <div
      className={`${
        styles.footerModal
      } flex justify-between fixed bottom-0 right-0 w-1/4 xl:w-1/6 lg:w-1/6 mx-6 my-2 p-3 rounded-lg shadow-xl text-center bg-white border-2 border-dashed ${
        props.status === "success"
          ? "border-green-400  text-green-500"
          : "border-red-400  text-red-500"
      } font-sans font-light text-lg mb-10`}
    >
      <div>{props.message}</div>
      <div className="cursor-pointer" onClick={closeModal}>
        x
      </div>
    </div>
  );
}
