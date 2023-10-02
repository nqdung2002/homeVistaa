import { React, useEffect, useState } from "react";
import "./find.css";
import { Navbar } from "../components/navbar";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Select, Options } from "../components/Select/Select";
import { Items } from "../components/items";

export const Find = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [priceOrder, setPriceOrder] = useState(""); // State cho Select giá
  const [areaFilter, setAreaFilter] = useState(""); // State cho Select diện tích
  const [bedroomFilter, setBedroomFilter] = useState(""); // State cho Select số phòng ngủ
  const [locationFilter, setLocationFilter] = useState(""); // State cho Select vị trí

  useEffect(() => {
    if (searchName === "") {
      fetch(`http://localhost:5000/house/getAllHouses`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
        });
    }
    fetch(`http://localhost:5000/house/searchByName?slug=${searchName}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, [searchName]);

  const sortByPrice = (order) => {
    fetch(`http://localhost:5000/house/sortByPrice?order=${order}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "Successful") {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchByArea = (minArea, maxArea) => {
    fetch(
      `http://localhost:5000/house/filterByArea?minArea=${minArea}&maxArea=${maxArea}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => {
        
        if (res.status === "Successful") {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchByNumOfBedroom = (nob) => {
    fetch(
      `http://localhost:5000/house/filterByNumOfBedroom?numOfBedroom=${nob}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "Successful") {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchByLocation = (location) => {
    fetch(`http://localhost:5000/house/filterByLocation?address=${location}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "Successful") {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePriceChange = (e) => {
    const selectedValue = e;
    console.log(selectedValue);
    setPriceOrder(selectedValue);
    sortByPrice(selectedValue);
  };

  const handleAreaChange = (e) => {
    const selectedValue = e;
    console.log(selectedValue);
    setAreaFilter(selectedValue);
    fetchByArea(selectedValue);
  };

  const handleBedroomChange = (e) => {
    const selectedValue = e;
    console.log(selectedValue);
    setBedroomFilter(selectedValue);
    fetchByNumOfBedroom(selectedValue);
  };

  const handleLocationChange = (e) => {
    const selectedValue = e;
    console.log(selectedValue);
    setLocationFilter(selectedValue);
    fetchByLocation(selectedValue);
  };
  return (
    <>
      <Navbar />
      <div className="findbar">
        <span className="find_title">
          <h1>Tìm kiếm</h1>
        </span>
        <span className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button>
            <MagnifyingGlass size={25} />
          </button>
        </span>
        <span className="filter">
          <Select
            label="Giá: "
            value={priceOrder}
            onChange={(e) => handlePriceChange(e)}
          >
            <Options value="" displayValue="Chọn"></Options>
            <Options value="asc" displayValue="Tăng dần"></Options>
            <Options value="desc" displayValue="Giảm dần"></Options>
          </Select>
        </span>
        <span className="filter">
          <Select
            label="Diện tích: "
            value={areaFilter}
            onChange={(e) => handleAreaChange(e)}
          >
            <Options value="" displayValue="Chọn"></Options>
            <Options value="50" displayValue="Nhỏ hơn 50m2"></Options>
            <Options value="100" displayValue="Nhỏ hơn 100m2"></Options>
            <Options value="200" displayValue="Nhỏ hơn 200m2"></Options>
            {/* <Options value="Lớn hơn 200m2"></Options> */}
          </Select>
        </span>
        <span className="filter">
          <Select
            label="Số phòng ngủ: "
            value={bedroomFilter}
            onChange={(e) => handleBedroomChange(e)}
          >
            <Options value="" displayValue="Chọn"></Options>
            <Options value="1" displayValue="1 phòng ngủ"></Options>
            <Options value="2" displayValue="2 phòng ngủ"></Options>
            <Options value="3" displayValue="3 phòng ngủ"></Options>
            <Options value="4" displayValue="4 phòng ngủ"></Options>
          </Select>
        </span>
        <span className="filter">
          <Select
            label="Vị trí: "
            value={locationFilter}
            onChange={(e) => handleLocationChange(e)}
          >
            <Options value="" displayValue="Chọn"></Options>
            <Options value="Hà Nội" displayValue="Hà Nội"></Options>
            <Options
              value="TP.Hồ Chí Minh"
              displayValue="TP.Hồ Chí Minh"
            ></Options>
            <Options value="Thanh Hóa" displayValue="Thanh Hóa"></Options>
            <Options value="Đà Nẵng" displayValue="Đà Nẵng"></Options>
          </Select>
        </span>
        <button className="clear-btn">Clear Filter</button>
      </div>
      <div className="row-grid">
        {data.map((i, index) => (
          <Items
            key={index}
            slug={i.slug}
            name={i.name}
            address={i.address}
            price={i.price}
          />
        ))}
      </div>
    </>
  );
};
