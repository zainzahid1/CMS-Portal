import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import axios from '../../../axios-orders';
import * as actions from '../../../store/actions/index';
import Spinner from '../Spinner/Spinner'

import {
    Carousel,
} from 'react-bootstrap';

const ControlledCarousel = props => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { onFetchOrders, } = props;
    useEffect(() => {
        onFetchOrders();
    }, [onFetchOrders,])

    let products = <Spinner />

    products = props.orders.map((item) => {
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item.image}
                    alt="Carousel Images"
                />
            </Carousel.Item>

        )
    });

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {products}
        </Carousel>
    );
}


const mapStateToProps = state => {
    return {
        orders: state.order.orders,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlledCarousel, axios);
