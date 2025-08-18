import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import { ChevronDown, LogInIcon } from 'lucide-react'

import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { utils } from '@/utils'
import { MenuOptions } from '../NavBarMobile/MenuOptions'
import paramsSite from '@/data/paramsSite'

export async function MenuDesktop() {
  // const supabase = await createClient()

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()
  const user = {
    user_metadata: {
      name: 'Entre Ser e Estar',
      image: 'https://mighty.tools/mockmind-api/content/abstract/51.jpg',
    },
  }
  const headerDesktopMenu = paramsSite.sections.filter(
    (section) => section.href !== '#home' && section.href !== '#differences',
  )
  return (
    <>
      <nav className="shadow-sm h-[70px]  mt-4 p-2 rounded-full bg-white max-w-[85%]  hidden lg:flex  items-center justify-center  w-full   transition-all">
        <div className="h-full w-full  text-start">
          <div className="h-full w-fit  px-10 rounded-full bg-primary">
            <Logo />
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contato</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-opacity-70  backdrop-blur-md     ">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      asChild
                      className="bg-[url(/assets/dog_and_cat.png)] bg-cover bg-center  animate__animated animate__fadeIn transition-all duration-1000"
                    >
                      <a
                        className="flex gap-4 h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md"
                        href="#services"
                      ></a>
                    </NavigationMenuLink>
                  </li>

                  {paramsSite.contactList.map((contact) => (
                    <ListItem
                      key={contact.title}
                      title={contact.title}
                      href={contact.href}
                    >
                      {contact.textApresentation}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {headerDesktopMenu.map((section) => (
              <NavigationMenuItem key={section.href}>
                <Link href={section.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {section.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="h-full   justify-end  hidden lg:flex  w-full  ">
          {user ? (
            <div className="flex items-center gap-4">
              <MenuOptions>
                <Button
                  variant="ghost"
                  className=" h-full hover:text-primary hover:bg-accent/10  rounded-full w-fit whitespace-nowrap gap-2 p-0 pl-4"
                >
                  <ChevronDown />

                  {user.user_metadata?.image && (
                    <Avatar
                      className="h-full w-fit
                  "
                    >
                      <AvatarImage
                        alt="Foto de perfil"
                        src={user.user_metadata?.image}
                      />
                      <AvatarFallback className="aspect-square size-full">
                        {utils.getInitials(user.user_metadata?.name)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </Button>
              </MenuOptions>
            </div>
          ) : (
            <Link href="/sign-in" passHref>
              <Button
                size="lg"
                className="h-full  has-[>svg]:px-10  rounded-full w-full  whitespace-nowrap gap-2"
              >
                <LogInIcon size={16} /> Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}

const ListItem = forwardRef<ComponentRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-primary text-sm font-medium leading-none">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
