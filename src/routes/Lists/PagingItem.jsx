import React, { useEffect, useState, useContext } from "react";
import Item from "./Item";

const PagingItem = ({ search, data }) => {

  const [_data, setData] = useState();
  const [visible, setVisible] = useState(5);

  
  useEffect(() => {
    setData(data.slice(0, visible ));
  }, [visible]);

  const LoadMore = () => {
    setVisible((visible+5));
    // setData(data.slice(0, visible ));
  };

  return (
    <React.Fragment>
      {_data &&
        _data.map((item, index2) => {
          return <Item search={search} key={index2} item={item} />;
        })}

      {data && data.length >= visible ? (
        <div className="row mt-3">
          <div className="col text-center">
            <button className="btn btn-sm btn-light font-12" onClick={LoadMore}>
              More{" "}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PagingItem;
