function postCoder(){
	var name = $("input[name = 'name']").val();		//姓名
	var number = $("input[name = 'student_id'").val();		//学号
	var theClass = $("input[name = 'class'").val();		//班级
	var grade = $("#select_grade option:selected").val();		//年级
	var gender = $("#select_gender option:selected").val();		//性别
	var email = $("input[name = 'email'").val();		//邮箱
	var qq = $("input[name = 'qq'").val();		//qq
	var phone = $("input[name = 'phone'").val();		//手机号码
	var softwareExp = $("#select_softwareExp option:selected").val();		//软件开发经验
	var mobileExp = $("#select_mobileExp option:selected").val();		//移动开发经验
	var webExp = $("#select_webExp option:selected").val();		//web开发经验
	var otherExp = $("#select_otherExp option:selected").val();		//其他开发经验
	var osKnowledge = $("#select_osKnowledge option:selected").val();		//对开发平台的理解
	var githubOrBlog = $("#select_githubOrBlog option:selected").val();		//github或者个人博客
	var skills = $("input[name = 'skill']").val();		//专业技能
	var introduce = $("textarea[name = 'message']").val();		//自我能力
	$.post('http://127.0.0.1:3000/coder', {
			username: name,
			number: number,
			class: theClass,
			grade: grade,
			gender: gender,
			email: email,
			qq: qq,
			phone: phone,
			softwareExp: softwareExp,
			mobileExp: mobileExp,
			webExp: webExp,
			otherExp: otherExp,
			osKnowledge: osKnowledge,
			githubOrBlog: githubOrBlog,
			skills: skills,
			introduce: introduce
		}, function(data) {
			//location.reload();
			if(data.state = "success"){
				alert('提交成功');
			}
			else if(data.state = "failed"){
				alert('该同学已提交过');
			}
			console.log(data);
		}, "json");
}
function postDesigner(){
	var name = $("input[name = 'name']").val();		//姓名
	var number = $("input[name = 'student_id'").val();		//学号
	var theClass = $("input[name = 'class'").val();		//班级
	var grade = $("#select_grade option:selected").val();		//年级
	var gender = $("#select_gender option:selected").val();		//性别
	var email = $("input[name = 'email'").val();		//邮箱
	var qq = $("input[name = 'qq'").val();		//qq
	var phone = $("input[name = 'phone'").val();		//手机号码
	var designExp = $("#select_designExp option:selected").val();		//设计经验
	var psExp = $("#select_psExp option:selected").val();		//ps级及类似工具经验
	var uiExp = $("#select_uiExp option:selected").val();		//ui设计经验
	var designWebsites = $("#select_designWebsites option:selected").val();		//设计网站上传作品经验
	var designRegular = $("#select_designRegular option:selected").val();		//对设计规范的了解
	var skills = $("input[name = 'skill']").val();		//专业技能
	var introduce = $("textarea[name = 'message']").val();		//自我能力
	$.post('http://127.0.0.1:3000/designer', {
			username: name,
			number: number,
			class: theClass,
			grade: grade,
			gender: gender,
			email: email,
			qq: qq,
			phone: phone,
			designExp: designExp,
			psExp: psExp,
			uiExp: uiExp,
			designWebsites: designWebsites,
			designRegular: designRegular,
			skills: skills,
			introduce: introduce
		}, function(data) {
			//location.reload();
			if(data.state = "success"){
				alert('提交成功');
			}
			else if(data.state = "failed"){
				alert('该同学已提交过');
			}
			console.log(data);
		}, "json");
}