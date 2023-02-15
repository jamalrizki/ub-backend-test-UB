const React = require("react");
const Def = require("./layouts/Default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="https://picsum.photos/500" alt="404 page" />
          
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
