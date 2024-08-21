import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TitlePattern from '@/components/titlePattern'

describe("Must appear title in DOM", () => {
	it('Must render component title', () => {
		render(<TitlePattern title="Um titulo qualquer" />)
		const heading = screen.getByRole('heading', { level: 1, name: "Um titulo qualquer" })
		expect(heading).toBeInTheDocument();
	})
})
