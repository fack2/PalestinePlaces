const fs = require("fs");
const path = require("path");
const request = require("request");
const getData = require("../src/database/queries/search.js");
const addData = require("../src/database/queries/add.js");

const homeHandler = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, {
        "Content-Type": "text/html"
      });
      response.end("<h1>Server Error</h1>");
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(file);
    }
  });
};

const publicHandler = (request, response, endpoint) => {
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    png: "image/png",
    jpg: "image/jpg"
  };

  const filePath = path.join(__dirname, "..", endpoint);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, {
        "Content-Type": "text/html"
      });
      response.end("<h1>Server Error</h1>");
    } else {
      response.writeHead(200, {
        "Content-Type": extensionType[extension]
      });
      response.end(file);
    }
  });
};
const searchHandler=(request, response, endpoint)=>{
  const inputSearch=endpoint.split("=")[1];
  getData(inputSearch,(err,res)=>{
    if(err){
      response.writeHead(500, {
        "Content-Type": "text/html"
      });
      response.end("<h1>Server Error</h1>");
    }
    response.writeHead(200, {
      "Content-Type": "application/json"
    });
    response.end(JSON.stringify(res));
  })
}


const postPlaceHandler = (request, response) => {
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  });
  request.on('end', () => {
    addData(data, err => {
      if (err) {
        response.writeHead(500, {
          "Content-Type": "text/html"
        });
        response.end("<h1>Server Error</h1>");
      }
      response.writeHead(302, { 'Location': '/' });
      response.end()
    });
  });
};




module.exports = {
  homeHandler,
  publicHandler,
  searchHandler,
  postPlaceHandler
};
