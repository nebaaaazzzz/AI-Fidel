import BackButton from '../components/BackButton';
import LinkwithQuery from '../components/LinkwithQuery';

function SelectLanguage() {
  // bg-[url('/Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png')]
  return (
    <div className="flex flex-col relative h-[100vh] bg-[#ffe090] bg-no-repeat bg-center items-center justify-center gap-10">
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>
      <BackButton url="/" />

      <h1 className="text-[#683aff] z-30 text-4xl text-bold text-center leading-8 mb-3.5">
        Selet Language
      </h1>
      <h1 className="text-lg w-96 text-center z-30 text-[#683aff] inset-11">
        Choose the language you want to use for fingerspelling
      </h1>
      <div className="flex gap-10 z-30">
        <LinkwithQuery
          path={'/select-level'}
          query="lang=en"
          text="English"
          ref={null}
        />
        <LinkwithQuery
          path={'/select-level'}
          query="lang=am"
          text="Amharic"
          ref={null}
        />
      </div>
    </div>
  );
}

export default SelectLanguage;
