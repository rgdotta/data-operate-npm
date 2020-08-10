const removeAllOf = (type, element, property) => {
  if (!type || (!element && element !== 0)) {
    console.log("Waiting for arguments");
  } else if (Object.getPrototypeOf([]) === Object.getPrototypeOf(type)) {
    for (let i = 0; i < type.length; i++) {
      if (type[i] === element) {
        type.splice(i, 1);
      } else {
        console.log("Element not found");
      }
    }
  } else if (Object.getPrototypeOf({}) === Object.getPrototypeOf(type)) {
    if (property === "key") {
      if (type[element]) {
        delete type[element];
      } else {
        console.log("Element nor found");
      }
    } else if (property === "value") {
      for (let [key, value] of Object.entries(type)) {
        if (value === element) {
          delete type[key];
        }
      }
    }
  } else {
    console.log("Incorrect arguments");
  }
};

const removeIndexOf = (type, index) => {
  if (!type || (!index && index !== 0)) {
    console.log("Waiting for arguments");
  } else if (Object.getPrototypeOf([]) === Object.getPrototypeOf(type)) {
    if (!type[index] && index !== 0) {
      console.log("Element not found.");
    } else {
      type.splice(index, 1);
    }
  } else if (Object.getPrototypeOf({}) === Object.getPrototypeOf(type)) {
    let keysArr = Object.keys(type);
    if (!keysArr[index] && index !== 0) {
      console.log("Element not found");
    } else {
      delete type[keysArr[index]];
    }
  } else {
    console.log("Incorrect arguments");
  }
};

let arr = [0, "car", 4, "car"];
let obj = { a: "1", b: "2", c: "3", d: "3" };

console.log(obj);
