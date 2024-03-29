import React, { useState } from 'react';
import Card from './CardP';
//import Data from './data';
const Project = () => {
  const [data, setData] = useState([
    {
      url: `https://firebasestorage.googleapis.com/v0/b/college-project-b119a.appspot.com/o/pro1.PNG?alt=media&token=13b15959-9d64-4094-9ad3-4d574950dcf7`,
      title: 'Tiktok-clone',
      live: 'https://courageous-florentine-0dd4b7.netlify.app/',
      github: 'https://github.com/akshaysutar8121/tiktok-frontend',
      stack: 'https://stackblitz.com/edit/react-e6aj64?file=src%2FApp.js',
      info:"this project is about the tiktok clone.this web application made up using Mongodb,Express.js,Node.js,React.js additional material icons used.."
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/college-project-b119a.appspot.com/o/pro3.PNG?alt=media&token=2c66846a-8bbe-49ac-aa3a-53687d11babd',
      title: 'instagrame-clone',
      live: '',
      github: 'https://github.com/akshaysutar8121/react-qwzaee',
      stack: 'https://stackblitz.com/edit/react-qwzaee?file=src%2FApp.js',
      info:"this project is about the instagrame-clone.this web application made up using firebase,React.js additional material icons used.features:authentication,upload image or video,like section"
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/college-project-b119a.appspot.com/o/pro2.PNG?alt=media&token=e719c527-5364-43bd-a37c-e4e64cd250b0',
      title: 'tinder-clone',
      live: 'https://tinder-backend-fa5e1.firebaseapp.com/?84902',
      github: 'https://github.com/akshaysutar8860/tinder-clone-frontend',
      stack: 'https://stackblitz.com/edit/react-qgymjp?file=src%2FApp.js',
      info:"this project is about the tinder clone.this web application made up using Mongodb,Express.js,Node.js,React.js additional material icons used it basicaly fetches the data from express API and display on webpage"
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/college-project-b119a.appspot.com/o/homepage.PNG?alt=media&token=aecc2f58-0cc0-4e98-aed6-f488723859ad',
      title: 'college-car-project',
      live: '',
      github: 'https://github.com/akshaysutar8121/college-project/tree/master',
      stack: '',
      info:"this is my final year college project.due to this project i learned so many tecnologies.python,firebase,API,flask,natural launguage processing,tailwindcss(a css framework) this are some tecnologies used "
    }
  ]);
  
  return (
    <div className="flex mt-20 flex-nowrap mr-4">
      {data.map((val, idx) => {
        return (
          <Card
          info={val.info}
            url={val.url}
            title={val.title}
            live={val.live}
            github={val.github}
            stack={val.stack}
          />
        );
      })}
    </div>
  );
};
export default Project;
