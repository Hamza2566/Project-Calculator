const span = document.querySelector('.span')
span.textContent = '0'
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const reset  = document.querySelector('.reset')
const equal  = document.querySelector('.equal')
const dot  = document.querySelector('.dot')
const sign  = document.querySelector('.sign-change')
const currentnumber = []
// const newnumber  = []
const  [previous,current ] = currentnumber;
const takeoperator = []



reset.addEventListener("click",()=>{
    span.textContent = '0'
     currentnumber.splice(0,currentnumber.length)
     takeoperator.splice(0,takeoperator.length)
})

  

             number.forEach(number => {
                 number.addEventListener("click", ()=>{
                    currentnumber.push(number.textContent)
                  
            span.textContent = number.textContent
            
            const  [previous,current,third ,forth,fifth,sixth,seventh,eight,nineth,tenth] = currentnumber;

            
            if (typeof previous === typeof current  ) {
                console.log(previous);
                
                
                span.textContent = previous + current ;
                if ( typeof previous === typeof third) {
                    span.textContent = previous + current + third ;
                    
                }
                if ( typeof previous === typeof forth) {
                    span.textContent = previous + current + third + forth ;
                    
                }
                if ( typeof previous === typeof fifth) {
                    span.textContent = previous + current + third + forth + fifth ;
                    
                }
                if ( typeof previous === typeof sixth) {
                    span.textContent = previous + current + third + forth+ fifth+  sixth ;
                    
                }
                if ( typeof previous === typeof seventh) {
                    span.textContent = previous + current + third + forth + fifth + sixth + seventh ;
                    
                }
                if ( typeof previous === typeof eight) {
                    span.textContent = previous + current + third +   forth + fifth + sixth + seventh +eight ;
                    
                }
               
                if ( typeof previous === typeof nineth) {
                    span.textContent = previous + current + third +   forth + fifth + sixth + seventh +eight  + nineth ;
                    
                }
               
                if ( typeof previous === typeof tenth) {
                    span.textContent = previous + current + third +   forth + fifth + sixth + seventh +eight  + nineth + tenth ;
                    
                }
               


              }
           

             });
       

        })
    
        
        operator.forEach(operator => {
            operator.addEventListener("click", ()=>{
            const  [previous,current,third ,forth,fifth,sixth,seventh,eight,nineth,tenth] = currentnumber;
                    takeoperator.push(operator.textContent);
                    
            
            
                num1 = span.textContent
                
     currentnumber.splice(0,currentnumber.length)
 
     if (typeof previous === typeof current  ) {
        
        
        span.textContent = previous + current ;
        if ( typeof previous === typeof third) {
            span.textContent = previous + current + third ;
            
        }
        if ( typeof previous === typeof forth) {
            span.textContent = previous + current + third + forth ;
            
        }
        if ( typeof previous === typeof fifth) {
            span.textContent = previous + current + third + forth + fifth ;
            
        }
        if ( typeof previous === typeof sixth) {
            span.textContent = previous + current + third + forth+ fifth+  sixth ;
            
        }
        if ( typeof previous === typeof seventh) {
            span.textContent = previous + current + third + forth + fifth + sixth + seventh ;
            
        }
        if ( typeof previous === typeof eight) {
            span.textContent = previous + current + third +   forth + fifth + sixth + seventh +eight ;
            
        }
       
        if ( typeof previous === typeof nineth) {
            span.textContent = previous + current + third +   forth + fifth + sixth + seventh +eight  + nineth ;
            
        }
       
        if ( typeof previous === typeof tenth) {
            span.textContent = previous + current + third +   forth + fifth + sixth + seventh +eight  + nineth + tenth ;
            
        }

       

                
                
            
            
        }
    }
    );


        
    })

       
         equal.addEventListener("click",()=>{
            num2 = span.textContent

        
            
            
            
            if (takeoperator[0] === '+') {
                
                
        const result = Number(num1) + Number(num2) 
                   span.textContent =  result
                   currentnumber.splice(0,currentnumber.length)
                  takeoperator.splice(0,takeoperator.length)
                 currentnumber.push(result)
                       [result,sign] = currentnumber
                 console.log(result);
                 if (takeoperator=== '+') {
                    
                    const  lastresult = result + sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '+') {
                    
                    const  lastresult = result + sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '-') {
                    
                    const  lastresult = result - sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '*') {
                    
                    const  lastresult = result * sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '/') {
                    
                    const  lastresult = result / sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '%') {
                    
                    const  lastresult = result % sign
                    span.textContent = lastresult

                    
                 }
                 
                 
                 


                   
                }
                else if (takeoperator[0] === '-') {
                   const result = Number(num1) - Number(num2) 
                   span.textContent =  result
                 
                   currentnumber.splice(0,currentnumber.length)
                 takeoperator.splice(0,takeoperator.length)
                 currentnumber.push(result)
                       [result,sign] = currentnumber
                 console.log(result);
               
                 if (takeoperator=== '+') {
                    
                    const  lastresult = result + sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '-') {
                    
                    const  lastresult = result - sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '*') {
                    
                    const  lastresult = result * sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '/') {
                    
                    const  lastresult = result / sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '%') {
                    
                    const  lastresult = result % sign
                    span.textContent = lastresult

                    
                 }
        

                }
                else if (takeoperator[0] === '*') {
                    const result = Number(num1) * Number(num2) 
                   span.textContent =  result
                   
                   currentnumber.splice(0,currentnumber.length)
                   takeoperator.splice(0,takeoperator.length)
                   console.log(takeoperator);

                 currentnumber.push(result)
                 
                       [result,sign] = currentnumber
                 console.log(result);
                 if (takeoperator=== '*') {
                    
                    const  lastresult = result * sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '-') {
                    
                    const  lastresult = result - sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '+') {
                    
                    const  lastresult = result + sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '/') {
                    
                    const  lastresult = result / sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '%') {
                    
                    const  lastresult = result % sign
                    span.textContent = lastresult

                    
                 }
                 

                    }
                    else if (takeoperator[0] === '/') {
                        
                        if (num2 === '0') {
                            span.textContent = 'you damn'
                            
                        }
                        else{
                             const result = Number(num1) / Number(num2) 
                   span.textContent =  result
                   currentnumber.splice(0,currentnumber.length)
                   takeoperator.splice(0,takeoperator.length)
                 
                 currentnumber.push(result)
                       [result,sign] = currentnumber
                 console.log(result);
                 if (takeoperator=== '+') {
                    
                    const  lastresult = result + sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '-') {
                    
                    const  lastresult = result - sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '*') {
                    
                    const  lastresult = result * sign
                    span.textContent = lastresult

                    
                 }
                 if (takeoperator=== '%') {
                    
                    const  lastresult = result % sign
                    span.textContent = lastresult

                    
                 }
                
                 

                        }
                       
                        }
                        else if(takeoperator[0] === '%'){
                            if (num2 === '0') {
                                span.textContent = 'you damn'
                                
                            }
                            else{
                                const result = Number(num1) % Number(num2)
                                span.textContent = result
                                currentnumber.splice(0,currentnumber.length)
                                takeoperator.splice(0,takeoperator.length)
                     
                                currentnumber.push(result)
                                      [result,sign] = currentnumber
                                console.log(result);
                                if (takeoperator=== '%') {
                                   
                                   const  lastresult = result % sign
                                   span.textContent = lastresult
               
                                   
                                }
                                if (takeoperator=== '+') {
                                   
                                   const  lastresult = result + sign
                                   span.textContent = lastresult
               
                                   
                                }
                                if (takeoperator=== '-') {
                                   
                                   const  lastresult = result - sign
                                   span.textContent = lastresult
               
                                   
                                }
                                if (takeoperator=== '*') {
                                   
                                   const  lastresult = result * sign
                                   span.textContent = lastresult
               
                                   
                                }
                                if (takeoperator=== '%') {
                                   
                                   const  lastresult = result % sign
                                   span.textContent = lastresult
               
                                   
                                }

                            }
                            
                            
                            

                        }
           
            
                 
         })
         sign.addEventListener("click",()=>{
            
            
const  [previous,current ] = currentnumber;


            if (!isNaN(Number(previous)))
                 {
                    console.log(previous);
                    const result =   "-" + Number(previous)
                    span.textContent = result
                    
                
            }
           
            
            
         })
    










         dot.addEventListener("click",()=>{
            const dot1 = dot.textContent
            // console.log(dot1);
        
            
            const  [previous,current,third ,forth,fifth,sixth,seventh,eight,nineth,tenth] = currentnumber;



            if (!isNaN(Number(previous))) {
                const result = previous +  "." ;
                span.textContent = result;
                currentnumber.splice(0,1,previous + ".");
            
                if (typeof previous === "number") {
                    const result =  "." + current
                    console.log(result);
                    
                    
                }
                
                
                
            }
        })
       



























           
         

        

                    

     





















































































































