/*
 * Finding Grade of a student based on the below information
 * 
 * Take Average marks 7 consider the below range
 * 
 * 1-59  F
 * 60-69 D
 * 70-79 C
 * 80-89 B
 * 90-100 A
 * 
 */ 

 const marks = [70, 90, 85];

 console.log(gradeCalculator(marks));

 function gradeCalculator(marks) {
    let sum = 0;

    for (value of marks)
        sum += value;
    
    let average = (sum / marks.length); 

    if (average >= 90)
        console.log('Grade: A');
    else if (average >= 80)
        console.log('Grade: B');
    else if (average >= 70)
        console.log('Grade: C');
    else if (average >= 60)
        console.log('Grade: D');
    else
        console.log('Grade: F');

 }