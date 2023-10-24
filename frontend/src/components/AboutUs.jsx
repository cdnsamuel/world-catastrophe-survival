function AboutUs() {
  return (
    <div className="md:w-4/5 h-4/5 mx-2">
      <div className="bg-primary h-16 rounded-t-xl  ">
        <h2 className="text-secondary text-3xl p-3 font-bold  ">About WCS</h2>
      </div>
      <div className=" border-accent border-l-[3px] border-b-[3px] border-r-[3px] rounded-b-xl min-h-[10rem] flex flex-col gap-2 p-3">
        <h3 className="text-xl text-primary font-bold">
          First you need to log in in order to :
        </h3>
        <ul className="list-disc ml-6 text-lg text-neutral">
          <li>Acces our ressources</li>
          <li>Check in during census campaigns</li>
        </ul>
        <h3 className="text-xl text-primary font-bold">Therefore you can:</h3>
        <ul className="list-disc ml-6 text-lg text-neutral">
          <li>Train yourself with our Tutorials</li>
          <li>Ask for private lesson with our specialists</li>
          <li>Buy survival related stuff on the shop</li>
          <li>Keep you update about big events incoming</li>
        </ul>
        <h3 className="text-xl text-primary font-bold">
          This site is build for every survivors:
        </h3>
        <ul className="list-disc ml-6 text-lg text-neutral">
          <li>Thoses with an arm missing</li>
          <li>Thoses color blind due to radiations</li>
          <li>Thoses who lost their eyes with acid</li>
          <li>Thoses atypicals due to trauma</li>
          <li>And every other i can't quote</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
