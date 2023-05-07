/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import "./item_page.css";
import { Navbar } from "../components/navbar";
import { useParams } from "react-router-dom";

export const Item_page = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/house/${slug}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, [slug]);
  const img = data.slug && require(`../assets/images/${data.slug}.jpg`);
  return (
    <div className="item_page_container">
      <Navbar />
      <div className="item_content">
        <img src={img} alt="" />
        <h1>Giới thiệu về {data.name}</h1>
        <p>{data.description}</p>
        <ul>
          <li>
            <b>Trạng thái</b>
            <p>{data.status}</p>
          </li>
          <li>
            <b>Diện tích</b>
            <p>{data.area}</p>
          </li>
          <li>
            <b>Vị trí</b>
            <p>{data.address}</p>
          </li>
          <li>
            <b>Loại hình</b>
            <p>{data.typeOfHouse}</p>
          </li>
          <li>
            <b>Phòng ngủ</b>
            <p>{data.numberOfBedroom}</p>
          </li>
          <li>
            <b>Giá</b>
            <p>{data.price}</p>
          </li>
        </ul>
      </div>

      <div className="sidebar">
        <h2>{data.name}</h2>
        <hr />
        <ul>
          <li>
            <b>Trạng thái</b>
            <p>{data.status}</p>
          </li>
          <li>
            <b>Diện tích</b>
            <p>{data.area}</p>
          </li>
          <li>
            <b>Vị trí</b>
            <p>{data.address}</p>
          </li>
          <li>
            <b>Loại hình</b>
            <p>{data.typeOfHouse}</p>
          </li>
          <li>
            <b>Phòng ngủ</b>
            <p>{data.numberOfBedroom}</p>
          </li>
          <li>
            <b>Giá</b>
            <p>{data.price}</p>
          </li>
        </ul>
        <hr />
        <a href={`/find/${data.slug}/playpage`} className="button1">
          Xem nhà ngay
        </a>
        <div className="button2">
          <a href="">Liên hệ</a>
          <a href="">Yêu thích</a>
        </div>
      </div>
    </div>
  );
};
