import React from 'react'
import { Link } from 'react-router-dom'
import carCartSlice from "../Store/carCartSlice";
import { useSelector, useDispatch } from "react-redux";

const Card = (props) => {
  const carCartSlice = useSelector((store) => store.carCartSlice.carCart);
  const dispatch = useDispatch();
  return (
    <div className='col-4 justify-center'>
      <div className='col-11 car-card'>
        <img src={props.image} className='card-image' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>{props.name}</h6>
          <h6 className='card-title font-weight-bold'>Rp. {props.price}  / hari</h6>
          <p className='card-text'>
            <i class="fa-solid fa-user-group"></i>
            &nbsp; &nbsp; 4 orang
          </p>
          <p className='card-text'>
            <i class="fa-solid fa-gear"></i>
            &nbsp; &nbsp; Manual
          </p>
          <p className='card-text'>
            <i class="fa-solid fa-calendar-days"></i>
            &nbsp; &nbsp; Tahun 2020
          </p>
          <Link to={`/detail/${props.id}`} className='btn btn-success w-100 mt-3'>
            {carCartSlice === props.id
              ? "Lanjutkan Pembayaran"
              : "Pilih mobil"}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card