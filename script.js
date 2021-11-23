
//alert("js LINKED");
function main(){
    for(i =99;i>=0;i=i-1){
        var a = i-1;
        if(i>=1){
            document.getElementById("nineNine").innerHTML+="<br />"+i +" bottles of beer on the wall"+"<br />"+i+" bottles of beer on the wall,"+"<br />"+ "Take one down and pass it around,"+a+ " bottles of beer on the wall" ;
           
        }
        
        
        else if(i==0) {
            document.getElementById("nineNine").innerHTML+="<br />" + "No more bottles of beer on the wall, "
            + "no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall";
            break;
        }
    }
    //document.getElementById("nineNine").innerHTML+="out";
}
