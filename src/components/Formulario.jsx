import {useState, useEffect} from 'react'

const Formulario = () => {

  const [nombre, setNombre] = useState(' ');
  const [propietario, setPropietario] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [alta, setAlta] = useState(' ');
  const [sintomas, setSintomas] = useState(' ');
  
    

    const handleSumit  =() =>{
       console.log("Enviando Formulario");
    }
     

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
      onSubmit={handleSumit} 
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
            <label
              htmlFor="mascota"
              className=" font-bold block text-gray-700 uppercase "
            >
              Nombre Mascota 
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            ></input>
        </div>

        <div className="mb-5">
            <label
              htmlFor="propietario"
              className=" font-bold block text-gray-700 uppercase ">
              Nombre del Propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            ></input>
        </div>


        <div className="mb-5">
            <label
              htmlFor="email"
              className=" font-bold block text-gray-700 uppercase ">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
        </div>


        <div className="mb-5">
            <label
              htmlFor="alta"
              className=" font-bold block text-gray-700 uppercase ">
              Alta
            </label>
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
            ></input>
        </div>



        <div className="mb-5">
            <label
              htmlFor="sintomas"
              className=" font-bold block text-gray-700 uppercase ">
             Sintomas
            </label>
            <textarea
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
        </div>

           <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700"
            value="Agregar Paciente" 
            />

      </form>
    </div>
  );
};

export default Formulario;
