var regularPayRate = 25;
var hoursWorked = 40;
var regularHours = 40;
var overtimeHours = hoursWorked - regularHours;
var overtimePayRate = regularPayRate * 1.5;
overtimepay = overtimePayRate * overtimeHours;
var grossPay;
if (hoursWorked<=40) {
    grossPay = regularPayRate * hoursWorked;
    
} else{
    grossPay = regularPayRate * regularHours * overtimePay;

}
console.log(grossPay);