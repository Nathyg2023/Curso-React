import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'No hay ningún título',
  subTitle:'No hay subtítulo',
  name:'Nathy'
}



//DefaultProps: es la definición de valores de las propertys, si son pocas los puedo hacer arriba en la desestructuración, si son muchas con defaultProps 
//Property: (props) son las propiedades que le estamos mandando a la función, se pasan del componente padre al componente hijo, 
//PropTypes: nos ayuda en JS para definir el tipo de propiedad que un componente recibe, ayudando a mejorar el código y detectar errores, para usarlo hay que importarlo.import default from './../eslint.config';
