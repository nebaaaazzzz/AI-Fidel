function PlaceYourHand({
  isMediaPipeModelLoading,
  isGameStarted
}: {
  isMediaPipeModelLoading: boolean;
  isGameStarted: boolean;
}) {
  if (!isMediaPipeModelLoading && !isGameStarted) {
    return (
      <div
        style={{
          background: 'rgba(46, 46, 46, 0.74)',
          backdropFilter: 'blur(6.5px)',
          borderRadius: '10px'
        }}
        className="absolute flex w-2/3 aspect-[5/2] md:w-6/12  top-0 bottom-0 left-0 right-0 m-auto items-center gap-5 justify-center flex-col"
      >
        <div>
          <h1 className="text-center text-white text-2xl">
            Place your hand , so it’s
          </h1>
          <h1 className="text-center text-white text-2xl">
            visible on the screen
          </h1>
        </div>
        <p className="text-white">To get started</p>
      </div>
    );
  }
  return null;
}

export default PlaceYourHand;
