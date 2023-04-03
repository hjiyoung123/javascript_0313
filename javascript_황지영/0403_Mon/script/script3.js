function CheckWeight(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  this.getInfo = function() { //CheckWeight.prototype.getInfo = function(){}와 동일 메모리 효율성 높임
    let str = "";
    str += "이름: " + this.userName + ", ";
    str += "키: " + this.userHeight + ", ";
    str += "몸무게: " + this.userWeight + "<br/>";
    return str;
  }

  this.getResult = function() {
    this.minWeight = (this.userWeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userWeight + 100) * 0.9 + 5;

    if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
      return "정상 몸무게입니다.";
    } else if(this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 과체중입니다.";
    }
  }
}

let jang = new CheckWeight("장보리", 168, 62); //인자값
let park = new CheckWeight("박달제", 180, 88);

document.write(jang.getInfo());
document.write(jang.getResult(), "<br/><br/>");

document.write(park.getInfo());
document.write(park.getResult(), "<br/><br/>");