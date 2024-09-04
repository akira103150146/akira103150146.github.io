import { Button, Description, Field, Input, Label } from '@headlessui/react'
import { useEffect, useState } from 'react';
import Question from '../components/Question';

interface Question {
    question: string
    anwser: string
    tags: string[]
}
const questions: Question[] = [
    {
        "question": require("../imgs/題庫/基本電學/ch1/ch1-001.png"),
        "anwser": "",
        "tags": [
            "基本電學",
            "易"
        ]
    },
    {
        "question": require("../imgs/題庫/基本電學/ch1/ch1-001.png"),
        "anwser": "",
        "tags": [
            "基本電學",
            "易"
        ]
    },
    {
        "question": require("../imgs/題庫/基本電學/ch1/ch1-001.png"),
        "anwser": "",
        "tags": [
            "基本電學",
            "易"
        ]
    },
    {
        "question": require("../imgs/題庫/基本電學/ch1/ch1-001.png"),
        "anwser": "",
        "tags": [
            "基本電學",
            "易"
        ]
    },
    {
        "question": require("../imgs/題庫/基本電學/ch1/ch1-001.png"),
        "anwser": "",
        "tags": [
            "基本電學",
            "易"
        ]
    }
]

function Home() {
    return <div className="flex">
        <div className='flex-1'></div>
        <div className='flex-2'>
            {
                questions.map((question, index) => {
                    console.log(question.question)
                    return <Question key={index} question={question.question} answer={question.anwser}></Question>
                })
            }
        </div>
        <div className='flex-1'>

        </div>

    </div>
}

export default Home;