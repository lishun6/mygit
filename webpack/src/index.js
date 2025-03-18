  
        const header=document.querySelector('header');
        const line=document.querySelector('.line');
        //优先加载页面，不加载图片
        document.addEventListener('DOMContentLoaded',function(){
            let a=document.querySelector('a').offsetLeft;
            line.style.width=document.querySelector('a').offsetWidth+'px';
            line.style.transform=`translateX(${a}px)`;
        })
//--------------------------------------------------------------
        header.addEventListener('click',function(e){
           if(e.target.tagName==='A'){
            line.style.width=e.target.offsetWidth+'px';
            let p=e.target.offsetLeft;
            line.style.transform=`translateX(${p}px)`;
           }

           
        })
 //----------------------------------------------
 const main2=document.querySelector('.main2');
 const main3=document.querySelector('.main3');
 const main4=document.querySelector('.main4');
 const left=document.querySelector('.left');
  const all=document.querySelectorAll('li');
   window.addEventListener('scroll',function(){
    let top1=document.documentElement.scrollTop;
    // console.log(top1);
    if(top1>=header.offsetHeight){
        header.style.position="fixed";
        line.style.position="fixed";
        line.style.top='65px';
        header.style.top=0;    
    }
    else{
        header.style.position="static";
        line.style.position="static";
    }
    console.log(top1);
    // left.style.opacity=top>=main2.offsetTop? 1:0;
    if(top1>=main2.offsetTop&&top1<=main3.offsetTop){
        console.log(1);
        left.style.opacity=1;
        all[0].style.color='red';
        all[1].style.color='black';
        all[2].style.color='black';
    }
    else if(top1>=main3.offsetTop&&top1<=main4.offsetTop){
        console.log(2);
        all[1].style.color='red';
        all[0].style.color='black';
        all[2].style.color='black';
    }
    else if(top1>=main4.offsetTop){
        console.log(3);
        all[2].style.color='red';
        all[1].style.color='black';
        all[0].style.color='black';

    }else{
        all[0].style.color='black';
        all[1].style.color='black';
        all[2].style.color='black';
        left.style.opacity=0;
    }

   })
    //----------------------------------------------
    left.addEventListener('click',function(e){
        let id=e.target.dataset.id
        if(id==1){
            document.documentElement.scrollTop=main2.offsetTop+10;
        }
        else if(id==2){
            document.documentElement.scrollTop=main3.offsetTop+10;
        }
        else if(id==3){
            document.documentElement.scrollTop=main4.offsetTop+10;
        }

        
    })
import '../public/new1.css'