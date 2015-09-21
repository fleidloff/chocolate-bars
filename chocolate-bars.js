var Choc = React.createClass({
    metaData: function(data) {
        var max = 0;
        
        var sum = Object.keys(data)
            .map(function(key) {
                return data[key]; 
            })
            .reduce(function (pc, cc) { 
                if (cc > max) {
                    max = cc;
                }
                return pc + cc; 
            }, 0);  

        return {
            sum: sum,
            max: max
        };
    },
  
    color: keyToColor,
  
    componentWillMount: function() {
        
        this.config = {
            lineHeight: (this.props.config && this.props.config.lineHeight) || "30px",
          fontSize: (this.props.config && this.props.config.fontSize) || "14px"
        }
    },

    renderBars: function() {
        var data = this.props.data;
        var metaData = this.metaData(data);

        return Object.keys(data)
                .sort(function(a, b) {
                    return (data[a] < data[b] ? 1 : data[a] > data[b] ? -1 : 0);
                })
                .map(function(key) {
                    return <Bar key={key} title={key} value={data[key]} total={metaData.sum} max={metaData.max} color={this.color(key)} config={this.config}/>;
                }.bind(this));
    },

    render: function() {
        return <div>{this.renderBars()}</div>;
    }
});

var Bar = React.createClass({
    render: function() {
        var color = this.props.color || "#ccc";
        var style = {
            width: (this.props.value * 100 / this.props.max) + "%",
            backgroundColor: color,
            position: "absolute",
            height: "100%"
        };
        var value = Math.floor((this.props.value * 100 / this.props.total)) + "%";
      
        return ( 
          
          <div style={{position: "relative", height: this.props.config.lineHeight, margin: "5px"}}>
          <div style={style} />
          <div style={{paddingLeft: "5px", position: "absolute", lineHeight: this.props.config.lineHeight, fontSize: this.props.config.fontSize}}>
                    {this.props.title} - {value}<br />
                </div>
            </div>
        );
    }
});

window.Choc = Choc;
// module.exports = Choc;
