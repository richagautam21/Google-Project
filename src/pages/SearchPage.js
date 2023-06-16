import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import Search from "./Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from "@material-ui/icons";
// import Response from "../response";
import { Link } from "react-router-dom";
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
  // eslint-disable-next-line no-unused-vars
  const [{ term /*='spotify'*/}, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);// LIVE API CALL

  // Mock API Call
  // const data = Response;
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
          <div className="searchPage__option">
            <SearchOutlined />
            <Link to="/all">All</Link>
          </div>
          <div className="searchPage__option">
            <Description />
            <Link to="/news">News</Link>
          </div>
          <div className="searchPage__option">
            <Image />
            <Link to="/images">Images</Link>
          </div>
          <div className="searchPage__option">
            <LocalOffer />
            <Link to="/shopping">shopping</Link>
          </div>
          <div className="searchPage__option">
            <Room />
            <Link to="/maps">Maps</Link>
          </div>
          <div className="searchPage__option">
            <MoreVert />
            <Link to="/more">More</Link>
          </div>
        </div>
      
        <div className="searchPage__optionsRight">
        <div className="searchPage__option">
          <Link to="/settings">Settings</Link>
        </div>
        <div className="searchPage__option">
          <Link to="/tools">Tools</Link>
        </div>
        </div>
      </div>
   </div>
   </div>
      {term && (<div className='searchPage__results'>
          <p className="searchPage__resultCount">
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}seconds) 
          </p>

          {data?.items.map((item)=> (
          <div className='searchPage__result'>
              <a href={item.link}>
                  {item.pagemap?.cse_image?.length> 0  && item.pagemap?.cse_image[0]?.src &&(
                      <img className="searchPage__resultImage"
                      src={
                          item.pagemap?.cse_image?.length >0 &&
                          item.pagemap?.cse_image[0]?.src
                      }
                      alt=""/>
                  )
                  }
                  {item.displayLink}
                  </a>
              <a className='searchPage__resultTitle'
               href={item.link}>
                  <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}
              </p>
              </div>
              )
            )}
      </div>        
      )}
    </div>
  );
}

export default SearchPage;
