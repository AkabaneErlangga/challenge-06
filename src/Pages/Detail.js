import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SearchBox from '../Component/SearchBox'
import { useDispatch, useSelector } from "react-redux";
import carCartSlice from "../Store/carCartSlice";

const Detail = () => {
  const param = useParams();
  const [car, setCar] = useState();
  const dispatch = useDispatch();
  const carCart = useSelector((store) => store.carCartSlice.carCart);
  useEffect(() => {
    axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${param.id}`)
      .then(res => {
        setCar(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className='space'></div>
      <SearchBox />
      <div className='row detail-container'>
        <div className='col-6'>
          <div className='detail-card col-11'>
            <h6 className='font-weight-bold'>Tentang paket</h6>
            <p>Include</p>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p>Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <h6 className='font-weight-bold'>Refund, Reschedule, Overtime</h6>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <div className='col-6'>
          {car &&
            <div className='detail-car-card text-center'>
              <img src={car.image} className='card-image' alt='...' />
              <div className='card-body text-left'>
                <h6 className='font-weight-bold'>{car.name}</h6>
                <p className='card-text'>
                  <i class="fa-solid fa-user-group"></i>	&nbsp;
                  4 orang	&nbsp;
                  <i class="fa-solid fa-gear"></i>	&nbsp;
                  Manual	&nbsp;
                  <i class="fa-solid fa-calendar-days"></i>	&nbsp;
                  Tahun 2020
                </p>
                <div className='row justify-content-between mt-4'>
                  <p>Total</p>
                  <p className='font-weight-bold'>Rp. {car.price}</p>
                </div>
              </div>
              <button className='btn btn-success w-100'
                disabled={carCart === car.id}
                onClick={() =>
                  dispatch(
                    carCartSlice.actions.addCarToCart({ id: car.id })
                  )
                }>
                <div type="submit" className="button-right-details">
                  {carCart === car.id
                    ? "Lanjutkan Pembayaran"
                    : "Pilih mobil"}
                </div>
              </button>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Detail