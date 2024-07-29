import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export interface ToggleProp {
    title: string,
    hidden: JSX.Element,
    defaultOpen: boolean
};

function MyToggle(prop: ToggleProp) {
    return (
        <Disclosure as="div" className="p-6" defaultOpen={false}>
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl text-white group-data-[hover]:text-white/80">
                    {prop.title}
                </span>
                {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white">
                {prop.hidden}
            </DisclosurePanel>
        </Disclosure>
    )
}

export default MyToggle;