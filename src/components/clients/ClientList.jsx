import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';

const ClientList = () => {
    return (
        <section className='parasaliha__clientList'>
            <div className="parasaliha__clientList__header">
                <div className="parasaliha__clientList__header__filter">
                    <input type="text" placeholder="recherche d'un client ..." />
                    <ion-icon name="filter-outline"></ion-icon>
                </div>
                <Link to={'/addClient'} className='parasaliha__clientList__header__link'>AddClient</Link>
            </div>

            <table border={1} className="parasaliha__clientList__table">
                <thead>
                    <tr>
                        <th>CIN</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AS124</td>
                        <td>john doe</td>
                        <td>Annor 2</td>
                        <td>500 dh</td>
                        <td>Mar 19, 2023</td>
                        <td className='denied'><span> non payé </span></td>
                        <td><ion-icon name="options-outline"></ion-icon></td>
                    </tr>
                    <tr>
                        <td>AS567</td>
                        <td>Maria doe</td>
                        <td>Assalam</td>
                        <td>300 dh</td>
                        <td>Mar 29, 2023</td>
                        <td className='success'><span> payé </span></td>
                        <td className='dropdown'>
                            <Dropdown 
                                button={<ion-icon name="options-outline"></ion-icon>}  
                                link1={'payer'}
                                link2={'supprimer'}
                                route1={'#'}
                                route2={'#'}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default ClientList
