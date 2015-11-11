var Organ = React.createClass({
  render: function(){
    var keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

    return <div className="organ">
              {
                keys.map (function (key) {
                  return <Key key={key} noteName={key} />;
                })
              }
              <Recorder />
            </div>;


  }

});
