import { FunctionComponent } from 'react'

import Link from 'next/link'

const data = [
    {
        name: 'GitHub Copilot',
        image: 'github-copilot.svg',
        url: '/compare/copilot-vs-cody',
    },
    {
        name: 'Amazon CodeWhisperer',
        image: 'amazon-codewhisperer.svg',
        url: '/compare/amazon-codewhisperer-vs-cody',
    },
    {
        name: 'Cursor',
        image: 'cursor.svg',
        url: '/compare/cursor-vs-cody',
    },
    {
        name: 'Tabnine',
        image: 'tabnine.svg',
        url: '/compare/tabnine-vs-cody',
    },
    {
        name: 'Continue',
        image: 'continue.svg',
        url: '/compare/continue-vs-cody',
    },
]

export const OtherComparisons: FunctionComponent = () => (
    <div className="mx-auto my-10 max-w-screen-xl">
        <h2 className="mb-10">Compare other code AI assistants</h2>
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {data?.map(assistant => (
                <Link href={assistant.url} key={assistant.name}>
                    <div className="col-span mb-10 rounded p-4 hover:shadow-lg sm:p-8">
                        <img src="/cody-logomark-default.svg" className="mb-2 mr-10 inline h-[48px] w-[48px]" />
                        <img
                            src={`/assets/compare/${assistant.image}`}
                            alt={assistant.name}
                            className="mb-2 inline h-[48px] w-[48px]"
                        />

                        <p className="text-black">Cody vs {assistant.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
)
