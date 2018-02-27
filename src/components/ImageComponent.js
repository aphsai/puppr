import React from 'react';
export default class ImageComponent extends React.Component {

  render() {
    // console.log(this.props.unheart + " " + this.props.public_id);
    // let
    return (
      <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', width:this.props.dimension.width}}>
        <img
          onClick={this.props.openPreview}
          data-id={this.props.public_id}
          data-width={this.props.dbDimension.width}
          data-height={this.props.dbDimension.height}
          width={this.props.dimension.width}
          height={this.props.dimension.height}
          src={this.props.src}
        />
        <button
          data-id={this.props.public_id}
          onClick={this.props.handleFavourite}
          disabled={this.props.disabled}>
            {this.props.unheart? 'Unheart' : 'Heart' }
        </button>
        <button
          onClick={this.props.handleVote}
          data-id={this.props.public_id}
          disabled={this.props.disabled}>
           {this.props.patted? 'Unpat' : 'Pat'}
        </button>
        {this.props.delete? (<button onClick={this.props.handleDelete} data-id={this.props.public_id}> delete </button>): null}

      </div>
    );
  }
}
