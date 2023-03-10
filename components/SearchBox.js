import s from './SearchBox.module.css';

function SearchBox (props)  {
	return <>
		<div className={s.col}>
			<input
				className={s.formControl}
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	</>
};

export default SearchBox;