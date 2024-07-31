import { Button, Description, Field, Input, Label } from '@headlessui/react'
import { useState } from 'react';


function Home() {
    const [inputText, setInputText] = useState('');
    const [randomResult, setRandomResult] = useState('猜猜是甚麼');
    const getRandomLine = (text: string) => {
        const lines = text.split("\n");

        if (text == "")
            return "猜猜是甚麼";

        const randomIndex = Math.floor(Math.random() * lines.length);
        return lines[randomIndex];
    }

    return <div className="w-full max-w-md px-4 flex flex-col">
        <Field>
            <Label className="text-xl font-medium text-white">輸入題目</Label>
            <Description className="text-sm/6 text-white/50">題目會用換行分割開來 無論是否有超出單行寬度</Description>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={10}
                className="
          mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white
          focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25
        "
            />
        </Field>
        <span className='text-white text-center'>{randomResult}</span>
        <Button onClick={() => setRandomResult( getRandomLine(inputText))} className="text-white">看看是甚麼</Button>
    </div>
}

export default Home;