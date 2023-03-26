import React from 'react';
import { Link } from 'react-router-dom';

const AddClient = () => {
  return (
    <section className='parasaliha__addClient'>
      <Link to={'/'} className='parasaliha__addClient__link' >
        <ion-icon name="chevron-back-outline"></ion-icon>
        Back
      </Link>
      <Link to={'/'} className='parasaliha__addClient__logo' >
        <img src="./img/parasaliha-logo.png" alt="logo" />
      </Link>
      <form action="#" method="post" className='parasaliha__addClient__form'>
        <h1 className="parasaliha__addClient__form__title">
          Ajouter les clients qui n'ont pas encore payé
        </h1>
        <div className="parasaliha__addClient__form__control">
          <label htmlFor="clientName" className='parasaliha__addClient__form__control__label' >Le nom complet du client:</label>
          <input type="text" className='parasaliha__addClient__form__control__input' placeholder='Nom complet' />
          <label htmlFor="clientName" className='parasaliha__addClient__form__control__label' >Le nom du produit:</label>
          <input type="text" className='parasaliha__addClient__form__control__input' placeholder='Nom Produit' />
          <label htmlFor="clientName" className='parasaliha__addClient__form__control__label' >Le quantité:</label>
          <input type="text" className='parasaliha__addClient__form__control__input' placeholder='Quantité' />
          <label htmlFor="clientName" className='parasaliha__addClient__form__control__label' >Le prix:</label>
          <input type="text" className='parasaliha__addClient__form__control__input' placeholder='Prix' />
          <button type="submit" className='parasaliha__addClient__form__control__btn' >Ajouter Client</button>
        </div>
      </form>
    </section>
  )
}

export default AddClient
