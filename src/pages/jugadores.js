import React from 'react';

import { Layout } from '../layout';

import { JugadoresDt } from '../data.js'

import { NavLink } from 'react-router-dom';

const Jugadores = (props) => (
  <div>
    <Layout>
      <div class="h-screen">
        {JugadoresDt.map((data, key) => {
          if (data.name === props.name)
            return (
          <div key={key}>
            <div class="font-['Roboto']">
              <h1 class="text-center text-2xl m-8">{data.name}</h1>
              <section class="bg-amber-300 hero container max-w-screen-xs mx-auto p-8">
                <img class="float-left mr-16 shadow max-w-screen-xs max-h-96" src={data.image} />
                <p class="pt-32 mr-16 text-center text-lg">{data.bio}</p>
                  <button class="flex m-auto mt-16 mb-28 bg-amber-400 hover:bg-amber-600 hover:scale-125 font-bold py-2 px-4 rounded-full"
                  >
                  <NavLink to="/cuadro">
                    Volver al cuadro
                    </NavLink>
                  </button>
              </section>
            </div>
          </div>
        );
        })}
      </div>
    </Layout>
  </div>
);

export default Jugadores;
