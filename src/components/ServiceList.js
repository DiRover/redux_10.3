import React from 'react'
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
//компонент с отображением списка
function ServiceList() {
  const items = useSelector(state => state.serviceList);

  return (
      <React.Fragment>
          <Link to='/'><button type='button' className="btn btn-outline-secondary">Back to start page</button></Link>
          <Link to='/add'><button type='button' className="btn-list btn btn-outline-secondary">Add vehicle</button></Link>
          <div className="items-page">
              {items.map((service) =>
                  <div key={service.id} className="item-container">
                      <div className="picture">{service.picture}</div>
                      <div className="item-description">
                          <div className="vehicle-name">{service.vehicle}</div>
                          {service.discount ? <div className="price-box"><div className="price-text">Old price</div><div className="price-disc">{service.price}</div></div> :
                              <div className="price-box"><div className="price-text">Price</div><div className="price">{service.price}</div></div>}
                          {service.priceWIthDisc ? <div className="priceWithDisc">New price {service.priceWIthDisc}</div> : null}
                          {service.discount ? <div className="discount">Discount! {service.discount} %</div> : null}
                      </div>
                  </div>)}
          </div>
      </React.Fragment>
  )
}

export default ServiceList
