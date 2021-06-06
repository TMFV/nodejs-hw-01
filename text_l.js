const { urlencoded } = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));
app.use(morgan("tiny"));
app.use((req, res, next) => {
  console.log(`${req.method},${req.originalUrl},${new Date().toISOString()}`);
  next();
});

app.post("/home", (req, res) => {
  console.log(req.body);
  res.json({ javascript: "object", body: req.body });
});

/* app.post("/home", (req, res) => {
  res.send("post request");
});

app.delete("/home", (req, res) => {
  res.send("delete request");
});

app.use((req, res) => {
  res.send("midleware request");
});
 */
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a server launch", error);
  }
  console.log(`Server works on port ${PORT}`);
});
/////////////////////////////

[
  {
    id: 1,
    name: "Allen Raymond",
    email: "nulla.ante@vestibul.co.uk",
    phone: "(992) 914-3792",
  },
  {
    id: 2,
    name: "Chaim Lewis",
    email: "dui.in@egetlacus.ca",
    phone: "(294) 840-6685",
  },
  {
    id: 3,
    name: "Kennedy Lane",
    email: "mattis.Cras@nonenimMauris.net",
    phone: "(542) 451-7038",
  },
  {
    id: 4,
    name: "Wylie Pope",
    email: "est@utquamvel.net",
    phone: "(692) 802-2949",
  },
  {
    id: 5,
    name: "Cyrus Jackson",
    email: "nibh@semsempererat.com",
    phone: "(501) 472-5218",
  },
  {
    id: 6,
    name: "Abbot Franks",
    email: "scelerisque@magnis.org",
    phone: "(186) 568-3720",
  },
  {
    id: 7,
    name: "Reuben Henry",
    email: "pharetra.ut@dictum.co.uk",
    phone: "(715) 598-5792",
  },
  {
    id: 8,
    name: "Simon Morton",
    email: "dui.Fusce.diam@Donec.com",
    phone: "(233) 738-2360",
  },
  {
    id: 9,
    name: "Thomas Lucas",
    email: "nec@Nulla.com",
    phone: "(704) 398-7993",
  },
  {
    id: 10,
    name: "Alec Howard",
    email: "Donec.elementum@scelerisquescelerisquedui.net",
    phone: "(748) 206-2688",
  },
];
