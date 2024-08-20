import { render } from '@testing-library/react'
import Link from 'next/link'

it('renders homepage unchanged', () => {
	const { container } = render(<Link href="https://google.com">{1 + 2}</Link>)
	expect(container).toMatchSnapshot()
})
