// // alert("Welcome");
// var number=10;
// var decimalNumber= 1.10;
// var name="abdulrahman";
// var Name="Almughyir";
// var isNull= true;

// const pi=3.14;
// const academyName ="Hsoub";

// let firstName="Abdulrahman";
// console.log(firstName);

// let Number=7.7;

/*
    let x= 10;
    let y=5;
    let zyadh= 0;
    if(x<y){
        zyadh++;
        console.log(zyadh);
    }else if(x<y){
        zyadh--;
        console.log(zyadh);
    }
    else{
        console.log(false);
    }
*/

// العمليات الحسابية
// ** اس
// * ضرب
// / قسمة
// % باقي القسمة
// - طرح
// -- نقصان
// + جمع
// ++ زيادة

// العمليات المنطقية
/* && و او AND مثال
        let x,y;
        x=10;
        y=true;
        if(x==10 && y){
            console.log("Success");
        }
        result: "Success"
*/
/* ||  او OR مثال
        let x,y;
        x=10;
        y=true;
        if(x!=10 || y){
            console.log("Success");
        } result: "Success"
*/
/* !  نفي NOT مثال
        let x;
        x=false;
        if(!x){
            console.log("Success");
        }
        else{
            console.log("false");
        } // result: "Success"
*/

// عمليات المقارنة
// === يعني يساوي بالظبط بالقيمة الرقمية والنوع الموضوع يعني مقارنة صارمة دقيقة جدا  
// == يعني يساوي بالظبط بالقيمة الموضوعة فقط مثلا 10==10
// = مثلا وضع قيمة لمتغير ما 
/* != لا يساوي مثلا (10=!5) النتيجة ترجع صحيحة.
      ملاحظة: [التعجب اولا (!) ثم اليساوي (=) النتيجة تكون لا يساوي, 
      ملاحظة اخرى:(لا يساوي مع تحويل النوع يعني لو كان هناك نوع رقمي قيمتهو 3 ونص قيمته 3 فاا قلنا لا يسوي فترجع النتيجة خطأ لانه تم تحويل النوع ليصبح رقمي فاصبحت النتيجة 3=!"3" خطأ ) ] 
*/
// !== اما بخصوص اللايساوي اا فهو مقارنة صارمة لا يساوي بالقيمة والنوع
// > اكبر من مثال (3<5)
// < (3<5)اصغر من مثال 
// >= اكبر من او يساوي مثال (3<=5)
// <= اصغر من او يساوي مثال (5=>3)

// let firstNumber, secondNumber;
// firstNumber = "3"; secondNumber = 3;
// let sum = firstNumber !== secondNumber;
// console.log("result is: " + sum);

// single comment

 /*
 group comment
 */

// console.log("welcome");
// document.write("Hello world!")

// var title = document.getElementById("title");
// title.innerHTML = "welcom we";

// let sum=firstNumber + secondNumber;
// console.log("result is:" + sum)

// التعامل مع النصوص
// let text= "hello World";
// console.log(text);
// console.log(text[1]); //result: "e" 0,1
// console.log(text.charAt(6)) //result: "W"  0,1,2,3,4,5,6
// console.log(text.indexOf("o W")) //result: "4", 0,1,2,3,4
// console.log(text.length) //result: "11" //1(h),2(e),3(l),4(l),5(o),6(space*),7(W),8(o),9(r),10(l),11(d)= 11
// console.log(text.replace("hello World","WorLd")) //result: "WorLd"
// console.log(text.toUpperCase()) //result: "HELLO WORLD"
// console.log(text.toLowerCase()) //result: "hello world"
/*
let current= new Date();
let year = current.getFullYear();
let month = current. getMonth()+1;
let day= current.getDate();
let hour= current.getHours();
let minute= current.getMinutes();
let second= current.getSeconds();

let fullDate= year + "/" + month + "/" + day;
let fullTime=  hour + ":" + minute + ":" + second; 
console.log("date is:"+fullDate, "time is:"+fullTime);
*/
/*
let fruits= "Grapes";
switch(fruits){
    case "Apple":
        console.log("Appple is good fruit");
        break;
    case "Orange":
        console.log("Orange is good fruit");
        break;
    case "Banana":
        console.log("Banana is good fruit");
        break;
    case "Grapes":
        console.log("Grapes is good fruit");
        break;
    default:
        console.log("undifiend this fruits");
        break;
}
*/
/*
let grade = 4.2; // درجة الطالب من 5
if (grade === 5) {
    console.log("ممتاز جدًا");
} else if (grade >= 4 && grade < 5) {
    console.log("ممتاز");
} else if (grade >= 3 && grade < 4) {
    console.log("جيد جدًا");
} else if (grade >= 2 && grade < 3) {
    console.log("جيد");
} else if (grade >= 1 && grade < 2) {
    console.log("ضعيف");
} else if (grade >= 0 && grade < 1) {
    console.log("ضعيف جدًا");
} else {
    console.log("درجة غير صالحة");
}
*/
/*
المنطق
grade === 5 → أعلى درجة، "ممتاز جدًا"
grade >= 4 && grade < 5 → بين 4 و 4.99، "ممتاز"
grade >= 3 && grade < 4 → بين 3 و 3.99، "جيد جدًا"
grade >= 2 && grade < 3 → بين 2 و 2.99، "جيد"
grade >= 1 && grade < 2 → بين 1 و 1.99، "ضعيف"
grade >= 0 && grade < 1 → أقل من 1، "ضعيف جدًا"
else → أي قيمة خارج 0–5 → رسالة خطأ
*/
/*
for(z=0;z<=10;z++){ //0+1+2+3+4+5+6+7+8+9+10= 10;
    console.log(z);
}
*/
/*
// يتحقق من الشرط قبل طباعة النتيجة
let counter=10;
while(20>=counter){
    console.log(counter);
    counter++;
}
*/
/*
// يطبع النتيجة قبل التحقق من الشرط
let i = 6;
do {
    console.log("result is: " + i);
    i++;
} while (i <= 2);
*/
/*
// Array  المصفوفات
let countries= ["saudi","egypt","malaysia","indonesia","dubai"];
let numbers= [0,1,2,3,4,5,6,7,8,9];
// countries.sort();
// console.log(countries);
for(x=0; x<countries.length; x++){
    console.log(countries[x]);
}
*/

/*
// Objects
let dhme = {
    name: "Abdulrahman Nasser Almughyir",
    age: 22,
    skills: {
      html: "Good in HTML",
      css: "Good in CSS"
    },
    isEmployer: true,
    isStudent: false,
    salary: 4000,

    checkSalary: function(){
        if(this.isEmployer){
            alert(this.salary);
        }
        else{
            alert("Isn't employer");
        }
    }
}
dhme.checkSalary();
*/


/*
// Scope
// السكوب يحدد من اين يمكن الوصول الى المتغيرات في الكود, ومتى تكون متاحة او غير متاحة
let dhme= "Abdulrahman";
function name(){
    // let dhme= "Abdulrahman";
    console.log(dhme);
}
alert(dhme);
// local

// global
*/

