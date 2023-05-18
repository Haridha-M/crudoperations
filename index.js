// // export{}
// // class student1{
// //     // id:number;
// //     // name1:string;
// //     // section:string;
// //     constructor(public id:number,public name1:string,public section:string) {
// //         this.id=id;
// //         this.name1=name1;
// //         this.section=section;
// //     }
// // }
// // // interface info{
// // //     getall(student:student1);
// // //     update(student:student1);
// // // }
// // class student {
// //     // id:number;
// //     // name1:string;
// //     // section:string;
// //     constructor(public student:student1) {
// //         this.student=student
// //         // this.id=id;
// //         // this.name1=name1;
// //         // this.section=section;
// //     }
// // // class info extends students{
// // // }
// //     getall(student:student1){
// // console.log(this.student=student)
// //     }
// //     update(student:student1){
// // console.log(this.student=student)
// //     }
// // }
// // class teacher extends student{
// //     constructor(public student:student1,public teahername:string) {
// //         super(student)
// //     }
// //     getall(teahername:string): void {
// //         console.log(this.student=student)
// //     }
// // }
// // const students=new student1(1,'hari','5th')
// // const studentinformation=new student(students)
// // studentinformation.getall(students)
// // class Vehicle {
// //     // Info method in parent class
// //     info(): void {
// //        console.log("The object is the vehicle.");
// //     }
// //  }
// //  class car extends Vehicle {
// //     // Same info method overriden in base class
// //     info(): void {
// //        console.log("The object is a car.");
// //     }
// //  }
// //  let new_vehicle = new Vehicle();
// //  new_vehicle.info();
// //  function identity<T>(arg: T): T {  
// //     return arg;  
// // }  
// // let output1 = identity("myString");  
// // let output2 = identity( 100 );
// // console.log(output1)
// // console.log(output2)
// export { }
// interface students {
//     createstu(contactName: string, Email: string, Comments: string);
//     getstu(contactName: string, Email: string, Comments: string);
//     update(id:number,contactName: string, Email: string, Comments: string);
//     delete(id:number,isActive:boolean);
// }
// class studentsclass implements students {
//     constructor() { }
//     createstu(contactName: string, Email: string, Comments: string) {
//         fetch("http://localhost:3000/insert", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             },
//             body: JSON.stringify({
//                 contactName: contactName,
//                 Email: Email,
//                 Comments: Comments,
//             }),
//         })
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//     }
//     update(id:number,contactName: string, Email: string, Comments: string) {
//         fetch('http://localhost:3000/update ', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id:id,
//                 contactName: contactName,
//                 Email: Email,
//                 Comments: Comments,
//             }),
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//     }
//     getstu() {
//         fetch("http://localhost:3000/get")
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//     }
//     delete(id:number,isActive:boolean) {
//         fetch("http://localhost:3000/delete", {
//             method: "PUT",
//             body: JSON.stringify({
//                 id:id,
//                 isActive:"0",
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//             // window.onload=getdata();
//             // location.reload();
//         }
// }
// // var s1 = new studentsclass();
// // s1.createstu('Dhee','dee@','female');
// // s1.getstu();
// // s1.updatestu(1, 'ranjith');
