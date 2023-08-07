/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import lightLogo from "../../src/images/light_logo.png";
import darkLogo from "../../src/images/dark_logo.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Encounters", href: "/encounters", current: false },
  { name: "Give", href: "/give", current: false },
];

const Navbar = () => {

  return (
    <header className="sticky top-0 bg-white drop-shadow z-40">
      <Popover as="div" className=" z-40">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 pt-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link href="#">
                <img
                  className="h-6 w-auto"
                  src={lightLogo}
                  alt=""
                />
              </Link>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-slate-900 bg-opacity-0 p-2 text-black hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-black hover:text-blue-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="transition duration-300 transform"
          enterFrom="opacity-0 -translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top transform transition lg:hidden"
          >
            <div className="overflow-hidden bg-black shadow-lg ring-1 ring-black ring-opacity-5 h-max">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-6 w-auto"
                    src={darkLogo}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pb-6 pt-5">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-orange-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block w-full rounded-md border border-transparent bg-blue-500 px-4 py-2 text-center font-medium text-white shadow hover:bg-blue-600"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Navbar;
