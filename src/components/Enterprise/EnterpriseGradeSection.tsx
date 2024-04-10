import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'
import { MdDoNotDisturb, MdLock, MdOutlineSecurity, MdVpnKey } from 'react-icons/md'

import { ContentSection, Heading } from '..'

const securityCardFeatures = [
    {
        icon: <MdDoNotDisturb size={24} />,
        heading: 'Zero retention',
        paragraph:
            'Our provided LLMs do not retain data from your requests for longer than the time it takes to generate an output.',
    },
    {
        icon: <MdVpnKey size={24} />,
        heading: 'You retain ownership',
        paragraph: 'You retain ownership of all inputs and output generated by Cody.',
    },
    {
        icon: <MdOutlineSecurity size={24} />,
        heading: 'Uncapped indemnity',
        paragraph: 'We provide full IP indemnity to enterprise customers.',
    },
]

export const EnterpriseGradeSection: FunctionComponent = () => (
    <ContentSection
        className="max-w-[1232px] rounded-2xl border-1 border-gray-200 bg-white py-16 px-6 md:px-10"
        parentClassName="!py-0 md:px-[80px]"
    >
        <Heading size="h6" className="mb-4">
            cody
        </Heading>
        <Heading size="h2" className="mb-10 !leading-10 !tracking-[-1px]">
            Enterprise-grade AI security and governance
        </Heading>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {securityCardFeatures.map(feature => (
                <SecurityCard key={feature.heading} {...feature} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-1 flex flex-col-reverse justify-between gap-x-[33px] gap-y-4 rounded-2xl border-1 border-gray-200 md:col-span-2 md:flex-row md:items-end ">
                <div className="pr-10 md:pr-0">
                    <img alt="" src="/enterprise/screenshot.svg" className="rounded-bl-lg" />
                </div>
                <div className="mt-10 mb-4 pl-10 pt-10 pr-10 md:my-10  md:py-10   md:pl-0 md:pb-10">
                    <div className="flex max-w-[311px] flex-col gap-4">
                        <Heading size="h2" className="!leading-10 !tracking-[-1px]">
                            Guardrails to catch licensed code
                        </Heading>
                        <p className="mb-0 text-[18px] font-normal leading-[27px] -tracking-[0.25px]">
                            Sourcegraph automatically checks AI suggestions against open source code and highlights
                            matches to mitigate IP risk.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <SecurityCard
                    icon={<MdLock size={24} />}
                    heading="No model training with your data"
                    paragraph="We do not train models using data from Cody Enterprise users, so your code stays private
                                to you."
                />
                <div className="flex items-start gap-4 rounded-2xl border-1 border-gray-200 bg-gray-100 py-10 px-8">
                    <img src="/enterprise/file-document-outline.svg" alt="" />
                    <Heading size="h5" className="!font-[590px] !leading-[25px] !tracking-[-0.25px]">
                        To learn more, read our
                        <Link
                            href="/whitepapers/cody-security-and-legal"
                            title="Cody security & legal whitepaper"
                            className="mx-[3px] text-black underline underline-offset-[4.3px] "
                        >
                            Cody security & legal whitepaper
                        </Link>
                    </Heading>
                </div>
            </div>
        </div>
    </ContentSection>
)

const SecurityCard: FunctionComponent<{ icon: ReactNode; heading: string; paragraph: string }> = ({
    icon,
    heading,
    paragraph,
}) => (
    <div className="flex flex-col gap-4 rounded-2xl border-1 border-gray-200 py-10 px-8">
        {icon}
        <Heading size="h4" className="font-systemSans !leading-[30px] tracking-[-0.25]">
            {heading}
        </Heading>
        <p className="mb-0 text-[18px] font-normal leading-[27px] -tracking-[0.25px]">{paragraph}</p>
    </div>
)