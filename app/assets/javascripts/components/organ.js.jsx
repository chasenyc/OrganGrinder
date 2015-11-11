var Organ = React.createClass({
  render: function(){
    var keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    return <div className="organ">
              {
                keys.map (function (key) {
                  return <Key noteName={key} />;
                })
              }
            </div>;


  }

});
