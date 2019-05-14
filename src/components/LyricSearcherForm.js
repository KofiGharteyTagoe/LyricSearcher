import React from 'react';

class LyricForm extends React.Component{
    render(){
        return(
                <form onSubmit={this.props.searchLyric}>
                    <input type="text" disabled name="Lyric_Id" placeholder="Lyric ID..."/>
                    <input text="text" name="Lyrics" placeholder="Enter Lyrics" onChange={(event) =>{this.props.updateFields('Lyrics', event.target.value)}} />
                    <input text="text" name="Artist" placeholder="Enter Artists" onChange={(event) =>{this.props.updateFields('Artist', event.target.value)}} />
                    <input text="text" name="Track" placeholder="Enter track name" onChange={(event) =>{this.props.updateFields('Track', event.target.value)}} />
                    <button> Get Lyrics</button>
                </form>
        )
    }
}

export default LyricForm;

/* Search for track (This will get the track id/ album id)
	- Track name
	- Lyric
	- Artist

Get Album (Using album id)

Get Lyrics (Using track id) */