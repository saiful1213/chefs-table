import { CircleUser, Menu, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger, } from '../ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Navlist from './Navlist';
import ModeToggle from '../mode-toggle';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <header className="flex h-16 items-center gap-4 bg-background px-4 md:px-6 justify-between">

                <a href="" className="hidden md:flex items-center gap-2 text-lg font-semibold md:text-base">
                    Recipe Calories
                    <span className="sr-only">Recipe Calories</span>
                </a>

                {/* nav list for large device */}
                <Navlist isSmallDevice={false}></Navlist>
                {/* drawer/sheet for small device */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    {/* sheetContent */}
                    <SheetContent side="left">
                        {/* hide Sheet title & desc or it will give warning */}
                        <VisuallyHidden.Root>
                            <SheetDescription>
                            </SheetDescription>
                        </VisuallyHidden.Root>

                        <SheetTitle>
                            <a href="" className="flex my-6 items-center gap-2 text-lg font-semibold md:text-base">
                                Recipe Calories
                                <span className="sr-only">Recipe Calories</span>
                            </a>
                        </SheetTitle>
                        {/* nav list for small device */}
                        <Navlist isSmallDevice={true}></Navlist>
                    </SheetContent>
                </Sheet>
                {/* nav end || search and dropdown menu*/}
                <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <ModeToggle></ModeToggle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="primary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </div>
    )
}

export default Navbar;