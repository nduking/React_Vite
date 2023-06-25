import Button from "../Button";
import ListLine from "../ListLine";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="text-startup-blue font-bold text-3xl">StartUp</div>
      <ListLine/>
      <div className="space-x-4">
        <Button bola="SignUp" />
        <Button
          bola="SignIn"
          className="bg-startup-green text-white py-1 px-3 rounded-full text-[16px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;