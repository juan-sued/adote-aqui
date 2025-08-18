import Logo from './Logo'

export default function HeaderMobile() {
  return (
    <nav className="shadow bg-primary p-2 rounded-b-lg w-full flex lg:hidden items-center justify-center">
      <div className="bg-primary rounded p-1">
        <Logo />
      </div>
    </nav>
  )
}
