import { Link } from "react-router-dom";

function CardFuncionario() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Card 1 */}
      <div
        className="border-slate-900 border flex flex-col rounded
    overflow-hidden justify-between w-80 m-10"
      >
        <div>
          <div className="flex w-full bg-[#9fc8fe] py-2 px-4 items-center gap-4">
            <img
              src="https://cdn-images.dzcdn.net/images/artist/2a418ab6e0c357bfd680d3f35b45d8ea/500x500.jpg"
              className="h-12 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-bold text-center uppercase">
              Diego Roberto
            </h3>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold uppercase">Descrição</h4>
            <p>Nome: Diego Roberto Suzano de Souza</p>
            <p>E-mail: diego101@gmail.com </p>
            <p>Cargo: Auxiliar de Logística</p>
            <p>Cpf: 111.000.111-00</p>
            <p>Data Admissão: 25/12/2020</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="border-slate-900 border flex flex-col rounded
    overflow-hidden justify-between w-80 m-10"
      >
        <div>
          <div className="flex w-full bg-[#9fc8fe] py-2 px-4 items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YO4UjeDLGLWUn4_MKTvHemSahtcXoUvEIQ&s"
              className="h-12 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-bold text-center uppercase">
              João Silva
            </h3>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold uppercase">Descrição</h4>
            <p>Nome: João Silva Costa</p>
            <p>E-mail: joao.silva@gmail.com </p>
            <p>Cargo: Analista de TI</p>
            <p>Cpf: 222.000.222-00</p>
            <p>Data Admissão: 10/05/2019</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="border-slate-900 border flex flex-col rounded
    overflow-hidden justify-between w-80 m-10"
      >
        <div>
          <div className="flex w-full bg-[#9fc8fe] py-2 px-4 items-center gap-4">
            <img
              src="https://pbs.twimg.com/profile_images/1600864744138854402/wHNbxsJb_400x400.jpg"
              className="h-12 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-bold text-center uppercase">
              Maria Oliveira
            </h3>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold uppercase">Descrição</h4>
            <p>Nome: Maria Oliveira Lima</p>
            <p>E-mail: maria.oliveira@gmail.com </p>
            <p>Cargo: Coordenadora de Marketing</p>
            <p>Cpf: 333.000.333-00</p>
            <p>Data Admissão: 14/08/2018</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div
        className="border-slate-900 border flex flex-col rounded
    overflow-hidden justify-between w-80 m-10"
      >
        <div>
          <div className="flex w-full bg-[#9fc8fe] py-2 px-4 items-center gap-4">
            <img
              src="https://imagem.natelinha.uol.com.br/tudo-sobre/carla-perez_7992.jpeg"
              className="h-12 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-bold text-center uppercase">
              Carla Souza
            </h3>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold uppercase">Descrição</h4>
            <p>Nome: Carla Souza Almeida</p>
            <p>E-mail: carla.souza@gmail.com </p>
            <p>Cargo: Gerente de Projetos</p>
            <p>Cpf: 444.000.444-00</p>
            <p>Data Admissão: 01/03/2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFuncionario;
