import Welcome from "./welcome";
import MainButtons from "./mainbuttons";

function Mainwel() {
  return (
    <div className="align-middle flex h-screen w-screen flex-col items-center justify-center bg-amber-50 text-slate-900">
      {/*dark:bg-slate-900 dark:text-white">*/}
      <Welcome></Welcome>
      {/*<span className="mt-10"></span>*/}
      <img
        src="src/assets/pfp.webp"
        draggable="false"
        className="max-h-100 hover:scale-110 transition-transform duration-250 ease-in-out rounded-full"
      ></img>
      <MainButtons></MainButtons>
    </div>
  );
}

export default Mainwel;
