import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import {listProducts} from '../actions/productsActions'

const HomeScreen = () => {
  // dispatch
  const dispatch = useDispatch()

  // select the part of the data
  const productList = useSelector(state => state.productList)
  const {loading,error,products} = productList

  React.useEffect(() => {
   dispatch(listProducts())
  }, [dispatch]);


  

  return (
    <>
      <h1>Latest Products</h1>
      {loading  ? <h2>Loading ...</h2> : error ? <h3>{error}</h3> :  <Row>
        {productList.products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row> }
     
    </>
  );
};

export default HomeScreen;
