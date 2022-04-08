import React from 'react';

import { Layout } from '../layout';

const Contact = () => (
  <div>
    <Layout>
      <h1 class="text-center text-2xl p-8">Contacto Peñarol</h1>
      <div class="bg-amber-300 p-16 flex flex-row justify-center">
        <a href="https://twitter.com/OficialCAP">
          <img class="w-40 p-8" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" />
        </a>
        <a href="https://www.instagram.com/oficialcap">
          <img class="w-40 p-8" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png" />
        </a>
        <a href="https://www.facebook.com/OficialCAP/">
          <img class="w-40 p-8" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png" />
        </a>
      </div>


        <h1 class="text-center text-2xl p-8">Contacto Creador</h1>
        <div class="bg-amber-300 p-16 flex flex-row justify-center">
          <a href="https://www.linkedin.com/in/franco-rossi-493482203/">
            <img class="w-40 p-8" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" />
          </a>
        </div>


      <div class="h-48"></div>
    </Layout>
  </div>
);

export default Contact;
