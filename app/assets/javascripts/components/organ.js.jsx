var Organ = React.createClass({
  render: function(){
    var keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

    return <div className="organ-grinder">
            <div className="organ">
                {
                  keys.map (function (key) {
                    return <Key key={key} noteName={key} />;
                  })
                }
            </div>
            <div className='recorder'>
                <Recorder />
            </div>
          </div>;


  }

});
