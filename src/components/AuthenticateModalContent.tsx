import { FunctionComponent } from 'react'

import Link from 'next/link'

import { EmailAuth } from './cta/EmailAuth'
import { ExternalsAuth } from './cta/ExternalsAuth'

interface Props {
    source: string
}

export const AuthenticateModalContent: FunctionComponent<Props> = ({ source }) => (
    <div className="max-w-[325px]">
        <p className="text-lg text-gray-600">Sign up to get free access:</p>
        <ExternalsAuth
            authProvider="github"
            label="Continue With Github"
            dark={true}
            className="mt-4"
            source={source}
        />
        <ExternalsAuth
            authProvider="gitlab"
            label="Continue With Gitlab"
            dark={true}
            className="mt-4"
            source={source}
        />
        <div className="mt-4 flex flex-row text-gray-500">
            Or,&nbsp;
            <span>
                <EmailAuth label="continue with email" className="mt-0 !p-0 text-violet-500" source={source} />
            </span>
        </div>
        <p className="mt-5 text-sm text-gray-400">
            By registering, you agree to our{' '}
            <Link href="/terms" className="text-violet-400">
                Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/terms/privacy" className="text-violet-400">
                Privacy Policy.
            </Link>
        </p>
        <p className="mt-5 mb-0 text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="https://sourcegraph.com/sign-in" className="text-violet-500">
                {' '}
                Sign in.{' '}
            </Link>
        </p>
    </div>
)
