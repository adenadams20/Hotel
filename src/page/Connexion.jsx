import React from 'react'

export default function Connexion() {
  return (
    <>
    <div className="container  d-flex flex-column justify-content-center px-5 align-items-center  vh-100">
<form action="" className='form-group shadow p-5 wh-50 px-5'>
    
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
