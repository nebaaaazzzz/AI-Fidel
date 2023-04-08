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
          height: '160px',
          background: 'rgba(46, 46, 46, 0.74)',
          backdropFilter: 'blur(6.5px)',
          borderRadius: '10px'
        }}
        className="absolute  w-1/3 top-60 left-80 flex items-center gap-10 justify-center flex-col"
      >
        <h1 className="text-center text-white text-2xl">
          Place your hand , so it’s visible on the screen
        </h1>
        <p className="text-white">To get started</p>
      </div>
    );
  }
  return null;
}

export default PlaceYourHand;
