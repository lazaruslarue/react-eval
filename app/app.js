var ImageBox = React.createClass({
  render: function(){
    return (
      <div className="imageBox">
        <h1>Images</h1>
        <ImageImage />
        <ImageSubtext />
      </div>
    );
  }
});

var ImageImage = React.createClass({
  render: function () {
    return (
      <div className="imageImage">
        Hello ImageImage
      </div>
    )
  }
});

var ImageSubtext = React.createClass({
  render: function () {
    return (
      <div className="imageSubtext">
        Subtext is beneath you
      </div>
    )
  }
});
ReactDOM.render(
  <ImageBox />,
  document.getElementById('content')
);
