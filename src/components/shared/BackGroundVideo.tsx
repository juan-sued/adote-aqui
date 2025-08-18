export default function BackGroundVideo({ nameVideo }: { nameVideo: string }) {
  return (
    <>
      <div className="flex relative overflow-visible h-0 w-full shadow-inner shadow-primary z-[-50]">
        <video
          className="w-full h-screen object-cover filter brightness-20  "
          autoPlay
          muted
          loop
          src={'/assets/' + nameVideo}
          typeof="video/mp4"
        />
      </div>
    </>
  )
}
