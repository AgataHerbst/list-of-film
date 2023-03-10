import s from './MovieListHeading.module.css';

function MovieListHeading(props){
    return <>
    <div className={s.col}>
    <h1>{props.heading}</h1>
    </div>
    </>
}
export default MovieListHeading;