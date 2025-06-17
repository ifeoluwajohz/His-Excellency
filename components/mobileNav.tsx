import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ContactIcon, HomeIcon, Info, MenuIcon, ServerCrashIcon } from "lucide-react"
import Link from "next/link"

export function SheetDemo() {


  const Nav = [
    {
      id: 1,
      url: "nkie",
      name: "Home Page",
      icon: HomeIcon
    },
    {
      id: 2,
      url: "nkie",
      name: "About Page",
      icon : Info
    },{
      id: 3,
      url: "nkie",
      name: "Contact Us",
      icon : ContactIcon
    },{
      id: 4,
      url: "nkie",
      name: "Our Services",
      icon: ServerCrashIcon
    },
  ]
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary"><MenuIcon /></Button>
      </SheetTrigger>
      <SheetContent>
        <div className="text-center ">
          <p className="text-3xl mb-8">Steve Olorunpomi</p>

          {Nav.map((nav, index) => (
            <div key={index}>
              <div className="flex justify-end items-center gap-x-8 gap-y-12 py-4 mr-8 hover:text-gray-600 animate-in transition-all ease-in-out">
                <Link href={nav.url}>
                  <p className="text-base ">{nav.name}</p>
                </Link>
                <nav.icon  className="w-5 h-5"/>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
