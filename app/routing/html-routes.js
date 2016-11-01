app.get("/survey", function(res, req){

	res.sendFile(path.join(__dirname, 'survey.html'));

});



app.use('*', function(req, res){
	res.redirect('/');
});