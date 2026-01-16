import React from 'react'
import img from '../assets/img/bg-img.jpeg';
const backgroundImg = img;

export default function Connexion() {
  return (
    <>
    <div className="containe-fluid  d-flex flex-column justify-content-center px-5 align-items-center  vh-100 " style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
<form action="" className='form-group bg-white shadow p-5 wh-50 px-5'>
    
<div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
  <input type="text" className="form-control  border-top-none border-bottom" id="email"   />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput3" className="form-label">Mot de passe</label>
  <input type="text" className="form-control border border-bottom w-100" id="motdepasse"   />
</div>

<input type="checkbox" name="terme" id="terme" /><span>Garder-moi connecte</span><br />

    <div className="d-flex justify-content-center">
    <button type='submit' className='text-center btn btn-dark w-100 mt-3'>
    S'inscrire
    </button>
    </div>
    </form>
    <p className='mt-3'>Vous n'avez pas de compte ? <a href="/Inscriptions">S'inscrire</a></p>

    </div>
    
    </>
  )
}
