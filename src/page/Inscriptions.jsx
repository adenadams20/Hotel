import React from 'react'

export default function Inscriptions() {
  return (
    <>
    <div className="container  d-flex flex-column justify-content-center align-items-center wh  vh-100">
<form action="" className='form-group shadow p-5 px-5'>
    <div className="mb-3">
        <p>Incrivez-vous en tant que Admin</p>
  <label htmlFor="exampleFormControlInput1" className="form-label">Nom</label>
  <input type="text" className="form-control   border-bottom  " id="nom"   />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
  <input type="text" className="form-control  border-top-none border-bottom" id="email"   />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput3" className="form-label">Mot de passe</label>
  <input type="text" className="form-control border border-bottom" id="motdepasse"   />
</div>

<input type="checkbox" name="terme" id="terme" /><span>j'ai lu et j'accepte les termes et conditions</span><br />

    <div className="d-flex justify-content-center">
    <button type='submit' className='text-center btn btn-dark w-100 mt-3'>
    S'inscrire
    </button>
    </div>
    </form>
    <p className='mt-3'>Vous avez déjà un compte ? <a href="/Connexion">Se connecter</a></p>

    </div>
    
    </>
  )
}
