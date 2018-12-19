// var quickAddButton = document.querySelector("#quick-add-button");
// var ajaxurl = myData.ajaxurl;
// var postTitle = document.querySelector('.restapi-fields [name="title"]').value;

// 	    var postData = {
// 	      "title": Yasir Sarole,
// 	      "content": Marks 9.0,
// 	      "fields" : {
// 	      	"user_name" : "Yasir"
// 	      },
// 	      "status": "publish"
// 	    }

// 	     jQuery.ajax({
// 	        method: "POST",
// 	        url: ajaxurl,
// 	        data: {
// 	            action: 'checkPost',
// 	            postTitle: postTitle
// 	        },
// 	        success: function(res){
// 	        	res = JSON.parse(res);
// 		        if(res['status'] == 0) {
// 		        	createPostMethod();
// 		        }else {
// 		        	// console.log(res['id']);
// 		        	postData.content = res['content'] + "\n" + postData.content;
// 		        	// deletePostMethod(res['id']);
// 		        	// createPostMethod();
// 		        	updatePostMethod(res['id']);
// 		        }
// 	        }
// 	    });

// 		function createPostMethod(){

// 			fetch(myData.siteURL+"/index.php/wp-json/wp/v2/result",{
// 			    method: "POST",
// 			    headers:{
// 			        'Content-Type': 'application/json;charset=UTF-8',
// 			        'accept': 'application/json',
// 			        'X-WP-Nonce': myData.nonce
// 			    },
// 			    body:JSON.stringify({
// 			        title: postData.title,
// 			        content: postData.content,
// 			        fields: {
// 			        	user_name: postData.fields.user_name
// 			        },
// 			        status: 'publish'
// 			    })
// 			}).then(function(){
// 	        	document.querySelector('.restapi-fields [name="content"]').value = '';
// 			});
// 		}
// 		function updatePostMethod(id){
// 			fetch(myData.siteURL+'/index.php/wp-json/wp/v2/result/'+id,{
// 			    method: "PUT",
// 			    headers:{
// 			        'Content-Type': 'application/json;charset=UTF-8',
// 			        'accept': 'application/json',
// 			        'X-WP-Nonce': myData.nonce
// 			    },
// 			    body:JSON.stringify({
// 			        title: postData.title,
// 			        content: postData.content,
// 			        fields: {
// 			        	user_name: postData.fields.user_name
// 			        },
// 			        status: 'publish'
// 			    })
// 			}).then(function(){
// 	        	document.querySelector('.restapi-fields [name="content"]').value = '';
// 			});
// 		}
// 		function deletePostMethod(id){
// 			// console.log(id);
// 			fetch(myData.siteURL+'/index.php/wp-json/wp/v2/result/'+id+'?force=true',{
// 			    method: "DELETE",
// 			    headers:{
// 			        'Content-Type': 'application/json;charset=UTF-8',
// 			        'accept': 'application/json',
// 			        'X-WP-Nonce': myData.nonce
// 			    }
// 			});
// 		}