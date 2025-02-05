import React, {useState, useCallback, useMemo} from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function UnderstandingHooks() {    
    let text = "Age", text1 = "Salary";
    let [age, setCount] = useState(20);
    let [salary, setSalary] = useState(2000);

    let incrementAge = useCallback((evt)=>{
        console.log("Increment Age")
        setCount(age++)
        evt.preventDefault()
    },[age])

    let incrementSalary = useCallback((evt)=>{
        console.log("Increment Salary")
        setSalary(salary++)
        evt.preventDefault()
    },[salary])

    //memoizes data and calculates only if the input value is changed
    let isEven = useMemo(()=>{
        console.log("IsEven")
        let i = 1
        while(i < 2000000000) i++;

        return age % 2 === 0;
    },[age]);


    return(
        <>
            <Title/>

            <Button handleClick={incrementAge} >
                {"Increment Age"}
            </Button>
            <Count text={text} count={age} />
            <span>{isEven ? ' Even' : ' Odd'}</span>

            {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}
            
            <hr/>

            <Button handleClick={incrementSalary} >
                {"Increment Salary"}
            </Button>
            <Count text={text1} count={salary} />

        </>
    )
}

export default UnderstandingHooks;