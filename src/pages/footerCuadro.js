import React, { Component} from 'react';

import { Layout } from '../layout';

import { NavLink } from 'react-router-dom';


class FooterCuadro extends Component{
  constructor(){
    super();
}
  render(){
  return(
  <div>
    <Layout>
    <div class="bg-black p-8 h-32">

      <button class="mt-4 mb-28 bg-amber-400 hover:bg-amber-600 hover:scale-125  font-bold py-2 px-4 rounded-full"
      >
      <NavLink to="/cuadro/Kevin">
        12
        </NavLink>
      </button>
    </div>
    </Layout>
  </div>
);}
}
export default FooterCuadro;
