import React, { useEffect,useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import styled from 'styled-components'
import Select from 'react-select';
import Movie from './Movie';
import apiCalls from '../config/api';

const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';
const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`;

const InputGap = styled.div`
margin-bottom: 25px;
display: flex;
justify-content: space-between;
color:yellow;
`;

const Label = styled.label`
color: white;
width: 100%;
`;

const BigSearchTitle = styled.h1`
margin-bottom: 30px;
color: white;
`;

const SearchedMovies = styled.div`
display:flex;
padding:10px;
flex-wrap:wrap;
margin-top:30px;
`;


const BigFilter = () => {
  const [sort, setSort] = useState("");
  const [year, setYear] = useState("");
  const [total, setTotal] = useState(0);
  const [genre, setGenre] = useState('');
  const [genreList, setGenreList] = useState([]);
  
  const [error,  setError] = useState()
  
  const SORT_BY_ALL = `https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&sort_by=${sort}.desc&include_adult=false&page=1&year=${year}&with_genres=${genre}`;
  const GENRES = `https://api.themoviedb.org/3/genre/movie/list${API_PARAMS}`;
  
    
    useEffect(() => {
          apiCalls.genre().then(data => {
              setGenreList(data.genres);
          }).catch( err => {
              setError(err.message);
          });
      //   fetch(GENRES)
      //     .then((res) => {
      //       if (!res.ok) {
      //         throw Error("Serverda ma'lumot olishda xatolik!!");
      //       }
      //       return res.json();
      //     })
      //     .then((data) => {
      //       console.log(data);
      //       setGenreList(data.genres);
      //     })
      //     .catch((err) => {
      //       setError(err.message);
      //     });
      }, []);

      const newGenreArr = genreList.map((el) => {
        return { value: el.id, label: el.name };
      });

      const handleGenreChange = (newValue) => {
        console.log(newValue);
        const mappedGenre = newValue.map((el) => el.value);
        // men tanlayotgan janrlarimni olib join qilib beradi
        console.log(mappedGenre);
        // setGenre(`${mappedGenre}`);
        // setGenre(mappedGenre.join(''));
        // console.log(setGenre(mappedGenre.join('')))
        console.log(`${mappedGenre}`)
      };

      const YearOptions = [
        { value: "1960", label: "1960" },
        { value: "1961", label: "1961" },
        { value: "1962", label: "1962" },
        { value: "1963", label: "1963" },
        { value: "1964", label: "1964" },
        { value: "1965", label: "1965" },
        { value: "1966", label: "1966" },
        { value: "1967", label: "1967" },
        { value: "1968", label: "1968" },
        { value: "1969", label: "1969" },
        { value: "1970", label: "1970" },
        { value: "1971", label: "1971" },
        { value: "1972", label: "1972" },
        { value: "1973", label: "1973" },
        { value: "1974", label: "1974" },
        { value: "1975", label: "1975" },
        { value: "1976", label: "1976" },
        { value: "1977", label: "1977" },
        { value: "1978", label: "1978" },
        { value: "1979", label: "1979" },
        { value: "1980", label: "1980" },
        { value: "1981", label: "1981" },
        { value: "1982", label: "1982" },
        { value: "1983", label: "1983" },
        { value: "1984", label: "1984" },
        { value: "1985", label: "1985" },
        { value: "1986", label: "1986" },
        { value: "1987", label: "1987" },
        { value: "1988", label: "1988" },
        { value: "1989", label: "1989" },
        { value: "1990", label: "1990" },
        { value: "1991", label: "1991" },
        { value: "1992", label: "1992" },
        { value: "1993", label: "1993" },
        { value: "1994", label: "1994" },
        { value: "1995", label: "1995" },
        { value: "1996", label: "1996" },
        { value: "1997", label: "1997" },
        { value: "1998", label: "1998" },
        { value: "1999", label: "1999" },
        { value: "2000", label: "2000" },
        { value: "2001", label: "2001" },
        { value: "2002", label: "2002" },
        { value: "2003", label: "2003" },
        { value: "2004", label: "2004" },
        { value: "2005", label: "2005" },
        { value: "2006", label: "2006" },
        { value: "2007", label: "2007" },
        { value: "2008", label: "2008" },
        { value: "2009", label: "2009" },
        { value: "2010", label: "2010" },
        { value: "2011", label: "2011" },
        { value: "2012", label: "2012" },
        { value: "2013", label: "2013" },
        { value: "2014", label: "2014" },
        { value: "2015", label: "2015" },
        { value: "2016", label: "2016" },
        { value: "2017", label: "2017" },
        { value: "2018", label: "2018" },
        { value: "2019", label: "2019" },
        { value: "2020", label: "2020" },
        { value: "2021", label: "2021" }
      ];
    
      const handleYearChange = (newValue) => {
        setYear(newValue.value);
        console.log(newValue);
      };

      const sortOptions = [
        { value: "popularity.asc", label: "Popularity" },
        { value: "release_date.asc", label: "Release Date" },
        { value: "revenue.asc", label: "Budget" },
        { value: "vote_average.asc", label: "Rating" },
        { value: "original_title.asc", label: "Title" },
      ];
    
      const handleSortChange = (newValue) => {
        setSort(newValue.value);
        console.log(newValue);
      };

      const [discover, setDiscover] = useState([]);
      
      const handleDiscover = () => {
        apiCalls.discover({
          sort_by: sort.desc,
          include_adult: false,
          page: 1,
          year,
          with_genres: genre,
        }).then(data => {
          setDiscover(data.results);
          setTotal(data.total_results);
      }).catch( err => {
          setError(err.message);
      });
        // fetch(SORT_BY_ALL)
        // .then((res) => {
        //     if (!res.ok) {
        //     throw Error("Serverda ma'lumot olishda xatolik!!");
        //     }
        //     return res.json();
        // })
        // .then((data) => {
        //     console.log(data);
        //     setDiscover(data.results);
            
        //     setTotal(data.total_results);
        // })
        // .catch((err) => {
        //     setError(err.message);
        // });
    };



    return (
        <div className="container">
            <form className="filter__form">
                <BigSearchTitle>Big Search</BigSearchTitle>

                <Label>Till Year</Label>
                <Select options={YearOptions} onClick={handleYearChange} />

                <Label> Genre </Label>
                <Select options={newGenreArr} isMulti onChange={handleGenreChange} />

                <Label> Sort by </Label>
                <Select options={sortOptions} onChange={handleSortChange} />
                <br />

                <InputGap>
                    <button className="load custom-btn" type="button" onClick={handleDiscover}> Discover </button>
                    <div>Found <span>{total}</span> Movies{" "}</div>
                </InputGap>
            </form>
            {/* <SearchedMovies className ='searched_movies'> */}
            
          {!error ?<Swiper 
            breakpoints={{
              "200": {
              "slidesPerView": 1.5,
              "spaceBetween": 5
              },
              "320": {
              "slidesPerView": 2,
              "spaceBetween": 10
              },
              "565": {
              "slidesPerView": 2,
              "spaceBetween": 20
              },
              "767": {
              "slidesPerView": 3,
              "spaceBetween": 40
              },
              "1199": {
              "slidesPerView": 3,
              "spaceBetween": 50
              }
          }}
           modules={[Autoplay]} loop autoplay={{ delay: 2000 , disableOnInteraction: false}} style={{padding: '10px 0'}}>
                {discover.map(el => (<SwiperSlide key={el.id}><Movie className="movies-wrapper" movieobj={el} /></SwiperSlide>))}
            </Swiper> : error}
        {/* </SearchedMovies> */}
        </div>
    )
}

export default BigFilter;
