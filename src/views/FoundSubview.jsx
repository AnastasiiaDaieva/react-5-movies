// import s from 'views/MovieSearchView.module.css';
// import List from 'components/List/List';
// import { Link } from 'react-router-dom';
// import { Route, Routes } from 'react-router';

// export default function FoundSubview({ movies }) {
//   console.log(movies);
//     return ({
//         movies.length > 0 && (

//             <>
//                 <h2>Results</h2>
//                 <List>
//                     {movies.map(({ title, id, poster_path, release_date, overview }) => (
//                         <li key={id} className={s.Search__item}>
//                             <img
//                                 alt={title}
//                                 src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//                                 className={s.Search__image}
//                             />
//                             <div className={s.Search__description}>
//                                 <Link to={`/movies/${id}`} className={s.Search__title}>
//                                     <h2>{title}</h2>
//                                 </Link>
//                                 <p> {new Date(release_date).toDateString()}</p>
//                                 <p className={s.Search__overview}>{overview}</p>
//                             </div>
//                         </li>
//                     ))}
//                 </List>
//             </>
//         )
//     }
//   );
// }
