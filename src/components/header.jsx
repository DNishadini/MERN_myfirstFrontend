export default function Header() {
  return (
    <header className="w-full bg-accent h-[100px] text-white px-[40px]">
      <div className="w-full h-full flex">
        <img
          src="logo.png"
          alt="logo"
          className="h-full w-[200px] object-cover"
        />
        <div className="h-full flex ">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
