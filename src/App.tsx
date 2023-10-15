import { Carousel } from './Carousel';

const App = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
    {
      src: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
    {
      src: 'https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
    {
      src: 'https://images.unsplash.com/photo-1630588605884-0f6b41505180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
    {
      src: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHVuaXZlcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
    {
      src: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVuaXZlcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
    {
      src: 'https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHx1bml2ZXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      alt: '',
      url: '#',
      caption: 'Image Caption next to CTA',
    },
  ];

  return <Carousel images={images} />;
};

export default App;
