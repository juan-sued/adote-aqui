import paramsSite from '@/data/paramsSite'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className=" min-h-full logoContainer w-fit flex items-center">
      <Link
        href="/"
        className=" h-full  rounded-sm flex items-center justify-center"
      >
        <h1 className="text-white font-bold text-xl">
          {paramsSite.applicationName}
        </h1>
      </Link>
    </div>
  )
}
