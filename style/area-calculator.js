function calculateTriangleButton(){
   
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

     //validation input : base || height
     if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return
    }

    const area = 0.5 * base * height;
    console.log(area)

    //show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

     //add to calculation entry
     addToCalculationEntry('triangle', area)

}


function calculateRectangleButton(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    //validation input : width || length
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return
    }

    const area = width * length;
   

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    
     //add to calculation entry
     addToCalculationEntry('rectangle', area)
}







//Reusable Function --> reduce duplicate


//Parallelogram
function calculateParallelogramButton(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    //validation input : base || height
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
     
    //add to calculation entry
    addToCalculationEntry('parallelogram', area)
}


//Ellipse
function calculateEllipseButton(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
     //validation input : base || height
     if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please insert a number');
        return
    }
    
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal)

     //add to calculation entry
     addToCalculationEntry('ellipse', areaTwoDecimal)
    
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value

}

//reusable set, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}



//Data validation
/**
 * 1. Set the proper type of the input field. (number,data,email)
 * 2. check type using typeof
 * 3. isNaN means: not a number. isNaN is checking wether the input is not a number or not.
*/




// Add to calculation entry 
/**
 * 1. get the element where you want to dynamic 
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string
 * 5. append the created element as a child of the parent
 */

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4') 
    p.innerHTML =`${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>

    `

    calculationEntry.appendChild(p);

}