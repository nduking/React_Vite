import Button from "../Button";

const MainContent = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-8 mt-24">
      <h1 className="text-5xl font-bold text-startup-blue">
        Startup Framework
      </h1>
      <p className="w-[45%] text-center text-startup-grey/50">
        We made it so beutiful and simple. It combines landings, pages, blogs
        and shop screens. It is definitely the tool you need in your collection!{" "}
      </p>
      <div className="flex flex-col space-y-4">
        <Button
          bola="Purchase Now For $248"
          className="bg-startup-green text-white py-2 px-3 rounded-full text-[16px]"
        />
        <Button bola="Learn More" className="text-startup-green" />
      </div>
    </main>
  );
};

export default MainContent;