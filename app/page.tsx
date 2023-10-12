import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap w-full ">
      <div className="w-full  h-screen">
        <div className="text-7xl pt-32 pb-5 text-slate-50 ">Popop App</div>
        <div className="text-xl py-5  text-slate-300 ">
          Never miss an event!
        </div>
        <div className="w-1/2 text-md  text-slate-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt fringilla turpis lobortis viverra. Fusce suscipit diam
          tortor, quis accumsan augue porta accumsan. Mauris condimentum ipsum
          et velit porttitor semper. Nunc sollicitudin sodales dui in mattis.
          Nunc aliquet, mi at gravida finibus, ante magna lobortis mi, eu
          tincidunt tellus nunc non eros. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin a risus varius, sollicitudin elit
          id, ornare augue. Maecenas ut mollis lectus, vel pellentesque erat.
          Quisque mi dui, aliquet a nisi faucibus, feugiat condimentum dui.
        </div>
      </div>
      <div className="w-1/2 flex justify-center">Pricing</div>
      <div className="w-1/2  flex justify-center">
        About us
        <div>
          <Image src="/assetmoon.svg" width={200} height={200} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
