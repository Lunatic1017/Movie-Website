import React ,{useContext} from 'react'
import API from '../../API'
import { Content , Wrapper ,Text } from "./MovieInfo.styles";
//Components
import Thumb from "../Thumb";
import Rate from '../Rate';
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg'
//context
import { Context } from '../../context';



const MovieInfo = ({movie}) => {
    const [user] = useContext(Context)

    const handleRating = async value =>{
        const rate = await API.rateMovie(
            user.sessionId,
            movie.id,
            value
        )
        console.log(rate)
    }

  return (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
            image={
                movie.poster_path
                ?
                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage    
            }
            clickable={false}
            alt="movie-thumbnail"/>
            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>


                <div className="rating-directors">
                    <div>
                        <h3>Rating</h3>
                        <div className='score'>{movie.vote_average}</div>
                    </div>
                    <div className='director'>
                        <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
                {user && (<div>
                    <p>Rate Movies</p>
                    <Rate callback={handleRating}/>
                </div>)}
            </Text>
        </Content>
    </Wrapper>
  )
}

export default MovieInfo