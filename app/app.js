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
        <ImageCarouselItem source="source" />
        <ImageSubtext subtext="it is beneath you" />
      </div>
    )
  }
});

var ImageCarouselItem = React.createClass({
  render: function () {
    return (
      <div className="imageCarouselItem">
        <h2 className="imageSource">
          {this.props.source}
        </h2>
        {this.props.children}
      </div>
    )
  }
});

var ImageSubtext = React.createClass({
  render: function () {
    return (
      <div className="imageSubtext">
        {this.props.subtext}
      </div>
    )
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
