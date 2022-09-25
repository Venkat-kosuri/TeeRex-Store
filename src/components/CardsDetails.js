import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  console.log("setData ==>", data);

  const { id } = useParams();
  // console.log("id", id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("getdata", getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = (e) => {
    setQuantity((prev) => prev + 1);
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove = (item) => {
    setQuantity((prev) => prev - 1);
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  const getQuantity = (data, id) => {
    return data.filter((_el) => _el.id === id)[0].quantity;
  };

  let error = [];

  console.log("error", error);

  const checkQuantity = (quantity, id) => {
    console.log("getQuantity(getdata, id)", getQuantity(getdata, id));
    if (quantity > getQuantity(getdata, id)) {
      error.push("Quantity is not available");
    }
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center"> View Items Page</h2>

        <section className="container mt-3 p-0">
          <div className="iteamsdetails">
            {data.map((item) => {
              return (
                <>
                  <div className="items_img">
                    <img src={item.imageURL} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>T shirt</strong> : {item.name}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> : ₹{item.price}
                          </p>

                          <p>
                            {" "}
                            <strong>Total</strong> :₹ {item.price * item.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                item.qnty <= 1
                                  ? () => dlt(item.id)
                                  : () => remove(item)
                              }
                            >
                              -
                            </span>
                            <span
                              style={{ fontSize: 22 }}
                              onChange={checkQuantity(quantity, item.id)}
                            >
                              {quantity}
                            </span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(item)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {item.rating} ★ ★ ★ ★{" "}
                            </span>
                          </p>

                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={() => dlt(item.id)}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        {error.map((_el) => (
          <h6 className="text-danger text-center mt-3">{_el}</h6>
        ))}
      </div>
    </>
  );
};

export default CardsDetails;
