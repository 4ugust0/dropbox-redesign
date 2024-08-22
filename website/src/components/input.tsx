type InputType = {
	type: string;
	placeholder: string;
	icon?: JSX.Element | JSX.Element[];
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	maxLength: number;
	label?: string;
	error?: string;
}


export default function Input(props: InputType) {

	return (
		<div className="w-full flex flex-col gap-2 mt-5" >

			<label data-show={props.label} data-error={props.error} htmlFor={props.type} className="flex items-center gap-5 data-[show=true]:block data-[error=true]:text-red-500 font-bold">
				{props.icon}	{props.label}
			</label>

			<input
				className="px-5 py-3 rounded-lg bg-white"
				title={props.value}
				onChange={props.onChange}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				maxLength={props.maxLength}
				name={props.type}
			/>

			<em data-show={props.error} className="hidden data-[show=true]:block text-red-500">{props.error}</em>
		</div>
	)


}
