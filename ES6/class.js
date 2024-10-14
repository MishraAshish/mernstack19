// Class - has been added in ES6 as a special and upgraded function to give us feature similar to
// other class based programming languages

//class keyword is used to create class and we can create associated methods as we did in cunstructor function <without using this>


class Area { //scope of the class { < --- --- >}
    
    // constructor is used to initialized the properties
    constructor(length = 0, breadth = 0){
        this.length = length
        this.breadth = breadth
    }

    AreaOfCircle = function (radius = 0) {
        return 3.141*radius*radius //pie*r-square
    }

    Square = ()=> this.length * this.length ;

    Rectangle = ()=>{
        return this.length * this.breadth
    }

}

let areaObj = new Area(6, 9) //instantiation of area class

console.log(areaObj.AreaOfCircle(12))

console.log(areaObj.Square())
console.log(areaObj.Rectangle())


// Task - create a class named as account accepting 3 ormore params  like - name, acct type etc and
// has three methods to show balance, user details and account offers