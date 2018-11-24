export function rectangle(x, y, w, h, r1, r2, r3, r4){
    let strPath = "M"+p(x+r1,y); //A
    strPath+="L"+p(x+w-r2,y)+"Q"+p(x+w,y)+p(x+w,y+r2); //B
    strPath+="L"+p(x+w,y+h-r3)+"Q"+p(x+w,y+h)+p(x+w-r3,y+h); //C
    strPath+="L"+p(x+r4,y+h)+"Q"+p(x,y+h)+p(x,y+h-r4); //D
    strPath+="L"+p(x,y+r1)+"Q"+p(x,y)+p(x+r1,y); //A
    strPath+="Z";

    return strPath;
}

function p(x,y){
    return x+" "+y+" ";
}