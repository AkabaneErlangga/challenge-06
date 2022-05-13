import React from 'react'
import { Link } from 'react-router-dom'

const SearchBox = () => {
  return (
    <div className='search-box '>
      <form >
        <div className='row align-items-center'>
          <div className="form-group col">
            <label for="inputState">Tipe Driver</label>
            <select id="inputState" className="form-control">
              <option selected>Pilih Tipe Driver.</option>
              <option>Dengan Sopir</option>
              <option>Tanpa Sopir (lepas kunci)</option>
            </select>
          </div>
          <div class="form-group col">
            <label for="inputAddress2">Tanggal</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Pilih tanggal" />
          </div>
          <div class="form-group col">
            <label for="inputAddress2">Waktu jemput/ambil</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Pilih waktu" />
          </div>
          <div class="form-group col">
            <label for="inputAddress2">Jumlah penumpang</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Jumlah penumpang" />
          </div>
          <Link to={`/result`}>
            <button type="button" class="btn btn-success col">Success</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SearchBox