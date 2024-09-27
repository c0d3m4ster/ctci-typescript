//  String Compression:
//  Implement a method to perform basic string compression
//  using the counts of repeated characters.
//  For example, the string "aabcccccaaa" would become "a2b1c5a3".
//  If the "compressed" string would not become smaller than the original string, 
//  your method should return the original string. 
//  You can assume the string has only uppercase and lowercase letters (a - z).

export function stringCompression(inputString: string): string {
    let output: string[] = [];
    let compressed: boolean = false;
    let counter: number = 0;

    for (let i = 0; i < inputString.length; i++) {
        if(i==0){
            counter = 1
        }
        else if(inputString[i]!=inputString[i - 1]){
            output.push(inputString[i - 1] + counter.toString());
            if((counter>1)&&(!compressed)){
                compressed=true;
            }
            counter = 1
        }
        else if(i === inputString.length-1){            
            counter += 1
            output.push(inputString[i] + counter.toString());
            if((counter>1)&&(!compressed)){
                compressed=true;
            }
        }
        else{
            counter += 1
        }        
    }
    if(compressed){
        return output.join('')
    }else{
        return inputString
    }    
}