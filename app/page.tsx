import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap w-full h-screen">
      <div className="w-full">
        <div className="text-7xl p-10">Landing page</div>
        <div className="w-1/2 p-10">
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
      <div className="w-1/2  flex justify-center">About us</div>
    </div>
  );
}
