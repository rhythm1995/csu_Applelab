(function(){
	$.get('http://127.0.0.1:3000/designer', function(data){
		//console.log(data);
		//data.coders
		//筛选尚未通过的designers
		var notPassedDesigners = [];
		for(var i = 0; i < data.designers.length; i++){
			if(data.designers[i].passed === undefined || data.designers[i].passed == 'no'){
				notPassedDesigners.push(data.designers[i]);
			}
		}
		var tr1 = '<tr><th>姓名</th><th>学号</th><th>班级</th><th>年级</th><th>性别</th><th>E-mail</th><th>qq</th><th>手机号码</th><th>开发经验</th><th>移动端</th><th>web</th><th>其他</th><th>开发平台</th></tr>';
		var tr3 = '<tr><th width="60">github</th><th>专业技能</th><th width="1000">自我能力</th><th width="80">是否通过</th></tr>';
		for(var i = 0; i < notPassedDesigners.length; i++){
			//因为顺序要与表头对应，不能用each遍历data.coders[i]的属性
			var panel = '<div class="panel panel-default panel' + i + '"><div class="panel-body"></div></div>';
			var table1 = '<table class="table table-striped ' + 'panel' + i + 'table1"></table>';
			var table2 = '<table class="table table-striped ' + 'panel' + i + 'table2"></table>';
			var tr2 = '<tr class="tr2' + i + '"></tr>';
			var tr4 = '<tr class="tr4' + i + '"></tr>';

			$(".forTable").append(panel);
			$(".panel" + i).append(table1);
			$(".panel" + i).append(table2);
			$(".panel" + i + "table1").append(tr1 + tr2);
			$(".panel" + i + "table2").append(tr3 + tr4);
			/*$(".table1").append(tr1);
			$(".table1").append(tr2);
			$(".table2").append(tr3);
			$(".table2").append(tr4);*/

			$(".tr2" + i).append('<td>' + notPassedDesigners[i].username + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].number + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].class + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].grade + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].gender + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].email + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].qq + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].phone + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].softwareExp + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].mobileExp + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].webExp + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].otherExp + '</td>');
			$(".tr2" + i).append('<td>' + notPassedDesigners[i].osKnowledge + '</td>');
			$(".tr4" + i).append('<td width="60">' + notPassedDesigners[i].githubOrBlog + '</td>');
			$(".tr4" + i).append('<td>' + notPassedDesigners[i].skills + '</td>');
			$(".tr4" + i).append('<td width="1000">' + notPassedDesigners[i].introduce + '</td>');
			$(".tr4" + i).append('<td width="80"><button class="btn btn-success btn-sm" onclick="designerPassed(' + '\'' + notPassedDesigners[i].username + '\'' + ')">通过</button></td>');
			
		}
	}, 'json');
})();
function designerPassed(username){
	$.post('http://127.0.0.1:3000/designerPassed', {
		username: username
	}, function(data){
		console.log(data);
		location.reload();
	}, "json");
}