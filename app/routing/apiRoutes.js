var tableData = require("../data/tableData");
var waitlistData = require("../data/waitinglistData");

module.exports = function(app) {
	app.get("/api/tables", function(req, res) {
		res.json(tableData);
	});
	app.get("/api/waitlist", function(req, res) {
		res.json(waitlistData);
	});

	app.post("/api/tables", function(req, res) {
		if (tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else {
			waitlistData.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function() {
		tableData = [];
		waitlistData = [];
	});
}