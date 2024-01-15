import { BsGithub, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import HeroPic from "../assets/profile.jpeg";

export function Hero() {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-darkPurple">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5">Me chamo</p>
        <h1 className="text-6xl text-orange">Flávia Brunetta Daboit</h1>
        <hr className="border-orange"/>
        <p className="mt-10 text-xl font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
          quis massa in interdum. Curabitur consectetur nulla enim, ut eleifend
          nunc hendrerit in. Sed convallis lectus eu placerat rutrum. Nulla eget
          congue augue. Vestibulum enim sem, consequat finibus orci nec,
          tristique imperdiet est. Nam quis justo at metus ultricies sagittis
          sed sit amet erat. Donec interdum rutrum tellus. Ut vel blandit sem.
        </p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
        <img
          src={HeroPic}
          alt=""
          className="rounded-full border-8 w-60 h-60 object-cover border-orange"
        />
      </div>
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">Sobre mim</p>
        <p className="text-orange">
          Praesent ac tellus volutpat, dapibus libero eu, suscipit urna. Ut
          vestibulum nibh sit amet erat cursus maximus.
        </p>
        <button className="bg-white text-darkPurple px-10 py-2 my-3 rounded-full hover:bg-magenta hover:text-white">Ler mais...</button>
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <BsInstagram size={30} className="hover:text-blue" />
          <BsLinkedin size={30} className="hover:text-blue"/>
          <BsGithub  size={30} className="hover:text-blue"/>
          <BsTiktok size={30} className="hover:text-blue"/>
        </div>
      </div>

    </section>
  );
}
