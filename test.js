var passvalue=''
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
        location.reload();
    
    }
    
function updateUser() {

        fetch("http://localhost:3000/update", {
        
            method: "PUT",
        
            body: JSON.stringify({
                id:passvalue,

                // id:document.getElementById("id1").value,
                
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
            // document.getElementById("id1").value='';
            document.getElementById("Name1").value='';
            document.getElementById("Email1").value='';
         document.getElementById("Comments1").value='';
         location.reload();
        
        }

        const submitbtn=document.getElementById("sub-btn");
        const updatebtn=document.getElementById("update-btn");
        function editUser(id,contactName,Email,Comments){
            passvalue=id;
            // document.getElementById("id1").value=id;
              document.getElementById("Name1").value=contactName;
             document.getElementById("Email1").value=Email;
          document.getElementById("Comments1").value=Comments;

          submitbtn.style.display='none';
          updatebtn.style.display='block';
        }
        
        function deleteUser(id) {

            fetch("http://localhost:3000/delete", {
            
                method: "PUT",
            
                body: JSON.stringify({
                    id:id,
                    isActive:"0",
            
                }),
            
                headers: {
            
                    "Content-type": "application/json; charset=UTF-8",
            
                },
            
            })
            
                .then((response) => response.json())
            
                .then((json) => console.log(json));
                location.reload();
            
            }

            fetch('http://localhost:3000/get')

            .then(response => response.json())

            .then(json => {

                html = ''

                json.forEach(e => {

                    html +=

                        `<tr>

<td>${e.contactName}</td>

<td>${e.Email}</td>

<td>${e.Comments}</td>
<td><button type="button" onclick="editUser('${e.id}','${e.contactName}','${e.Email}','${e.Comments}')"><i class="fa-regular fa-pen-to-square"></i></button> <button type="button" onclick="deleteUser('${e.id}')"><i class="fa-solid fa-trash"></i></button></td>


</tr>`

                });

                console.log(html)

                document.getElementById('data').innerHTML = html

            })

        // function deleteUser() {

        //     fetch("http://localhost:3000/delete", {
            
        //         method: "DELETE",
            
        //         body: JSON.stringify({
    
        //             id:passvalue,
            
        //         }),
            
        //         headers: {
            
        //             "Content-type": "application/json; charset=UTF-8",
            
        //         },
            
        //     })
            
        //         .then((response) => response.json())
            
        //         .then((json) => console.log(json));
            
        //     }
            // function deleteuser(id){
            //     passvalue=id;
            //     // document.getElementById("id1").value=id;
            // }