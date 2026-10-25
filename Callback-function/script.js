const function_01 = (callback) => {
  console.log("This is funciton 01");
  const rand_num = Math.random();
  callback(rand_num);
};

const function_02 = () => {
  console.log("This is function 02");
};

const fucntion_03 = (rand_num) => {
  console.log("This is function 03");
  console.log(rand_num);
};

// function_01(function_02);
function_01(fucntion_03);
