function insertUser() {

    fetch("http://localhost:3000/insert", {
    
        method: "POST",
    
        body: JSON.stringify({
            
    
            contactName: document.getElementById("Name1").value,
    
            Email: document.getElementById("Email1").value,
    
            Comments: document.getElementById("Comments1").value,
    
        }),
    
        headers: {
    
            "Content-type": "application/json; charset=UTF-8",
    
        },
    
    })
    
        .then((response) => response.json())
    
        .then((json) => console.log(json));
    
    }
    
    function updateUser() {

        fetch("http://localhost:3000/update", {
        
            method: "PUT",
        
            body: JSON.stringify({

                id:document.getElementById("id1").value,
                
                contactName: document.getElementById("Name1").value,
        
                Email: document.getElementById("Email1").value,
        
                Comments: document.getElementById("Comments1").value,
        
            }),
        
            headers: {
        
                "Content-type": "application/json; charset=UTF-8",
        
            },
        
        })
        
            .then((response) => response.json())
        
            .then((json) => console.log(json));
            document.getElementById("id1").value='';
            document.getElementById("Name1").value='';
            document.getElementById("Email1").value='';
         document.getElementById("Comments1").value='';
        
        }
function updateUser() {

        fetch("http://localhost:3000/update", {
        
            method: "PUT",
        
            body: JSON.stringify({

                id:document.getElementById("id1").value,
                
                contactName: document.getElementById("Name1").value,
        
                Email: document.getElementById("Email1").value,
        
                Comments: document.getElementById("Comments1").value,
        
            }),
        
            headers: {
        
                "Content-type": "application/json; charset=UTF-8",
        
            },
        
        })
        
            .then((response) => response.json())
        
            .then((json) => console.log(json));
            document.getElementById("id1").value='';
            document.getElementById("Name1").value='';
            document.getElementById("Email1").value='';
         document.getElementById("Comments1").value='';
        
        }
        function editUser(id,contactName,Email,Comments){
            document.getElementById("id1").value=id;
              document.getElementById("Name1").value=contactName;
             document.getElementById("Email1").value=Email;
          document.getElementById("Comments1").value=Comments;
        }
        

        function deleteUser() {

            fetch("http://localhost:3000/delete", {
            
                method: "DELETE",
            
                body: JSON.stringify({
    
                    id:document.getElementById("id1").value
            
                }),
            
                headers: {
            
                    "Content-type": "application/json; charset=UTF-8",
            
                },
            
            })
            
                .then((response) => response.json())
            
                .then((json) => console.log(json));
            
            }