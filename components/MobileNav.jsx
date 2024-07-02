"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }

]

const MobileNav = () => {
    return (
        <Sheet>
           <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-accent text-[32px]" />
           </SheetTrigger>
           <SheetContent className="flex flex-col">
            <div className="text-black">logo</div>
           </SheetContent>
        </Sheet>
    )
}

export default MobileNav
