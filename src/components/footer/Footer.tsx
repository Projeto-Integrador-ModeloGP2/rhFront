import { GithubLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-[#9fc8fe] text-black">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">RH Soluções | Copyright: {data}</p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/seu_usuario" target="_blank">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
