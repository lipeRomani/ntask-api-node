module.exports = app => {

    let PORT = app.get('port');

    app.db.sequelize.sync().done(() =>{
        app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));
    });

}
