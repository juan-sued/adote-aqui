import { MenuDesktop } from './MenuDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header() {
  return (
    <>
      <header className="h-fit fixed top-0 left-0 w-full grid place-items-end  lg:place-items-center z-[100]    animate__animated animate__fadeInDown">
        <MenuDesktop />
        <HeaderMobile />
      </header>
    </>
  )
}
