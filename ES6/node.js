// node.js
// a run time environment for JS
// single threaded. high performance module
// google chrome v8 - engine
// scalable network programmes
// allows to execute js on server
// npm - node package manager <node command line>
// non-blocking IO processes <concurrent systems> - servers

// Restaurant Example = <eatable preparation time>
//Attendendant is going to take the order
//Order is prepared at kitchen

//1. Duncan => 30 mins
//2. Ben => 20 mins
//3. Hongbo => 10 mins

// blocking system

//1. Duncan => Attendendant Takes the order => Kitchen (waits for 30 mins) => Duncan - Delivers <30mins>
//2. Ben  => Attendendant Takes the order => Kitchen (waits for 20 mins) => Ben - Delivers <20mins>
//3. Hongbo  => Attendendant Takes the order => Kitchen (waits for 10 mins) => Hongbo - Delivers <10mins>

// Total 30 + 20 + 10 => 60 mins


// non-blocking system <nodejs - request response system>
// node js system is able to take as many requrests as possible in one go and then responds them as soon as the task done

//1. Duncan <=> Attendendant Takes all three order <=> Kitchen (doesn't waits for 30 mins) <=> Token1 <pending, ready, cancelled>
//2. Ben  <=> Attendendant Takes all three order <=> Kitchen (doesn't waits for 20 mins) <=> Token2 <pending, ready, cancelled>
//3. Hongbo  <=> Attendendant Takes all three order <=> Kitchen (doesn't waits for 10 mins) <=> Token3 <pending, ready, cancelled>

//First Ready Hongbo - 10 min
//Second Eatable Ben - 20 min
//Third Duncan Eatable - 30 min 

// Max (10,20,30) ==> 30 mins


//Percentange perfornmace better => 50%

global.connectionString = "localhost:27011"