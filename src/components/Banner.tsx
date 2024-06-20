import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-12 gap-y-[9px] px-2 md:flex-row">
            <p className="mb-0 text-center font-semibold leading-[22px] text-white">
                Cody for JetBrains is now Generally Available
            </p>
            <Link
                href="https://sourcegraph.com/blog/cody-for-jetbrains-is-generally-available"
                title="Cody for JetBrains blog"
                className="btn btn-link-dark btn-link-icon !px-0 !py-0 leading-[22px]"
            >
                See what's new
                <ChevronRightIcon className="icon" />
            </Link>
        </div>
    </div>
)
