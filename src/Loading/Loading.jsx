
import "../Loading/Loading.css";
function Loading() {
  return (
    <>
      <div className="w-full  bg-transparent h-screen flex justify-center items-center rounded-[10px]">
        <div className="loader"></div>
      </div>
    </>
  );
}

export default Loading;