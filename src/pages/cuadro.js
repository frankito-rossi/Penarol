import React, { Component} from 'react';

import { Layout } from '../layout';

import { NavLink } from 'react-router-dom';

import FooterCuadro from './footerCuadro'


class Cuadro extends Component{
  constructor(){
    super();
    this.state = {
      show: false
    };
}
  render(){
  return(
  <div className="flex justify-center h-screen bg-contain bg-center bg-no-repeat bg-[url('./fondo.png')] ">
    <Layout>
    <div class="grid justify-center gap-x-72 gap-y-1 grid-cols-5 grid-rows-5 ">
    <div></div>
    <div></div>
    <div>
      <button class="mt-4 mb-28 bg-amber-400 hover:bg-amber-600 hover:scale-125  font-bold py-2 px-4 rounded-full"
      >
      <NavLink to="/cuadro/Kevin">
        12
        </NavLink>
      </button>
    </div>
    <div></div>
    <div></div>
      <div>
        <button class=" mt-12 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Gio">
          20
          </NavLink>
        </button>
        </div>
      <div>
        <button class="bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Tito">
          2
        </NavLink>
        </button>
        </div>
      <div></div>
      <div>
        <button class="bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Gary">
          24
          </NavLink>
        </button>
        </div>
      <div>
        <button class="mt-12 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Joaco">
          22
          </NavLink>
        </button>
        </div>
      <div></div>
      <div>
        <button class="mt-12 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Mota">
          23
          </NavLink>
        </button>
        </div>
      <div></div>
      <div>
        <button class="mt-12 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Jesus">
          21
          </NavLink>
        </button>
        </div>
      <div></div>
      <div>
        <button class="mt-12 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Agu">
          16
          </NavLink>
        </button>
        </div>
      <div></div>
      <div>
        <button class="bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
        <NavLink to="/cuadro/Pablo">
          8
          </NavLink>
        </button>
        </div>
      <div></div>
      <div>
       <button class="mt-12 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
       <NavLink to="/cuadro/Facu">
         10
         </NavLink>
        </button>
        </div>
        <div></div>
        <div></div>
        <div>
          <button class="bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full" >
          <NavLink to="/cuadro/Gol">
            19
            </NavLink>
            </button>
        </div>
        <div></div>
        <div></div>
    </div>

    </Layout>
  </div>
);}
}
export default Cuadro;
