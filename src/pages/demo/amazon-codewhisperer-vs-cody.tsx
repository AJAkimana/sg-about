import { FunctionComponent } from 'react'

import { Heading, Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { amazonCodewhispererVsCody } from '../../components/Compare/constants'
import { DemoComparisons } from '../../components/Compare/DemoComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'
import { useAuthModal } from '../../context/AuthModalContext'

const AmazonCodewhispererVsCodyPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('amazon-codewhisperer-vs-cody')

    return (
        <Layout
            meta={{
                title: 'Sourcegraph Cody vs Amazon CodeWhisperer',
                description: 'Feature comparison of Sourcegraph Cody and Amazon CodeWhisperer',
            }}
            hero={
                <CompareHero
                    title="Sourcegraph Cody vs Amazon CodeWhisperer"
                    titleClassName="lg:text-[72px] text-5xl lg:leading-[86px] lg:w-[800px] w-full font-sans font-semibold mt-2"
                    simpleStyle={true}
                    competitorDescription="Amazon CodeWhisperer Logo"
                    competitorIcon="/assets/compare/amazon-codewhisperer.svg"
                    containerClassName="xl:pt-[121px]"
                >
                    <Heading
                        size="h3"
                        className="mt-[-15px] mb-0 pb-[5px] font-sf !leading-[30px] !tracking-[-0.25px] lg:w-[671px] lg:text-2xl"
                    >
                        H3 Lorem ipsum dolor sit amet consectetur. Ullamcorper feugiat sit est imperdiet fringilla odio
                        pellentesque ut mattis.
                    </Heading>

                    <button
                        type="button"
                        className="btn btn-inverted-primary mt-0 min-w-[204px] border px-6 py-2 text-violet-500 "
                        title="Get Cody for free"
                        onClick={handleOpenModal}
                    >
                        <div className="flex items-center justify-center leading-6 tracking-[-0.25px]">
                            <img src="/cody/cody-logo.svg" className="mr-2 h-[24px] w-[24px]" alt="Cody Logo" /> Get
                            Cody for free
                        </div>
                    </button>
                </CompareHero>
            }
        >
            <CompareTables compareData={amazonCodewhispererVsCody} demoStyle={true} />

            <CodyCallToActionContentSection
                title="Get Cody, the AI coding assistant"
                description="Cody makes it easy to write, fix, and maintain code."
                cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
                cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
                smallCta={true}
            />

            <DemoComparisons />
        </Layout>
    )
}

export default AmazonCodewhispererVsCodyPage