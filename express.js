const express=require("express")();
const static=require("express-static");
const url=require("url");
const mysql=require("mysql");
const port=8080;
var db=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"table",
	port:3307,
	timezone:"08:00"
})
db.connect();
express.get("/addData2",function(reqeust,response){
	var parse=url.parse(reqeust.url,true).query;
	console.log(parse);
	var name=parse.name;
	var sex=parse.sex;
	if(sex == "男"){
		sex = 1;
	}else if(sex == "女"){
		sex = 0;
	}
	var birthday=parse.birthday;
	var department=parse.department;
	var status=parse.status;
	var joinDate=parse.joinDate;
	var leaveDate=parse.leaveDate;
	var salary=parse.salary;
	var IDCard=parse.IDCard;
	var number=parse.number;
	db.query(`INSERT INTO work (name,sex,birthday,department,status,joinDate,leaveDate,salary,IDCard,number) values ("${name}","${sex}","${birthday}","${department}","${status}","${joinDate}","${leaveDate}","${salary}","${IDCard}","${number}")`,(error,data)=>{
		if(error){
			console.log(error)
			response.end("error");
		}else{
			response.end("success");
		}
	})
})
express.get("/chaxun",function(reqeust,response){
	db.query(`select * from work`,(error,data)=>{
		if(error){
			console.log(error)
			response.end("error");
		}else{
			response.end(JSON.stringify(data));
		}
	})
})
express.get("/deleteuser",function(reqeust,response){
	var id=url.parse(reqeust.url,true).query.ID;
	console.log(id)
	db.query(`DELETE FROM work WHERE ID="${id}"`,(error,data)=>{
		if(error){
			console.log(error)
			response.end("error");
		}else{
			response.end("success")
		}
	})
})
express.get("/sure",function(reqeust,response){
	var parse=url.parse(reqeust.url,true).query;
	var id=parse.id;
	var name=parse.name;
	var sex=parse.sex;
	if(sex == "男"){
		sex = 1;
	}else if(sex == "女"){
		sex = 0;
	}
	var birthday=parse.birthday;
	var department=parse.department;
	var status=parse.status;
	if(status == "true"){
		status = 1;
	}else if(status == "false"){
		status = 0;
	}
	console.log(typeof status);
	var joinDate=parse.joinDate;
	var leaveDate=parse.leaveDate;
	var salary=parse.salary;
	var IDCard=parse.IDCard;
	var number=parse.number;
	db.query(`UPDATE work SET name="${name}",sex="${sex}",birthday="${birthday}",department="${department}",status="${status}",joinDate="${joinDate}",leaveDate="${leaveDate}",salary="${salary}",IDCard="${IDCard}", number="${number}" WHERE ID="${id}"`,(error,data)=>{
		if(error){
			console.log(error)
			response.end("error")
		}else{
			response.end("success")
		}
	})

})
express.use(static(__dirname));
express.listen(port);
console.log(`start is running at ${port}`);