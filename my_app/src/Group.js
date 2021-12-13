import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieGroup from "./MovieGroup";
import { Link } from "react-router-dom"
import styles from "./Group.module.css";
import {AllLoading} from "./Atom";
import { useRecoilState } from 'recoil';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [allLoding, setAllLoding] = useRecoilState(AllLoading);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    setAllLoding(false);
    // console.log(json.data.movies);
  }

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [allLoding])



  return (
    <div className={styles.container}>
      {
        (loading || allLoding)
          ? <h1>Loading...</h1>
          :
          <div className={styles.movies}>
            {movies.map((movie) => (
              <MovieGroup
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                summary={movie.summary}
                year={movie.year} />
            ))}
          </div>
      }
      {
        (loading || allLoding)
          ? null
          :
          <div className={styles.footer}>
            <div className={styles.list}>
              {
                List_arr.map((lst) => {
                  return (
                    <Link
                      to={`/page/${group}/${lst}`}
                      onClick={() => setLoading(true)}
                    >
                      {lst}</Link>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Group;