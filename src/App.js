import React from 'react';
import LyricSearcherForm from './components/LyricSearcherForm';


const api_key ='7b8373768bb90cf1ce683d6c0b88ab35';


class App extends React.Component {

  state = {
    track_id: undefined,
    Lyrics: "",
    Artist: "",
    Track: "",

    ablumName: undefined,
    artistName: undefined,
    trackName: undefined,
    trackYear: undefined,
    LyricsString: undefined
  }

  updateFields = (field, value) =>{
    this.setState({
        [field]:value
      })
  }

  replaceSpace = (query) =>{
    const newQuery= query.replace(/ /g,"%20");

    return newQuery;
  }

  queryBuilder = () =>{

    let query = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback";

    if(this.state.Lyrics.trim() !== ""){

      const res = this.replaceSpace(this.state.Lyrics.trim());
      query = query+"&q_lyrics=" + res;
    }

    if(this.state.Artist.trim() !== ""){
      
      const res = this.replaceSpace(this.state.Artist.trim());
      query = query+"&q_artist=" + res;
    }

    if(this.state.Track.trim() !== ""){
      
      const res = this.replaceSpace(this.state.Track.trim());
      query = query+"&q_track=" + res;
    }

    query = query + `&quorum_factor=1&apikey=${api_key}`;

    console.log(query);
    return query;

  }

  getJson = async (query) =>{

    const api_call = await fetch(query);
    let data = await api_call.text();
    data = data.substring(9);
    data = data.substring(0, data.length-2);
    data = JSON.parse(data);
    console.log(data);

    return data;
  }



  searchLyric = (e) =>{
    e.preventDefault();

    const getQuery = this.queryBuilder();
    const data = this.getJson(getQuery);
  }



  render(){
    return(
      <div className="App">
      <div className="container">
      
        <div className="left-panel">
         Left panel
          <LyricSearcherForm searchLyric={this.searchLyric} updateFields={this.updateFields}/> 
        </div>
        <div className="right-panel"> Right panel </div>
      
      </div>
    </div>
    )
  }
}

export default App;
