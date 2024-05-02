const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/getHello" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello!");
    res.end();
  }
  else if(req.url === "/api/getAuto" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({audi: "audi1",
                              mersedesBens: "merc1"}));
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.write("Not found");
    res.end();
  }
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
