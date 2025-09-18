
function show(oprater){
   
    const display = document.getElementById('display');
       
        display.innerText+=oprater;
    
}


function clear_display(){
    document.getElementById('display').innerText='';
}


function return_number(){
    const display = document.getElementById('display');
        display.innerText = display.innerText.slice(0,-1);       
}


function calculate(){
     const display = document.getElementById('display');
            try {
                // استبدال الرموز لجعلها صالحة للتقييم
                let expression = display.innerText.replace(/×/g, '*');
                
                // استخدام Function constructor بدلاً من eval لأسباب أمنية
                const result = new Function('return ' + expression)();
                
                // تقليل الدقة العشرية إذا لزم الأمر
                display.innerText = parseFloat(result.toFixed(10)).toString();
            } catch (error) {
                display.innerText = 'error';
                
                // إعادة التعيين بعد ثانية
                setTimeout(() => {
                    display.innerText = '0';
                }, 1000);
            }
        }

