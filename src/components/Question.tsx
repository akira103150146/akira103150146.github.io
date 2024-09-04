import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export interface QuestionProp {
    question: string,
    answer: string
}


export default function Question(prop: QuestionProp) {
    return (
        <Disclosure as="div" className="p-6" defaultOpen={false}>
            <DisclosureButton className="group flex w-full items-center justify-between">
                <img src={prop.question}></img>
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black">
                <span>答案</span>
            </DisclosurePanel>
        </Disclosure>
    )
}