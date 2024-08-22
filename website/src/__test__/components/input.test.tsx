import '@testing-library/jest-dom'
import Input from "@/components/input"
import { fireEvent, render, screen } from "@testing-library/react"
import { useState } from 'react'

describe("Must input component", () => {

	function InputMock() {
		const [value, setValue] = useState("");


		const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
			setValue(ev.target.value)
		}

		return <Input
			icon={<>{"★"}</>}
			type="text"
			placeholder="teste de placeholder"
			maxLength={100}
			value={value}
			onChange={handleChange}
		/>
	}

	it("Testing attribiutes and placeholder", () => {

		render(
			<InputMock />
		)
		// Testing Placeholder of the input
		const inputElement = screen.getByPlaceholderText('teste de placeholder')

		// Testing attributes and value of the input		
		expect(inputElement).toHaveAttribute("type", "text")
		expect(inputElement).toHaveAttribute("maxLength", "100")

	})

	it("Testing values of the input", () => {

		render(<InputMock />)

		const inputElement = screen.getByPlaceholderText("teste de placeholder")

		// Sending valor in Input
		fireEvent.change(inputElement, { target: { value: "novo valor" } })

		// Verify if handleChange called with new value
		expect(inputElement).toHaveValue("novo valor")
	})

	it("Testing icon in the input", () => {
		render(<InputMock />)

		expect(screen.getByText("★")).toBeInTheDocument()

	})

})
