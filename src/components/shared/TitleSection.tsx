export default function TitleSection({ title }: { title: string }) {
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <h1 className="text-5xl font-bold drop-shadow-sm text-start ">
          {title}
        </h1>
      </div>
    </>
  )
}
