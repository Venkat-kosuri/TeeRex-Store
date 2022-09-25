import React, { useState, useMemo, useEffect } from "react";
import "./style.css";
import axios from "axios";
import ProductCard from "../helper/ProductCard";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import { InputGroup, FormControl, Button } from "react-bootstrap";
const Cards = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [productsInfo, setProductsInfo] = useState(data);
  const [error, setError] = useState(false);
  let baseUrl = `https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json`;
  useMemo(() => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setData(response.data);
        setProductsInfo(response.data);
      })
      .catch((error) => console.log(error));
  }, [baseUrl]);

  const filterGender = (catitem) => {
    const result = data.filter((curData) => {
      return curData.gender === catitem;
    });
    setProductsInfo(result);
    // console.log("gender", result);
  };
  const filterColor = (catitem) => {
    const result = data.filter((curData) => {
      return curData.color === catitem;
    });
    setProductsInfo(result);
    // console.log("color", result);
  };

  const filterCoat = (catitem) => {
    const result = data.filter((curData) => {
      return curData.type === catitem;
    });
    setProductsInfo(result);
    // console.log("coat", result);
  };
  const filterPrice = (catitem) => {
    const result = data.filter((curData) => {
      return curData.price === catitem;
    });
    setProductsInfo(result);
    // console.log("coat", result);
  };

  const filterPrices = (catitem) => {
    if (catitem) {
      const filteredData = data.filter((item) => item.price <= 450);
      setProductsInfo(filteredData);
      // console.log("price 251 to 450", filteredData);
    } else {
      console.log("error");
    }
  };

  const filterEnd = (catitem) => {
    const result = data.filter((curData) => {
      return curData.price === catitem;
    });
    setError(true);
    setProductsInfo(result);
    setError("No Products ");
  };
  useEffect(() => {}, [error]);

  return (
    <>
      <div className="wrapper">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4 mb-3 mx-auto text-center">
              <InputGroup className="">
                <FormControl
                  placeholder="Search For Products"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="bg-light text-black"
                />
                <InputGroup.Text className="bg-light text-dark-primary">
                  <BiSearch size="2rem" className="text-dark" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            {error && <h4 className="text-center text-warning"> {error} </h4>}
            <div className="d-md-flex ">
              <div className="col-md-3 mt-3 ">
                <div className="d-block">
                  <p className="me-2">Gender</p>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterGender("Men")}
                    className="me-3"
                  >
                    Men
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterGender("Women")}
                  >
                    Women
                  </Button>
                </div>
                <div className="d-block mt-3">
                  <p className="me-2">Color</p>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterColor("Blue")}
                    className="me-3"
                  >
                    Blue
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterColor("Red")}
                    className="me-3"
                  >
                    Red
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterColor("Green")}
                    className="me-3"
                  >
                    Green
                  </Button>
                </div>
                <div className="d-block mt-3">
                  <p className="me-2">Price</p>

                  <Button
                    variant="outline-warning"
                    onClick={() => filterPrice(250)}
                    className="me-3"
                  >
                    0-Rs250
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterPrices(500)}
                    className="me-3"
                  >
                    Rs251-450
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterEnd(450)}
                    className="me-3"
                  >
                    450
                  </Button>
                </div>
                <div className="d-block mt-3">
                  <p className="me-2">Type</p>

                  <Button
                    variant="outline-warning"
                    onClick={() => filterCoat("Polo")}
                    className="me-3"
                  >
                    Polo
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterCoat("Hoodie")}
                    className="me-3"
                  >
                    Hoodie
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => filterCoat("Basic")}
                    className="me-3"
                  >
                    Basic
                  </Button>
                </div>
              </div>
              <div className="col-md-9">
                <SearchFilter
                  value={searchInput}
                  data={productsInfo}
                  renderResults={(results) => (
                    <div className="row d-flex">
                      {results.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            <ProductCard item={item}></ProductCard>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
