var data = {
    "Consumer Promise": 5,
    "Callanalyst": 4,
    "PROD bugs": 6,
    "Other": 2,
    "Innovation Days": 1
};

var config = {
    lineHeight: "30px",
    fontSize: "14px"
};

React.render(
    <Choc data={data} config={config} />,
    document.getElementById("content")
);
