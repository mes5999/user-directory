var path = require("path");



module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    //   app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'index.html'))
    // })



    // app.get('/reservations', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/reservation.html'))
    // })

    // app.get('/tables', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/tables.html'))
    // })


    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};