let variable = "hello world";
variable = "hi"

let age = 20;

let ageWithType: number = 10;
ageWithType = 18;

// BASIC TYPES
let testString: string;
testString = "hello";

let testBoolean: boolean;
testBoolean = false;

// -----------MULTIPLE TYPES (UNION TYPES)------------
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";


//-----------------ARRAYs-----------------
let names = ["Nike", "Apple", "Prada"];
// names.push(2);
names.push("gucci");

let testStringArray: string[];
// testStringArray = [1, 2, 3];
testStringArray = ["one", "two", "three"];

let booleans = [true];
// booleans.push(0);
booleans.push(false);

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, 2];
testStringOrNumberArray.push("three");


//--------------------OBJECTs--------------------

let user = {
    username: "John",
    age: 20,
    isAdmin: false,
};

user.username = "Kevin";
// user.age = "ten";
user.age = 24;
user.isAdmin = true;

// user.phone = "+12334456";


let userObj: {
    username: string,
    age: number,
    isAdmin: boolean,
};

userObj = {
    username: "Dave",
    age: 25,
    isAdmin: true,
    // phone: "1234555"
}


let userObj2: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string           //conditional property
};
userObj2 = {
    username: "jane",
    age: 25,
    isAdmin: true,
    phone: "1234555"        //you can add/remove it
}


//---------------ANY------------------

let testAny: any;             // let testAny;             
//use "any" only if you are not sure about the type        

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = ["hello", 1, false];
testAny = {};



//--------------FUNCTIONS------------------
let sayHi = () => {
    console.log("Hi");
};

// sayHi = "hello";

let functionReturnString = (): string => {
    //do whatever you want here
    return "Hello World";
}


let multiply = (num: number) => {
    return num * 2;
}
let multiply2 = (num: number): number => {
    return num * 2;
}
let multiply3 = (num: number): void => {
    console.log(num*5);
}


let sum = (n1: number, n2: number, n3?:number) => {
    console.log( n1 + n2 );
}
sum(1, 2);



let func = (user: { username: string; age: number; phone?: string }) => {
    console.log(user.username);
  };
  
  //-----TYPE ALIASES------
  type UserType = {
    username: string;
    age: number;
    phone?: string;
  };
  
  let betterFunc = (user: UserType) => {
    console.log(user.username);
  };


//----------------FUNCTION SIGNATURES-----------------
  type myFunc = (a: number, b: string) => void;
  
  let write: myFunc = (num, str) => {
    console.log(num + " times " + str);
  };

  write(2, "hello");
  
  type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
  };
  
  const userWithTheme: UserType2 = {
    username: "john",
    age: 43,
    // theme:"pink"
    theme: "dark",
  };