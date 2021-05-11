import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/todoReducer";

const Footer = (props: any) => {
  const dispatch = useDispatch();

  const pageSize = Math.floor(
    (document.body.getBoundingClientRect().height) / 61
  );
  console.log(pageSize, document.body.getBoundingClientRect().height)

  return (
    <footer className="footer">
      {props.tasks.length < pageSize ? (
        <div>footer</div>
      ) : (
        <div className="buttonX">
          {props.pages.map((it: number) => (
            <button
              className={
                it === props.currentPage ? "pageButtons transition" : "x"
              }
              key={it}
              onClick={(e) => {
                e.preventDefault();
                dispatch(changePage(pageSize, it));
              }}
            >
              {it}
            </button>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
