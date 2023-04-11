import rectangle802 from '@assets/icons/Rectangle 802.png';
import Circle from '@assets/images/Circle 1.png';
function StartLearning() {
  return (
    <div className="justify-center">
      <div className="absolute inset-x-[850px] top-0 w-96 h-96 ">
        <img src={Circle} />
      </div>
      <div className="absolute inset-x-[340px] inset-y-[180px] w-1/2 h-1/2 ">
        <img src={rectangle802} />
      </div>
    </div>
  );
}
export default StartLearning;
