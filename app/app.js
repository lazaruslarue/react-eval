var App = React.createClass({
  render: function(){
    return (
      <div className="imageBox">
        <h1>Images</h1>
        <ImageCarousel />
        <ImageSubtext />
      </div>
    );
  }
});

var ImageCarousel = React.createClass({
  render: function () {
    return (
      <div className="imageCarousel">
        <ImageCarouselItem />
        <ImageCarouselItem />
        <ImageCarouselItem />
      </div>
    )
  }
});

var ImageCarouselItem = React.createClass({
  render: function () {
    return (
      <div className="imageCarouselItem">
        Hello ImageCarouselItem
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
  <App />,
  document.getElementById('content')
);
