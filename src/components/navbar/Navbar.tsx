import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-[#9fc8fe] text-black"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            RH Soluções
          </Link>
          <div className="flex gap-4">
            <Link to="/funcionario" className="hover:opacity-75">
              Colaboradores
            </Link>
            <Link to="/integrante" className="hover:opacity-75">
              Sobre Nós
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
