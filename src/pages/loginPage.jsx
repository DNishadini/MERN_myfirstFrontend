export default function LoginPage() {
  return (
    <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center flex">
      <div className="w-[50%] h-full"></div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[500px] h-[500px] backdrop-blur-md shadow-2xl rounded-2xl">
          <input className="w-[400px] h-[40px] bg-white" />
        </div>
      </div>
    </div>
  );
}
